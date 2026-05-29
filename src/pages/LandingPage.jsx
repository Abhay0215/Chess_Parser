import React from 'react';
import { Link } from 'react-router-dom';
import SiteChrome from '../components/SiteChrome';
import {
    abhayProfile,
    aiBuildServices,
    buildProcess,
    contactLinks,
    productPillars,
} from '../content/siteContent';

const statBlocks = [
    { label: 'OCR review loop', value: 'Raw + parsed' },
    { label: 'Validation engine', value: 'Chess.js' },
    { label: 'Game views', value: 'Parser + AI play' },
    { label: 'Build model', value: 'AI systems' },
];

const sampleMoves = ['1. e4', '... c5', '2. Nf3', '... d6', '3. d4', '... cxd4', '4. Nxd4', '... Nf6'];

const ProductPreview = () => (
    <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-white/10 bg-black/45 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <p className="text-sm font-bold text-white">Scoresheet intake</p>
                <span className="rounded bg-teal-300/10 px-2 py-1 text-xs font-bold text-teal-200">Live OCR</span>
            </div>
            <div className="mt-4 grid gap-2">
                {['White: A. Player', 'Black: Club Archive', 'Event: Rapid Night', 'Result: 1-0'].map((line) => (
                    <div key={line} className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                        {line}
                    </div>
                ))}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
                {sampleMoves.map((move) => (
                    <span key={move} className="rounded border border-white/10 bg-white/[0.04] px-2 py-2 text-center font-mono text-xs text-slate-300">
                        {move}
                    </span>
                ))}
            </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-slate-950/80 p-4 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="grid aspect-square grid-cols-8 overflow-hidden rounded border border-white/15">
                    {Array.from({ length: 64 }).map((_, index) => {
                        const row = Math.floor(index / 8);
                        const col = index % 8;
                        const dark = (row + col) % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={dark ? 'bg-stone-200' : 'bg-emerald-700'}
                            />
                        );
                    })}
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Validated output</p>
                        <h2 className="mt-3 text-2xl font-black tracking-tight text-white">From paper notation to a playable board.</h2>
                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            Check OCR confidence, fix any move, and replay the game before it becomes part of your archive.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        {['Move edit', 'Board replay', 'Illegal flag', 'PGN ready'].map((item) => (
                            <span key={item} className="rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const LandingPage = () => {
    return (
        <SiteChrome>
            <section className="px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="mx-auto inline-flex rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.24em] text-amber-100">
                        AI scoresheet digitization
                    </p>
                    <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Preserve every chess game without typing every move.
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                        ChessParser converts scanned or photographed scoresheets into editable, validated chess moves
                        with board replay, OCR visibility, and a workflow inspired by Abhay's production AI systems.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            to="/app"
                            className="w-full rounded-lg bg-amber-300 px-6 py-3 text-center text-sm font-black text-black transition hover:bg-amber-200 sm:w-auto"
                        >
                            Launch Parser
                        </Link>
                        <Link
                            to="/about"
                            className="w-full rounded-lg border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:border-teal-300/50 hover:bg-teal-300/10 sm:w-auto"
                        >
                            About The Build
                        </Link>
                    </div>

                    <ProductPreview />
                </div>
            </section>

            <section className="border-y border-white/10 bg-white/[0.02] px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {statBlocks.map((item) => (
                        <div key={item.label} className="rounded-lg border border-white/10 bg-black/30 p-5">
                            <p className="text-2xl font-black text-white">{item.value}</p>
                            <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">Product depth</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                            Built like a practical AI workflow, not a black box.
                        </h2>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-3">
                        {productPillars.map((pillar) => (
                            <article key={pillar.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                                <h3 className="text-xl font-black text-white">{pillar.title}</h3>
                                <p className="mt-4 text-sm leading-6 text-slate-400">{pillar.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-black/25 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-200">How it works</p>
                            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                                One clean path from scoresheet to archive.
                            </h2>
                            <p className="mt-5 text-base leading-7 text-slate-400">
                                Each step keeps the player in control, from image upload through final review.
                            </p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {buildProcess.map((item) => (
                                <article key={item.step} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                                    <p className="font-mono text-sm font-black text-teal-200">{item.step}</p>
                                    <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">About Abhay</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                            More than a chess utility: a focused AI product build.
                        </h2>
                        <p className="mt-5 text-base leading-7 text-slate-400">{abhayProfile.summary}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {abhayProfile.proof.map((item) => (
                                <span key={item} className="rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">AI systems Abhay builds</p>
                        <div className="mt-5 grid gap-2 sm:grid-cols-2">
                            {aiBuildServices.map((service) => (
                                <div key={service} className="rounded border border-white/10 bg-black/30 px-3 py-3 text-sm font-semibold text-slate-200">
                                    {service}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-lg border border-amber-300/20 bg-amber-300/[0.08] p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-100">Ready when you are</p>
                            <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
                                Try the parser, then contact Abhay for a fuller AI build.
                            </h2>
                            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                                Use the local app for scoresheets, or head to TheAbhay to discuss private RAG systems,
                                AI copilots, and automation work.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                            <Link to="/app" className="rounded-lg bg-white px-5 py-3 text-center text-sm font-black text-black hover:bg-slate-100">
                                Open Parser
                            </Link>
                            <a
                                href={contactLinks[1].href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border border-white/20 px-5 py-3 text-center text-sm font-black text-white hover:bg-white/10"
                            >
                                Contact Abhay
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
};

export default LandingPage;
