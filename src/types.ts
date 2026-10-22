export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  iconName?: string;
  imageUrl: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
