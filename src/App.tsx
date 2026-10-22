import React, { useEffect } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  useEffect(() => {
    // Dynamic SEO Titles per page
    const titles: Record<string, string> = {
      '/': 'Hairgoddess Beauty Home | Your Beauty. Your Confidence. Your Goddess Moment.',
      '/about': 'About Us | Hairgoddess Beauty Home',
      '/services': 'Services & Spa Offerings | Hairgoddess Beauty Home',
      '/gallery': 'Studio Gallery & Hair Artistry | Hairgoddess Beauty Home',
      '/contact': 'Contact & Bookings | Hairgoddess Beauty Home',
    };

    document.title = titles[currentPath] || 'Hairgoddess Beauty Home';
  }, [currentPath]);

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/services':
        return <ServicesPage />;
      case '/gallery':
        return <GalleryPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#28252A] font-sans">
      <Navbar />
      <main className="flex-1">{renderCurrentPage()}</main>
      <Footer />
      {/* Mandatory Floating WhatsApp button - stays fixed and visible on every page */}
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
