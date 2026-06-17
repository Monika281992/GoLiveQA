const tools = [
  "Playwright",
  "Cypress",
  "Postman",
  "GitHub Actions",
  "Jira",
  "Slack",
  "Jenkins",
];

export function Tools() {
  return (
    <section className="border-y border-hairline bg-surface-soft">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-center gap-5 px-5 py-5 sm:px-8 lg:px-12">
        <span className="text-[12.5px] font-semibold uppercase tracking-[0.09em] text-faint">
          Tools we work with
        </span>
        <div className="flex flex-wrap justify-center gap-2.5">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-hairline bg-white px-[15px] py-[7px] text-[13.5px] font-medium text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
