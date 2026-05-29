import React from 'react';
import { Link } from 'react-router-dom';
import SiteChrome from '../components/SiteChrome';
import {
    abhayProfile,
    aboutSections,
    aiBuildServices,
    buildProcess,
    contactLinks,
} from '../content/siteContent';

const audience = [
    'Players digitizing personal game notebooks',
    'Coaches reviewing student games faster',
    'Chess clubs preserving event records',
    'Organizers turning paper archives into searchable PGN',
];

const AboutPage = () => {
    return (
        <SiteChrome>
            <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">About the project</p>
                        <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl">
                            A chess archive tool shaped by production AI thinking.
                        </h1>
                        <p className="mt-6 text-base leading-7 text-slate-300">
                            ChessParser is designed for a simple job: take a physical scoresheet, extract the moves,
                            validate the game, and give the user enough context to trust the result.
                        </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Built for</p>
                        <div className="mt-5 grid gap-3">
                            {audience.map((item) => (
                                <div key={item} className="rounded border border-white/10 bg-black/30 px-4 py-3 text-sm font-semibold text-slate-200">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-black/25 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-4 md:grid-cols-3">
                        {aboutSections.map((section) => (
                            <article key={section.title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                                <h2 className="text-xl font-black text-white">{section.title}</h2>
                                <p className="mt-4 text-sm leading-6 text-slate-400">{section.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-200">Abhay profile</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                            {abhayProfile.headline}
                        </h2>
                        <p className="mt-5 text-base leading-7 text-slate-400">{abhayProfile.summary}</p>
                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <a
                                href={contactLinks[0].href}
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg bg-amber-300 px-5 py-3 text-center text-sm font-black text-black hover:bg-amber-200"
                            >
                                Visit TheAbhay
                            </a>
                            <Link
                                to="/contact"
                                className="rounded-lg border border-white/15 px-5 py-3 text-center text-sm font-black text-white hover:bg-white/10"
                            >
                                Contact Details
                            </Link>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {aiBuildServices.map((service) => (
                            <div key={service} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                                <p className="text-sm font-black text-white">{service}</p>
                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    Business-first AI capability connected to source data, interfaces, or operational handoffs.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-white/10 bg-white/[0.02] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-200">Build notes</p>
                        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
                            The same loop works for chess and business documents.
                        </h2>
                    </div>
                    <div className="mt-10 grid gap-4 md:grid-cols-4">
                        {buildProcess.map((item) => (
                            <article key={item.step} className="rounded-lg border border-white/10 bg-black/30 p-5">
                                <p className="font-mono text-sm font-black text-amber-200">{item.step}</p>
                                <h3 className="mt-3 text-lg font-black text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </SiteChrome>
    );
};

export default AboutPage;
