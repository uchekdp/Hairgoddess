import React, { useEffect } from 'react';
import { ServiceCategory } from '../types';
import { Link } from '../context/RouterContext';
import {
  getServicePricingWhatsAppUrl,
  getServiceEnquiryWhatsAppUrl,
} from '../constants/brand';
import { X, CheckCircle2, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceCategory | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
}) => {
  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#28252A]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-[#F8DCE7] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar with Image & Close Button */}
        <div className="relative h-48 sm:h-56 w-full bg-gray-100 overflow-hidden shrink-0">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#28252A]/80 via-[#28252A]/30 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-[#28252A] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image banner */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F8DCE7] text-[#D96C98] text-[10px] font-semibold uppercase tracking-wider mb-2 shadow-xs">
              Detailed Service Overview
            </span>
            <h3
              id="service-modal-title"
              className="text-2xl sm:text-3xl font-light text-white tracking-tight"
            >
              {service.name}
            </h3>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Full Detailed Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-2">
              About This Service
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {service.fullDesc}
            </p>
          </div>

          {/* Treatment Highlights & Inclusions */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DCE8DE] space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#245C45]">
              What We Offer & Highlights:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {service.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Note */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-[#F8DCE7]/30 border border-[#F8DCE7]">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#D96C98] block">
                Transparent Pricing
              </span>
              <p className="text-xs text-gray-600">
                Custom quotes based on individual preferences, hair length, and requested treatments.
              </p>
            </div>
            <a
              href={getServicePricingWhatsAppUrl(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-[#245C45] hover:text-[#25D366] bg-white border border-[#DCE8DE] hover:border-[#25D366] transition-colors shadow-2xs shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Contact for pricing</span>
            </a>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#FAF8F5] border-t border-[#F8DCE7] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <Link
            href={`/services#${service.id}`}
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#245C45] hover:text-[#D96C98] transition-colors py-2"
          >
            <span>View Full Service Menu</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2">
            <a
              href={getServiceEnquiryWhatsAppUrl(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Enquire & Book via WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-medium text-gray-600 hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
