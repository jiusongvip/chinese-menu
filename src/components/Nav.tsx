import { useState } from "react";
import { ArrowRight, List, X } from "@phosphor-icons/react";

const links = [
  { href: "/#city-menus", label: "City menus" },
  { href: "/#explorer", label: "Dishes" },
  { href: "/#cuisines", label: "Cuisines" },
  { href: "/#taste", label: "Tastes" },
  { href: "/#at-the-table", label: "At the table" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
  { href: "/terms/", label: "Terms" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0 text-lg font-semibold tracking-tight">
          Chinese<span className="text-accent-600">Menu</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#explorer"
            className="hidden bg-ink px-5 py-2.5 text-sm font-medium text-white transition-transform active:scale-[0.98] sm:inline-flex sm:items-center sm:gap-2"
          >
            Explore dishes
            <ArrowRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line bg-white text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-4 py-4 lg:hidden">
          <div className="space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-muted hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#explorer"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center gap-2 bg-ink px-4 py-3 text-sm font-medium text-white"
            >
              Explore dishes
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
