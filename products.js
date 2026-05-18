const products = [
    
    {
        id: 2,
        name: "Pleated Soft Girl Set",
        category: "Two Piece",
        collection: "Soft Girl",
        price: 32000,
        originalPrice: null,
        description: "Soft pleated top and skirt set finished with delicate feminine details.",
        colors: ["White"],
        sizes: ["S", "M", "L"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 189,
        date: "2026-05-05",
        image: "assets/products/croptop-1-white.jpg",
        variantImages: {
            White: "assets/products/croptop-1-white.jpg"
        }
    },
    {
        id: 3,
        name: "Birthday Queen Sequin Dress",
        category: "Dresses",
        collection: "Weekend Casuals",
        price: 55000,
        originalPrice: 68000,
        description: "Sequin statement dress with a flattering fit for birthday evenings.",
        colors: ["Red"],
        sizes: ["XS", "S", "M", "L"],
        availability: "Low Stock",
        badge: "Sale",
        trending: true,
        loved: 412,
        date: "2026-04-20",
        image: "assets/products/dress-1-Red.jpg",
        variantImages: {
            Red: "assets/products/dress-1-Red.jpg"
        }
    },
    {
        id: 4,
        name: "Date Night Satin Slip Dress",
        category: "Dresses",
        collection: "Date Night",
        price: 24000,
        originalPrice: null,
        description: "Satin slip dress with a refined drape made for romantic evenings.",
        colors: ["Beige"],
        sizes: ["XS", "S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 156,
        date: "2026-05-08",
        image: "assets/products/meshmaxidress-1-beige.jpg",
        variantImages: {
            Beige: "assets/products/meshmaxidress-1-beige.jpg"
        }
    },
    {
        id: 5,
        name: "Resort Linen Vacation Set",
        category: "Vacation Wear",
        collection: "Vacation Drip",
        price: 38000,
        originalPrice: 45000,
        description: "Light linen set for resort weekends and warm-weather travel.",
        colors: ["Green"],
        sizes: ["S", "M", "L"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 278,
        date: "2026-04-15",
        image: "assets/products/dress-2-lightgreen.jpg",
        variantImages: {
            Green: "assets/products/dress-2-lightgreen.jpg"
        }
    },
    {
        id: 6,
        name: "Bodycon Night Dress",
        category: "Dresses",
        collection: "Luxury Black",
        price: 42000,
        originalPrice: null,
        description: "Party bodycon dress with bold detailing for elevated nights out.",
        colors: ["White"],
        sizes: ["XS", "S", "M", "L"],
        availability: "Pre-Order",
        badge: "New",
        trending: true,
        loved: 334,
        date: "2026-05-10",
        image: "assets/products/white-unique-and-stunning-dress.jpg",
        variantImages: {
            White: "assets/products/white-unique-and-stunning-dress.jpg"
        }
    },
    {
        id: 7,
        name: "Luxe Leather Crossbody Bag",
        category: "Bags",
        collection: "Lagos Essentials",
        price: 18500,
        originalPrice: null,
        description: "Leather crossbody bag finished with polished hardware for everyday luxury.",
        colors: ["Black"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: null,
        trending: false,
        loved: 98,
        date: "2026-04-25",
        image: "assets/products/blackpulleatherembellishedwomenbags-1-black.jpg",
        variantImages: {
            Black: "assets/products/blackpulleatherembellishedwomenbags-1-black.jpg"
        }
    },
    {
        id: 8,
        name: "Soft Girl Bucket Bag",
        category: "Bags",
        collection: "Soft Girl",
        price: 22000,
        originalPrice: 28000,
        description: "Soft bucket bag with gentle curves and elevated everyday appeal.",
        colors: ["White"],
        sizes: ["One Size"],
        availability: "Low Stock",
        badge: "Sale",
        trending: true,
        loved: 167,
        date: "2026-04-18",
        image: "assets/products/MelieBiancoTulipTopHandleCrossbodyTote-1-White.jpg",
        variantImages: {
            White: "assets/products/MelieBiancoTulipTopHandleCrossbodyTote-1-White.jpg"
        }
    },
    {
        id: 10,
        name: "Kitten Heel Pumps",
        category: "Heels",
        collection: "Date Night",
        price: 28000,
        originalPrice: 35000,
        description: "Strappy heels that elevate dresses and special occasion styling.",
        colors: ["Black"],
        sizes: ["37", "38", "39", "40", "41"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 213,
        date: "2026-04-22",
        image: "assets/products/pointed-toe-low-kitten-heels-pumps.jpg",
        variantImages: {
            Black: "assets/products/pointed-toe-low-kitten-heels-pumps.jpg"
        }
    },
    {
        id: 11,
        name: "Classic Strap Heels",
        category: "Heels",
        collection: "Lagos Essentials",
        price: 18000,
        originalPrice: null,
        description: "Timeless strap heels for versatile evening styling.",
        colors: ["Black"],
        sizes: ["37", "38", "39", "40"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 145,
        date: "2026-05-06",
        image: "assets/products/buckelchunkyheels.1.Black.jpg",
        variantImages: {
            Black: "assets/products/buckelchunkyheels.1.Black.jpg"
        }
    },
    {
        id: 12,
        name: "Rhinestone Bow Heels",
        category: "Heels",
        collection: "Luxury Black",
        price: 35000,
        originalPrice: 42000,
        description: "Statement heels with rhinestone bows for night-out glamour.",
        colors: ["Black"],
        sizes: ["37", "38", "39", "40", "41"],
        availability: "Low Stock",
        badge: "Sale",
        trending: true,
        loved: 298,
        date: "2026-04-28",
        image: "assets/products/ladiessummerfootwearsuperhighheelwith-bowrhinestonecrystalsstilitodiamondblackshoes-1-black.jpg",
        variantImages: {
            Black: "assets/products/ladiessummerfootwearsuperhighheelwith-bowrhinestonecrystalsstilitodiamondblackshoes-1-black.jpg"
        }
    },
    {
        id: 13,
        name: "Soft Girl Pearl Earrings",
        category: "Accessories",
        collection: "Soft Girl",
        price: 8500,
        originalPrice: null,
        description: "Pearl drop earrings with modern polish.",
        colors: ["Silver"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 145,
        date: "2026-05-12",
        image: "assets/products/chromeheartsbracelet-1-Silver.jpg",
        variantImages: {
            Silver: "assets/products/chromeheartsbracelet-1-Silver.jpg"
        }
    },
    {
        id: 14,
        name: "Gold Layered Bangle",
        category: "Accessories",
        collection: "Luxury Black",
        price: 9500,
        originalPrice: null,
        description: "Luxe gold bangles for polished outfit finishes.",
        colors: ["Gold"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: null,
        trending: false,
        loved: 87,
        date: "2026-05-10",
        image: "assets/products/golden-bangles.jpg",
        variantImages: {
            Gold: "assets/products/golden-bangles.jpg"
        }
    },
    {
        id: 15,
        name: "Modern Frame Glasses",
        category: "Accessories",
        collection: "Summer Vibes",
        price: 7500,
        originalPrice: 9000,
        description: "Bold frame glasses that complete stylish summer outfits.",
        colors: ["Black"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 168,
        date: "2026-05-14",
        image: "assets/products/glasses-1-black.jpg",
        variantImages: {
            Black: "assets/products/glasses-1-black.jpg"
        }
    },
    {
        id: 16,
        name: "Elegant Gold Ring",
        category: "Accessories",
        collection: "Luxury Black",
        price: 12000,
        originalPrice: 15000,
        description: "Gold statement ring with luxe shine.",
        colors: ["Gold"],
        sizes: ["S", "M", "L"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 198,
        date: "2026-05-11",
        image: "assets/products/rings-1-Gold.jpg",
        variantImages: {
            Gold: "assets/products/rings-1-Gold.jpg"
        }
    },
    {
        id: 17,
        name: "Breezy Printed Tee",
        category: "Casual Fits",
        collection: "Summer Vibes",
        price: 12000,
        originalPrice: null,
        description: "Light printed tee made for easy weekend dressing.",
        colors: ["Red"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 96,
        date: "2026-05-14",
        image: "assets/products/streetwear-1-green.jpg",
        variantImages: {
            Red: "assets/products/streetwear-1-green.jpg"
        }
    },
    {
        id: 18,
        name: "Summer Crochet Tote",
        category: "Bags",
        collection: "Vacation Drip",
        price: 25000,
        originalPrice: null,
        description: "Raffia tote bag built for holiday weekends and city escapes.",
        colors: ["Brown"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 134,
        date: "2026-05-07",
        image: "assets/products/sheinbag-1-Brown.jpg",
        variantImages: {
            Brown: "assets/products/sheinbag-1-Brown.jpg"
        }
    },
    {
        id: 19,
        name: "Relaxed Cargo Pants",
        category: "Cargo Pants",
        collection: "Urban Streetwear",
        price: 19000,
        originalPrice: null,
        description: "Structured cargo pants with premium hardware for relaxed streetwear.",
        colors: ["Brown"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 140,
        date: "2026-05-13",
        image: "assets/products/cargopant-1-brown.jpg",
        variantImages: {
            Brown: "assets/products/cargopant-1-brown.jpg"
        }
    },
    {
        id: 20,
        name: "Oversized Street Tee",
        category: "Oversized Tees",
        collection: "Urban Streetwear",
        price: 12000,
        originalPrice: null,
        description: "Cool oversized tee for effortless everyday layering.",
        colors: ["Black"],
        sizes: ["M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 96,
        date: "2026-05-14",
        image: "assets/products/download-16.jpg",
        variantImages: {
            Black: "assets/products/download-16.jpg"
        }
    },
    {
        id: 21,
        name: "Grey Runner Sneakers",
        category: "Sneakers",
        collection: "Urban Streetwear",
        price: 26000,
        originalPrice: null,
        description: "Lightweight running-inspired sneakers with a clean finish.",
        colors: ["Grey"],
        sizes: ["40", "41", "42", "43"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 182,
        date: "2026-05-10",
        image: "assets/products/sneakers-1-Grey.jpg",
        variantImages: {
            Grey: "assets/products/sneakers-1-Grey.jpg"
        }
    },
    {
        id: 22,
        name: "White Everyday Sneakers",
        category: "Sneakers",
        collection: "Lagos Essentials",
        price: 26500,
        originalPrice: null,
        description: "Versatile white sneakers for everyday city looks.",
        colors: ["White"],
        sizes: ["40", "41", "42", "43"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 131,
        date: "2026-05-16",
        image: "assets/products/sneakers-1-white.jpg",
        variantImages: {
            White: "assets/products/sneakers-1-white.jpg"
        }
    },
    {
        id: 23,
        name: "Quartz Stainless Watch",
        category: "Watches",
        collection: "Luxury Black",
        price: 32000,
        originalPrice: null,
        description: "Sleek stainless watch with a polished black dial.",
        colors: ["Black"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 210,
        date: "2026-05-12",
        image: "assets/products/pablo-raez-quartz-men's-wristwatch-stainless-steel-black-dial-analog-date.jpg",
        variantImages: {
            Black: "assets/products/pablo-raez-quartz-men's-wristwatch-stainless-steel-black-dial-analog-date.jpg"
        }
    },
    {
        id: 24,
        name: "Denim Utility Jacket",
        category: "Jackets",
        collection: "Urban Streetwear",
        price: 33000,
        originalPrice: null,
        description: "A sharp denim jacket for layering over streetwear looks.",
        colors: ["Black"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 134,
        date: "2026-05-15",
        image: "assets/products/outfit-hombre-invierno.jpg",
        variantImages: {
            Black: "assets/products/outfit-hombre-invierno.jpg"
        }
    },
    {
        id: 25,
        name: "Relaxed Track Set",
        category: "Casual Fits",
        collection: "Weekend Casuals",
        price: 28000,
        originalPrice: null,
        description: "A relaxed matching set for easy weekend dressing.",
        colors: ["Green"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 121,
        date: "2026-05-16",
        image: "assets/products/streetwear-1-green.jpg",
        variantImages: {
            Green: "assets/products/streetwear-1-green.jpg"
        }
    },
    {
        id: 26,
        name: "Baggy Urban Jeans",
        category: "Streetwear",
        collection: "Summer Vibes",
        price: 22000,
        originalPrice: null,
        description: "Comfortable baggy jeans for modern street styling.",
        colors: ["Blue"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 176,
        date: "2026-05-13",
        image: "assets/products/baggyjeans-1-Blue.jpg",
        variantImages: {
            Blue: "assets/products/baggyjeans-1-Blue.jpg"
        }
    }
];
