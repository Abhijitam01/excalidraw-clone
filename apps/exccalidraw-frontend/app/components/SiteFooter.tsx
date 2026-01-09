import Link from "next/link";
import { SITE } from "../lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5">
        <div className="flex items-center gap-2">
          <Logo className="h-5 w-5" />
          <span className="font-medium text-zinc-900 dark:text-zinc-50">
            {SITE.name}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="max-w-xs">{SITE.description}</span>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-50">
            Home
          </Link>
          <Link
            href="/signin"
            className="hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            Sign up
          </Link>
        </div>
      </div>
    </footer>
  );
}
