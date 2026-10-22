import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image view modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation - Prev */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex - 1 + items.length) % items.length);
          }}
          aria-label="Previous image"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Navigation - Next */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((currentIndex + 1) % items.length);
          }}
          aria-label="Next image"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A15B] z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal Image Content */}
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
        />
        <div className="mt-4 text-center text-white max-w-xl px-2">
          <span className="inline-block text-xs uppercase tracking-widest text-[#C6A15B] font-medium mb-1">
            {currentItem.category}
          </span>
          <h3 className="text-base sm:text-lg font-medium text-white">{currentItem.title}</h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-1">{currentItem.description}</p>
        </div>
      </div>
    </div>
  );
};
