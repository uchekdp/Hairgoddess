import React from 'react';
import { Link } from '../context/RouterContext';
import { CONTACT_INFO, SERVICE_CATEGORIES } from '../constants/brand';
import { Phone, Clock, MapPin, ArrowRight, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#F8DCE7] text-[#28252A] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#F8DCE7]">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <div className="flex items-center">
                <span className="font-transcity text-2xl tracking-[0.12em] text-[#28252A] group-hover:text-[#D96C98] transition-colors uppercase">
                  HAIRGODDESS
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D96C98] ml-1.5 mb-1" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D96C98] -mt-1">
                Unisex Salon
              </p>
            </Link>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-sm">
              Your destination for beauty, grooming, relaxation, and personal care. We bring you
              refined salon artistry, soothing spa moments, and premium human hair.
            </p>

            {/* Social Media Icons (Only Icons) */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hairgoddess on Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#F8DCE7] text-[#28252A] hover:text-[#D96C98] hover:bg-[#F8DCE7]/60 hover:border-[#D96C98]/40 transition-all flex items-center justify-center shadow-2xs group"
              >
                <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={CONTACT_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hairgoddess on Facebook"
                className="w-9 h-9 rounded-full bg-white border border-[#F8DCE7] text-[#28252A] hover:text-[#D96C98] hover:bg-[#F8DCE7]/60 hover:border-[#D96C98]/40 transition-all flex items-center justify-center shadow-2xs group"
              >
                <Facebook className="w-4 h-4 transition-transform group-hover:scale-110" />
              </a>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245C45] hover:text-[#D96C98] transition-colors"
              >
                <span>Read our story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D96C98]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#D96C98] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#D96C98] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-[#D96C98] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-[#D96C98] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#D96C98] transition-colors">
                  Contact & Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Categories */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D96C98]">
              Our Offerings
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-gray-600 hover:text-[#D96C98] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#D96C98]">
              Visit & Enquire
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D96C98] shrink-0 mt-0.5" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    CONTACT_INFO.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D96C98] transition-colors leading-snug"
                  title="Open location in Google Maps"
                >
                  {CONTACT_INFO.address}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D96C98] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.openingHours}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D96C98] shrink-0 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="hover:text-[#D96C98] transition-colors font-medium text-[#28252A]"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
              >
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Hairgoddess Unisex Salon. All rights reserved.</p>
          <p className="text-gray-400">
            Spa • Barber Shop • Manicure • Pedicure • Beauty Salon • Hair Sales
          </p>
        </div>
      </div>
    </footer>
  );
};
