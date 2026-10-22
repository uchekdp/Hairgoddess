import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { NavItem } from '../types';
import { Menu, X, Calendar } from 'lucide-react';

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath === href || currentPath.startsWith(href + '/');
  };

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#F8DCE7] transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col justify-center text-left focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-2 rounded-sm"
          >
            <div className="flex items-center">
              <span className="font-transcity text-2xl sm:text-3xl tracking-[0.12em] text-[#28252A] group-hover:text-[#D96C98] transition-colors uppercase leading-tight">
                HAIRGODDESS
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D96C98] ml-1.5 mb-1 shadow-xs" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D96C98] -mt-1 group-hover:text-[#245C45] transition-colors">
              Unisex Salon
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#C6A15B] ${
                    active
                      ? 'bg-[#F8DCE7] text-[#245C45] font-semibold shadow-2xs'
                      : 'text-[#28252A] hover:text-[#D96C98] hover:bg-[#F8DCE7]/40'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#D96C98] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Book Appointment CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#28252A] hover:text-[#245C45] hover:bg-[#F8DCE7]/50 focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Decorative hairline accent border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D96C98]/40 to-transparent" />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#F8DCE7] bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleMobileLinkClick(item.href)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                    active
                      ? 'bg-[#F8DCE7] text-[#245C45] font-semibold border-l-4 border-[#D96C98]'
                      : 'text-[#28252A] hover:bg-[#F8DCE7]/40 hover:text-[#D96C98]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#D96C98]" />}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#F8DCE7]">
              <button
                type="button"
                onClick={() => handleMobileLinkClick('/contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#C6A15B]" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
