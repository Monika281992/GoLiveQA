const links = [
  { label: "About", href: "#about" },
  { label: "How can i help", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-white py-8">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-x-7 gap-y-4 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="text-lg font-bold tracking-tight text-brand">
          GoLiveQA
        </a>
        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-[13.5px] text-faint">
          © 2026 GoLiveQA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
