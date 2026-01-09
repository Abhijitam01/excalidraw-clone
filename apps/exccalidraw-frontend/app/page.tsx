import Link from "next/link";
import type { ReactNode } from "react";
import { SITE } from "./lib/site";

function BentoCard({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950 ${className ?? ""}`}
    >
      <div className="relative">
        <div className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {title}
        </div>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:pt-20">
      {/* Hero */}
      <section className="mx-auto max-w-3xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <span className="font-medium">Excalidraw-style</span>
          <span className="text-zinc-400">•</span>
          <span>clean, spacious, fast</span>
        </div>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Sketch ideas with a calm, hand-drawn canvas.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {SITE.name} is a lightweight whiteboard for brainstorming, wireframes,
          and quick diagrams — with the signature sketch feel.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/draw"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Start drawing
          </Link>
          <Link
            href="#features"
            className="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            Explore features
          </Link>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <span>Export PNG/SVG</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>Keyboard-first</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>Shareable boards</span>
        </div>
      </section>

      {/* Bento grid */}
      <section id="features" className="mt-14 scroll-mt-24 sm:mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            A bento grid of the essentials
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Clean UI, plenty of breathing room, and just the right set of tools.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-6">
          <BentoCard
            className="md:col-span-4"
            title="A calm canvas"
            description="Minimal chrome so your ideas stay front and center."
          >
            <div className="rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 dark:border-zinc-700 dark:bg-black">
              <div className="h-2 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="h-24 rounded-xl bg-zinc-100 dark:bg-zinc-900" />
                <div className="h-24 rounded-xl bg-zinc-100 dark:bg-zinc-900" />
              </div>
              <div className="mt-4 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900" />
            </div>
          </BentoCard>

          <BentoCard
            className="md:col-span-2"
            title="Export-ready"
            description="Send drawings to docs & slides as PNG or SVG."
          />

          <BentoCard
            className="md:col-span-2"
            title="Shapes & arrows"
            description="Boxes, circles, lines, connectors, and text — fast editing."
          />

          <BentoCard
            className="md:col-span-2"
            title="Keyboard-first"
            description="Shortcuts for tools, duplicate, align, nudge, and more."
          />

          <BentoCard
            className="md:col-span-2"
            title="Autosave"
            description="Keep work safe locally and optionally sync to the cloud."
          />

          <BentoCard
            className="md:col-span-3"
            title="Collaboration-ready"
            description="Designed for realtime multiplayer once you add presence."
          />

          <BentoCard
            className="md:col-span-3"
            title="Shareable boards"
            description="Create links so teammates can view (or edit) drawings."
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mt-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How it works
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Start in seconds. Iterate quickly. Share when you’re ready.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          <BentoCard
            title="1. Create a board"
            description="Open the editor and pick the tool you need."
          />
          <BentoCard
            title="2. Draw & iterate"
            description="Sketch quickly, then refine with resize, rotate, and align."
          />
          <BentoCard
            title="3. Share or export"
            description="Send a link or export PNG/SVG for presentations."
          />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
          <div>
            <div className="text-base font-semibold">Ready to sketch?</div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              Jump into the editor and start drawing in seconds.
            </p>
          </div>
          <Link
            href="/draw"
            className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Open editor
          </Link>
        </div>
      </section>
    </div>
  );
}
