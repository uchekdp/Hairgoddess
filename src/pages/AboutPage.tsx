import React from 'react';
import { Link } from '../context/RouterContext';
import { IMAGES } from '../constants/brand';
import { Sparkles, Heart, ShieldCheck, Gem, ArrowRight, Quote, MapPin, Activity, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#F8DCE7] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-3">
            Our Identity & Purpose
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-[#28252A] tracking-tight mb-4">
            Hairgoddess Unisex Salon
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            A sanctuary dedicated to personal refinement, timeless style, and attentive wellness.
          </p>
        </div>
      </section>

      {/* Main Narrative & Our Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual with authentic supplied image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#DCE8DE] aspect-[4/5] bg-gray-100">
                <img
                  src={IMAGES.gallery3}
                  alt="Hairgoddess Unisex Salon Studio Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#F8DCE7] text-[#28252A] p-6 rounded-2xl border border-white shadow-lg max-w-xs">
                <p className="text-xs uppercase tracking-widest text-[#245C45] font-semibold mb-1">
                  Hairgoddess Philosophy
                </p>
                <p className="text-xs font-medium italic text-gray-800">
                  “Every appointment is an opportunity to honor your personal grace and confidence.”
                </p>
              </div>
            </div>

            {/* Narrative */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#245C45] block mb-2">
                  The Journey
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#28252A] tracking-tight mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  <p>
                    Hairgoddess Unisex Salon was created to be more than a conventional salon. It was
                    envisioned as a comprehensive haven where clients can experience elevated
                    grooming, rejuvenating spa care, expert hair styling, and access to the finest
                    human hair extensions under one welcoming roof.
                  </p>
                  <p>
                    Founded on a deep respect for individual expression and meticulous
                    craftsmanship, our studio is structured to give every guest an unhurried,
                    tailored experience. Whether you are coming in for an executive barbering
                    session, preparing your natural hair for custom styling, or unwinding with a
                    restorative pedicure, we attend to every detail with warmth and professionalism.
                  </p>
                  {/* Founder Intro Badge */}
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#F8DCE7] text-xs text-gray-700 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#28252A] block text-xs">
                        Founded by Faith — Physiotherapist by Training
                      </span>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Founder & CEO of Hairgoddess Unisex Salon, Lagos
                      </p>
                    </div>
                    <a
                      href="#founder"
                      className="px-3.5 py-1.5 rounded-full bg-[#F8DCE7] text-[#D96C98] font-semibold text-[11px] hover:bg-[#D96C98] hover:text-white transition-colors shrink-0 ml-3"
                    >
                      Read Her Message ↓
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#245C45] block mb-2">
                  Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-[#28252A] tracking-tight mb-3">
                  Our Approach to Beauty
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                  We believe that true beauty stems from comfort, health, and personalized care.
                  Rather than imposing fleeting trends, we take time to consult with each client,
                  understanding hair textures, skin sensitivities, and lifestyle requirements. We
                  select quality hair care products, sanitize tools to hospital-grade standards, and
                  treat your crowning glory with gentle, deliberate mastery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE FOUNDER AND CEO SECTION */}
      <section id="founder" className="py-20 sm:py-24 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-y border-[#F8DCE7] scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block py-1 px-4 rounded-full bg-[#F8DCE7] text-[#D96C98] text-xs font-semibold uppercase tracking-[0.25em] mb-3 shadow-2xs">
              Leadership & Brand Vision
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#28252A] tracking-tight mb-3">
              Meet Our Founder & CEO
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              The woman behind the brand, shaping beauty through wellness, clinical care, and empowering confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Card: Executive Profile */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#F8DCE7] shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F8DCE7] to-transparent rounded-bl-full pointer-events-none" />

                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-6 bg-gray-100 border border-[#F8DCE7] shadow-sm group">
                  <img
                    src={IMAGES.founder}
                    alt="Faith, Founder and CEO of Hairgoddess Unisex Salon"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#F8DCE7] shadow-sm">
                    <span className="text-[10px] uppercase tracking-wider text-[#D96C98] font-semibold block mb-0.5">
                      Founder & CEO
                    </span>
                    <h3 className="text-lg font-semibold text-[#28252A]">
                      Faith
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      Hairgoddess Unisex Salon
                    </p>
                  </div>
                </div>

                {/* Key Qualifications & Identity */}
                <div className="space-y-3 pt-1 text-xs text-gray-700">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-gray-100">
                    <Activity className="w-4 h-4 text-[#245C45] shrink-0" />
                    <span><strong>Physiotherapist by training</strong> — shaping holistic body wellness</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-gray-100">
                    <MapPin className="w-4 h-4 text-[#D96C98] shrink-0" />
                    <span><strong>Based in Lagos, Nigeria</strong> — direct factory raw hair sourcing</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-gray-100">
                    <Sparkles className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span><strong>Comprehensive Vision</strong> — hair sales, salon, barbering & spa</span>
                  </div>
                </div>

                {/* Direct Quote Box */}
                <div className="mt-6 p-4 rounded-2xl bg-[#F8DCE7]/40 border border-[#F8DCE7] relative">
                  <Quote className="w-5 h-5 text-[#D96C98] mb-1 opacity-70" />
                  <p className="text-xs font-serif italic text-gray-800 leading-relaxed">
                    “Beauty is not just about appearance. It is about self-expression, confidence, and taking time to care for yourself.”
                  </p>
                  <span className="block text-[11px] font-semibold text-[#28252A] mt-2">
                    — Faith, Founder & CEO
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Faith's Message in Her Own Authentic Words */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#DCE8DE] shadow-sm space-y-5">
                <div className="border-b border-gray-100 pb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] block mb-1">
                    Official Message
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-[#28252A] tracking-tight">
                    For those who are just joining the Hairgoddess family:
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    My name is <strong>Faith, Founder and CEO of Hairgoddess Unisex Salon</strong>, and I am a physiotherapist by training with a passion for beauty, personal care, and helping people feel confident in themselves.
                  </p>
                  <p>
                    My background in physiotherapy has shaped the way I see personal care. I understand that well-being goes beyond what people see on the outside. It also involves how we feel about ourselves, how we care for our bodies, and the confidence we carry into our everyday lives. This belief is part of the vision that inspired Hairgoddess.
                  </p>
                  <p>
                    Based in Lagos, Hairgoddess specialises in premium raw hair, closures, and ready-to-wear wigs. We source our hair directly from top factories, with a commitment to quality, natural shine, effortless blending, and minimal shedding.
                  </p>
                  
                  <div className="p-5 rounded-2xl bg-[#FAF8F5] border-l-4 border-[#245C45] text-gray-800 space-y-2">
                    <p className="font-medium italic text-sm">
                      “But my vision for Hairgoddess goes beyond selling beautiful hair.”
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      I am building a beauty destination where people can enjoy quality hair products, professional salon services, barbering, spa treatments, manicure, pedicure, and other beauty services in one welcoming space.
                    </p>
                  </div>

                  <p>
                    For me, beauty is not just about appearance. It is about self-expression, confidence, and taking time to care for yourself. I want every customer who chooses Hairgoddess to feel valued, comfortable, and confident in their own beauty.
                  </p>
                  <p>
                    As we continue to grow, our commitment remains the same: to provide quality products, professional services, and an experience that makes every visit worthwhile.
                  </p>
                  <p>
                    To everyone who has supported us, recommended our products, patronised our business, or recently discovered our brand, thank you for being part of this story. Your support means a great deal to us.
                  </p>
                  <p className="font-medium text-[#245C45]">
                    And if you are just joining the Hairgoddess family, you are warmly welcome. There is so much more we look forward to sharing with you.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F8DCE7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-transcity text-xl sm:text-2xl tracking-wider text-[#28252A]">
                      HAIRGODDESS UNISEX SALON
                    </h4>
                    <p className="text-xs font-serif italic text-[#D96C98] mt-0.5">
                      Your Beauty. Your Confidence. Your Goddess Moment. ❤️
                    </p>
                  </div>
                  <a
                    href="https://wa.me/2348035693291?text=Hello%20Faith%2C%20I%20would%20like%20to%20connect%20with%20Hairgoddess%20Unisex%20Salon."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-colors shadow-sm shrink-0"
                  >
                    <span>Connect with Faith</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#FAF8F5] border-y border-[#F8DCE7]/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-2">
              Principles We Live By
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#28252A] tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. Pristine Hygiene & Safety */}
            <div className="bg-white p-5 rounded-2xl border border-[#F8DCE7] shadow-sm hover:shadow-md hover:border-[#D96C98]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-gray-100 border border-[#F8DCE7] shadow-2xs">
                  <img
                    src={IMAGES.valuesHygiene}
                    alt="Pristine Hygiene & Safety at Hairgoddess Unisex Salon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 p-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-[#245C45] shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-[#245C45]" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-[#28252A] group-hover:text-[#D96C98] transition-colors mb-2">
                  Pristine Hygiene & Safety
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Cleanliness is non-negotiable. We maintain rigorous sanitization protocols for all
                  stations, styling shears, and treatment basins.
                </p>
              </div>
            </div>

            {/* 2. Attentive Individual Care */}
            <div className="bg-white p-5 rounded-2xl border border-[#F8DCE7] shadow-sm hover:shadow-md hover:border-[#D96C98]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-gray-100 border border-[#F8DCE7] shadow-2xs">
                  <img
                    src={IMAGES.valuesCare}
                    alt="Attentive Individual Care at Hairgoddess Unisex Salon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 p-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-[#D96C98] shadow-xs">
                    <Heart className="w-4 h-4 text-[#D96C98]" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-[#28252A] group-hover:text-[#D96C98] transition-colors mb-2">
                  Attentive Individual Care
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We listen attentively to your wishes, ensuring that every session is comfortable,
                  unhurried, and customized to your expectations.
                </p>
              </div>
            </div>

            {/* 3. Premium Product Sourcing */}
            <div className="bg-white p-5 rounded-2xl border border-[#F8DCE7] shadow-sm hover:shadow-md hover:border-[#D96C98]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-gray-100 border border-[#F8DCE7] shadow-2xs">
                  <img
                    src={IMAGES.valuesSourcing}
                    alt="Premium Product Sourcing at Hairgoddess Unisex Salon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 p-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-[#C6A15B] shadow-xs">
                    <Gem className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-[#28252A] group-hover:text-[#D96C98] transition-colors mb-2">
                  Premium Product Sourcing
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  From our 100% human hair bundles to nourishing skin lotions, we only choose
                  reputable, high-grade beauty materials.
                </p>
              </div>
            </div>

            {/* 4. Empowering Confidence */}
            <div className="bg-white p-5 rounded-2xl border border-[#F8DCE7] shadow-sm hover:shadow-md hover:border-[#D96C98]/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-4 bg-gray-100 border border-[#F8DCE7] shadow-2xs">
                  <img
                    src={IMAGES.valuesConfidence}
                    alt="Empowering Confidence at Hairgoddess Unisex Salon"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 p-1.5 rounded-lg bg-white/90 backdrop-blur-xs text-[#245C45] shadow-xs">
                    <Sparkles className="w-4 h-4 text-[#245C45]" />
                  </div>
                </div>
                <h4 className="text-base font-semibold text-[#28252A] group-hover:text-[#D96C98] transition-colors mb-2">
                  Empowering Confidence
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our ultimate satisfaction comes when you walk out feeling recharged, radiant, and
                  ready to conquer your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link & Closing Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-3">
            Explore Further
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#28252A] tracking-tight mb-4">
            Ready to Experience Hairgoddess?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
            Discover our complete list of salon, spa, barbering, and hair offerings, or reach out
            directly to schedule your consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#245C45] text-[#245C45] hover:bg-[#DCE8DE]/40 transition-all focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
            >
              Contact Hairgoddess
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
