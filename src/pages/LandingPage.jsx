import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InteractiveGrid from '../components/InteractiveGrid';
import CustomCursor from '../components/CustomCursor';

const LandingPage = () => {
    const navigate = useNavigate();

    // Check if backend is running when the page loads
    useEffect(() => {
        const checkBackendHealth = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api`);
                if (!response.ok) {
                    throw new Error(`Backend returned: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('✅ Backend Status:', data);
            } catch (error) {
                console.error('❌ Backend connection failed:', error.message);
            }
        };

        checkBackendHealth();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className="relative w-full bg-[#0a0a0a] overflow-x-hidden text-white selection:bg-cyan-500 selection:text-black font-sans">
            <CustomCursor />

            {/* Interactive Background Grid - Full Page */}
            <InteractiveGrid />

            {/* Dynamic Background Overlay */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.5),rgba(0,0,0,0.8))] pointer-events-none z-0"></div>

            {/* Ambient Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-900/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-900/20 rounded-full blur-[120px] animate-pulse pointer-events-none z-0" style={{ animationDelay: '2s' }}></div>

            {/* Content Container */}
            <div className="relative z-10">
                {/* Navbar */}
                <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center">
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-lg"></div>
                            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">ChessParser</span>
                        </div>
                        <button
                            onClick={() => navigate('/app')}
                            className="px-4 sm:px-6 py-2 sm:py-2.5 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 backdrop-blur-sm"
                        >
                            Launch App
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 pointer-events-none">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="mb-6 sm:mb-8 pointer-events-auto inline-block">
                            <div className="relative group cursor-default">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative px-3 py-1.5 sm:px-4 bg-black rounded-full border border-white/10 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-xs font-medium text-slate-300 tracking-wide uppercase">v2.0 Now Available</span>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500 leading-[1.1]">
                            Digitize Your <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Chess Legacy</span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-4">
                            Experience the future of chess digitization. Instantly convert physical scoresheets into digital PGNs with our advanced AI-driven optical character recognition.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center pointer-events-auto">
                            <button
                                onClick={() => navigate('/app')}
                                className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                                    Start Parsing
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-16 sm:mt-24 pt-8 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 pointer-events-auto">
                            {[
                                { label: "Accuracy", value: "99.8%" },
                                { label: "Processing", value: "< 3s" },
                                { label: "Games Parsed", value: "100+" },
                                { label: "Active Users", value: "+" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 sm:mb-20">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Powerful Features</h2>
                            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Everything you need to digitize and analyze your chess games</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                { icon: "🤖", title: "AI-Powered OCR", desc: "State-of-the-art recognition engine handles even handwritten scoresheets with incredible accuracy." },
                                { icon: "⚡", title: "Lightning Fast", desc: "Process entire games in under 2 seconds. No more manual entry of moves." },
                                { icon: "♟️", title: "Smart Validation", desc: "Automatic move validation ensures game integrity and catches OCR errors." },
                                { icon: "📊", title: "PGN Export", desc: "Export to standard PGN format compatible with all major chess platforms." },
                                { icon: "🎯", title: "High Precision", desc: "99.8% accuracy rate tested on thousands of real scoresheets." },
                                { icon: "🔒", title: "Privacy First", desc: "Your games are processed securely and never stored on our servers." }
                            ].map((feature, i) => (
                                <div key={i} className="group p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/30">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12 sm:mb-20">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">How It Works</h2>
                            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">Three simple steps to digitize your chess games</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                            {[
                                { step: "01", title: "Upload Scoresheet", desc: "Take a photo or scan your chess scoresheet and upload it to the platform." },
                                { step: "02", title: "AI Processing", desc: "Our advanced AI analyzes the image, extracts moves, and validates them." },
                                { step: "03", title: "Download PGN", desc: "Get your game in PGN format ready to analyze, share, or archive." }
                            ].map((item, i) => (
                                <div key={i} className="relative">
                                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black text-cyan-500/20 mb-4">{item.step}</div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                                    {i < 2 && (
                                        <div className="hidden md:block absolute top-12 right-0 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent transform translate-x-full"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-md">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">Ready to Start?</h2>
                            <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-2xl mx-auto">Join thousands of chess players who are preserving their games digitally.</p>
                            <button
                                onClick={() => navigate('/app')}
                                className="group relative px-8 sm:px-10 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.7)] text-sm sm:text-base"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Launch Parser Now
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
                    <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
                        <p>© 2025 ChessParser. Built with ♟️ for chess enthusiasts.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default LandingPage;

