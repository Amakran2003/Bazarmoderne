import { useState, useEffect } from 'react';
import { MenuCategory, MenuItem, NewsItem, SpecialtyItem } from '../types/products';
import { 
  fetchMenuCategories, 
  fetchNewsItems, 
  fetchSpecialtyItems, 
  fetchProductById 
} from '../services/productService';

// Hook for fetching all menu categories
export function useMenuCategories() {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoading(true);
        const data = await fetchMenuCategories();
        setCategories(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch menu categories'));
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return { categories, loading, error };
}

// Hook for fetching news items
export function useNewsItems() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadNewsItems() {
      try {
        setLoading(true);
        const data = await fetchNewsItems();
        setNewsItems(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch news items'));
      } finally {
        setLoading(false);
      }
    }

    loadNewsItems();
  }, []);

  return { newsItems, loading, error };
}

// Hook for fetching specialty items
export function useSpecialtyItems() {
  const [specialties, setSpecialties] = useState<SpecialtyItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadSpecialties() {
      try {
        setLoading(true);
        const data = await fetchSpecialtyItems();
        setSpecialties(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch specialty items'));
      } finally {
        setLoading(false);
      }
    }

    loadSpecialties();
  }, []);

  return { specialties, loading, error };
}

// Hook for fetching a single product by ID
export function useProduct(id: string | null) {
  const [product, setProduct] = useState<MenuItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadProduct() {
      try {
        setLoading(true);
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(`Failed to fetch product with ID ${id}`));
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  return { product, loading, error };
}