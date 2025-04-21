// Product type definitions for Sanity integration
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
  size?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface NewsItem {
  id: string | number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

export interface SpecialtyItem {
  id: string | number;
  name: string;
  description: string;
  image: string;
  menuCategory: string;
  menuItemId: string;
}