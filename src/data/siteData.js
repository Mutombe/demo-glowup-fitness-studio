export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Bebas Neue", body: "Inter", display: "Bebas Neue" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "GlowUp Fitness Studio",
    legalName: "GlowUp Fitness Studio",
    tagline: "Unleash Your Strongest Self",
    description: "GlowUp Fitness Studio is Harare's premium boutique fitness destination. We combine cutting-edge equipment, expert coaching, and a high-energy atmosphere to help you transform your body and mind. Whether you are a beginner or a competitive athlete, our personalised programs and supportive community will push you past your limits.",
    phone: "+263 78 486 8636",
    phoneRaw: "+263784868636",
    whatsappNumber: "263784868636",
    email: "info@glowupfitness.co.zw",
    address: "Mbuya Nehanda Street, & Albion St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 1,
    established: "2021",
    yearsExperience: "4+",
    projectsCompleted: "500+",
    employees: "12+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "5:00 AM - 9:00 PM" },
      { day: "Saturday", time: "6:00 AM - 2:00 PM" },
      { day: "Sunday", time: "7:00 AM - 12:00 PM" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "glowup-fitness-cookie-consent",
    socialLinks: { facebook: "", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "GlowUp", logoLine2: "Fitness" },

  hero: {
    badge: "Harare's Premier Boutique Fitness Studio",
    titleParts: [
      { text: "UNLEASH YOUR " },
      { text: "STRONGEST", highlight: true },
      { text: " SELF." },
    ],
    subtitle: "World-class equipment. Expert coaches. A community that refuses to let you quit. Your transformation starts the moment you walk through our doors.",
    ctaPrimary: "Start Your Journey",
    ctaSecondary: "View Programs",
    trustBadge: "500+ Transformations",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Modern gym floor with premium equipment" },
      { url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=85", alt: "Intense group training session" },
      { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85", alt: "Weight training area" },
    ],
  },

  stats: [
    { number: "500+", label: "Members Transformed" },
    { number: "4+", label: "Years Strong" },
    { number: "12", label: "Expert Coaches" },
    { number: "98%", label: "Member Retention" },
  ],

  servicesPreview: [
    { title: "Personal Training", desc: "One-on-one coaching tailored to your goals, body type, and schedule. Every rep counts when your coach has eyes only on you.", icon: "Heart" },
    { title: "Group Fitness", desc: "High-energy classes from HIIT to yoga. The group keeps you accountable, the music keeps you moving.", icon: "UsersThree" },
    { title: "Strength & Conditioning", desc: "Build raw power and athletic performance with periodised programs designed by certified strength coaches.", icon: "Briefcase" },
    { title: "Nutrition Coaching", desc: "Fuel your transformation with personalised meal plans and ongoing nutritional guidance from our certified dietitians.", icon: "Leaf" },
    { title: "Weight Loss Programs", desc: "Science-backed fat loss protocols combining training, nutrition, and accountability for sustainable results.", icon: "Star" },
    { title: "Sports Performance", desc: "Elevate your game with sport-specific conditioning, agility drills, and recovery programming.", icon: "Lightbulb" },
  ],

  services: {
    heroTitle: "Our Programs",
    heroSubtitle: "Six pathways to your strongest self. Every program is built on science, driven by passion.",
    items: [
      { title: "Personal Training", slug: "personal-training", desc: "One-on-one coaching tailored to your unique goals, body composition, and lifestyle. Your dedicated coach designs every session around you -- tracking progress, adjusting intensity, and ensuring perfect form on every movement.", features: ["Body Composition Analysis", "Custom Programming", "Form Correction", "Progress Tracking", "Flexible Scheduling", "Nutritional Guidance"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Group Fitness", slug: "group-fitness", desc: "From heart-pounding HIIT sessions to restorative yoga flows, our group classes deliver variety, community, and results. Led by our most energetic coaches, every class challenges all fitness levels.", features: ["HIIT Classes", "Spin Sessions", "Yoga & Pilates", "Boxing Fitness", "Dance Cardio", "Core Blast"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
      { title: "Strength & Conditioning", slug: "strength-conditioning", desc: "Build functional strength, raw power, and athletic resilience with our periodised strength programs. Whether you want to deadlift twice your bodyweight or simply move without pain, our coaches will get you there.", features: ["Periodised Programs", "Olympic Lifting", "Powerlifting", "Functional Movement", "Injury Prevention", "Recovery Protocols"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Nutrition Coaching", slug: "nutrition-coaching", desc: "Training is only half the equation. Our certified nutritionists create personalised meal plans that fuel your workouts, accelerate recovery, and support sustainable body composition changes.", features: ["Macro Planning", "Meal Prep Guides", "Supplement Advice", "Weekly Check-ins", "Allergy Accommodations", "Competition Prep Diets"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
      { title: "Weight Loss Programs", slug: "weight-loss", desc: "Our 12-week transformation program combines progressive training, nutritional coaching, and weekly accountability sessions to deliver lasting results. No crash diets. No gimmicks. Just science and consistency.", features: ["12-Week Structure", "Weekly Weigh-ins", "Body Scans", "Meal Plans", "Group Support", "Before & After Documentation"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" },
      { title: "Sports Performance", slug: "sports-performance", desc: "Whether you play rugby, football, or athletics, our sport-specific conditioning programs give you the competitive edge. Speed, agility, power, and endurance -- we train every attribute that wins.", features: ["Speed Training", "Agility Drills", "Plyometrics", "Sport-Specific Conditioning", "Recovery Programming", "Competition Prep"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Transformations",
    heroSubtitle: "Real members. Real results. Every transformation tells a story of discipline and community.",
    items: [
      { title: "12-Week Body Recomposition", slug: "12-week-recomp", category: "Weight Loss", location: "Harare", desc: "A complete body transformation combining strength training and nutritional coaching.", client: "Member Spotlight", services: ["Personal Training", "Nutrition Coaching"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "Marathon Prep Program", slug: "marathon-prep", category: "Endurance", location: "Harare", desc: "16-week endurance program from recreational jogger to marathon-ready.", client: "Athletics Client", services: ["Sports Performance", "Nutrition"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "Strength Foundation", slug: "strength-foundation", category: "Strength", location: "Harare", desc: "From zero gym experience to confidently lifting twice bodyweight.", client: "New Member", services: ["Strength & Conditioning"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
      { title: "Post-Natal Recovery", slug: "post-natal", category: "Wellness", location: "Harare", desc: "Tailored post-natal program rebuilding strength and confidence safely.", client: "Wellness Client", services: ["Personal Training", "Recovery"], image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", images: ["https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"] },
      { title: "Corporate Wellness", slug: "corporate-wellness", category: "Group", location: "Harare", desc: "6-month corporate wellness program for 40 employees.", client: "Corporate Client", services: ["Group Fitness", "Nutrition"], image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "GlowUp completely changed my relationship with fitness. The coaches genuinely care about your progress, and the community keeps you showing up even on the days you want to quit.", name: "Tatenda Moyo", role: "Member, 12-Week Program", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "I lost 18kg in 16 weeks and gained more confidence than I have had in years. The personal training at GlowUp is on another level.", name: "Rudo Chikwanha", role: "Weight Loss Client", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "As a rugby player, I needed sport-specific training. The strength program at GlowUp gave me the edge I needed to make the provincial squad.", name: "Kudzai Nziramasanga", role: "Sports Performance Client", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "The group fitness classes are electric. I have tried gyms all over Harare, and nothing comes close to the energy and professionalism.", name: "Nyasha Tambura", role: "Group Fitness Member", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Born from a belief that fitness should be transformative, not intimidating.",
    story: [
      "GlowUp Fitness Studio was founded in 2021 with a simple mission: to create a fitness environment where everyone feels welcome, challenged, and supported.",
      "Located in the heart of Harare on Mbuya Nehanda Street, our studio combines premium equipment, expert coaching, and a community-first philosophy that has attracted over 500 members.",
      "We believe fitness is not just about aesthetics. It is about building discipline, confidence, and resilience that carries into every area of your life.",
    ],
    values: [
      { title: "Expert Coaching", desc: "Every coach is certified, experienced, and invested in your progress." },
      { title: "Community First", desc: "We are a family, not just a gym. Members support each other through every rep." },
      { title: "Science-Backed", desc: "Every program is built on exercise science, not trends or gimmicks." },
      { title: "Results Guaranteed", desc: "Follow the program, trust the process, and results will come." },
    ],
    team: [
      { name: "Tinashe Mupfupi", role: "Founder & Head Coach", bio: "Certified strength and conditioning specialist with 10 years of coaching experience.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Farai Mukwashi", role: "Nutrition Coach", bio: "Registered dietitian specialising in sports nutrition and body recomposition.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Brian Chideme", role: "Group Fitness Lead", bio: "Former national athlete turned fitness instructor with infectious energy.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
    ],
  },

  reviews: {
    heroTitle: "Member Stories",
    heroSubtitle: "Real voices from our GlowUp community.",
    items: [
      { text: "GlowUp completely changed my relationship with fitness. The coaches genuinely care.", name: "Tatenda Moyo", role: "Member", rating: 5 },
      { text: "I lost 18kg in 16 weeks. The personal training is on another level.", name: "Rudo Chikwanha", role: "Weight Loss Client", rating: 5 },
      { text: "The strength and conditioning program gave me the edge for provincial rugby.", name: "Kudzai Nziramasanga", role: "Athlete", rating: 5 },
      { text: "Group fitness classes are electric. Nothing in Harare comes close.", name: "Nyasha Tambura", role: "Member", rating: 5 },
      { text: "Best gym in Harare. The equipment, the coaches, the vibe.", name: "Memory Dube", role: "Member", rating: 5 },
      { text: "Post-natal program helped me rebuild strength safely and confidently.", name: "Chiedza Maposa", role: "Wellness Client", rating: 5 },
      { text: "From zero push-ups to bench pressing my bodyweight. GlowUp made it possible.", name: "Tafadzwa Chikumba", role: "Strength Client", rating: 5 },
      { text: "Corporate wellness program transformed our office culture.", name: "Patrick Nhamo", role: "Corporate Client", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join the Team",
    heroSubtitle: "Passionate about fitness? We want coaches who live it.",
    positions: [
      { title: "Personal Trainer", department: "Coaching", location: "Harare", type: "Full-time", desc: "Deliver world-class personal training to our growing member base." },
      { title: "Group Fitness Instructor", department: "Group Programs", location: "Harare", type: "Part-time", desc: "Lead high-energy group classes across multiple formats." },
    ],
  },

  contact: {
    heroTitle: "Start Your Transformation",
    heroSubtitle: "Book a free consultation and see what GlowUp can do for you.",
    formTitle: "Get In Touch",
    formSubtitle: "Fill in your details and we will respond within 24 hours.",
  },

  homeCta: {
    title: "YOUR BODY YOUR RULES",
    subtitle: "Stop waiting for Monday. Your transformation starts with a single decision. Walk in, work hard, glow up.",
    ctaPrimary: "Book Free Consultation",
    ctaSecondary: "WhatsApp Us",
    whatsappText: "Hi GlowUp! I would like to book a free consultation.",
    backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85",
  },

  footer: {
    description: "Harare's premier boutique fitness studio. Personalised coaching, world-class equipment, and a community that refuses to let you quit.",
    bottomLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export default siteData;
