import React from 'react';
import { Link } from 'react-router-dom';
import SiteChrome from '../components/SiteChrome';
import { contactLinks } from '../content/siteContent';

const briefItems = [
    'What kind of scoresheets or documents you want to process',
    'How many files you expect per week or month',
    'Whether you need PGN export, admin review, search, or user accounts',
    'Where the finished data should go after review',
];

const availability = [
    { label: 'Best fit', value: 'AI workflow, RAG, OCR, automation, and LLM product builds' },
    { label: 'Typical scope', value: 'Fixed-scope build with clear handoff and launch support' },
    { label: 'Useful context', value: 'Sample files, current workflow, desired output format, and timeline' },
];

const ContactPage = () => {
    return (
        <SiteChrome>
            <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-4xl">
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-200">Contact</p>
                        <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
                            Bring the chess parser idea, or a bigger AI system, to Abhay.
                        </h1>
                        <p className="mt-6 text-base leading-7 text-slate-300">
                            The public contact paths available from TheAbhay are collected here so visitors can move
                            from the demo to a real project conversation without hunting around.
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-black/25 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {contactLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-300/50 hover:bg-amber-300/[0.08]"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                            <p className="mt-4 text-xl font-black text-white">{item.value}</p>
                            <p className="mt-4 text-sm leading-6 text-slate-400">Open this contact channel</p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">Project brief</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                            Send enough detail to make the first reply useful.
                        </h2>
                        <p className="mt-5 text-base leading-7 text-slate-400">
                            ChessParser is one example of turning unstructured data into a reviewable tool. A clear brief
                            helps estimate the right architecture, data pipeline, and user workflow.
                        </p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={contactLinks[1].href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg bg-amber-300 px-5 py-3 text-center text-sm font-black text-black hover:bg-amber-200"
                            >
                                Open Contact Page
                            </a>
                            <Link
                                to="/app"
                                className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-black text-white hover:bg-white/10"
                            >
                                Try Parser First
                            </Link>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {briefItems.map((item, index) => (
                            <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                                <p className="font-mono text-sm font-black text-amber-200">{String(index + 1).padStart(2, '0')}</p>
                                <p className="mt-3 text-sm font-semibold leading-6 text-slate-200">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                    <div className="grid gap-4 md:grid-cols-3">
                        {availability.map((item) => (
                            <div key={item.label}>
                                <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                                <p className="mt-3 text-sm leading-6 text-slate-300">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
};

export default ContactPage;
