import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Singapore',
        hour12: false,
      });
      setCurrentTime(`${timeString} SGT`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { path: '/work', label: 'Works' },
    { path: '/', label: 'About' },
    { path: '/collaboration', label: 'Hire me' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#1A1A1A]/10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-serif text-xl hover:opacity-70 transition-opacity"
            style={{ fontFamily: "Playfair Display, ui-serif" }}
          >
            Dannick Young
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-4 text-sm text-[#6C6863]">
              <span>Based in Singapore</span>
              {currentTime && <span>{currentTime}</span>}
            </div>
            <button className="md:hidden text-sm text-[#6C6863]">Menu</button>
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-opacity duration-300 ${
                    isActive(item.path)
                      ? 'text-[#1A1A1A] font-medium'
                      : 'text-[#6C6863] hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
