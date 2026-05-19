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
        category: "Crossbody",
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
        category: "Luxury Bags",
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
        category: "Earrings",
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
        category: "Bracelets",
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
        id: 16,
        name: "Elegant Gold Ring",
        category: "Jewelry",
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
        category: "Tote",
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
        category: "Cargo Pants",
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
    },
    {
        id: 27,
        name: "Cozy Oversized Tee",
        category: "Oversized Tees",
        collection: "Urban Streetwear",
        price: 14000,
        originalPrice: null,
        description: "A relaxed oversized tee built for effortless layering.",
        colors: ["Black"],
        sizes: ["M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 84,
        date: "2026-05-18",
        image: "assets/products/download-15.jpg",
        variantImages: {
            Black: "assets/products/download-15.jpg"
        }
    },
    {
        id: 28,
        name: "Bronze Tactical Cargo Pants",
        category: "Cargo Pants",
        collection: "Urban Streetwear",
        price: 22000,
        originalPrice: null,
        description: "Utility cargo pants with plenty of pockets and premium hardware.",
        colors: ["Brown"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 107,
        date: "2026-05-17",
        image: "assets/products/download-17.jpg",
        variantImages: {
            Brown: "assets/products/download-17.jpg"
        }
    },
    {
        id: 29,
        name: "Night Runner Sneakers",
        category: "Sneakers",
        collection: "Lagos Essentials",
        price: 27000,
        originalPrice: null,
        description: "Lightweight sneaker built for all-day city movement.",
        colors: ["Black"],
        sizes: ["40", "41", "42", "43"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 142,
        date: "2026-05-16",
        image: "assets/products/download-18.jpg",
        variantImages: {
            Black: "assets/products/download-18.jpg"
        }
    },
    {
        id: 30,
        name: "Sharp Utility Jacket",
        category: "Jackets",
        collection: "Urban Streetwear",
        price: 33000,
        originalPrice: null,
        description: "A structured utility jacket for elevated street outfits.",
        colors: ["Black"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 121,
        date: "2026-05-15",
        image: "assets/products/download-19.jpg",
        variantImages: {
            Black: "assets/products/download-19.jpg"
        }
    },
    {
        id: 31,
        name: "Island Casual Tee",
        category: "Casual Fits",
        collection: "Vacation Drip",
        price: 15000,
        originalPrice: null,
        description: "A breezy tee made for weekend getaways and off-duty ease.",
        colors: ["White"],
        sizes: ["M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 79,
        date: "2026-05-16",
        image: "assets/products/download-20.jpg",
        variantImages: {
            White: "assets/products/download-20.jpg"
        }
    },
    {
        id: 32,
        name: "Edge Court Sneakers",
        category: "Sneakers",
        collection: "Urban Streetwear",
        price: 28000,
        originalPrice: null,
        description: "Sport-inspired sneakers with a crisp city-ready silhouette.",
        colors: ["White"],
        sizes: ["40", "41", "42", "43"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 124,
        date: "2026-05-14",
        image: "assets/products/download-21.jpg",
        variantImages: {
            White: "assets/products/download-21.jpg"
        }
    },
    {
        id: 33,
        name: "Winter Trail Sneakers",
        category: "Sneakers",
        collection: "Lagos Essentials",
        price: 29000,
        originalPrice: null,
        description: "High-performance sneakers for early morning runs and weekends.",
        colors: ["Grey"],
        sizes: ["40", "41", "42", "43"],
        availability: "In Stock",
        badge: "Sale",
        trending: true,
        loved: 133,
        date: "2026-05-12",
        image: "assets/products/download-22.jpg",
        variantImages: {
            Grey: "assets/products/download-22.jpg"
        }
    },
    {
        id: 34,
        name: "Minimalist Leather Watch",
        category: "Watches",
        collection: "Luxury Black",
        price: 34000,
        originalPrice: null,
        description: "A streamlined leather watch with modern, understated polish.",
        colors: ["Black"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 98,
        date: "2026-05-13",
        image: "assets/products/download-23.jpg",
        variantImages: {
            Black: "assets/products/download-23.jpg"
        }
    },
    {
        id: 35,
        name: "Relaxed Cargo Chino",
        category: "Cargo Pants",
        collection: "Weekend Casuals",
        price: 20000,
        originalPrice: null,
        description: "Soft cargo chinos designed for comfort and city styling.",
        colors: ["Olive"],
        sizes: ["S", "M", "L", "XL"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 110,
        date: "2026-05-17",
        image: "assets/products/download-25.jpg",
        variantImages: {
            Olive: "assets/products/download-25.jpg"
        }
    },
    {
        id: 36,
        name: "Satin Twilight Mini Dress",
        category: "Dresses",
        collection: "Date Night",
        price: 32000,
        originalPrice: null,
        description: "A satin mini dress with an elegant, evening-ready finish.",
        colors: ["Black"],
        sizes: ["XS", "S", "M", "L"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 171,
        date: "2026-05-18",
        image: "assets/products/download-8.jpg",
        variantImages: {
            Black: "assets/products/download-8.jpg"
        }
    },
    {
        id: 37,
        name: "Blush Soft Girl Set",
        category: "Soft Girl",
        collection: "Soft Girl",
        price: 31000,
        originalPrice: null,
        description: "A dreamy soft girl ensemble with pastel tones and delicate styling.",
        colors: ["Pink"],
        sizes: ["S", "M", "L"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 158,
        date: "2026-05-16",
        image: "assets/products/download-9.jpg",
        variantImages: {
            Pink: "assets/products/download-9.jpg"
        }
    },
    {
        id: 38,
        name: "Brown Summer Outfit Set",
        category: "Vacation Wear",
        collection: "Vacation Drip",
        price: 36000,
        originalPrice: null,
        description: "A warm-toned summer outfit perfect for holiday styling.",
        colors: ["Brown"],
        sizes: ["S", "M", "L"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 123,
        date: "2026-05-15",
        image: "assets/products/Summeroutfit-1-Brown.jpg",
        variantImages: {
            Brown: "assets/products/Summeroutfit-1-Brown.jpg"
        }
    },
    {
        id: 39,
        name: "City Slip Flats",
        category: "Flats",
        collection: "Lagos Essentials",
        price: 18000,
        originalPrice: null,
        description: "Low-profile flats made for everyday street comfort.",
        colors: ["Beige"],
        sizes: ["37", "38", "39", "40"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 102,
        date: "2026-05-16",
        image: "assets/products/download-10.jpg",
        variantImages: {
            Beige: "assets/products/download-10.jpg"
        }
    },
    {
        id: 40,
        name: "Street Pulse Sneakers",
        category: "Sneakers",
        collection: "Urban Streetwear",
        price: 26000,
        originalPrice: null,
        description: "A modern sneaker with clean lines and city-ready performance.",
        colors: ["White"],
        sizes: ["40", "41", "42", "43"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 130,
        date: "2026-05-17",
        image: "assets/products/download-11.jpg",
        variantImages: {
            White: "assets/products/download-11.jpg"
        }
    },
    {
        id: 41,
        name: "Morning Walk Flats",
        category: "Flats",
        collection: "Weekend Casuals",
        price: 17000,
        originalPrice: null,
        description: "Comfort flats built for relaxed morning outings.",
        colors: ["Grey"],
        sizes: ["37", "38", "39", "40"],
        availability: "In Stock",
        badge: "Sale",
        trending: false,
        loved: 108,
        date: "2026-05-14",
        image: "assets/products/download-12.jpg",
        variantImages: {
            Grey: "assets/products/download-12.jpg"
        }
    },
    {
        id: 42,
        name: "Rhinestone Opulence Heels",
        category: "Heels",
        collection: "Luxury Black",
        price: 36000,
        originalPrice: 42000,
        description: "Dramatic heels finished with rhinestone bow accents.",
        colors: ["Black"],
        sizes: ["37", "38", "39", "40", "41"],
        availability: "Low Stock",
        badge: "Sale",
        trending: true,
        loved: 190,
        date: "2026-05-18",
        image: "assets/products/step-into-opulence-with-rhinestone-bows-and-sleek….jpg",
        variantImages: {
            Black: "assets/products/step-into-opulence-with-rhinestone-bows-and-sleek….jpg"
        }
    },
    {
        id: 43,
        name: "Double Bow Rhinestone Heels",
        category: "Heels",
        collection: "Date Night",
        price: 38000,
        originalPrice: 45000,
        description: "High heels with dramatic double rhinestone bows.",
        colors: ["Black"],
        sizes: ["37", "38", "39", "40", "41"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 158,
        date: "2026-05-17",
        image: "assets/products/these-high-heels-with-double-rhinestone-bow-knots….jpg",
        variantImages: {
            Black: "assets/products/these-high-heels-with-double-rhinestone-bow-knots….jpg"
        }
    },
    {
        id: 44,
        name: "Everyday Crossbody Satchel",
        category: "Crossbody",
        collection: "Lagos Essentials",
        price: 24500,
        originalPrice: null,
        description: "A polished crossbody satchel made for easy everyday wear.",
        colors: ["Black"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 115,
        date: "2026-05-14",
        image: "assets/products/download-13.jpg",
        variantImages: {
            Black: "assets/products/download-13.jpg"
        }
    },
    {
        id: 45,
        name: "Brown Woven Tote",
        category: "Tote",
        collection: "Vacation Drip",
        price: 26000,
        originalPrice: null,
        description: "A woven tote built for holiday essentials and weekends away.",
        colors: ["Brown"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 138,
        date: "2026-05-16",
        image: "assets/products/sheinbag-1-Brown.jpg",
        variantImages: {
            Brown: "assets/products/sheinbag-1-Brown.jpg"
        }
    },
    {
        id: 46,
        name: "Cream Luxury Shoulder Bag",
        category: "Luxury Bags",
        collection: "Luxury Black",
        price: 32000,
        originalPrice: null,
        description: "A luxury cream bag that upgrades evening and day looks.",
        colors: ["Cream"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 121,
        date: "2026-05-15",
        image: "assets/products/upgrade-your-style-with-this-luxury-cream-top….jpg",
        variantImages: {
            Cream: "assets/products/upgrade-your-style-with-this-luxury-cream-top….jpg"
        }
    },
    {
        id: 47,
        name: "Summer Breeze Scarf",
        category: "Scarves",
        collection: "Soft Girl",
        price: 9500,
        originalPrice: null,
        description: "A lightweight scarf to finish soft and feminine looks.",
        colors: ["Pink"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "New",
        trending: false,
        loved: 88,
        date: "2026-05-17",
        image: "assets/products/download-14.jpg",
        variantImages: {
            Pink: "assets/products/download-14.jpg"
        }
    },
    {
        id: 48,
        name: "Golden Charm Bracelet",
        category: "Bracelets",
        collection: "Luxury Black",
        price: 10500,
        originalPrice: null,
        description: "A delicate charm bracelet for refined everyday layers.",
        colors: ["Gold"],
        sizes: ["One Size"],
        availability: "In Stock",
        badge: "Sale",
        trending: false,
        loved: 95,
        date: "2026-05-16",
        image: "assets/products/elegant-braclete-or-girls.jpg",
        variantImages: {
            Gold: "assets/products/elegant-braclete-or-girls.jpg"
        }
    },
    {
        id: 49,
        name: "Silver Cross Ring",
        category: "Jewelry",
        collection: "Chrome Hearts",
        price: 13000,
        originalPrice: null,
        description: "A bold silver ring with cross detail for edgy styling.",
        colors: ["Silver"],
        sizes: ["S", "M", "L"],
        availability: "In Stock",
        badge: "New",
        trending: true,
        loved: 143,
        date: "2026-05-18",
        image: "assets/products/ChromeHeartsNarrowRecessedCrossRingInclude-1-silver.jpg",
        variantImages: {
            Silver: "assets/products/ChromeHeartsNarrowRecessedCrossRingInclude-1-silver.jpg"
        }
    }
];
