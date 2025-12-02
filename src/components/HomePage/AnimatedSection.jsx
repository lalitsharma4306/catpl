export function AnimatedSection({
  children,
  sectionKey,
  setSectionRef,
  visibleSections,
  className = "",
}) {
  return (
    <div
      ref={setSectionRef(sectionKey)}
      className={`transform transition-all duration-1000 ${
        visibleSections[sectionKey]
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
