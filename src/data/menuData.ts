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

// Menu categories and items - removed Parfums and Glaces categories
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
  }
  // Parfums and Glaces categories removed
];

// News items for the home page - updated to feature a boisson instead of parfum
export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Nouveaux Red Bull en édition limitée !",
    description: "Découvrez nos nouvelles saveurs de Red Bull importées directement du Japon avec des goûts introuvables en France.",
    date: "15 octobre 2025",
    image: "https://sweetandsoda.fr/uploads/media/OUd9yMQIFFzzHhqyve2M2TV3PmZwCbQzLfwNzwK9.png",
    link: "/menu?category=Boissons&item=redbull-orange" 
  }
];

// Specialty items for the home page - replaced Parfums and Glaces with additional Boissons
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
