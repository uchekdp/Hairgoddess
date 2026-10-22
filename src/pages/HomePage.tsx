import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import {
  IMAGES,
  GALLERY_ITEMS,
  SERVICE_CATEGORIES,
  getServicePricingWhatsAppUrl,
} from '../constants/brand';
import { ServiceCategory } from '../types';
import { LightboxModal } from '../components/LightboxModal';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { ArrowRight, Eye, MessageCircle, Info } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceCategory | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Hairgoddess Unisex Salon Hair Artistry"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#28252A]/80 via-[#28252A]/60 to-[#245C45]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-28">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.18] mb-10">
            Your Beauty. Your Confidence.{' '}
            <span className="font-serif italic font-normal text-[#F8DCE7] block sm:inline">
              Your Goddess Moment.
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:ring-offset-2 focus:ring-offset-[#28252A]"
            >
              Explore Our Services
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/15 text-white hover:bg-[#F8DCE7]/30 hover:text-white backdrop-blur-sm border border-[#F8DCE7]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            >
              About Hairgoddess
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="py-20 sm:py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-[#F8DCE7] text-[#D96C98] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-2xs">
            Grace • Elegance • Sanctuary
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#28252A] tracking-tight mb-6">
            Welcome to Hairgoddess
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            At Hairgoddess Unisex Salon, we are devoted to the art of personal care, elevated beauty,
            and complete wellbeing. From soothing spa rituals and master barbering to immaculate
            manicures, revitalizing pedicures, expert salon artistry, and pure human hair sales, we
            provide a warm, serene space where every client feels celebrated and renewed.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#245C45] hover:text-[#D96C98] transition-colors group"
            >
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <Link
              href="/about#founder"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D96C98] hover:text-[#245C45] transition-colors group"
            >
              <span>Meet Our Founder & CEO</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 p-4 rounded-2xl bg-[#F8DCE7]/30 border border-[#F8DCE7] max-w-xl mx-auto text-xs text-[#28252A] font-medium italic">
            “Dedicated to honoring your personal grace and confidence with uncompromised quality.”
          </div>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW */}
      <section className="py-20 bg-[#FAF8F5] border-y border-[#F8DCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-4 rounded-full bg-[#F8DCE7] text-[#D96C98] text-xs font-semibold uppercase tracking-[0.25em] mb-3 shadow-2xs">
              Comprehensive Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#28252A] tracking-tight mb-4">
              Beauty and Care, All in One Place
            </h2>
            <p className="text-sm text-gray-600">
              Thoughtfully curated services tailored to your individual style, grooming, and
              relaxation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.id}
                className="bg-white p-7 rounded-2xl border border-[#F8DCE7]/80 shadow-sm hover:shadow-md hover:border-[#D96C98]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    onClick={() => setSelectedServiceModal(service)}
                    className="relative overflow-hidden rounded-xl aspect-[16/10] mb-5 bg-gray-100 border border-[#F8DCE7] cursor-pointer"
                    title={`Click to view detailed information for ${service.name}`}
                  >
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-[#245C45] backdrop-blur-xs flex items-center gap-1 shadow-xs">
                        <Info className="w-3.5 h-3.5 text-[#D96C98]" />
                        <span>View Details</span>
                      </span>
                    </div>
                  </div>
                  <h3
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-lg font-semibold text-[#28252A] group-hover:text-[#D96C98] transition-colors mb-2 cursor-pointer"
                  >
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={getServicePricingWhatsAppUrl(service.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-gray-500 hover:text-[#25D366] transition-colors uppercase tracking-wider inline-flex items-center gap-1 group/btn"
                    title={`Chat on WhatsApp for ${service.name} pricing`}
                  >
                    <MessageCircle className="w-3 h-3 text-[#25D366] group-hover/btn:scale-110 transition-transform" />
                    <span>Contact for pricing</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-xs font-semibold text-[#245C45] hover:text-[#D96C98] transition-colors inline-flex items-center gap-1.5 cursor-pointer py-1 px-3 rounded-full bg-[#F8DCE7]/40 hover:bg-[#F8DCE7] border border-[#F8DCE7] shadow-2xs group/link"
                    aria-label={`View detailed information for ${service.name}`}
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D96C98] group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4. GALLERY PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="inline-block py-1 px-3.5 rounded-full bg-[#F8DCE7] text-[#D96C98] text-xs font-semibold uppercase tracking-[0.25em] mb-2 shadow-2xs">
                Authentic Craft
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#28252A] tracking-tight">
                Glimpse Into Our Studio
              </h2>
            </div>
            <Link
              href="/gallery"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#245C45] hover:text-[#D96C98] transition-colors"
            >
              <span>View Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Carefully arranged layout of the supplied images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/5] border border-[#F8DCE7] shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#28252A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#F8DCE7] font-medium block">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                    </div>
                    <span className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLOSING CALL TO ACTION - Infused with Blush Pink Elegance */}
      <section className="py-20 bg-gradient-to-br from-[#F8DCE7]/60 via-white to-[#F8DCE7]/30 border-t border-[#F8DCE7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-[#F8DCE7] text-[#D96C98] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-2xs">
            Personal Care & Pampering
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight mb-4">
            Make Time for Yourself
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
            Contact Hairgoddess to enquire about our services and plan your next visit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-9 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
      />
    </div>
  );
};
