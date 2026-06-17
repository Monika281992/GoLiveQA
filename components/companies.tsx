const companies = ["ImageKit", "Clipboard Health", "Housr", "Netomi"];

export function Companies() {
  return (
    <section className="border-t border-hairline bg-surface-soft py-8 md:py-12">
      <div className="mx-auto max-w-container px-5 text-center sm:px-8 lg:px-12">
        <p className="mb-5 text-[12.5px] font-semibold uppercase tracking-[0.1em] text-faint">
          Companies I&apos;ve worked with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-11 gap-y-4">
          {companies.map((c) => (
            <span key={c} className="text-lg font-semibold text-body">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
