export interface Project {
  id: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  images: string[];
  githubUrl: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "bookstore",
    title: {
      en: "Books Store App",
      ar: "تطبيق متجر الكتب",
    },
    description: {
      en: "A responsive books store application using React and Bootstrap with real-time filtering, instant add/delete functionality, toast notifications, localStorage persistence, and user authentication (login/signup).",
      ar: "تطبيق متجر كتب متجاوب باستخدام React و Bootstrap مع تصفية فورية، إضافة/حذف فوري، إشعارات توست، حفظ البيانات محلياً، ومصادقة المستخدم (تسجيل دخول/إنشاء حساب).",
    },
    images: [
      "/projects/bookstore/localhost_5173_ (1).png",
      "/projects/bookstore/localhost_5173_ (8).png",
      "/projects/bookstore/localhost_5173_ (9).png",
      "/projects/bookstore/localhost_5173_ (3).png",
      "/projects/bookstore/localhost_5173_ (4).png",
      "/projects/bookstore/localhost_5173_ (11).png",
      "/projects/bookstore/localhost_5173_ (5).png",
      "/projects/bookstore/localhost_5173_ (6).png",
      "/projects/bookstore/localhost_5173_ (7).png",
      "/projects/bookstore/localhost_5173_ (10).png",
    ],
    githubUrl: "https://github.com/Adnan861736/BookStore",
    tags: [
      "React",
      "Bootstrap",
      "JavaScript",
      "localStorage",
      "Authentication",
    ],
    featured: true,
  },
  {
    id: "souq",
    title: {
      en: "Souq — Multi-Vendor E-Commerce Platform",
      ar: "سوق — منصة تجارة إلكترونية متعددة البائعين",
    },
    description: {
      en: "A professional multi-vendor e-commerce platform where merchants can register, manage their stores and products, track real-time inventory, view financial reports (sales, commissions, settlements), and handle shipping. Built with Next.js (App Router), Tailwind CSS, Node.js, and MySQL.",
      ar: "منصة تجارة إلكترونية احترافية متعددة البائعين حيث يمكن للتجار التسجيل وإدارة متاجرهم ومنتجاتهم، تتبع المخزون في الوقت الفعلي، عرض التقارير المالية (المبيعات، العمولات، التسويات)، وإدارة الشحن. بُنيت باستخدام Next.js و Tailwind CSS و Node.js و MySQL.",
    },
    images: [
      "/projects/souq/localhost_3000_(Nest Hub Max).png",
      "/projects/souq/dashboard.png",
      "/projects/souq/products.png",
    ],
    githubUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MySQL", "i18n"],
    featured: true,
  },
  {
    id: "food-delivery",
    title: {
      en: "Food Delivery Application",
      ar: "تطبيق توصيل الطعام",
    },
    description: {
      en: "A full-stack food delivery application with React frontend and Node.js/Express backend. Features secure JWT authentication, cart management using React Hooks, and MongoDB Atlas integration. Includes admin interface for menu management.",
      ar: "تطبيق توصيل طعام متكامل مع واجهة أمامية React وخلفية Node.js/Express. يتضمن مصادقة JWT آمنة، إدارة السلة باستخدام React Hooks، وتكامل MongoDB Atlas. يحتوي على واجهة إدارة للقوائم.",
    },
    images: [
      "/projects/food-delivery/localhost_5173_ (16).png",
      "/projects/food-delivery/localhost_5173_(Nest Hub Max) (2).png",
      "/projects/food-delivery/localhost_5173_(Nest Hub Max) (1).png",
      "/projects/food-delivery/localhost_5173_(Nest Hub Max).png",
      "/projects/food-delivery/localhost_5173_cart(Nest Hub Max).png",
      "/projects/food-delivery/localhost_5173_cart(Nest Hub Max) (1).png",
    ],

    githubUrl: "https://github.com/Adnan861736/food-delivery-app.git",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Hooks"],
    featured: false,
  },
  {
    id: "crud-template",
    title: {
      en: "CRUD Application Template",
      ar: "قالب تطبيق CRUD",
    },
    description: {
      en: "A full-stack, reusable CRUD template built with React, TypeScript, and Node.js/Express to accelerate the development of data-driven applications. The frontend features a clean, responsive interface using Tailwind CSS and supports offline functionality through localStorage persistence, while the backend provides a scalable RESTful API with seamless integration to MongoDB (or other databases) for production use. Designed with generics and modularity in mind, the template easily adapts to any data model—such as products, users, or inventory items—making it ideal for admin panels, internal tools.",
      ar: "قالب CRUD قابل لإعادة الاستخدام باستخدام React و TypeScript للتطوير السريع للتطبيقات المعتمدة على البيانات. يتميز بواجهة نظيفة وحفظ البيانات محلياً.",
    },
    images: [
      "/projects/crud/localhost_5173_(Nest Hub Max) (3).png",
      "/projects/crud/localhost_5173_(Nest Hub Max) (5).png",
      "/projects/crud/localhost_5173_(Nest Hub Max) (6).png",
      "/projects/crud/localhost_5173_(Nest Hub Max) (7).png",
      "/projects/crud/localhost_5173_(Nest Hub Max) (8).png",
      "/projects/crud/localhost_5173_(Nest Hub Max) (4).png",
      "/projects/crud/localhost_5173_(Nest Hub Max) (9).png",
    ],
    githubUrl: "#",
    tags: ["React", "TypeScript", "CRUD", "localStorage"],
    featured: false,
  },
  {
    id: "portfolio",
    title: {
      en: "Personal Portfolio",
      ar: "البورتفوليو الشخصي",
    },
    description: {
      en: "A high-performance, fully responsive portfolio website using Next.js and Tailwind CSS. Optimized for fast loading and SEO, leveraging Next.js SSG and ISR. The design is clean, modern, and demonstrates frontend development skills.",
      ar: "موقع بورتفوليو عالي الأداء ومتجاوب بالكامل باستخدام Next.js و Tailwind CSS. محسّن للتحميل السريع وتحسين محركات البحث، مستفيداً من SSG و ISR في Next.js. التصميم نظيف وعصري ويعرض مهارات تطوير الواجهة الأمامية.",
    },
    images: [
      "/projects/portfolio/localhost_3000_(Nest Hub Max) (1).png",
      "/projects/portfolio/localhost_3000_(Nest Hub Max) (2).png",
      "/projects/portfolio/localhost_3000_(Nest Hub Max) (3).png",
      "/projects/portfolio/localhost_3000_(Nest Hub Max) (4).png",
      "/projects/portfolio/localhost_3000_(Nest Hub Max) (5).png",
    ],
    githubUrl: "#",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "SSG", "SEO"],
    featured: false,
  },
];
