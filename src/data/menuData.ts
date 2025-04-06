// Define interfaces for menu data structures
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
  size?: string; // Added size field
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

export interface SpecialtyItem {
  id: number;
  name: string;
  description: string;
  image: string;
  menuCategory: string;
  menuItemId: string;
}

// Menu categories and items
export const menuCategories: MenuCategory[] = [
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
  },
  {
    name: 'Parfums',
    items: [
      { 
        id: 'parfum-sakura', 
        name: 'Parfum Sakura Dreams', 
        description: 'Parfum inspiré des jardins japonais. Notes de fleur de cerisier, jasmin et bois de santal.', 
        price: '39,90€', 
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'parfum-ocean', 
        name: 'Parfum Ocean Breeze', 
        description: 'Fragrance fraîche et marine. Mélange de notes aquatiques, agrumes et ambre gris.', 
        price: '34,90€', 
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'parfum-midnight', 
        name: 'Parfum Midnight Lotus', 
        description: 'Parfum oriental mystérieux. Notes de lotus, vanille noire et patchouli.', 
        price: '42,90€', 
        image: 'https://images.unsplash.com/photo-1588405765997-0ac17849a0f5?auto=format&fit=crop&w=800&q=80' 
      }
    ]
  },
  {
    name: 'Glaces',
    items: [
      { 
        id: 'glace-matcha', 
        name: 'Glace Matcha Japonaise', 
        description: 'Crème glacée au thé vert matcha premium. Texture crémeuse et goût authentique.', 
        price: '6,50€', 
        image: 'https://images.unsplash.com/photo-1561845730-208ad5910553?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'mochi-glace', 
        name: 'Mochi Glacé Assortiment', 
        description: 'Boules de glace enrobées de pâte de riz. Assortiment de saveurs : mangue, fraise et chocolat.', 
        price: '8,90€', 
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80' 
      },
      { 
        id: 'taiyaki-glace', 
        name: 'Taiyaki Glacé', 
        description: 'Gaufre japonaise en forme de poisson fourrée de glace vanille et garnie de fruits rouges.', 
        price: '7,50€', 
        image: 'https://images.unsplash.com/photo-1563805034758-0a2f585d2c9f?auto=format&fit=crop&w=800&q=80' 
      }
    ]
  }
];

// News items for the home page
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nouveaux parfums exotiques en boutique !",
    description: "Découvrez notre nouvelle collection de parfums importés directement d'Asie avec des fragrances introuvables en France.",
    date: "15 octobre 2025",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    link: "/menu?category=Parfums&item=parfum-sakura" 
  }
];

// Specialty items for the home page
export const specialties: SpecialtyItem[] = [
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
    menuCategory: "Chicha",
    menuItemId: "jnr-puff"
  },
  {
    id: 4,
    name: "Parfum Sakura Dreams",
    description: "Parfum inspiré des jardins japonais",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
    menuCategory: "Parfums", 
    menuItemId: "parfum-sakura"
  },
  {
    id: 5,
    name: "Mochi Glacé Assortiment",
    description: "Boules de glace enrobées de pâte de riz",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
    menuCategory: "Glaces",
    menuItemId: "mochi-glace"
  }
];
