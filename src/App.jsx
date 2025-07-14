import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import './index.css';
import leavesBg from './assets/new.jpeg';

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
    
    <div className="relative min-h-screen bg-ewaste font-sans overflow-x-hidden">
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
        <Element name="hero" id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-slide1 animate-fade-in overflow-hidden">
          {/* No text or content, only background image */}
        </Element>

        {/* 2️⃣ Your Eco Stats (Streak + Points) */}
        <Element name="stats" id="stats" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-slide2 animate-fade-in overflow-hidden">
          {/* No text or content, only background image */}
        </Element>

        {/* 3️⃣ Eco Tip of the Week */}
        <Element name="tip" id="tip" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-slide3 animate-fade-in overflow-hidden">
          {/* No text or content, only background image */}
        </Element>

        {/* 4️⃣ Carbon Footprint Reduction */}
        <Element name="carbon" id="carbon" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-sli4 animate-fade-in overflow-hidden">
          {/* No text or content, only background image */}
        </Element>

        {/* 5️⃣ Refer a Friend & Earn */}
        <Element name="refer" id="refer" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-ewaste animate-fade-in overflow-hidden">
          {/* People SVG background */}
          <svg className="absolute left-0 top-0 w-1/3 h-1/3 pointer-events-none select-none" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#bbf7d0" fillOpacity="0.18"/></svg>
          <section className="w-full max-w-2xl rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in relative z-10 text-white">
            <h2 className="text-4xl font-bold text-green-700 mb-4 flex items-center gap-2"><span role="img" aria-label="handshake">🤝</span> Refer a Friend & Earn</h2>
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
        <Element name="leaderboard" id="leaderboard" className="relative min-h-screen flex flex-col justify-center items-center px-4 bg-sli6 animate-fade-in overflow-hidden">
          {/* No text or content, only background image */}
        </Element>
      </div>
    </div>
  );
}

export default App;