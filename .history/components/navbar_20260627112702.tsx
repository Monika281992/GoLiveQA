import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "How Can I Help", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-surface/80 backdrop-blur-md backdrop-saturate-150">
      <nav className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        <a
          href="#top"
          className="text-xl font-bold tracking-tight text-ink"
        >
          GoLiveQA
        </a>
        <div className="flex flex-wrap items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-body transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <Button asChild variant="outline" size="sm">
          <a href="/book-a-call">Book a Call</a>
        </Button>
      </nav>
    </header>
  );
}
