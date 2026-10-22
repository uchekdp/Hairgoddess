import React, { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { CONTACT_INFO } from '../constants/brand';
import { MapPin, Navigation, ExternalLink, Copy, Check, Sparkles } from 'lucide-react';

interface GoogleMapViewProps {
  className?: string;
}

export const GoogleMapView: React.FC<GoogleMapViewProps> = ({ className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [infoWindowOpen, setInfoWindowOpen] = useState(true);

  // Retrieve API Key from Vite env or fallback
  const apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) || '';

  const position = CONTACT_INFO.coordinates;
  const address = CONTACT_INFO.address;

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    address
  )}`;
  const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div id="location-map" className={`space-y-6 ${className}`}>
      {/* Location Details & Actions Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F8DCE7] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#F8DCE7] text-[#D96C98]">
              <MapPin className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D96C98]">
              Salon Location
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-light text-[#28252A] tracking-tight">
            Hairgoddess Unisex Salon
          </h3>
          <p className="text-sm sm:text-base text-gray-700 font-medium">
            {address}
          </p>
          <p className="text-xs text-gray-500">
            Landmark: Located off Hostel Bus Stop, Ikotun axis, Lagos State.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium border border-[#F8DCE7] bg-white text-[#28252A] hover:bg-[#FAF8F5] hover:border-[#D96C98] transition-all shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-600" />
                <span className="text-green-600 font-semibold">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-gray-500" />
                <span>Copy Address</span>
              </>
            )}
          </button>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-sm hover:shadow-md"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>

          <a
            href={searchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium bg-[#F8DCE7] text-[#D96C98] hover:bg-[#D96C98] hover:text-white transition-all shadow-2xs"
            title="Open in Google Maps App"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Google Maps</span>
          </a>
        </div>
      </div>

      {/* Interactive Google Map */}
      <div className="relative rounded-3xl overflow-hidden border border-[#F8DCE7] shadow-md bg-[#FAF8F5] min-h-[420px] h-[480px]">
        {apiKey ? (
          <APIProvider apiKey={apiKey} libraries={['marker']}>
            <Map
              mapId="DEMO_MAP_ID"
              defaultCenter={position}
              defaultZoom={16}
              gestureHandling="cooperative"
              disableDefaultUI={false}
              className="w-full h-full"
              internalUsageAttributionIds={['gmp_git_agentskills_v1']}
            >
              <AdvancedMarker
                position={position}
                onClick={() => setInfoWindowOpen(true)}
                title="Hairgoddess Unisex Salon"
              >
                <Pin
                  background="#D96C98"
                  borderColor="#FFFFFF"
                  glyphColor="#FFFFFF"
                  scale={1.25}
                />
              </AdvancedMarker>

              {infoWindowOpen && (
                <InfoWindow
                  position={position}
                  onCloseClick={() => setInfoWindowOpen(false)}
                >
                  <div className="p-2 max-w-xs text-[#28252A] space-y-2">
                    <div className="flex items-center gap-1.5 text-[#D96C98] font-semibold text-xs uppercase tracking-wider">
                      <Sparkles className="w-3 h-3" />
                      <span>Hairgoddess Unisex Salon</span>
                    </div>
                    <p className="text-xs font-medium text-gray-800 leading-snug">
                      4 Authority Avenue, Hostel Bus Stop, Ikotun, Lagos, Nigeria
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Open Mon–Sat: 9am – 7pm
                    </p>
                    <div className="pt-1.5 flex gap-2">
                      <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[11px] font-semibold text-white bg-[#245C45] px-3 py-1 rounded-full hover:bg-[#1a4433] transition-colors"
                      >
                        Directions →
                      </a>
                      <a
                        href={CONTACT_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[11px] font-semibold text-[#245C45] bg-[#F8DCE7] px-3 py-1 rounded-full hover:bg-[#D96C98] hover:text-white transition-colors"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center space-y-4">
            <MapPin className="w-12 h-12 text-[#D96C98] animate-bounce" />
            <h4 className="text-lg font-semibold text-[#28252A]">
              Hairgoddess Unisex Salon
            </h4>
            <p className="text-sm text-gray-600 max-w-md">
              4 Authority Avenue, Hostel Bus Stop, Ikotun, Lagos, Nigeria
            </p>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#245C45] text-white hover:bg-[#1a4433] transition-all shadow-md"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
