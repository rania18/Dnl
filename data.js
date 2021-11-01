// eslint-disable-next-line import/no-anonymous-default-export

import bcrypt from 'bcryptjs';

export default {

    users: [
        {
            name: 'Maamoun',
            email: 'grissa.maamoun@gmail.com',
            password: bcrypt.hashSync('Grissa1906', 8),
            isAdmin: true,
        },
        {
            name: 'Mohamed Abdelaziz',
            email: 'abdelaziz.hamado@gmail.com',
            password: bcrypt.hashSync('Hammado2021', 8),
            isAdmin: true,
        },
        {
            name: 'User',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('grissa1906', 8),
            isAdmin: false,
        }
    ],

    categories: [
        {
            title: "Table",
            image: "",
            parentId: "0",
        },
        {
            title: "Cabinet",
            image: "",
            parentId: "0",
        },
        {
            title: "Chair",
            image: "",
            parentId: "0",
        },
        {
            title: "Arm Chair",
            image: "",
            parentId: "0",
        },
        {
            title: "Bed",
            image: "",
            parentId: "0",
        },
        {
            title: "Sofa",
            image: "",
            parentId: "0",
        },
        {
            title: "Wardrobe",
            image: "",
            parentId: "0",
        },
    ],

    products: [
        /* {
            name: "Laura",
            image: "/images/products/product-1.png",
            price: 200,
            description: "Sofa Laura is a casual, contemporary collection that your family is sure to love.",
            category: "60c2ee8b1ef9e03f746da05b",
            categorySlug: "Table",
            rating: 3.5,
            numReviews: 6,
            availability: "In Stock",
            images: ['/images/products/product-1.png', '/images/products/product-2.png', '/images/products/product-3.png'],
            width: '100 CM',
            height: '160 CM',
            matter: 'Boi',
            delay: '5 Jours',
        },
        {
            name: "Divon",
            image: "/images/products/product-2.png",
            price: 170,
            description: "Sofa Laura is a casual, contemporary collection that your family is sure to love.",
            category: '60c2ee8b1ef9e03f746da05b',
            categorySlug: "Table",
            rating: 4,
            numReviews: 21,
            availability: "By Order",
            images: ['/images/products/product-2.png', '/images/products/product-4.png', '/images/products/product-1.png'],
            width: '100 CM',
            height: '160 CM',
            matter: 'Boi',
            delay: '5 Jours',
        },
        {
            name: "Aurora",
            image: "/images/products/product-3.png",
            price: 450,
            description: "Sofa Laura is a casual, contemporary collection that your family is sure to love.",
            category: '60c2ee8b1ef9e03f746da05b',
            categorySlug: "Table",
            rating: 5,
            numReviews: 47,
            availability: "By Order 3Days",
            images: ['/images/products/product-3.png', '/images/products/product-4.png', '/images/products/product-5.png'],
            width: '100 CM',
            height: '160 CM',
            matter: 'Boi',
            delay: '5 Jours',
        },
        {
            name: "Seat",
            image: "/images/products/product-4.png",
            price: 120,
            description: "Sofa Laura is a casual, contemporary collection that your family is sure to love.",
            category: '60c2ee8b1ef9e03f746da05d',
            categorySlug: "Chair",
            rating: 4.3,
            numReviews: 14,
            availability: "In Stock",
            images: ['/images/products/product-4.png', '/images/products/product-2.png', '/images/products/product-1.png'],
            width: '100 CM',
            height: '160 CM',
            matter: 'Boi',
            delay: '5 Jours',
        },
        {
            name: "Dnl Art",
            image: "/images/products/product-4.png",
            price: 120,
            description: "Sofa Laura is a casual, contemporary collection that your family is sure to love.",
            category: '60c2ee8b1ef9e03f746da05d',
            categorySlug: "Chair",
            rating: 2.5,
            numReviews: 2,
            availability: "By Order 1Week",
            images: ['/images/products/product-5.png', '/images/products/product-3.png', '/images/products/product-6.png'],
            width: '100 CM',
            height: '160 CM',
            matter: 'Boi',
            delay: '5 Jours',
        },
        {
            name: "Wall",
            image: "/images/products/product-4.png",
            price: 120,
            description: "Sofa Laura is a casual, contemporary collection that your family is sure to love.",
            category: '60c2ee8b1ef9e03f746da05c',
            categorySlug: "Cabinet",
            rating: 4.8,
            numReviews: 11,
            availability: "By Order 2Months",
            images: ['/images/products/product-6.png', '/images/products/product-4.png', '/images/products/product-1.png'],
            width: '100 CM',
            height: '160 CM',
            matter: 'Boi',
            delay: '5 Jours',
        }, */
    ],

    sliders: [
        {
          title: "Agencement boutique à usage cosmétique et parfumeries",
          description: "Reception de besoin de client",
          description2: "Proposition d'un agencement celon les besoins de client sous forme d'une conception 3D reèls produites par nos architectes",
          image: "/images/slider/slide1.jpeg",
        },
        {
          title: "Tortor Commodo",
          description: "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac.",
          button: "Discover",
          buttonLink: "/project/40",
          image: "/images/slider/slide2.png",
        },
        {
          title: "Phasellus metus",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in.",
          button: "Buy now",
          buttonLink: "/product/50",
          image: "/images/slider/slide3.png",
        }
    ],
    
    projects: [
        {
            title: "Modern furnishing projects",
            desc: "New furnishing ideas",
            image: "/images/projects/project-1.jpg",
        },
        {
            title: "Furnishing and complements",
            desc: "Discover the design table collection",
            image: "/images/projects/project-2.jpg",
        },
        {
            title: "Which is Best for Your Home",
            desc: "Wardrobes vs Walk-In Closets",
            image: "/images/projects/project-3.jpg",
        },
        {
            title: "Keeping Things Minimal",
            desc: "Creating Your Very Own Bathroom",
            image: "/images/projects/project-4.jpg",
        },
        
    ],

    blog: [
        {
            title: "Modern furnishing projects",
            news: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis",
            image: "/images/blog/blog-1.jpg",
            date: "19-06-1988"
        },
        {
            title: "Furnishing and complements",
            news: "Discover the design table collection",
            image: "/images/blog/blog-2.jpg",
            date: "18-05-1988"
        },
        {
            title: "Which is Best for Your Home",
            news: "Wardrobes vs Walk-In Closets",
            image: "/images/blog/blog-3.jpg",
            date: "21-05-1993"
        },        
    ],

    instagram: [
        {
            url: '1https://www.instagram.com/',
            image: "/images/instagram/square-1.jpg",
        },
        {
            url: '1https://www.instagram.com/',
            image: "/images/instagram/square-2.jpg",
        },
        {
            url: '1https://www.instagram.com/',
            image: "/images/instagram/square-3.jpg",
        },
        {
            url: '1https://www.instagram.com/',
            image: "/images/instagram/square-4.jpg",
        },
        {
            url: '1https://www.instagram.com/',
            image: "/images/instagram/square-5.jpg",
        },
        {
            url: '1https://www.instagram.com/',
            image: "/images/instagram/square-6.jpg",
        },
    ],
}