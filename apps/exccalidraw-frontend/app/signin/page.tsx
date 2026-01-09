import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="mx-auto w-full max-w-md px-5 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        This is a placeholder UI. Wire it up to your auth backend.
      </p>

      <form className="mt-8 space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="you@domain.com"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-zinc-50/20"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            placeholder="••••••••"
            className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900/20 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:ring-zinc-50/20"
          />
        </label>

        <button
          type="button"
          className="w-full rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Sign in
        </button>

        <p className="text-center text-sm text-zinc-600 dark:text-zinc-300">
          No account?{" "}
          <Link
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-50"
            href="/signup"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
}
