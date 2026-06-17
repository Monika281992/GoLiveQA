// Inline brand glyphs not reliably present in current lucide-react builds.
export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.25 8h4.5v15H.25V8zm7.5 0h4.31v2.05h.06c.6-1.07 2.07-2.2 4.26-2.2 4.56 0 5.4 2.85 5.4 6.56V23h-4.5v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.6-2.39 3.27V23h-4.5V8z" />
    </svg>
  );
}
