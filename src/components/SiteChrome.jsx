import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import InteractiveGrid from './InteractiveGrid';
import { contactLinks } from '../content/siteContent';

const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Parser', to: '/app' },
    { label: 'Play', to: '/play' },
];

const SiteChrome = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-[#080a0f] text-white selection:bg-amber-300 selection:text-black">
            <CustomCursor />
            <InteractiveGrid />
            <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(180deg,rgba(8,10,15,0.72)_0%,rgba(8,10,15,0.92)_42%,rgba(8,10,15,1)_100%)]" />
            <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(90deg,rgba(20,184,166,0.08),transparent_34%,rgba(245,158,11,0.08)_66%,transparent)]" />

            <div className="relative z-10">
                <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080a0f]/80 backdrop-blur-xl">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                        <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="ChessParser home">
                            <img
                                src="/chessparser-icon.svg"
                                alt=""
                                className="h-10 w-10 shrink-0 rounded-lg shadow-[0_0_24px_rgba(20,184,166,0.18)]"
                            />
                            <span className="min-w-0">
                                <span className="block truncate text-base font-bold tracking-tight text-white sm:text-lg">
                                    ChessParser
                                </span>
                                <span className="hidden text-xs uppercase tracking-[0.28em] text-slate-500 sm:block">
                                    By Abhay
                                </span>
                            </span>
                        </Link>

                        <div className="hidden items-center gap-1 md:flex">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `rounded-lg px-3 py-2 text-sm font-medium transition ${
                                            isActive
                                                ? 'bg-white text-black'
                                                : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="flex items-center gap-2">
                            <a
                                href={contactLinks[0].href}
                                target="_blank"
                                rel="noreferrer"
                                className="hidden rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-amber-300/50 hover:text-amber-100 sm:inline-flex"
                            >
                                TheAbhay
                            </a>
                            <Link
                                to="/app"
                                className="rounded-lg bg-amber-300 px-4 py-2 text-sm font-black text-black transition hover:bg-amber-200"
                            >
                                Launch
                            </Link>
                        </div>
                    </nav>
                    <div className="border-t border-white/10 px-3 py-2 md:hidden">
                        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `shrink-0 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                                            isActive
                                                ? 'bg-white text-black'
                                                : 'bg-white/5 text-slate-300'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </header>

                <main>{children}</main>

                <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
                        <div>
                            <p className="text-lg font-bold text-white">ChessParser</p>
                            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                                AI-assisted scoresheet extraction for players, coaches, clubs, and anyone
                                trying to keep chess games from disappearing into old notebooks.
                            </p>
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Pages</p>
                            <div className="mt-4 grid gap-2 text-sm">
                                {navItems.slice(0, 3).map((item) => (
                                    <Link key={item.to} to={item.to} className="text-slate-300 hover:text-white">
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Contact</p>
                            <div className="mt-4 grid gap-2 text-sm">
                                {contactLinks.slice(0, 2).map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-300 hover:text-white"
                                    >
                                        {item.value}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default SiteChrome;
