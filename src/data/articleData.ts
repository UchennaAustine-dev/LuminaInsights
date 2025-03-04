// export const articleData = [
//   {
//     id: "1",
//     title: "Sustainable Living: Eco-Friendly Practices for Your Daily Routine",
//     image: "/placeholder.svg?height=400&width=600",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     category: "lifestyle",
//   },
//   {
//     id: "2",
//     title: "The Evolution of Cinema: From Silent Films to Streaming Giants",
//     image: "/placeholder.svg?height=400&width=600",
//     content:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     category: "entertainment",
//   },
//   {
//     id: "3",
//     title: "Exploring New Hobbies: Finding Passion and Creativity",
//     image: "/placeholder.svg?height=400&width=600",
//     content:
//       "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     category: "lifestyle",
//   },
//   {
//     id: "4",
//     title: "Productivity Hacks: Boost Your Efficiency and Achieve More",
//     image: "/placeholder.svg?height=400&width=600",
//     content:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     category: "productivity",
//   },
//   // Add more articles as needed
// ];

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  role: string;
}

export interface Chapter {
  title: string;
  content: string;
  images?: string[];
}

export interface Comment {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  heroImage: string;
  date: string;
  author: Author;
  excerpt: string;
  chapters: Chapter[];
  category: string;
  tags: string[];
  comments: Comment[];
}

export const authors: Record<string, Author> = {
  "alex-gonzales": {
    id: "alex-gonzales",
    name: "lumina",
    avatar: "/avatar.svg",
    bio: "Hi! I'm a dedicated eco-writer who's passionate about sustainable living and environmental conservation. I've spent the last 5 years exploring and writing about eco-friendly practices that anyone can implement in their daily lives.",
    role: "Environmental Writer",
  },
};

export const articleData: Article[] = [
  {
    id: "sustainable-living-eco-friendly-practices",
    title: "Sustainable Living: Eco-Friendly Practices for Your Daily Routine",
    heroImage: "/susEco.webp",
    date: "14 November 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Discover practical ways to incorporate sustainability into your everyday life with these eco-friendly practices.",
    chapters: [
      {
        title: "Exploring Harmony",
        content:
          "In our fast-paced modern world, finding harmony with nature has become increasingly important. This chapter explores the fundamental principles of sustainable living and how we can begin to implement them in our daily lives. From morning routines to evening practices, every small change can make a significant impact on our environmental footprint.",
        images: ["/harmony1.jpeg"],
      },
      {
        title: "The Beauty of Life",
        content:
          "Life finds its most profound expression in the simple moments where we connect with nature. This section delves into the psychological benefits of maintaining an eco-friendly lifestyle and how it contributes to our overall well-being.",
        images: ["/beautOfLife.jpeg"],
      },
      {
        title: "Urban Living Bright",
        content:
          "Even in the heart of busy cities, sustainable living is possible. This chapter provides practical tips for urban dwellers to maintain an eco-friendly lifestyle, from vertical gardening to energy conservation.",
        images: ["/urbanLi.jpeg"],
      },
      {
        title: "The Natural Spirit of Harmony",
        content:
          "Understanding our connection with nature is essential for sustainable living. This section explores traditional wisdom and modern approaches to environmental conservation.",
        images: ["/harmony2.webp", "/harmony3.jpeg"],
      },
      {
        title: "Nature's Magnificence",
        content:
          "Witness the breathtaking beauty of our natural world and understand why preservation is crucial. From mountain peaks to ocean depths, every ecosystem plays a vital role in our planet's health.",
        images: ["/natuMag.jpeg"],
      },
      {
        title: "The Tranquility of Harmony",
        content:
          "Find peace in sustainable practices and learn how mindful living can contribute to both personal well-being and environmental conservation.",
        images: ["/tranQ.jpeg"],
      },
    ],
    category: "Lifestyle",
    tags: [
      "Sustainability",
      "Eco-Friendly",
      "Environment",
      "Green Living",
      "Nature",
    ],
    comments: [
      {
        id: "1",
        user: {
          name: "Sarah",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "This article really opened my eyes to how simple changes in our daily routine can make such a big impact on the environment. Thank you for sharing these practical tips!",
        date: "15 November 2023",
      },
    ],
  },
  {
    id: "eco-friendly-travel-tips",
    title: "Eco-Friendly Travel Tips: How to Explore the World Sustainably",
    subtitle: "Make your travels greener with these simple yet effective tips.",
    heroImage: "/travBud.webp",
    date: "20 November 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Discover how to travel sustainably with these eco-friendly tips that will help reduce your environmental footprint while exploring the world.",
    chapters: [
      {
        title: "Sustainable Accommodations",
        content:
          "Choosing eco-friendly accommodations is a great way to start your sustainable travel journey. Learn about hotels and resorts that prioritize environmental conservation.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Green Transportation",
        content:
          "From electric vehicles to public transport, explore the best ways to travel sustainably.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Tourism Activities",
        content:
          "Engage in activities that support local communities and protect the environment, such as wildlife conservation and sustainable farming.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Travel",
    tags: ["Sustainable Travel", "Eco-Tourism", "Green Living"],
    comments: [
      {
        id: "2",
        user: {
          name: "Mark",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I never thought about how my travel choices could impact the environment. Thanks for the insightful tips!",
        date: "21 November 2023",
      },
    ],
  },
  {
    id: "sustainable-fashion-trends",
    title: "Sustainable Fashion Trends: How to Dress Eco-Friendly",
    heroImage: "/fashE.webp",
    date: "25 November 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Stay stylish while being eco-friendly with these sustainable fashion trends.",
    chapters: [
      {
        title: "Second-Hand Shopping",
        content:
          "Explore the benefits of buying second-hand clothing and how it reduces waste in the fashion industry.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Friendly Fabrics",
        content:
          "Learn about sustainable fabrics like organic cotton and recycled materials that are changing the fashion landscape.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Capsule Wardrobe",
        content:
          "Discover how adopting a capsule wardrobe can reduce your environmental impact while maintaining your style.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Fashion",
    tags: ["Sustainable Fashion", "Eco-Friendly", "Green Living"],
    comments: [
      {
        id: "3",
        user: {
          name: "Emily",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I love the idea of a capsule wardrobe! It's both stylish and sustainable.",
        date: "26 November 2023",
      },
    ],
  },
  {
    id: "mindful-living-for-well-being",
    title: "Mindful Living for Well-being: A Guide to Inner Peace",
    heroImage: "/wellB.webp",
    date: "1 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Find inner peace and improve your well-being with these mindful living practices.",
    chapters: [
      {
        title: "Meditation and Mindfulness",
        content:
          "Explore the benefits of meditation and mindfulness in reducing stress and improving mental clarity.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Nature Connection",
        content:
          "Discover how spending time in nature can enhance your mental and physical health.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Gratitude Practice",
        content:
          "Learn how practicing gratitude can shift your perspective and improve your overall well-being.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Lifestyle",
    tags: ["Mindfulness", "Well-being", "Inner Peace"],
    comments: [
      {
        id: "4",
        user: {
          name: "James",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "Mindfulness has really helped me manage stress. Thanks for sharing these practices!",
        date: "2 December 2023",
      },
    ],
  },
  {
    id: "sustainable-food-practices",
    title: "Sustainable Food Practices: Eating for a Greener Future",
    heroImage: "/foodP.jpeg",
    date: "5 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Learn how to make sustainable food choices that benefit both you and the planet.",
    chapters: [
      {
        title: "Plant-Based Diets",
        content:
          "Explore the benefits of plant-based diets for health and environmental sustainability.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Local and Seasonal Eating",
        content:
          "Discover how choosing local and seasonal produce can reduce carbon footprint and support local farmers.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Reducing Food Waste",
        content:
          "Learn strategies for minimizing food waste and making the most of your grocery shopping.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Lifestyle",
    tags: ["Sustainable Food", "Eco-Friendly", "Green Living"],
    comments: [
      {
        id: "5",
        user: {
          name: "Rachel",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I've started buying more local produce and it's made a big difference in reducing my carbon footprint.",
        date: "6 December 2023",
      },
    ],
  },
  {
    id: "eco-friendly-home-decor",
    title: "Eco-Friendly Home Decor: Sustainable Living Spaces",
    heroImage: "/decor.jpeg",
    date: "10 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Transform your home into an eco-friendly haven with these sustainable decor ideas.",
    chapters: [
      {
        title: "Sustainable Materials",
        content:
          "Explore eco-friendly materials for furniture and decor, such as reclaimed wood and bamboo.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Energy Efficiency",
        content:
          "Learn how to optimize your home's energy efficiency with smart lighting and insulation.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Minimalist Design",
        content:
          "Discover how adopting a minimalist design approach can reduce waste and enhance your living space.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Lifestyle",
    tags: ["Eco-Friendly Decor", "Sustainable Living", "Green Home"],
    comments: [
      {
        id: "6",
        user: {
          name: "Olivia",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I love the idea of using reclaimed wood for furniture. It adds such a unique touch to any room!",
        date: "11 December 2023",
      },
    ],
  },
  {
    id: "sustainable-beauty-routines",
    title: "Sustainable Beauty Routines: Eco-Friendly Skincare and Makeup",
    heroImage: "/beauR.jpeg",
    date: "15 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Adopt sustainable beauty practices with eco-friendly skincare and makeup routines.",
    chapters: [
      {
        title: "Natural Skincare",
        content:
          "Explore the benefits of natural skincare ingredients and how they promote healthier skin.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Friendly Makeup",
        content:
          "Discover sustainable makeup options that are cruelty-free and environmentally friendly.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Zero Waste Beauty",
        content:
          "Learn how to reduce waste in your beauty routine by choosing refillable products and minimal packaging.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Beauty",
    tags: ["Sustainable Beauty", "Eco-Friendly Skincare", "Green Makeup"],
    comments: [
      {
        id: "7",
        user: {
          name: "Sophia",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I've switched to natural skincare and noticed a significant improvement in my skin health.",
        date: "16 December 2023",
      },
    ],
  },
  {
    id: "sustainable-technology-innovations",
    title: "Sustainable Technology Innovations: The Future of Green Tech",
    heroImage: "/greenT.jpeg",
    date: "20 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore the latest sustainable technology innovations shaping a greener future.",
    chapters: [
      {
        title: "Renewable Energy Solutions",
        content:
          "Discover advancements in renewable energy sources like solar and wind power.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Friendly Gadgets",
        content:
          "Learn about sustainable gadgets and devices designed to reduce electronic waste.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Green Computing",
        content:
          "Explore how green computing practices can reduce energy consumption and environmental impact.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Technology",
    tags: ["Sustainable Tech", "Green Innovations", "Eco-Friendly Gadgets"],
    comments: [
      {
        id: "8",
        user: {
          name: "Michael",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "The advancements in renewable energy are truly inspiring. Thanks for sharing this information!",
        date: "21 December 2023",
      },
    ],
  },
  {
    id: "sustainable-urban-planning",
    title: "Sustainable Urban Planning: Creating Greener Cities",
    heroImage: "/waner.webp",
    date: "25 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Learn how sustainable urban planning can transform cities into eco-friendly hubs.",
    chapters: [
      {
        title: "Green Spaces",
        content:
          "Explore the importance of green spaces in urban areas for both residents and the environment.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Sustainable Infrastructure",
        content:
          "Discover how sustainable infrastructure, such as green roofs and rain gardens, can improve urban ecosystems.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Community Engagement",
        content:
          "Learn how community involvement is crucial for successful sustainable urban planning projects.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Environment",
    tags: [
      "Sustainable Urban Planning",
      "Green Cities",
      "Eco-Friendly Infrastructure",
    ],
    comments: [
      {
        id: "9",
        user: {
          name: "Daniel",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "It's amazing to see cities incorporating more green spaces. It really enhances the quality of life for residents.",
        date: "26 December 2023",
      },
    ],
  },
  {
    id: "sustainable-education-initiatives",
    title: "Sustainable Education Initiatives: Teaching for a Greener Future",
    heroImage: "/greenF.jpeg",
    date: "30 December 2023",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore sustainable education initiatives that are shaping the next generation of eco-conscious leaders.",
    chapters: [
      {
        title: "Environmental Curriculum",
        content:
          "Discover how integrating environmental education into school curricula can inspire young minds.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Sustainable Schools",
        content:
          "Learn about initiatives to make schools more sustainable, from energy-efficient buildings to green playgrounds.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Community Outreach",
        content:
          "Explore how educational institutions can engage with local communities to promote sustainability.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Education",
    tags: [
      "Sustainable Education",
      "Environmental Curriculum",
      "Green Schools",
    ],
    comments: [
      {
        id: "10",
        user: {
          name: "Jessica",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "It's wonderful to see schools focusing on environmental education. It's crucial for our future.",
        date: "31 December 2023",
      },
    ],
  },
  {
    id: "sustainable-business-practices",
    title: "Sustainable Business Practices: How Companies Can Go Green",
    heroImage: "/bussP.webp",
    date: "3 January 2024",
    author: authors["alex-gonzales"],
    excerpt:
      "Learn how businesses can adopt sustainable practices to reduce their environmental impact.",
    chapters: [
      {
        title: "Corporate Social Responsibility",
        content:
          "Explore how CSR initiatives can promote sustainability and improve a company's reputation.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Sustainable Supply Chains",
        content:
          "Discover strategies for making supply chains more sustainable and environmentally friendly.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Green Marketing",
        content:
          "Learn how green marketing can help businesses communicate their commitment to sustainability effectively.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Business",
    tags: [
      "Sustainable Business",
      "Green Practices",
      "Corporate Responsibility",
    ],
    comments: [
      {
        id: "11",
        user: {
          name: "William",
          avatar: "/avatar.svg",
        },
        content:
          "It's great to see companies prioritizing sustainability. It's a win-win for both the environment and their brand image.",
        date: "4 January 2024",
      },
    ],
  },
  {
    id: "sustainable-agriculture-methods",
    title: "Sustainable Agriculture Methods: Farming for the Future",
    heroImage: "/agricM.jpeg",
    date: "8 January 2024",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore sustainable agriculture methods that promote environmental conservation and food security.",
    chapters: [
      {
        title: "Organic Farming",
        content:
          "Discover the benefits of organic farming for soil health, biodiversity, and human health.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Regenerative Agriculture",
        content:
          "Learn about regenerative practices that enhance ecosystem services and improve crop resilience.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Precision Farming",
        content:
          "Explore how precision farming techniques can optimize resource use and reduce waste.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Environment",
    tags: [
      "Sustainable Agriculture",
      "Organic Farming",
      "Regenerative Practices",
    ],
    comments: [
      {
        id: "12",
        user: {
          name: "Hannah",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I've started supporting local organic farmers and it's amazing to see the difference in produce quality and environmental impact.",
        date: "9 January 2024",
      },
    ],
  },
  {
    id: "sustainable-fashion-innovations-2025",
    title: "Sustainable Fashion Innovations in 2025: Trends and Technologies",
    heroImage: "/fashI.webp",
    date: "10 February 2025",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore the latest sustainable fashion trends and technologies shaping the industry in 2025.",
    chapters: [
      {
        title: "Circular Economy and Upcycling",
        content:
          "Learn how the circular economy and upcycling are transforming the fashion industry by reducing waste and promoting sustainability.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Innovative Materials",
        content:
          "Discover new sustainable materials like SCOBY leather, Piñatex, and fabrics made from food waste, algae, and mushrooms.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Friendly Dyes and Digital Fashion",
        content:
          "Explore eco-friendly dyeing techniques and the rise of digital fashion, which reduces waste and offers customizable fashion experiences.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Fashion",
    tags: ["Sustainable Fashion", "Circular Economy", "Eco-Friendly Materials"],
    comments: [
      {
        id: "13",
        user: {
          name: "Ava",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I'm excited about the advancements in sustainable materials. It's a game-changer for the fashion industry!",
        date: "11 February 2025",
      },
    ],
  },
  {
    id: "sustainable-beauty-trends-2025",
    title:
      "Sustainable Beauty Trends in 2025: Eco-Friendly Skincare and Makeup",
    heroImage: "/beautyM.webp",
    date: "15 February 2025",
    author: authors["alex-gonzales"],
    excerpt:
      "Stay updated on the latest sustainable beauty trends, from natural skincare to eco-friendly makeup.",
    chapters: [
      {
        title: "Natural Skincare Ingredients",
        content:
          "Explore the benefits of using natural ingredients in skincare products for healthier skin and a reduced environmental impact.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Friendly Makeup Options",
        content:
          "Discover sustainable makeup alternatives that are cruelty-free and environmentally friendly.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Zero Waste Beauty Practices",
        content:
          "Learn how to reduce waste in your beauty routine with refillable products and minimal packaging.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Beauty",
    tags: ["Sustainable Beauty", "Eco-Friendly Skincare", "Green Makeup"],
    comments: [
      {
        id: "14",
        user: {
          name: "Lily",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I've switched to natural skincare and noticed a significant improvement in my skin health.",
        date: "16 February 2025",
      },
    ],
  },
  {
    id: "sustainable-urban-design-2025",
    title: "Sustainable Urban Design in 2025: Creating Greener Cities",
    heroImage: "/prodH.webp",
    date: "20 February 2025",
    author: authors["alex-gonzales"],
    excerpt:
      "Learn how sustainable urban design can transform cities into eco-friendly hubs.",
    chapters: [
      {
        title: "Green Spaces and Parks",
        content:
          "Explore the importance of green spaces in urban areas for both residents and the environment.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Sustainable Infrastructure",
        content:
          "Discover how sustainable infrastructure, such as green roofs and rain gardens, can improve urban ecosystems.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Community Engagement and Planning",
        content:
          "Learn how community involvement is crucial for successful sustainable urban planning projects.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Environment",
    tags: [
      "Sustainable Urban Planning",
      "Green Cities",
      "Eco-Friendly Infrastructure",
    ],
    comments: [
      {
        id: "15",
        user: {
          name: "Julian",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "It's amazing to see cities incorporating more green spaces. It really enhances the quality of life for residents.",
        date: "21 February 2025",
      },
    ],
  },
  {
    id: "sustainable-food-systems-2025",
    title: "Sustainable Food Systems in 2025: Innovations for a Greener Future",
    heroImage: "/lastGreen.jpeg",
    date: "25 February 2025",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore the latest innovations in sustainable food systems, from plant-based diets to regenerative agriculture.",
    chapters: [
      {
        title: "Plant-Based Diets and Nutrition",
        content:
          "Discover the health and environmental benefits of adopting plant-based diets.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Regenerative Agriculture Practices",
        content:
          "Learn about regenerative farming methods that enhance soil health and biodiversity.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Reducing Food Waste and Sustainable Packaging",
        content:
          "Explore strategies for minimizing food waste and adopting sustainable packaging solutions.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Lifestyle",
    tags: ["Sustainable Food", "Plant-Based Diets", "Regenerative Agriculture"],
    comments: [
      {
        id: "16",
        user: {
          name: "Ethan",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I've started reducing my meat intake and it's made a big difference in my carbon footprint.",
        date: "26 February 2025",
      },
    ],
  },
  {
    id: "sustainable-technology-advancements-2025",
    title:
      "Sustainable Technology Advancements in 2025: Innovations for a Greener Future",
    heroImage: "/susL.webp",
    date: "1 March 2025",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore the latest sustainable technology innovations shaping a greener future.",
    chapters: [
      {
        title: "Renewable Energy Solutions",
        content:
          "Discover advancements in renewable energy sources like solar and wind power.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Eco-Friendly Gadgets and Devices",
        content:
          "Learn about sustainable gadgets and devices designed to reduce electronic waste.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
      {
        title: "Green Computing and Data Centers",
        content:
          "Explore how green computing practices can reduce energy consumption and environmental impact.",
        images: ["/placeholder.svg?height=400&width=600"],
      },
    ],
    category: "Technology",
    tags: ["Sustainable Tech", "Green Innovations", "Eco-Friendly Gadgets"],
    comments: [
      {
        id: "17",
        user: {
          name: "Lucas",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "The advancements in renewable energy are truly inspiring. Thanks for sharing this information!",
        date: "2 March 2025",
      },
    ],
  },
];

export const popularPosts = [
  {
    id: "1",
    title: "The Evolution of Cinema: From Silent Films to Streaming",
    image: "/evoCine.webp",
    category: "Entertainment",
  },
  {
    id: "2",
    title: "Iconic Celebrity Collaborations in Music and Film",
    image: "/Hollywood.jpeg",
    category: "Entertainment",
  },
  {
    id: "3",
    title: "The Impact of Climate: Our Next Generation",
    image: "/climatIM.webp",
    category: "Environment",
  },
];

export const categories = [
  { name: "Beauty", count: 12 },
  { name: "Business", count: 8 },
  { name: "Fashion", count: 15 },
  { name: "Lifestyle", count: 25 },
  { name: "Travel", count: 18 },
];
