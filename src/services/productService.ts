import { client } from './sanityClient';
import { MenuCategory, MenuItem, NewsItem, SpecialtyItem } from '../types/products';
import { menuCategories, newsItems, specialties } from '../data/menuData';

// Check if Sanity client is properly configured
const isSanityConfigured = (): boolean => {
  try {
    const projectId = client.config().projectId;
    return projectId !== undefined && projectId !== '' && projectId !== 'your-project-id';
  } catch (e) {
    return false;
  }
};

// Fetch all menu categories with their items
export const fetchMenuCategories = async (): Promise<MenuCategory[]> => {
  // Use static data if Sanity is not configured yet
  if (!isSanityConfigured()) {
    console.log('Using static menu data (Sanity not configured)');
    return menuCategories;
  }
  
  try {
    const query = `*[_type == "category"] {
      name,
      "items": *[_type == "product" && references(^._id)] {
        "id": _id,
        name,
        description,
        price,
        "image": image.asset->url,
        size,
        category
      }
    }`;
    
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching from Sanity, using fallback data', error);
    return menuCategories;
  }
};

// Fetch news items
export const fetchNewsItems = async (): Promise<NewsItem[]> => {
  // Use static data if Sanity is not configured yet
  if (!isSanityConfigured()) {
    console.log('Using static news data (Sanity not configured)');
    return newsItems;
  }
  
  try {
    const query = `*[_type == "newsItem"] | order(date desc) {
      "id": _id,
      title,
      description,
      date,
      "image": image.asset->url,
      link
    }`;
    
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching from Sanity, using fallback data', error);
    return newsItems;
  }
};

// Fetch specialty items for homepage
export const fetchSpecialtyItems = async (): Promise<SpecialtyItem[]> => {
  // Use static data if Sanity is not configured yet
  if (!isSanityConfigured()) {
    console.log('Using static specialties data (Sanity not configured)');
    return specialties;
  }
  
  try {
    const query = `*[_type == "specialtyItem"] {
      "id": _id,
      name,
      description,
      "image": image.asset->url,
      menuCategory,
      menuItemId
    }`;
    
    return await client.fetch(query);
  } catch (error) {
    console.error('Error fetching from Sanity, using fallback data', error);
    return specialties;
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: string): Promise<MenuItem | null> => {
  // Use static data if Sanity is not configured yet
  if (!isSanityConfigured()) {
    console.log('Using static product data (Sanity not configured)');
    // Search through all categories for the item with matching id
    for (const category of menuCategories) {
      const item = category.items.find(item => item.id === id);
      if (item) return item;
    }
    return null;
  }
  
  try {
    const query = `*[_type == "product" && _id == $id][0]{
      "id": _id,
      name,
      description,
      price,
      "image": image.asset->url,
      size,
      category
    }`;
    
    return await client.fetch(query, { id });
  } catch (error) {
    console.error('Error fetching from Sanity, using fallback data', error);
    // Fallback to static data
    for (const category of menuCategories) {
      const item = category.items.find(item => item.id === id);
      if (item) return item;
    }
    return null;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (categoryName: string): Promise<MenuItem[]> => {
  // Use static data if Sanity is not configured yet
  if (!isSanityConfigured()) {
    console.log('Using static category data (Sanity not configured)');
    const category = menuCategories.find(cat => cat.name === categoryName);
    return category ? category.items : [];
  }
  
  try {
    const query = `*[_type == "product" && category->name == $categoryName] {
      "id": _id,
      name,
      description,
      price,
      "image": image.asset->url,
      size,
      "category": category->name
    }`;
    
    return await client.fetch(query, { categoryName });
  } catch (error) {
    console.error('Error fetching from Sanity, using fallback data', error);
    // Fallback to static data
    const category = menuCategories.find(cat => cat.name === categoryName);
    return category ? category.items : [];
  }
};