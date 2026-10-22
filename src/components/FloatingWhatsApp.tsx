import React from 'react';
import { CONTACT_INFO } from '../constants/brand';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={CONTACT_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hairgoddess on WhatsApp"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 focus:ring-offset-2 focus:ring-offset-white group"
      style={{
        // Safe-area inset for mobile devices
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {/* Official WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 sm:w-9 sm:h-9 fill-current transition-transform duration-200 group-hover:scale-105"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12.031 2C6.496 2 2 6.494 2 12.029c0 1.942.555 3.756 1.517 5.29L2.06 22.06l4.898-1.424A9.98 9.98 0 0012.031 22c5.536 0 10.031-4.494 10.031-10.029C22.062 6.494 17.567 2 12.031 2zm0 18.286c-1.636 0-3.155-.472-4.444-1.288l-.319-.2-2.92.85.87-2.82-.208-.332a8.232 8.232 0 01-1.267-4.467c0-4.57 3.717-8.286 8.288-8.286 4.57 0 8.287 3.716 8.287 8.286 0 4.57-3.717 8.287-8.287 8.287zm4.54-6.208c-.248-.124-1.47-.725-1.698-.808-.228-.083-.394-.124-.56.124-.166.248-.642.808-.787.974-.145.166-.29.187-.539.062-.248-.124-1.047-.386-1.996-1.231-.738-.658-1.237-1.47-1.382-1.719-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.249-.414.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.849-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.85-.871 2.074 0 1.224.892 2.406 1.016 2.572.124.166 1.755 2.68 4.252 3.758.594.256 1.058.41 1.42.525.597.19 1.14.163 1.57.099.479-.071 1.47-.601 1.678-1.182.207-.58.207-1.078.145-1.182-.062-.104-.228-.166-.477-.29z" />
      </svg>
      {/* Visual pulse ring for subtle elegance */}
      <span className="sr-only">Chat with Hairgoddess on WhatsApp</span>
    </a>
  );
};
