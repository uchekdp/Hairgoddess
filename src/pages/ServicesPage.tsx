import React, { useEffect } from 'react';
import { Link } from '../context/RouterContext';
import {
  IMAGES,
  SERVICE_CATEGORIES,
  getServicePricingWhatsAppUrl,
  getServiceEnquiryWhatsAppUrl,
} from '../constants/brand';
import { CheckCircle2, Calendar, MessageCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  // Handle hash scrolling if navigating to /services#spa etc.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#FAF8F5] border-b border-[#F8DCE7] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-3">
            Holistic Care Menu
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-[#28252A] tracking-tight mb-4">
            Services & Offerings
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Explore our specialized categories designed for your beauty, grooming, and rejuvenation.
            Contact us for custom consultation and pricing.
          </p>

          {/* Quick jump anchor tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {SERVICE_CATEGORIES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-full text-xs font-medium bg-white text-[#28252A] border border-[#DCE8DE] hover:border-[#245C45] hover:text-[#245C45] transition-colors shadow-2xs"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. SPA (Featuring attached Spa Image) */}
      <section id="spa" className="py-20 border-b border-[#F8DCE7]/60 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCE8DE]/70 text-[#245C45] text-xs font-semibold uppercase tracking-wider">
                <span>Relaxation & Body Care</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight">
                Spa & Rejuvenation Treatments
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Step into a serene environment tailored for tension relief, deep muscle relaxation,
                and radiant skin hydration. Our spa therapies are crafted to soothe the mind and
                restore balance using gentle exfoliants, calming aromatic wraps, and restorative
                steam therapies.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Therapy Offerings:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Relaxation & Tension Massage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Full Body Scrub & Polish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Facial Cleansing & Steam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Deep Hydrating Body Wraps</span>
                  </div>
                </div>
              </div>

              {/* Editable note */}
              <p className="text-xs text-gray-500 italic bg-[#FAF8F5] p-3.5 rounded-xl border border-gray-100">
                Detailed treatment packages and seasonal spa rituals will be confirmed upon
                consultation with the owner.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getServicePricingWhatsAppUrl('Spa Treatments')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#245C45] hover:text-[#25D366] px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#DCE8DE] hover:border-[#25D366] transition-colors shadow-2xs group"
                  title="Chat on WhatsApp for Spa pricing"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>Contact us for pricing</span>
                </a>
                <a
                  href={getServiceEnquiryWhatsAppUrl('Spa & Rejuvenation Treatments')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Enquire About Spa</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCE8DE] aspect-[4/5] bg-gray-100">
                <img
                  src={IMAGES.spa}
                  alt="Hairgoddess Spa Treatment & Relaxation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#245C45] uppercase tracking-wider border border-white">
                  Spa Sanctuary
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BARBER SHOP (Featuring attached Barber Image) */}
      <section id="barber-shop" className="py-20 bg-[#FAF8F5] border-b border-[#F8DCE7]/60 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCE8DE] aspect-[4/5] bg-gray-100">
                <img
                  src={IMAGES.barber}
                  alt="Hairgoddess Precision Barbering & Fade"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#245C45] uppercase tracking-wider border border-white">
                  Master Barbering
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F8DCE7]/80 text-[#28252A] text-xs font-semibold uppercase tracking-wider">
                <span>Executive Grooming</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight">
                Barber Shop Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Our barbers take pride in precision craftsmanship. From classic fades, scissor
                cuts, and clean taper styles to detailed beard sculpting, hot towel conditioning,
                and soothing aftershave care, we deliver crisp results without compromise.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Grooming Highlights:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Fade, Taper & Precision Haircuts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Beard Trimming & Oil Conditioning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Clean Razor Edge & Line Detailing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Hot Towel Revitalizing Finish</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getServicePricingWhatsAppUrl('Barber Shop Grooming')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#245C45] hover:text-[#25D366] px-4 py-2 rounded-full bg-white border border-[#DCE8DE] hover:border-[#25D366] transition-colors shadow-2xs group"
                  title="Chat on WhatsApp for Barber Shop pricing"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>Contact us for pricing</span>
                </a>
                <a
                  href={getServiceEnquiryWhatsAppUrl('Barber Shop Grooming')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Enquire About Barbering</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. MANICURE & PEDICURE (Featuring attached Manicure & Pedicure Images) */}
      <section className="py-20 border-b border-[#F8DCE7]/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-2">
              Hand & Foot Wellness
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight mb-4">
              Manicure & Pedicure Studio
            </h2>
            <p className="text-sm text-gray-600">
              Impeccable care for hands and feet with medical-grade hygiene and nourishing formulas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Manicure Card with Attached Image */}
            <div id="manicure" className="p-7 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#DCE8DE] space-y-6 scroll-mt-28 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 border border-[#DCE8DE]">
                  <img
                    src={IMAGES.manicure}
                    alt="Hairgoddess Polished Manicure Artistry"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#245C45] uppercase tracking-wider border border-white">
                    Manicure Care
                  </div>
                </div>

                <h3 className="text-2xl font-light text-[#28252A] tracking-tight">
                  Manicure Treatments
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your hands work hard every day. Our manicures give your nails meticulous shaping,
                  gentle cuticle restoration, exfoliating hand rubs, and hydrating oils. Choose from
                  natural buffing or high-shine long-wear polish.
                </p>
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Nail shaping, buffing & edge smoothing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Cuticle cleaning & conditioning treatment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Hand massage & deeply hydrating balm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Classic or gel polish applications</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href={getServicePricingWhatsAppUrl('Manicure Treatments')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#245C45] hover:text-[#25D366] transition-colors"
                  title="Chat on WhatsApp for Manicure pricing"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Contact us for pricing</span>
                </a>
                <a
                  href={getServiceEnquiryWhatsAppUrl('Manicure Treatments')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Enquire About Manicure</span>
                </a>
              </div>
            </div>

            {/* Pedicure Card with Attached Image */}
            <div id="pedicure" className="p-7 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#DCE8DE] space-y-6 scroll-mt-28 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 border border-[#DCE8DE]">
                  <img
                    src={IMAGES.pedicure}
                    alt="Hairgoddess Pedicure & Foot Care Session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-semibold text-[#245C45] uppercase tracking-wider border border-white">
                    Pedicure Studio
                  </div>
                </div>

                <h3 className="text-2xl font-light text-[#28252A] tracking-tight">
                  Pedicure & Foot Care
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Revive tired feet with an aromatic botanical soak, gentle callus softening, and
                  exfoliating foot therapy. We finish with a stimulating tension-relieving foot
                  massage that leaves you walking on air.
                </p>
                <div className="space-y-2 pt-2 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Relaxing botanical foot soak</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Callus care & gentle exfoliating foot scrub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Calf & foot tension-relief massage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Toenail grooming & polished finish</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <a
                  href={getServicePricingWhatsAppUrl('Pedicure & Foot Care')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#245C45] hover:text-[#25D366] transition-colors"
                  title="Chat on WhatsApp for Pedicure pricing"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Contact us for pricing</span>
                </a>
                <a
                  href={getServiceEnquiryWhatsAppUrl('Pedicure & Foot Care')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Enquire About Pedicure</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEAUTY SALON (Featuring authentic salon styling image) */}
      <section id="beauty-salon" className="py-20 bg-white border-b border-[#F8DCE7]/60 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCE8DE] aspect-[4/5] bg-gray-100">
                <img
                  src={IMAGES.gallery3}
                  alt="Hairgoddess Salon Styling Craft"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#245C45] uppercase tracking-wider border border-white">
                  Studio Styling
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#F8DCE7]/80 text-[#28252A] text-xs font-semibold uppercase tracking-wider">
                <span>Hair Artistry</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight">
                Beauty Salon & Styling Services
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                From precision braiding and protective styles to silky blow-outs, frontal melts, and
                deep nourishing scalp treatments, our stylists provide artistic expertise that
                keeps your hair vibrant, healthy, and stunning for any occasion.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Salon Offerings:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Braiding, Knotless & Cornrow Styling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Silk Press & Thermal Blowouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Wig & Weave Seamless Installation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Scalp Therapy & Deep Conditioners</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getServicePricingWhatsAppUrl('Beauty Salon & Styling')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#245C45] hover:text-[#25D366] px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#DCE8DE] hover:border-[#25D366] transition-colors shadow-2xs group"
                  title="Chat on WhatsApp for Salon pricing"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>Contact us for pricing</span>
                </a>
                <a
                  href={getServiceEnquiryWhatsAppUrl('Beauty Salon & Styling Services')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Enquire About Salon</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HAIR SALES (Featuring authentic supplied image GALLERY 2) */}
      <section id="hair-sales" className="py-20 bg-[#FAF8F5] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#DCE8DE] text-[#245C45] text-xs font-semibold uppercase tracking-wider">
                <span>Luxury Human Hair</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight">
                Hair Sales & Custom Units
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                Invest in hair that lasts. Hairgoddess offers top-tier virgin human hair bundles,
                frontals, closures, and customized wig units. Our hair is selected for consistent
                cuticle alignment, natural luster, softness, and resilience through color and heat
                styling.
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                  Available Hair Categories:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>100% Virgin Hair Bundles (Straight, Body Wave, Curls)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>HD Lace Frontals & Closures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Custom Fitted & Glueless Wig Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span>Hair Care Oils & Maintenance Essentials</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 italic bg-white p-3.5 rounded-xl border border-gray-200">
                Exact bundle lengths, unit densities, and inventory availability are confirmed upon
                direct inquiry. We do not display fictional prices; contact our team for our current
                catalogue.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getServicePricingWhatsAppUrl('Hair Sales & Custom Units')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#245C45] hover:text-[#25D366] px-4 py-2 rounded-full bg-white border border-[#DCE8DE] hover:border-[#25D366] transition-colors shadow-2xs group"
                  title="Chat on WhatsApp for Hair Sales pricing"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  <span>Contact us for pricing</span>
                </a>
                <a
                  href={getServiceEnquiryWhatsAppUrl('Hair Sales & Custom Units')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Enquire for Hair Sales</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#F8DCE7] aspect-[4/5] bg-gray-100">
                <img
                  src={IMAGES.hairSales}
                  alt="Hairgoddess Authentic Human Hair Wigs & Bundles"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#F8DCE7] shadow-sm">
                  <span className="text-[10px] uppercase tracking-wider text-[#D96C98] font-semibold block mb-1">
                    Luxury Wigs & Extensions
                  </span>
                  <p className="text-xs font-medium text-[#28252A]">
                    Highest Quality Assured • 100% Virgin Human Hair & Custom Wigs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl sm:text-2xl font-light text-[#28252A] mb-3">
            Not sure which service suits your needs?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto mb-6">
            Our specialists are always on hand to advise on suitable hair textures, spa sessions, or
            grooming appointments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
          >
            Get in Touch With Us
          </Link>
        </div>
      </section>
    </div>
  );
};
