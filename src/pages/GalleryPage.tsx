import React, { useState } from 'react';
import { GALLERY_ITEMS, getServiceEnquiryWhatsAppUrl } from '../constants/brand';
import { LightboxModal } from '../components/LightboxModal';
import { Link } from '../context/RouterContext';
import { Eye, Sparkles, ArrowRight } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Hair Sales & Styling', 'Hair Sales', 'Beauty Salon'];

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#F8DCE7] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-3">
            Real Craft & Moments
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-[#28252A] tracking-tight mb-4">
            Studio Gallery
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Authentic photographs capturing our studio work, hair installations, and salon care. We
            showcase genuine Hairgoddess artistry with zero fictional filters or stock photography.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#D96C98] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-[#F8DCE7] hover:border-[#D96C98] hover:text-[#D96C98]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredItems.map((item, idx) => {
              // find absolute index in GALLERY_ITEMS for lightbox
              const actualIndex = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
              return (
                <div
                  key={item.id}
                  className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#F8DCE7] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image Container with Natural Aspect Ratio & Zoom */}
                  <div
                    className="relative cursor-pointer overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-gray-100"
                    onClick={() => setLightboxIndex(actualIndex)}
                    role="button"
                    tabIndex={0}
                    aria-label={`View enlarged ${item.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setLightboxIndex(actualIndex);
                      }
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#28252A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#28252A] text-xs font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-[#245C45]" />
                        <span>Enlarge Image</span>
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-[#C6A15B]">
                          {item.category}
                        </span>
                        <span className="text-xs text-gray-400">Authentic Photo</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-medium text-[#28252A] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setLightboxIndex(actualIndex)}
                        className="text-xs font-semibold text-[#245C45] hover:text-[#D96C98] transition-colors"
                      >
                        View Full Screen →
                      </button>
                      <a
                        href={getServiceEnquiryWhatsAppUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-[#25D366] transition-colors"
                      >
                        Enquire on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Genuine Photography Notice */}
          <div className="mt-16 p-6 rounded-2xl bg-[#DCE8DE]/40 border border-[#DCE8DE] text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#245C45] mb-1">
              <Sparkles className="w-4 h-4 text-[#C6A15B]" />
              <span>Authenticity First</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              All displayed photographs are genuine assets provided directly by Hairgoddess Beauty
              Home. We never publish fictional stock photography or altered transformation photos.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#F8DCE7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-2xl font-light text-[#28252A] mb-3">
            Admired a look in our gallery?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mb-6">
            Book an appointment or send us a screenshot of your preferred style for a tailored
            quote and scheduling.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
          >
            <span>Discuss Your Preferred Style</span>
            <ArrowRight className="w-4 h-4" />
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
    </div>
  );
};
