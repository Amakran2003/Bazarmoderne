/**
 * Import script for migrating data from menuData.ts to Sanity
 * 
 * Run this with: npx ts-node scripts/importData.ts
 */
import {createClient} from '@sanity/client'

// Define the interfaces needed for data types
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
  size?: string;
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

interface SpecialtyItem {
  id: number;
  name: string;
  description: string;
  image: string;
  menuCategory: string;
  menuItemId: string;
}

// Menu data copied from menuData.ts
const menuCategories: MenuCategory[] = [
  {
    name: 'Boissons',
    items: [
      { 
        id: 'redbull-orange', 
        name: 'Red Bull Orange Edition', 
        description: 'Édition limitée saveur orange directement importée du Japon. Goût intense et énergisant avec des notes d\'agrumes exotiques.',
        size: '250ml',
        price: '4,90€', 
        image: 'https://sweetandsoda.fr/uploads/media/OUd9yMQIFFzzHhqyve2M2TV3PmZwCbQzLfwNzwK9.png' 
      },
      { 
        id: 'redbull-peche', 
        name: 'Red Bull Pêche Blanche', 
        description: 'Édition été 2025 avec une saveur délicate de pêche blanche. Fraîcheur incomparable et goût authentique, importée en exclusivité.',
        size: '250ml',
        price: '4,90€', 
        image: 'https://epicerie-saintbrieuc.fr/wp-content/uploads/2025/02/redbull-peche-blanche-edition-summer-2025.png' 
      },
      { 
        id: 'fanta-pomme', 
        name: 'Fanta Pomme Japonais', 
        description: 'Rare boisson gazeuse à la pomme verte japonaise. Saveur fruitée et rafraîchissante introuvable dans les circuits de distribution classiques.',
        size: '500ml',
        price: '3,90€', 
        image: 'https://osweetz.com/cdn/shop/files/Fanta_Asie_Apple_27f28a3d-c747-40ad-a9aa-72b5b56aa1a9.png?v=1733768220' 
      }
    ]
  },
  {
    name: 'Snacks',
    items: [
      { 
        id: 'snickers-berry', 
        name: 'Snickers Berry Whip', 
        description: 'Édition limitée Snickers aux fruits rouges et crème fouettée. Mélange unique de chocolat, caramel et notes fruitées.', 
        price: '3,50€', 
        image: 'https://m.media-amazon.com/images/I/61zmbq+6oRL._AC_UF1000,1000_QL80_.jpg' 
      },
      { 
        id: 'snickers-almond', 
        name: 'Snickers Almond', 
        description: 'Version exclusive avec des amandes entières remplaçant les cacahuètes classiques. Texture croquante et saveur premium.', 
        price: '3,90€', 
        image: 'https://www.myamericanshop.com/cdn/shop/files/snickers-almond-small-8902433000232-50355632013643.png?v=1704732904' 
      },
      { 
        id: 'kitkat-fraise', 
        name: 'KitKat Fraise Japon', 
        description: 'KitKat à la fraise authentique du Japon. Gaufrettes croustillantes enrobées de chocolat blanc et fraise de qualité supérieure.', 
        price: '5,50€', 
        image: 'https://www.asiamarche.fr/cdn/shop/files/IMG_1070_1024x1024.jpg?v=1715031375' 
      }
    ]
  },
  {
    name: 'Puffs',
    items: [
      { 
        id: 'jnr-puff', 
        name: 'JNR 100 000 Puffs', 
        description: 'Chicha électronique nouvelle génération avec une capacité exceptionnelle de 100 000 bouffées. Design élégant et multiples saveurs disponibles.', 
        price: '49,90€', 
        image: 'https://jnrpuff.fr/wp-content/uploads/2025/02/JNR-Mega-Shisha-Hookah-10000.webp' 
      },
      { 
        id: 'randm-tornado', 
        name: 'Randm Tornado 9000', 
        description: 'Chicha électronique haut de gamme avec technologie Tornado pour une vapeur dense et savoureuse. Batterie longue durée et design ergonomique.', 
        price: '39,90€', 
        image: 'https://limirialogistic.fr/cdn/shop/files/3B4B194A-06DB-4044-A34F-2A25800C72DF.jpg?v=1719592111' 
      }
    ]
  }
];

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nouveaux Red Bull en édition limitée !",
    description: "Découvrez nos nouvelles saveurs de Red Bull importées directement du Japon avec des goûts introuvables en France.",
    date: "15 octobre 2025",
    image: "https://sweetandsoda.fr/uploads/media/OUd9yMQIFFzzHhqyve2M2TV3PmZwCbQzLfwNzwK9.png",
    link: "/menu?category=Boissons&item=redbull-orange" 
  }
];

const specialties: SpecialtyItem[] = [
  {
    id: 1,
    name: "Red Bull Orange Edition",
    description: "Édition limitée saveur orange importée du Japon",
    image: "https://sweetandsoda.fr/uploads/media/OUd9yMQIFFzzHhqyve2M2TV3PmZwCbQzLfwNzwK9.png",
    menuCategory: "Boissons",
    menuItemId: "redbull-orange"
  },
  {
    id: 2,
    name: "Snickers Berry Whip",
    description: "Édition limitée aux fruits rouges et crème fouettée",
    image: "https://m.media-amazon.com/images/I/61zmbq+6oRL._AC_UF1000,1000_QL80_.jpg",
    menuCategory: "Snacks",
    menuItemId: "snickers-berry"
  },
  {
    id: 3,
    name: "JNR 100 000 Puffs",
    description: "Chicha électronique nouvelle génération",
    image: "https://jnrpuff.fr/wp-content/uploads/2025/02/JNR-Mega-Shisha-Hookah-10000.webp",
    menuCategory: "Puffs",
    menuItemId: "jnr-puff"
  },
  {
    id: 4,
    name: "Red Bull Pêche Blanche",
    description: "Édition été 2025 avec saveur de pêche blanche",
    image: "https://epicerie-saintbrieuc.fr/wp-content/uploads/2025/02/redbull-peche-blanche-edition-summer-2025.png",
    menuCategory: "Boissons", 
    menuItemId: "redbull-peche"
  },
  {
    id: 5,
    name: "Fanta Pomme Japonais",
    description: "Rare boisson gazeuse à la pomme verte japonaise",
    image: "https://osweetz.com/cdn/shop/files/Fanta_Asie_Apple_27f28a3d-c747-40ad-a9aa-72b5b56aa1a9.png?v=1733768220",
    menuCategory: "Boissons",
    menuItemId: "fanta-pomme"
  }
];

// Sanity client configuration
const client = createClient({
  projectId: 'o0j2x6nh',
  dataset: 'production',
  apiVersion: '2025-04-21',
  token: 'skBHW4nraORBKaUeAqW87y5dy2ueGI8lJ5JKe0KQaXbpEtSQIaJC1CbfQS4ATRvWpLkFdHSBhEBtkR5iM4V0cJGOEnKQNRTue9hHBLxbyPuQB14ueFaneWnxc1Nrosexk8CvNq8AsWzyZMvyvzCQmtv3Cdiw1zCawLbDOokKkqvQQ7nVkoHt',
  useCdn: false,
})

// Function to check if the content already exists to avoid duplicates
async function documentExists(id: string, type: string): Promise<boolean> {
  const query = `*[_type == $type && _id == $id][0]`
  const result = await client.fetch(query, {type, id})
  return result !== null
}

// Helper function to create slug from string
function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

// Step 1: Import Categories
async function importCategories() {
  console.log('Importing categories...')
  
  const categoryIds: Record<string, string> = {}
  
  for (const category of menuCategories) {
    const categoryId = `category-${createSlug(category.name)}`
    
    // Check if the category already exists
    const exists = await documentExists(categoryId, 'category')
    if (exists) {
      console.log(`Category "${category.name}" already exists, skipping.`)
      categoryIds[category.name] = categoryId
      continue
    }
    
    try {
      // Create the category document
      const result = await client.create({
        _id: categoryId,
        _type: 'category',
        name: category.name,
      })
      
      console.log(`✅ Category created: ${category.name} (ID: ${result._id})`)
      categoryIds[category.name] = result._id
    } catch (error) {
      console.error(`❌ Failed to create category "${category.name}":`, error)
    }
  }
  
  return categoryIds
}

// Step 2: Import Products
async function importProducts(categoryIds: Record<string, string>) {
  console.log('Importing products...')
  
  for (const category of menuCategories) {
    const categoryId = categoryIds[category.name]
    
    if (!categoryId) {
      console.warn(`Warning: No category ID found for "${category.name}", skipping products.`)
      continue
    }
    
    for (const item of category.items) {
      const productId = `product-${item.id}`
      
      // Check if the product already exists
      const exists = await documentExists(productId, 'product')
      if (exists) {
        console.log(`Product "${item.name}" already exists, skipping.`)
        continue
      }
      
      try {
        // Create the product document
        const result = await client.create({
          _id: productId,
          _type: 'product',
          name: item.name,
          id: {
            _type: 'slug',
            current: item.id,
          },
          description: item.description,
          price: item.price,
          size: item.size || undefined,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: await uploadImageFromUrl(item.image, `product-${item.id}`),
            },
          },
          category: {
            _type: 'reference',
            _ref: categoryId,
          },
        })
        
        console.log(`✅ Product created: ${item.name} (ID: ${result._id})`)
      } catch (error) {
        console.error(`❌ Failed to create product "${item.name}":`, error)
      }
    }
  }
}

// Step 3: Import News Items
async function importNewsItems() {
  console.log('Importing news items...')
  
  for (const news of newsItems) {
    const newsId = `news-${news.id}`
    
    // Check if the news item already exists
    const exists = await documentExists(newsId, 'newsItem')
    if (exists) {
      console.log(`News item "${news.title}" already exists, skipping.`)
      continue
    }
    
    try {
      // Create the news item document
      const result = await client.create({
        _id: newsId,
        _type: 'newsItem',
        title: news.title,
        description: news.description,
        date: news.date,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: await uploadImageFromUrl(news.image, `news-${news.id}`),
          },
        },
        link: news.link,
      })
      
      console.log(`✅ News item created: ${news.title} (ID: ${result._id})`)
    } catch (error) {
      console.error(`❌ Failed to create news item "${news.title}":`, error)
    }
  }
}

// Step 4: Import Specialty Items
async function importSpecialtyItems() {
  console.log('Importing specialty items...')
  
  for (const specialty of specialties) {
    const specialtyId = `specialty-${specialty.id}`
    
    // Check if the specialty item already exists
    const exists = await documentExists(specialtyId, 'specialtyItem')
    if (exists) {
      console.log(`Specialty item "${specialty.name}" already exists, skipping.`)
      continue
    }
    
    try {
      // Create the specialty item document
      const result = await client.create({
        _id: specialtyId,
        _type: 'specialtyItem',
        name: specialty.name,
        description: specialty.description,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: await uploadImageFromUrl(specialty.image, `specialty-${specialty.id}`),
          },
        },
        menuCategory: specialty.menuCategory,
        menuItemId: specialty.menuItemId,
      })
      
      console.log(`✅ Specialty item created: ${specialty.name} (ID: ${result._id})`)
    } catch (error) {
      console.error(`❌ Failed to create specialty item "${specialty.name}":`, error)
    }
  }
}

// Helper function to upload image from URL
async function uploadImageFromUrl(url: string, filename: string): Promise<string> {
  try {
    // Fetch the image
    const imageResponse = await fetch(url)
    const imageBuffer = await imageResponse.arrayBuffer()
    
    // Upload to Sanity
    const result = await client.assets.upload('image', Buffer.from(imageBuffer), {
      filename,
    })
    
    return result._id
  } catch (error) {
    console.error(`Failed to upload image from URL: ${url}`, error)
    throw error
  }
}

// Main function to run the import
async function importData() {
  console.log('Starting data import...')
  
  try {
    // First import categories and get their IDs
    const categoryIds = await importCategories()
    
    // Then import products using the category IDs
    await importProducts(categoryIds)
    
    // Import news items
    await importNewsItems()
    
    // Import specialty items
    await importSpecialtyItems()
    
    console.log('✅ Import completed successfully!')
  } catch (error) {
    console.error('❌ Import failed:', error)
  }
}

// Run the import
importData()