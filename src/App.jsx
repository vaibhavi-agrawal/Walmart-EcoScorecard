import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import './index.css';

function App() {
  const [ecoStreak] = useState(5);
  const [ecoPoints] = useState(1240);
  const [ecoTip] = useState({
    tip: 'Switch off appliances when not in use to save energy.',
    author: 'Eco Team',
  });
  const [carbonReduced] = useState(12); // in kg
  const [userRank] = useState(42);
  const leaderboard = [
    { name: 'Aarav', points: 3200 },
    { name: 'Priya', points: 2950 },
    { name: 'Rohan', points: 2700 },
    { name: 'Sara', points: 2500 },
    { name: 'Meera', points: 2300 },
  ];
  const badges = [
    { name: 'Bronze Eco Warrior', color: 'bg-amber-500' },
    { name: 'Silver Eco Warrior', color: 'bg-gray-400' },
    { name: 'Gold Eco Warrior', color: 'bg-yellow-400' },
  ];

  const sections = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'stats', label: 'Stats', icon: '📊' },
    { id: 'tip', label: 'Eco Tip', icon: '💡' },
    { id: 'carbon', label: 'CO₂', icon: '🌍' },
    { id: 'refer', label: 'Refer', icon: '🤝' },
    { id: 'leaderboard', label: 'Leaders', icon: '🏆' },
  ];

  const [scrollPercent, setScrollPercent] = useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(percent);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    
    <div className="relative min-h-screen bg-leafy font-sans overflow-x-hidden">
      <div className="bg-overlay"></div>
      <div className="relative z-10">
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 shadow-lg border-b border-green-200 flex justify-center items-center py-2 px-4 backdrop-blur-md">
          <div className="flex gap-2 md:gap-6">
            {sections.map((section) => (
              <Link
                key={section.id}
                activeClass="bg-green-600 text-white shadow-lg scale-105"
                to={section.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="flex items-center gap-1 md:gap-2 cursor-pointer px-3 py-2 rounded-lg text-green-700 hover:bg-green-100 hover:scale-105 transition-all text-base md:text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-400"
                tabIndex={0}
              >
                <span className="text-xl md:text-2xl">{section.icon}</span>
                <span className="hidden sm:inline">{section.label}</span>
              </Link>
            ))}
          </div>
          {/* Scroll Progress Bar */}
          <div className="absolute left-0 bottom-0 w-full h-1 bg-green-100">
            <div
              className="h-1 bg-gradient-to-r from-green-400 to-green-600 transition-all"
              style={{ width: `${scrollPercent}%` }}
            ></div>
          </div>
        </nav>
        <div className="h-16" />

        {/* 1️⃣ Landing Page (Hero Section) */}
        <Element name="hero" id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-lime-100 via-green-200 to-emerald-200 animate-fade-in overflow-hidden">
          {/* Leafy SVG background */}
          <svg className="absolute left-0 top-0 w-full h-full pointer-events-none select-none" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}><path fill="#bbf7d0" fillOpacity="0.5" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
          <div className="glass p-10 md:p-16 flex flex-col items-center shadow-2xl relative z-10">
            <img src="https://www.svgrepo.com/show/354262/eco-leaf.svg" alt="Eco Leaf" className="w-24 h-24 mb-4 animate-fade-in" />
            <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4 drop-shadow-lg tracking-tight animate-fade-in">
              Track Your Eco Impact with Every Step
            </h1>
            <p className="text-2xl md:text-2xl text-green-900 mb-8 animate-fade-in delay-100">
              Earn points, reduce carbon, and win rewards.
            </p>
            <div className="flex justify-center gap-4 animate-fade-in delay-200">
              <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg">Get Started</button>
              <button className="bg-white border-2 border-green-600 text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-50 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 text-lg">Log In</button>
            </div>
          </div>
        </Element>

        {/* 2️⃣ Your Eco Stats (Streak + Points) */}
        <Element name="stats" id="stats" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-emerald-50 to-lime-100 animate-fade-in overflow-hidden">
          {/* Abstract SVG background */}
          <svg className="absolute right-0 top-0 w-1/2 h-1/2 pointer-events-none select-none" viewBox="0 0 400 400" fill="none"><circle cx="200" cy="200" r="200" fill="#bbf7d0" fillOpacity="0.3"/></svg>
          <section className="glass w-full max-w-3xl rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in relative z-10">
            <div className="flex flex-col items-center group">
              <span className="text-6xl font-extrabold text-green-700 flex items-center gap-2 group-hover:scale-110 transition-transform">
                {ecoPoints}
                <span role="img" aria-label="leaf">🌿</span>
              </span>
              <span className="text-gray-500 text-lg mt-1">Points Earned</span>
            </div>
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-bold text-orange-600 flex items-center gap-2 group-hover:scale-110 transition-transform">
                {ecoStreak}-day eco streak <span role="img" aria-label="fire">🔥</span>
              </span>
            </div>
            <div className="flex gap-2">
              {badges.map((badge) => (
                <span key={badge.name} className={`text-sm text-white px-4 py-2 rounded-full ${badge.color} font-bold shadow group-hover:scale-110 transition-transform`}>
                  {badge.name}
                </span>
              ))}
            </div>
          </section>
        </Element>

        {/* 3️⃣ Eco Tip of the Week */}
        <Element name="tip" id="tip" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-green-50 to-emerald-100 animate-fade-in overflow-hidden">
          {/* Light pattern SVG */}
          <svg className="absolute left-0 bottom-0 w-1/2 h-1/2 pointer-events-none select-none" viewBox="0 0 400 400" fill="none"><rect x="0" y="0" width="400" height="400" fill="#bbf7d0" fillOpacity="0.15"/><circle cx="100" cy="300" r="60" fill="#bbf7d0" fillOpacity="0.2"/></svg>
          <section className="glass w-full max-w-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in relative z-10">
            <h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2"><span role="img" aria-label="bulb">💡</span> Eco Tip of the Week</h2>
            <img src="https://www.svgrepo.com/show/354263/eco-globe.svg" alt="Eco Globe" className="w-16 h-16 mb-2" />
            <p className="text-green-900 text-center mb-2 text-xl font-medium">“{ecoTip.tip}”</p>
            <span className="text-sm text-gray-500 mb-4">— {ecoTip.author}</span>
            <div className="flex gap-3">
              <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 py-2 rounded-full text-base font-bold shadow-lg transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400">Read More</button>
              <button className="bg-white border-2 border-green-600 text-green-700 px-6 py-2 rounded-full text-base font-bold hover:bg-green-50 hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg">Submit Your Own Tip</button>
            </div>
          </section>
        </Element>

        {/* 4️⃣ Carbon Footprint Reduction */}
        <Element name="carbon" id="carbon" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-emerald-100 to-lime-200 animate-fade-in overflow-hidden">
          {/* Earth SVG background */}
          <svg className="absolute right-0 top-0 w-1/3 h-1/3 pointer-events-none select-none" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#6ee7b7" fillOpacity="0.18"/></svg>
          <section className="glass w-full max-w-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in relative z-10">
            <h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2"><span role="img" aria-label="earth">🌍</span> Carbon Footprint Reduction</h2>
            <img src="https://www.svgrepo.com/show/354264/eco-planet.svg" alt="Eco Planet" className="w-20 h-20 mb-2" />
            <div className="w-full flex flex-col items-center">
              <div className="w-44 h-44 relative flex items-center justify-center mb-4 group">
                <svg className="absolute top-0 left-0" width="176" height="176">
                  <circle cx="88" cy="88" r="78" stroke="#e5e7eb" strokeWidth="16" fill="none" />
                  <circle cx="88" cy="88" r="78" stroke="#34d399" strokeWidth="16" fill="none" strokeDasharray={490} strokeDashoffset={490 - (carbonReduced / 20) * 490} strokeLinecap="round" />
                </svg>
                <span className="text-4xl font-extrabold text-green-700 z-10 group-hover:scale-110 transition-transform">{carbonReduced} kg</span>
              </div>
              <span className="text-green-800 text-lg font-medium">You've reduced {carbonReduced} kg CO₂ this month!</span>
            </div>
          </section>
        </Element>

        {/* 5️⃣ Refer a Friend & Earn */}
        <Element name="refer" id="refer" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-lime-100 to-green-200 animate-fade-in overflow-hidden">
          {/* People SVG background */}
          <svg className="absolute left-0 top-0 w-1/3 h-1/3 pointer-events-none select-none" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#bbf7d0" fillOpacity="0.18"/></svg>
          <section className="glass w-full max-w-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in relative z-10">
            <h2 className="text-2xl font-bold text-green-700 mb-2 flex items-center gap-2"><span role="img" aria-label="handshake">🤝</span> Refer a Friend & Earn</h2>
            <img src="https://www.svgrepo.com/show/354265/eco-people.svg" alt="Eco People" className="w-16 h-16 mb-2" />
            <p className="text-green-900 text-center mb-3 text-lg font-medium">Invite friends, share your link, and earn rewards!</p>
            <div className="flex w-full max-w-xs mb-2">
              <input
                type="text"
                value="https://ecoapp.com/invite/yourcode"
                readOnly
                className="flex-1 px-3 py-2 border border-green-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80 font-mono text-green-700"
              />
              <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-6 py-2 rounded-r-full font-bold hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-green-400 shadow-lg">Copy Link</button>
            </div>
            <div className="mt-2 text-base text-green-700 italic animate-fade-in delay-200">Priya earned ₹200 voucher!</div>
          </section>
        </Element>

        {/* 6️⃣ Leaderboard */}
        <Element name="leaderboard" id="leaderboard" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-green-50 to-emerald-100 animate-fade-in overflow-hidden">
          {/* Trophy SVG background */}
          <svg className="absolute right-0 bottom-0 w-1/3 h-1/3 pointer-events-none select-none" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#facc15" fillOpacity="0.12"/></svg>
          <section className="glass w-full max-w-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in relative z-10">
            <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center gap-2"><span role="img" aria-label="trophy">🏆</span> Leaderboard</h2>
            <img src="https://www.svgrepo.com/show/354266/eco-trophy.svg" alt="Eco Trophy" className="w-16 h-16 mb-2" />
            <ol className="w-full mb-4">
              {leaderboard.map((user, idx) => (
                <li key={user.name} className="flex items-center justify-between py-3 px-5 rounded-xl mb-2 bg-green-100/70 hover:bg-green-200 transition-all group shadow">
                  <span className="flex items-center gap-2">
                    {idx === 0 && <span role="img" aria-label="gold">🥇</span>}
                    {idx === 1 && <span role="img" aria-label="silver">🥈</span>}
                    {idx === 2 && <span role="img" aria-label="bronze">🥉</span>}
                    <span className="font-bold group-hover:text-green-700 transition-colors text-lg">{user.name}</span>
                  </span>
                  <span className="font-extrabold text-green-700 group-hover:scale-110 transition-transform text-xl">{user.points}</span>
                </li>
              ))}
            </ol>
            <div className="text-green-800 text-lg animate-fade-in delay-200">You're ranked <span className="font-bold">#{userRank}</span> — Keep it up!</div>
          </section>
        </Element>
      </div>
    </div>
  );
}

export default App;
