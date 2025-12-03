#!/usr/bin/env node
import fs from 'fs';
import { URL } from 'url';

async function main(){
  const [,, baseUrl, siteDomain, outPath] = process.argv;
  if(!baseUrl || !siteDomain || !outPath){
    console.error('Usage: node generate-sitemap.js <baseUrl> <siteDomain> <outPath>');
    console.error('Example: node scripts/generate-sitemap.js http://localhost:5173 https://codeadapters.com public/sitemap.xml');
    process.exit(1);
  }

  const origin = new URL(baseUrl).origin;
  const maxPages = 500;
  const visited = new Set();
  const queue = [baseUrl];
  const results = [];

  while(queue.length && visited.size < maxPages){
    const url = queue.shift();
    if(visited.has(url)) continue;
    try{
      const res = await fetch(url);
      if(!res.ok){
        console.error('Skipping', url, 'status', res.status);
        visited.add(url);
        continue;
      }
      const html = await res.text();
      visited.add(url);
      results.push(url);

      // find hrefs
      const re = /href=["']([^"'#?]+)["']/g;
      let m;
      while((m = re.exec(html))){
        let href = m[1];
        if(!href) continue;
        let next;
        try{
          if(href.startsWith('http')){
            const u = new URL(href);
            if(u.origin !== origin) continue;
            next = u.href;
          } else if(href.startsWith('/')){
            next = new URL(href, origin).href;
          } else {
            // relative path
            next = new URL(href, url).href;
            if(new URL(next).origin !== origin) continue;
          }
        } catch(e){ continue; }

        if(!visited.has(next) && !queue.includes(next)) queue.push(next);
      }
    } catch(e){
      console.error('Error fetching', url, e.message);
      visited.add(url);
    }
  }

  // normalize to unique paths
  const paths = Array.from(new Set(results.map(u => new URL(u).pathname))).sort();

  const today = new Date().toISOString().slice(0,10);
  const entries = paths.map(p => {
    let loc = siteDomain.replace(/\/$/, '') + (p === '/' ? '/' : p.replace(/\/$/, '') + '/');
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  fs.writeFileSync(outPath, xml, 'utf8');
  console.log('Wrote sitemap with', paths.length, 'entries to', outPath);
}

main().catch(err => { console.error(err); process.exit(1); });
