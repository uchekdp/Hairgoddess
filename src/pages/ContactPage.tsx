import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants/brand';
import { ContactFormData } from '../types';
import { GoogleMapView } from '../components/GoogleMapView';
import {
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Sparkles,
  Instagram,
  Facebook,
  Navigation,
} from 'lucide-react';

const SERVICE_OPTIONS = [
  'General Enquiry',
  'Spa & Relaxation',
  'Barber Shop Grooming',
  'Manicure Care',
  'Pedicure & Foot Care',
  'Beauty Salon & Styling',
  'Hair Sales & Custom Wigs',
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'General Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Parse service from URL query if present (e.g., /contact?service=Spa)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    if (serviceParam) {
      const match = SERVICE_OPTIONS.find((opt) =>
        opt.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your contact phone number.';
    } else if (!/^[0-9+()\s-]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number (e.g. +234 803 569 3291).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please let us know how we can assist you.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Your message should be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmittedSuccess(
          data.message ||
            'Thank you for contacting Hairgoddess Beauty Home. We have received your message and will reach out promptly!'
        );
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: 'General Enquiry',
          message: '',
        });
      } else {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Server error processing your enquiry. Please try again.');
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unable to submit your message at this time.';
      setServerError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // WhatsApp quick bridge with prefilled data
  const getCustomWhatsAppUrl = () => {
    const text = `Hello Hairgoddess Beauty Home, my name is ${formData.name || '[Client]'}. I am inquiring about ${formData.service}. My message: ${formData.message || 'I would like to book a session.'}`;
    return `https://wa.me/2348035693291?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-[#FAF8F5] border-b border-[#F8DCE7] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-light text-[#28252A] tracking-tight mb-4">
            Contact Hairgoddess
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            We are here to assist with booking appointments, hair consultations, or any service
            inquiries. Reach us via our contact form or directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Editable Fields */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#245C45] block mb-2">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl font-light text-[#28252A] tracking-tight mb-4">
                  Visit or Connect
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  Our team ensures your booking experience is seamless and attentive. Contact us
                  during operational hours or leave a detailed message anytime.
                </p>
              </div>

              {/* Verified Contact Details Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DCE8DE] flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white shadow-2xs text-[#245C45] shrink-0">
                    <Phone className="w-5 h-5 text-[#245C45]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                      Phone & WhatsApp
                    </h4>
                    <p className="text-sm font-medium text-[#28252A] mt-0.5">
                      {CONTACT_INFO.phoneDisplay}
                    </p>
                    <a
                      href={CONTACT_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-xs text-[#245C45] hover:text-[#D96C98] font-medium mt-1"
                    >
                      Open direct WhatsApp chat →
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DCE8DE] flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white shadow-2xs text-[#245C45] shrink-0">
                    <Clock className="w-5 h-5 text-[#245C45]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                      Opening Hours
                    </h4>
                    <p className="text-sm text-[#28252A] mt-0.5 font-medium">
                      Monday – Saturday: 9:00 AM – 7:00 PM
                    </p>
                    <p className="text-xs text-gray-500">Sunday: By Special Appointment</p>
                    <span className="text-[10px] text-gray-400 block mt-1">
                      (Hours editable upon business owner update)
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DCE8DE] flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white shadow-2xs text-[#245C45] shrink-0">
                    <MapPin className="w-5 h-5 text-[#245C45]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B]">
                      Studio Address
                    </h4>
                    <p className="text-sm text-[#28252A] mt-0.5 font-medium leading-snug">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Landmark: Off Hostel Bus Stop, Ikotun, Lagos.
                    </p>
                    <a
                      href="#location-map"
                      className="inline-flex items-center gap-1.5 text-xs text-[#245C45] hover:text-[#D96C98] font-medium mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#D96C98]" />
                      <span>View on Interactive Map ↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media & Verified Profiles - Only Icons */}
              <div className="p-6 rounded-2xl bg-[#F8DCE7]/50 border border-[#F8DCE7] space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D96C98] block">
                  Follow Hairgoddess
                </span>
                <p className="text-xs text-gray-600">
                  Connect with us on our verified social profiles:
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hairgoddess on Instagram"
                    className="w-11 h-11 rounded-full bg-white text-[#28252A] hover:text-[#D96C98] hover:shadow-md border border-[#F8DCE7] flex items-center justify-center transition-all group"
                  >
                    <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    href={CONTACT_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Hairgoddess on Facebook"
                    className="w-11 h-11 rounded-full bg-white text-[#28252A] hover:text-[#D96C98] hover:shadow-md border border-[#F8DCE7] flex items-center justify-center transition-all group"
                  >
                    <Facebook className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Real Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DCE8DE] shadow-sm relative">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B] block mb-2">
                  Send an Enquiry
                </span>
                <h3 className="text-2xl font-light text-[#28252A] tracking-tight mb-2">
                  How Can We Help You?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-8 font-normal">
                  Fill in your details below and our team will get back to you with pricing,
                  availability, and consultation details.
                </p>

                {/* Success Message Banner */}
                {submittedSuccess && (
                  <div
                    role="alert"
                    className="mb-8 p-5 rounded-2xl bg-[#DCE8DE] border border-[#245C45]/20 text-[#245C45] animate-in fade-in"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold">Enquiry Received!</h4>
                        <p className="text-xs sm:text-sm mt-1 text-gray-700 leading-relaxed">
                          {submittedSuccess}
                        </p>
                        <div className="mt-3">
                          <button
                            type="button"
                            onClick={() => setSubmittedSuccess(null)}
                            className="text-xs font-semibold underline hover:text-[#1a4433]"
                          >
                            Send another enquiry
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Server Error Banner */}
                {serverError && (
                  <div
                    role="alert"
                    className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium">{serverError}</p>
                      <p className="text-xs text-red-600 mt-1">
                        You can also contact us immediately on WhatsApp at {CONTACT_INFO.phoneDisplay}.
                      </p>
                    </div>
                  </div>
                )}

                {/* The Form */}
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Adeola Johnson"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28252A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#DCE8DE] bg-white'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500 mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone & Email side by side on desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="e.g. +234 803 569 3291"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28252A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#DCE8DE] bg-white'
                        }`}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-500 mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. adeola@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28252A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#DCE8DE] bg-white'
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      Subject / Service of Interest
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DCE8DE] bg-white text-sm text-[#28252A] focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      Message / Booking Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Please tell us about your preferred style, desired appointment dates, or questions about our hair bundles..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#28252A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] transition-colors ${
                        errors.message
                          ? 'border-red-400 bg-red-50/20'
                          : 'border-[#DCE8DE] bg-white'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Fast WhatsApp bridge */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#C6A15B]"
                    >
                      {isSubmitting ? (
                        <span>Submitting Enquiry...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getCustomWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium text-[#245C45] hover:bg-[#DCE8DE]/40 transition-colors border border-[#245C45]/30"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#245C45]" />
                      <span>Send Via WhatsApp</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Maps Location Section */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-[#F8DCE7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block py-1 px-4 rounded-full bg-[#F8DCE7] text-[#D96C98] text-xs font-semibold uppercase tracking-[0.25em] mb-3 shadow-2xs">
              Interactive Map & Navigation
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#28252A] tracking-tight mb-2">
              Find Hairgoddess Unisex Salon
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Easily navigate to our salon at 4 Authority Avenue, Hostel Bus Stop, Ikotun, Lagos.
            </p>
          </div>

          <GoogleMapView />
        </div>
      </section>
    </div>
  );
};
