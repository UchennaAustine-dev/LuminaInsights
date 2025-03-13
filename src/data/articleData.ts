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
          "Choosing eco-friendly accommodations is a great way to start your sustainable travel journey. Learn about hotels and resorts that prioritize environmental conservation. Look for certifications like LEED or Green Globe, which indicate a commitment to sustainability. Consider staying in locally-owned guesthouses or eco-lodges that support the local economy and minimize environmental impact. Ask about their water and energy conservation practices, waste reduction programs, and commitment to supporting local communities. When booking, inquire about their use of renewable energy, organic food sourcing, and waste management strategies.",
        images: [
          "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Green Transportation",
        content:
          "From electric vehicles to public transport, explore the best ways to travel sustainably. When possible, opt for train travel over flying, as trains generally have a lower carbon footprint. Within cities, utilize public transportation systems like buses, trams, and subways. Consider renting electric scooters or bicycles for shorter distances. If you need to rent a car, choose a hybrid or electric model. Offset your carbon emissions by donating to reputable carbon offset programs that invest in renewable energy projects or reforestation efforts. Walk or bike whenever possible to fully immerse yourself in the local culture and reduce your impact.",
        images: [
          "https://images.pexels.com/photos/417334/pexels-photo-417334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Eco-Tourism Activities",
        content:
          "Engage in activities that support local communities and protect the environment, such as wildlife conservation and sustainable farming. Choose tour operators that are committed to responsible tourism practices, such as minimizing waste, respecting local cultures, and supporting conservation efforts. Participate in activities like tree planting, beach cleanups, or wildlife monitoring programs. When visiting natural areas, follow Leave No Trace principles: pack out everything you pack in, stay on marked trails, and avoid disturbing wildlife or vegetation. Support local artisans and businesses by purchasing locally made souvenirs and crafts.  Respect local customs and traditions to ensure your visit is culturally sensitive and beneficial to the local community.",
        images: [
          "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Explore the benefits of buying second-hand clothing and how it reduces waste in the fashion industry. Thrift stores, consignment shops, and online platforms offer a wide selection of pre-owned clothing at affordable prices. By buying second-hand, you extend the life cycle of garments and reduce the demand for new production, which consumes significant resources and energy. Look for unique vintage pieces or designer items at a fraction of the original cost. Consider hosting clothing swaps with friends to refresh your wardrobe without contributing to waste. Donating your unwanted clothing to charity or reselling it online also contributes to the circular economy and reduces textile waste.",
        images: [
          "https://images.pexels.com/photos/279822/pexels-photo-279822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Eco-Friendly Fabrics",
        content:
          "Learn about sustainable fabrics like organic cotton and recycled materials that are changing the fashion landscape. Organic cotton is grown without the use of harmful pesticides and fertilizers, making it a more environmentally friendly alternative to conventional cotton. Recycled materials, such as recycled polyester made from plastic bottles, reduce waste and conserve resources. Other sustainable fabrics include hemp, linen, bamboo, and Tencel (Lyocell), which are derived from renewable resources and require less water and energy to produce. When purchasing new clothing, check labels for sustainable fabric certifications like GOTS (Global Organic Textile Standard) or OEKO-TEX. Consider the entire life cycle of the garment, including its durability and end-of-life disposal options.",
        images: [
          "https://images.pexels.com/photos/940805/pexels-photo-940805.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Capsule Wardrobe",
        content:
          "Discover how adopting a capsule wardrobe can reduce your environmental impact while maintaining your style. A capsule wardrobe consists of a limited number of versatile clothing items that can be mixed and matched to create a variety of outfits. By carefully curating your wardrobe with classic, timeless pieces, you can reduce the need for constant consumption and minimize waste. Choose high-quality items that are durable and long-lasting. Opt for neutral colors and simple designs that can be easily paired with other items in your wardrobe. Plan your outfits in advance to avoid impulse purchases and ensure you're making the most of your existing wardrobe. A capsule wardrobe simplifies your life, saves you money, and reduces your environmental footprint.",
        images: [
          "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Explore the benefits of meditation and mindfulness in reducing stress and improving mental clarity. Meditation involves focusing your attention on a single point, such as your breath, a sound, or a visual image, to calm the mind and cultivate inner peace. Mindfulness is the practice of paying attention to the present moment without judgment. Regular meditation and mindfulness practices can reduce stress, anxiety, and depression, improve focus and concentration, and enhance overall well-being.  Try different meditation techniques like guided meditation, walking meditation, or body scan meditation to find what works best for you.  Incorporate mindfulness into your daily activities, such as eating, walking, or working, to become more present and engaged in your life.",
        images: [
          "https://images.pexels.com/photos/1557295/pexels-photo-1557295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Nature Connection",
        content:
          "Discover how spending time in nature can enhance your mental and physical health. Studies have shown that spending time in nature can reduce stress hormones, lower blood pressure, and boost the immune system. Nature provides a sense of calm and tranquility that can help to restore mental and emotional balance. Engage in activities like hiking, camping, gardening, or simply spending time in a park or forest.  Bring nature indoors by adding plants to your home or office.  Listen to nature sounds or watch nature documentaries to connect with the natural world even when you're indoors.  Connecting with nature can improve your mood, reduce stress, and enhance your overall well-being.",
        images: [
          "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Gratitude Practice",
        content:
          "Learn how practicing gratitude can shift your perspective and improve your overall well-being. Gratitude is the feeling of appreciation for the good things in your life. Practicing gratitude involves consciously focusing on the things you are grateful for, whether it's your health, your relationships, your home, or your job. Keeping a gratitude journal, writing thank-you notes, or simply expressing your appreciation to others can boost your mood, reduce stress, and improve your overall sense of happiness and well-being.  Start a daily gratitude practice by listing three things you are grateful for each day.  Express your gratitude to others by telling them how much you appreciate them.  Gratitude shifts your focus from what you lack to what you have, fostering a sense of contentment and joy.",
        images: [
          "https://images.pexels.com/photos/4021777/pexels-photo-4021777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Explore the benefits of plant-based diets for health and environmental sustainability. Plant-based diets, which emphasize fruits, vegetables, grains, legumes, nuts, and seeds, have been linked to numerous health benefits, including reduced risk of heart disease, type 2 diabetes, and certain cancers. They also have a lower environmental impact than diets that are high in animal products. Animal agriculture is a major contributor to greenhouse gas emissions, deforestation, and water pollution. By reducing your consumption of meat and dairy, you can significantly reduce your environmental footprint. Experiment with plant-based recipes, explore new cuisines, and discover the deliciousness of plant-based eating.  Try meatless Mondays or gradually incorporate more plant-based meals into your diet each week.  Explore plant-based alternatives to your favorite animal-based foods, such as tofu, tempeh, and plant-based milk.",
        images: [
          "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Local and Seasonal Eating",
        content:
          "Discover how choosing local and seasonal produce can reduce carbon footprint and support local farmers. Buying local and seasonal produce reduces the distance that food travels from farm to table, minimizing transportation emissions and supporting local economies. Seasonal produce is also fresher, tastier, and often more nutritious than produce that is shipped from far away. Visit farmers' markets, join a CSA (Community Supported Agriculture) program, or shop at local grocery stores that prioritize local and seasonal products. Plan your meals around what's in season to take advantage of the freshest and most flavorful produce. Support local farmers by buying directly from them whenever possible. Eating locally and seasonally reduces your carbon footprint, supports local farmers, and enhances your culinary experience.",
        images: [
          "https://images.pexels.com/photos/414965/pexels-photo-414965.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Reducing Food Waste",
        content:
          "Learn strategies for minimizing food waste and making the most of your grocery shopping. Food waste is a major environmental problem, contributing to greenhouse gas emissions and wasting valuable resources. Plan your meals in advance, make a shopping list, and only buy what you need. Store food properly to prevent spoilage. Use leftovers creatively and compost food scraps. Donate excess food to food banks or shelters.  Use apps that connect consumers with restaurants and grocery stores to purchase surplus food at a discounted price.  Learn how to properly store different types of food to extend their shelf life. Reducing food waste saves you money, conserves resources, and reduces your environmental impact.",
        images: [
          "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Explore eco-friendly materials for furniture and decor, such as reclaimed wood and bamboo. Reclaimed wood, sourced from old buildings, barns, or fallen trees, gives furniture a unique look while reducing deforestation. Bamboo is a fast-growing, renewable resource that's strong and versatile for furniture and flooring. Other sustainable options include organic cotton, linen, hemp, and recycled glass. When buying new furniture, look for pieces made from sustainable materials and finished with non-toxic paints and adhesives.  Look for furniture with certifications like FSC (Forest Stewardship Council) to ensure it comes from responsibly managed forests.  Consider repurposing old furniture or buying second-hand items to reduce waste and save money.",
        images: [
          "https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Energy Efficiency",
        content:
          "Learn how to optimize your home's energy efficiency with smart lighting and insulation. Switch to LED lighting, which uses up to 75% less energy and lasts much longer than traditional incandescent bulbs. Install a smart thermostat to regulate your home's temperature and save energy when you're away. Improve your home's insulation to reduce heat loss in the winter and heat gain in the summer, lowering your energy bills. Seal any air leaks around windows, doors, and pipes to prevent drafts and improve energy efficiency.  Use energy-efficient appliances and electronics.  Unplug electronics when not in use to prevent phantom energy drain. Consider installing solar panels to generate your own electricity and reduce your reliance on fossil fuels.",
        images: [
          "https://images.pexels.com/photos/1579624/pexels-photo-1579624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Minimalist Design",
        content:
          "Discover how adopting a minimalist design approach can reduce waste and enhance your living space. Minimalist design focuses on simplicity, functionality, and decluttering. By reducing the number of items in your home, you can create a more peaceful and organized living space. Choose high-quality, durable items that you love and use regularly. Avoid buying unnecessary items that will only end up collecting dust. Donate or sell unwanted items to reduce waste and give them a new life.  Focus on creating a functional and clutter-free space that promotes relaxation and well-being.  A minimalist approach to home decor reduces consumption, saves money, and creates a more sustainable and fulfilling lifestyle.",
        images: [
          "https://images.pexels.com/photos/1168069/pexels-photo-1168069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Explore the benefits of natural skincare ingredients and how they promote healthier skin. Natural skincare products are made with ingredients derived from plants, minerals, and other natural sources, avoiding harsh chemicals, synthetic fragrances, and artificial colors. Look for ingredients like aloe vera, shea butter, jojoba oil, and essential oils, which can nourish and hydrate the skin without causing irritation. Read labels carefully and choose products that are certified organic or cruelty-free. Avoid products that contain parabens, sulfates, phthalates, and other harmful chemicals.  Make your own DIY skincare products using natural ingredients like honey, avocado, and oatmeal.  Test new products on a small area of skin before applying them to your entire face to avoid allergic reactions. Switching to natural skincare improves your skin's health, reduces your exposure to toxins, and supports sustainable agriculture.",
        images: [
          "https://images.pexels.com/photos/5938435/pexels-photo-5938435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Eco-Friendly Makeup",
        content:
          "Discover sustainable makeup options that are cruelty-free and environmentally friendly. Look for makeup brands that are committed to using sustainable packaging, such as refillable containers, recycled materials, and minimal packaging. Choose products that are cruelty-free, meaning they are not tested on animals. Opt for natural and organic makeup ingredients that are gentle on your skin and the environment. Avoid products that contain synthetic dyes, fragrances, and preservatives.  Use reusable makeup applicators and sponges.  Properly dispose of old makeup containers through recycling programs. Support brands that are transparent about their ingredients and manufacturing processes. Switching to eco-friendly makeup reduces your environmental impact and improves your skin's health.",
        images: [
          "https://images.pexels.com/photos/8926257/pexels-photo-8926257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Zero Waste Beauty",
        content:
          "Learn how to reduce waste in your beauty routine by choosing refillable products and minimal packaging. Choose products with minimal or no packaging, such as solid shampoo bars, conditioner bars, and package-free soaps. Opt for refillable containers for your favorite skincare and makeup products. Make your own DIY beauty products using natural ingredients. Use reusable cotton pads, makeup wipes, and applicators. Recycle empty beauty product containers whenever possible.  Choose products with concentrated formulas that require less packaging and last longer.  Support brands that offer recycling programs for their empty product containers.  Adopting zero-waste beauty practices significantly reduces your environmental footprint and simplifies your beauty routine.",
        images: [
          "https://images.pexels.com/photos/8266153/pexels-photo-8266153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Discover advancements in renewable energy sources like solar and wind power. Solar technology has advanced significantly, with more efficient solar panels and improved energy storage solutions. Wind power is also becoming more affordable and accessible, with larger wind turbines and offshore wind farms generating more electricity. Other renewable energy sources, such as geothermal, hydro, and biomass, are also being developed and implemented. Government incentives and technological advancements are driving the growth of renewable energy, making it a viable alternative to fossil fuels.  Invest in renewable energy certificates (RECs) to support renewable energy projects.  Consider installing a home energy storage system to store excess solar energy. Investing in renewable energy reduces greenhouse gas emissions, creates jobs, and improves energy security.",
        images: [
          "https://images.pexels.com/photos/39579/solar-cell-solar-panel-sun-energy-39579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Eco-Friendly Gadgets",
        content:
          "Learn about sustainable gadgets and devices designed to reduce electronic waste. Eco-friendly gadgets are designed to minimize their environmental impact throughout their life cycle, from production to disposal. Look for gadgets made from recycled materials, with energy-efficient components, and with long lifespans. Consider products like solar-powered chargers, bamboo keyboards, and refurbished electronics. Properly dispose of old electronics through recycling programs to prevent them from ending up in landfills, where they can release harmful toxins into the environment.  Extend the lifespan of your electronics by properly maintaining them and repairing them when necessary.  Consider purchasing refurbished electronics to reduce electronic waste. Supporting eco-friendly gadgets reduces electronic waste and promotes a more sustainable tech industry.",
        images: [
          "https://images.pexels.com/photos/717395/pexels-photo-717395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Green Computing",
        content:
          "Explore how green computing practices can reduce energy consumption and environmental impact. Green computing involves using computers and IT resources more efficiently to reduce energy consumption, minimize waste, and promote sustainability. Turn off your computer when you're not using it, enable power-saving settings, and use energy-efficient monitors and peripherals. Consider using cloud computing services, which can reduce energy consumption by sharing resources among multiple users. Recycle old computers and electronics properly.  Use power management software to automatically adjust your computer's energy settings.  Print documents double-sided and use recycled paper. Promote green computing practices in your workplace or school to reduce your environmental impact.",
        images: [
          "https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
          "Explore the importance of green spaces in urban areas for both residents and the environment. Green spaces, such as parks, gardens, and green roofs, provide numerous benefits for urban residents, including improved air quality, reduced noise pollution, and enhanced mental and physical health. They also support biodiversity, provide habitats for wildlife, and help to mitigate the effects of climate change. Incorporate green spaces into urban planning projects, create more parks and gardens, and promote the use of green roofs and vertical gardens.  Create community gardens where residents can grow their own food.  Preserve existing green spaces and protect them from development. Green spaces make cities more livable, sustainable, and resilient.",
        images: [
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Sustainable Infrastructure",
        content:
          "Discover how sustainable infrastructure, such as green roofs and rain gardens, can improve urban ecosystems. Sustainable infrastructure includes green roofs, rain gardens, permeable pavements, and other innovative technologies that help to manage stormwater, reduce pollution, and improve urban ecosystems. Green roofs absorb rainwater, reduce runoff, and provide insulation, lowering energy costs. Rain gardens filter stormwater and remove pollutants, improving water quality. Permeable pavements allow rainwater to infiltrate the ground, replenishing groundwater supplies.  Invest in public transportation systems to reduce traffic congestion and air pollution.  Use recycled materials in construction projects whenever possible. Investing in sustainable infrastructure makes cities more resilient to climate change and improves the quality of life for residents.",
        images: [
          "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Community Engagement",
        content:
          "Learn how community involvement is crucial for successful sustainable urban planning projects. Community engagement is essential for ensuring that urban planning projects meet the needs of residents and are supported by the community. Involve residents in the planning process through public meetings, workshops, and surveys. Solicit feedback from residents on proposed projects and incorporate their suggestions into the final design. Empower residents to participate in the implementation and maintenance of urban planning projects.  Educate residents about sustainable urban planning practices.  Create incentives for residents to adopt sustainable practices, such as installing green roofs or using public transportation. Community engagement fosters a sense of ownership and pride in the community and ensures that urban planning projects are sustainable and beneficial for all residents.",
        images: [
          "https://images.pexels.com/photos/3727480/pexels-photo-3727480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
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
      "Explore sustainable education initiatives that prepare students for a greener future.",
    chapters: [
      {
        title: "Environmental Education",
        content:
          "Integrate environmental education into school curricula to teach students about environmental issues, conservation, and sustainability. Environmental education helps students understand the interconnectedness of ecosystems, the impact of human activities on the environment, and the importance of protecting natural resources. Encourage students to participate in hands-on activities, such as nature walks, gardening, and recycling projects. Promote environmental awareness through school-wide campaigns, workshops, and guest speakers.  Incorporate environmental themes into all subjects, not just science.  Encourage critical thinking and problem-solving skills to address environmental challenges. Environmental education empowers students to become responsible stewards of the environment and advocates for sustainability.",
        images: [
          "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Sustainability in Schools",
        content:
          "Implement sustainability practices in schools to reduce their environmental footprint and create a culture of sustainability. Reduce energy consumption by using energy-efficient lighting, appliances, and heating/cooling systems. Conserve water by installing low-flow toilets and faucets and promoting water conservation practices. Reduce waste by implementing recycling and composting programs. Purchase eco-friendly supplies and materials.  Establish a green team of students, teachers, and staff to lead sustainability initiatives.  Conduct regular energy audits to identify areas for improvement. Engage students, teachers, and staff in sustainability initiatives to foster a sense of ownership and responsibility. Sustainable schools provide a healthy and environmentally responsible learning environment for students.",
        images: [
          "https://images.pexels.com/photos/3768986/pexels-photo-3768986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Outdoor Learning",
        content:
          "Promote outdoor learning experiences to connect students with nature and enhance their understanding of environmental concepts. Take students on field trips to parks, forests, gardens, and other natural areas. Create outdoor classrooms and learning gardens on school grounds. Encourage students to participate in nature-based activities, such as hiking, camping, and wildlife observation.  Incorporate outdoor learning into all subjects, not just science.  Use the outdoors as a laboratory for hands-on learning and exploration.  Outdoor learning provides students with opportunities to explore, discover, and connect with nature, fostering a sense of wonder and appreciation for the environment.",
        images: [
          "https://images.pexels.com/photos/7129620/pexels-photo-7129620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
    ],
    category: "Education",
    tags: ["Sustainable Education", "Green Schools", "Environmental Awareness"],
    comments: [
      {
        id: "10",
        user: {
          name: "Laura",
          avatar: "/placeholder.svg?height=50&width=50",
        },
        content:
          "I'm so glad to see schools focusing on sustainability. It's important to educate the next generation about environmental issues.",
        date: "31 December 2023",
      },
    ],
  },
  {
    id: "corporate-sustainability-strategies",
    title: "Corporate Sustainability Strategies: Building a Green Business",
    heroImage:
      "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    date: "5 January 2024",
    author: authors["alex-gonzales"],
    excerpt:
      "Explore corporate sustainability strategies for building a green and responsible business.",
    chapters: [
      {
        title: "Environmental Management Systems",
        content:
          "Implement environmental management systems (EMS) to manage and reduce your company's environmental impact. An EMS provides a framework for identifying, controlling, and monitoring your company's environmental aspects, such as energy consumption, waste generation, and water usage. Obtain ISO 14001 certification to demonstrate your commitment to environmental management. Set environmental goals and targets and track your progress over time. An EMS helps you improve your environmental performance, reduce costs, and enhance your reputation.",
        images: [
          "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Supply Chain Sustainability",
        content:
          "Promote sustainability throughout your supply chain by working with suppliers who share your commitment to environmental and social responsibility. Establish a code of conduct for suppliers that outlines your sustainability expectations. Assess your suppliers' environmental and social performance. Provide training and support to help suppliers improve their sustainability practices. Supply chain sustainability reduces your company's environmental and social risks and enhances your brand reputation.",
        images: [
          "https://images.pexels.com/photos/259924/pexels-photo-259924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
      {
        title: "Stakeholder Engagement",
        content:
          "Engage with your stakeholders, including employees, customers, investors, and communities, to understand their sustainability expectations and concerns. Conduct stakeholder surveys and interviews. Establish a stakeholder advisory panel. Communicate your sustainability performance to stakeholders through regular reports and disclosures. Stakeholder engagement builds trust and transparency and helps you align your sustainability efforts with stakeholder needs.",
        images: [
          "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ],
      },
    ],
    category: "Business",
    tags: [
      "Corporate Sustainability",
      "Green Business",
      "Environmental Management",
    ],
    comments: [
      {
        id: "11",
        user: {
          name: "Kevin",
          avatar:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=50&w=50",
        },
        content:
          "It's great to see companies taking sustainability seriously. It's not just good for the environment, it's good for business.",
        date: "6 January 2024",
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
