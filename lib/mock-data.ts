import type {
  ActivityPointDTO,
  BookingDetailDTO,
  CategoryDTO,
  ConversationThreadDTO,
  DashboardSnapshotDTO,
  MessageDTO,
  ProviderDTO,
  ReviewDTO,
  RevenuePointDTO,
  ServiceDetailDTO,
} from "@/types/dto";

export const categories: CategoryDTO[] = [
  {
    slug: "language-coaching",
    name: "Language coaching",
    description: "Conversation-driven tutoring with local cultural context.",
    accent: "from-[#1e5a52] to-[#8ea98f]",
    icon: "Languages",
  },
  {
    slug: "creative-arts",
    name: "Creative arts",
    description: "Studio workshops, portfolio critiques, and craft intensives.",
    accent: "from-[#8b5e3c] to-[#d2ad7d]",
    icon: "Palette",
  },
  {
    slug: "tutoring",
    name: "Tutoring",
    description: "Academic support, exam prep, and subject deep-dives.",
    accent: "from-[#10344d] to-[#7ca0b8]",
    icon: "GraduationCap",
  },
  {
    slug: "fitness",
    name: "Fitness",
    description: "Private coaching, outdoor movement, and wellness sessions.",
    accent: "from-[#31462a] to-[#9cb88f]",
    icon: "Dumbbell",
  },
  {
    slug: "music",
    name: "Music",
    description: "Lessons, rehearsals, and performance confidence sessions.",
    accent: "from-[#40263a] to-[#b987a3]",
    icon: "Music4",
  },
  {
    slug: "photography",
    name: "Photography",
    description: "Portrait sessions, editing mentoring, and brand imagery.",
    accent: "from-[#302f2b] to-[#ada18b]",
    icon: "Camera",
  },
  {
    slug: "career",
    name: "Career",
    description: "Interview strategy, CV workshops, and leadership coaching.",
    accent: "from-[#352d22] to-[#bca079]",
    icon: "BriefcaseBusiness",
  },
];

export const providers: ProviderDTO[] = [
  {
    id: "provider-1",
    handle: "lea-suter",
    fullName: "Lea Suter",
    headline: "Swiss German conversation coach",
    bio: "Lea runs immersive conversation walks and confidence-first language practice for expats settling into Zurich.",
    city: "Zurich",
    canton: "ZH",
    languages: ["English", "German", "Swiss German"],
    rating: 4.9,
    reviewCount: 88,
    responseTime: "Replies within 1 hour",
    repeatClientRate: 74,
    verified: true,
    avatarGradient: "from-[#19453f] to-[#8cb4a2]",
    specialties: ["Swiss German", "Relocation support", "Interview prep"],
    trustBadges: ["Identity verified", "Top response rate", "Local expert"],
  },
  {
    id: "provider-2",
    handle: "marc-delacour",
    fullName: "Marc Delacour",
    headline: "Portrait photographer for founders",
    bio: "Marc blends editorial direction with relaxed coaching to create modern portraits for personal brands and teams.",
    city: "Geneva",
    canton: "GE",
    languages: ["English", "French"],
    rating: 4.8,
    reviewCount: 61,
    responseTime: "Replies within 3 hours",
    repeatClientRate: 58,
    verified: true,
    avatarGradient: "from-[#3b2f27] to-[#c08f70]",
    specialties: ["Founder portraits", "LinkedIn refresh", "Mini brand shoots"],
    trustBadges: ["Background checked", "Five-star consistency"],
  },
  {
    id: "provider-3",
    handle: "sofia-keller",
    fullName: "Sofia Keller",
    headline: "Math tutor and Matura strategist",
    bio: "Sofia builds calm, rigorous study plans for students preparing for high-stakes exams in Basel and Bern.",
    city: "Basel",
    canton: "BS",
    languages: ["English", "German"],
    rating: 4.9,
    reviewCount: 103,
    responseTime: "Replies within 45 minutes",
    repeatClientRate: 82,
    verified: true,
    avatarGradient: "from-[#11354c] to-[#84b5d0]",
    specialties: ["Matura prep", "STEM tutoring", "Study systems"],
    trustBadges: ["Top rated", "Verified educator"],
  },
  {
    id: "provider-4",
    handle: "nico-bernoulli",
    fullName: "Nico Bernoulli",
    headline: "Private mobility and strength coach",
    bio: "Nico coaches outdoor and studio sessions focused on sustainable strength, posture, and movement confidence.",
    city: "Bern",
    canton: "BE",
    languages: ["English", "German", "Italian"],
    rating: 4.7,
    reviewCount: 44,
    responseTime: "Replies within 2 hours",
    repeatClientRate: 66,
    verified: true,
    avatarGradient: "from-[#2a4123] to-[#a9bd8e]",
    specialties: ["Mobility", "Strength", "Executive wellbeing"],
    trustBadges: ["Certified coach", "Repeat clients"],
  },
  {
    id: "provider-5",
    handle: "amelie-favre",
    fullName: "Amelie Favre",
    headline: "Career strategist for global professionals",
    bio: "Amelie helps ambitious professionals sharpen their narrative, compensation strategy, and interview performance.",
    city: "Lausanne",
    canton: "VD",
    languages: ["English", "French"],
    rating: 4.9,
    reviewCount: 37,
    responseTime: "Replies within 90 minutes",
    repeatClientRate: 70,
    verified: true,
    avatarGradient: "from-[#49352a] to-[#d1a986]",
    specialties: ["Interview prep", "CV positioning", "Promotion strategy"],
    trustBadges: ["Executive clients", "High conversion"],
  },
];

export const services: ServiceDetailDTO[] = [
  {
    id: "service-1",
    slug: "zurich-swiss-german-conversation-walks",
    title: "Swiss German conversation walks in Zurich",
    summary: "Confidence-building guided sessions through Zurich neighborhoods with practical speaking drills.",
    category: "language-coaching",
    city: "Zurich",
    priceChf: 95,
    durationLabel: "75 min",
    rating: 4.9,
    reviewCount: 88,
    popularityLabel: "Booked 34 times this month",
    mode: "hybrid",
    provider: {
      handle: "lea-suter",
      fullName: "Lea Suter",
      headline: "Swiss German conversation coach",
      verified: true,
      avatarGradient: "from-[#19453f] to-[#8cb4a2]",
    },
    heroGradient: "from-[#1a4f46] via-[#315f57] to-[#d3c7b5]",
    highlights: ["Neighborhood format", "Beginner-safe", "Relocation focused"],
    longDescription:
      "These sessions replace stiff classroom drills with practical speaking scenarios. You meet in Zurich, walk through real neighborhoods, and rehearse the phrases and rhythms that make everyday Swiss German feel usable.",
    deliverables: [
      "Pre-session needs alignment",
      "Live speaking prompts and pronunciation coaching",
      "Follow-up vocabulary recap",
    ],
    faqs: [
      {
        question: "Who is this best for?",
        answer:
          "Expats, new residents, and professionals who understand standard German but struggle in daily Swiss settings.",
      },
      {
        question: "Can I request a private location?",
        answer:
          "Yes. Private office and neighborhood requests are supported through request bookings.",
      },
    ],
    location: {
      city: "Zurich",
      canton: "ZH",
      district: "Kreis 4",
      venueLabel: "Meet near Helvetiaplatz or your central office",
      radiusKm: 12,
    },
    gallery: ["Old Town route", "Coffee debrief", "Pronunciation drills"],
    availability: [
      { day: "Tuesday", start: "09:00", end: "17:00" },
      { day: "Thursday", start: "10:00", end: "18:00" },
      { day: "Saturday", start: "08:00", end: "14:00" },
    ],
  },
  {
    id: "service-2",
    slug: "geneva-founder-portrait-session",
    title: "Founder portrait session in Geneva",
    summary: "Editorial portraits for personal brands, press kits, and launch campaigns.",
    category: "photography",
    city: "Geneva",
    priceChf: 420,
    durationLabel: "2 hours",
    rating: 4.8,
    reviewCount: 61,
    popularityLabel: "Featured this week",
    mode: "request",
    provider: {
      handle: "marc-delacour",
      fullName: "Marc Delacour",
      headline: "Portrait photographer for founders",
      verified: true,
      avatarGradient: "from-[#3b2f27] to-[#c08f70]",
    },
    heroGradient: "from-[#362920] via-[#7e5a46] to-[#e0d2c6]",
    highlights: ["Creative direction", "Wardrobe guidance", "Fast edit delivery"],
    longDescription:
      "For founders who need imagery that feels elevated but still human. Marc plans location, tone, and art direction around your public presence and target audience.",
    deliverables: [
      "Concept call and mood framing",
      "Guided shoot in Geneva",
      "20 retouched selects",
    ],
    faqs: [
      {
        question: "Do you shoot teams?",
        answer:
          "Yes, but team sessions are handled as custom requests with expanded scheduling.",
      },
      {
        question: "Can I get raw files?",
        answer: "Final edited delivery is included; raw files are not included in the base package.",
      },
    ],
    location: {
      city: "Geneva",
      canton: "GE",
      district: "Eaux-Vives",
      venueLabel: "Studio or on-location around central Geneva",
      radiusKm: 18,
    },
    gallery: ["Studio portraits", "Outdoor editorial", "Founder workspace set"],
    availability: [
      { day: "Monday", start: "13:00", end: "19:00" },
      { day: "Wednesday", start: "09:00", end: "17:00" },
      { day: "Friday", start: "09:00", end: "16:00" },
    ],
  },
  {
    id: "service-3",
    slug: "basel-math-matura-intensive",
    title: "Matura math intensive in Basel",
    summary: "Structured exam preparation with diagnostics, targeted drills, and stress-tested mock papers.",
    category: "tutoring",
    city: "Basel",
    priceChf: 110,
    durationLabel: "90 min",
    rating: 4.9,
    reviewCount: 103,
    popularityLabel: "Top rated in tutoring",
    mode: "instant",
    provider: {
      handle: "sofia-keller",
      fullName: "Sofia Keller",
      headline: "Math tutor and Matura strategist",
      verified: true,
      avatarGradient: "from-[#11354c] to-[#84b5d0]",
    },
    heroGradient: "from-[#0f3145] via-[#3d6f8d] to-[#d2dfeb]",
    highlights: ["Exam diagnostics", "Study system", "Parent summary optional"],
    longDescription:
      "A high-rigor tutoring format for students who need clarity fast. Sofia isolates weak spots, rebuilds fundamentals, and trains for timing under pressure.",
    deliverables: [
      "Skill-gap diagnostic",
      "Personalized problem set",
      "Follow-up action plan",
    ],
    faqs: [
      {
        question: "How often should I book?",
        answer:
          "One to two sessions per week works best during exam season, depending on your baseline.",
      },
      {
        question: "Is this only for Matura students?",
        answer:
          "No. It also works well for Gymnasium students and university entrance prep.",
      },
    ],
    location: {
      city: "Basel",
      canton: "BS",
      district: "Grossbasel",
      venueLabel: "Quiet tutoring studio near Basel SBB",
      radiusKm: 10,
    },
    gallery: ["Private study room", "Problem-solving board", "Mock exam setup"],
    availability: [
      { day: "Monday", start: "15:00", end: "20:00" },
      { day: "Tuesday", start: "15:00", end: "20:00" },
      { day: "Sunday", start: "10:00", end: "16:00" },
    ],
  },
  {
    id: "service-4",
    slug: "bern-strength-and-mobility-coaching",
    title: "Private strength and mobility coaching in Bern",
    summary: "A tailored in-person training format for busy professionals who want sustainable progress.",
    category: "fitness",
    city: "Bern",
    priceChf: 130,
    durationLabel: "60 min",
    rating: 4.7,
    reviewCount: 44,
    popularityLabel: "Trending with repeat clients",
    mode: "hybrid",
    provider: {
      handle: "nico-bernoulli",
      fullName: "Nico Bernoulli",
      headline: "Private mobility and strength coach",
      verified: true,
      avatarGradient: "from-[#2a4123] to-[#a9bd8e]",
    },
    heroGradient: "from-[#24351f] via-[#637e56] to-[#d9decb]",
    highlights: ["Executive schedule friendly", "Posture-focused", "Outdoor or studio"],
    longDescription:
      "A premium, no-noise coaching format that adapts to how you work and recover. Sessions are built for measurable strength gains without burnout.",
    deliverables: [
      "Initial movement screen",
      "Personalized coaching session",
      "Optional between-session training notes",
    ],
    faqs: [
      {
        question: "Where do sessions happen?",
        answer:
          "Nico offers studio sessions in Bern and outdoor sessions across central districts.",
      },
      {
        question: "Can I book as a pair?",
        answer:
          "Yes. Pair sessions are available as custom requests with adjusted pricing.",
      },
    ],
    location: {
      city: "Bern",
      canton: "BE",
      district: "Breitenrain",
      venueLabel: "Private studio near Breitenrainplatz",
      radiusKm: 15,
    },
    gallery: ["Mobility setup", "Strength blocks", "Outdoor warm-up route"],
    availability: [
      { day: "Wednesday", start: "07:00", end: "19:00" },
      { day: "Friday", start: "07:00", end: "17:00" },
      { day: "Saturday", start: "09:00", end: "13:00" },
    ],
  },
  {
    id: "service-5",
    slug: "lausanne-career-story-and-interview-lab",
    title: "Career story and interview lab in Lausanne",
    summary: "A strategic session to sharpen your positioning for Swiss and international hiring markets.",
    category: "career",
    city: "Lausanne",
    priceChf: 180,
    durationLabel: "90 min",
    rating: 4.9,
    reviewCount: 37,
    popularityLabel: "Saved by 112 professionals",
    mode: "request",
    provider: {
      handle: "amelie-favre",
      fullName: "Amelie Favre",
      headline: "Career strategist for global professionals",
      verified: true,
      avatarGradient: "from-[#49352a] to-[#d1a986]",
    },
    heroGradient: "from-[#453227] via-[#8f6d55] to-[#efe1d3]",
    highlights: ["Narrative strategy", "Compensation framing", "Confidence practice"],
    longDescription:
      "Amelie combines executive coaching structure with direct hiring-market insight. The session helps you articulate your value with more precision and more leverage.",
    deliverables: [
      "Career positioning review",
      "Interview rehearsal",
      "Action notes for CV and negotiation",
    ],
    faqs: [
      {
        question: "Is this useful for promotions too?",
        answer:
          "Yes. Internal progression and promotion strategy are both common use cases.",
      },
      {
        question: "Do you review documents live?",
        answer:
          "Yes. Bring your CV, role targets, and any live interview loop context.",
      },
    ],
    location: {
      city: "Lausanne",
      canton: "VD",
      district: "Flon",
      venueLabel: "Private meeting suite near Lausanne-Flon",
      radiusKm: 8,
    },
    gallery: ["Private coaching room", "Roleplay setup", "Strategy note template"],
    availability: [
      { day: "Tuesday", start: "08:00", end: "17:00" },
      { day: "Thursday", start: "08:00", end: "17:00" },
      { day: "Friday", start: "08:00", end: "15:00" },
    ],
  },
];

export const reviews: ReviewDTO[] = [
  {
    id: "review-1",
    author: "Emma, relocation consultant",
    rating: 5,
    createdAt: "2 weeks ago",
    title: "Exactly the confidence boost I needed",
    body: "Practical, warm, and immediately useful. I finally stopped freezing in local conversations.",
    serviceTitle: "Swiss German conversation walks in Zurich",
  },
  {
    id: "review-2",
    author: "Noah, startup founder",
    rating: 5,
    createdAt: "6 days ago",
    title: "The portraits feel editorial, not forced",
    body: "Marc made the whole process efficient and strategic. The final images improved our launch materials instantly.",
    serviceTitle: "Founder portrait session in Geneva",
  },
  {
    id: "review-3",
    author: "Mina, Matura student",
    rating: 5,
    createdAt: "1 month ago",
    title: "Clear structure, zero panic",
    body: "Sofia breaks down hard material into something manageable and fast-moving. Huge difference in my mock scores.",
    serviceTitle: "Matura math intensive in Basel",
  },
];

export const conversationThreads: ConversationThreadDTO[] = [
  {
    id: "thread-1",
    title: "Zurich conversation package",
    counterpart: "Lea Suter",
    contextType: "booking_request",
    preview: "I can shift the meeting point to Kreis 5 if that is easier for you.",
    updatedAt: "12 min ago",
    unreadCount: 2,
  },
  {
    id: "thread-2",
    title: "Portrait session wardrobe notes",
    counterpart: "Marc Delacour",
    contextType: "service_inquiry",
    preview: "Bring two structured looks and one softer option for variety.",
    updatedAt: "Yesterday",
    unreadCount: 0,
  },
  {
    id: "thread-3",
    title: "Basel exam prep cadence",
    counterpart: "Sofia Keller",
    contextType: "booking",
    preview: "I have opened an extra Sunday slot before the exam week.",
    updatedAt: "2 days ago",
    unreadCount: 1,
  },
];

export const threadMessages: Record<string, MessageDTO[]> = {
  "thread-1": [
    {
      id: "msg-1",
      author: "Lea Suter",
      body: "I saw your note about preferring a quieter route for the first session.",
      createdAt: "09:10",
    },
    {
      id: "msg-2",
      author: "You",
      body: "Yes, that would help a lot. I am still getting comfortable with fast exchanges.",
      createdAt: "09:14",
      mine: true,
    },
    {
      id: "msg-3",
      author: "Lea Suter",
      body: "Perfect. I can shift the meeting point to Kreis 5 and start with cafe scenarios.",
      createdAt: "09:19",
    },
  ],
  "thread-2": [
    {
      id: "msg-4",
      author: "Marc Delacour",
      body: "Bring two structured looks and one softer option for variety.",
      createdAt: "Yesterday",
    },
  ],
  "thread-3": [
    {
      id: "msg-5",
      author: "Sofia Keller",
      body: "I have opened an extra Sunday slot before the exam week.",
      createdAt: "2 days ago",
    },
  ],
};

export const bookings: BookingDetailDTO[] = [
  {
    id: "booking-1",
    serviceTitle: "Swiss German conversation walks in Zurich",
    providerName: "Lea Suter",
    consumerName: "Olivia Meyer",
    startsAt: "Fri, 22 Mar · 10:30",
    locationLabel: "Helvetiaplatz, Zurich",
    totalChf: 95,
    status: "confirmed",
    requestStatus: "accepted",
    mode: "hybrid",
  },
  {
    id: "booking-2",
    serviceTitle: "Matura math intensive in Basel",
    providerName: "Sofia Keller",
    consumerName: "Olivia Meyer",
    startsAt: "Sun, 24 Mar · 14:00",
    locationLabel: "Basel SBB studio",
    totalChf: 110,
    status: "awaiting_payment",
    requestStatus: "pending",
    mode: "instant",
  },
  {
    id: "booking-3",
    serviceTitle: "Career story and interview lab in Lausanne",
    providerName: "Amelie Favre",
    consumerName: "Olivia Meyer",
    startsAt: "Tue, 26 Mar · 17:30",
    locationLabel: "Lausanne-Flon meeting suite",
    totalChf: 180,
    status: "completed",
    requestStatus: "accepted",
    mode: "request",
  },
];

export const consumerDashboard: DashboardSnapshotDTO = {
  heading: "Consumer dashboard",
  subheading: "Everything you have scheduled, saved, and waiting on in one place.",
  metrics: [
    {
      label: "Upcoming bookings",
      value: "3",
      change: "+1 this week",
      trend: "up",
      helper: "Across Zurich, Basel, and Lausanne",
    },
    {
      label: "Saved providers",
      value: "12",
      change: "+4 this month",
      trend: "up",
      helper: "High-match providers for your goals",
    },
    {
      label: "Response speed",
      value: "1.6h",
      change: "Faster than average",
      trend: "up",
      helper: "Median first reply from your inquiries",
    },
    {
      label: "Reviews left",
      value: "8",
      change: "100% completion",
      trend: "neutral",
      helper: "You review after every completed booking",
    },
  ],
};

export const providerDashboard: DashboardSnapshotDTO = {
  heading: "Provider dashboard",
  subheading: "Bookings, earnings, reviews, and client momentum across your Swiss market footprint.",
  metrics: [
    {
      label: "Monthly revenue",
      value: "CHF 6,240",
      change: "+18%",
      trend: "up",
      helper: "Versus last month",
    },
    {
      label: "Booking requests",
      value: "26",
      change: "+6 this week",
      trend: "up",
      helper: "12 pending, 9 accepted, 5 completed",
    },
    {
      label: "Repeat client rate",
      value: "74%",
      change: "+5 pts",
      trend: "up",
      helper: "Healthy retention from high-intent clients",
    },
    {
      label: "Average rating",
      value: "4.9",
      change: "Stable",
      trend: "neutral",
      helper: "Across 88 verified reviews",
    },
  ],
};

export const revenueSeries: RevenuePointDTO[] = [
  { label: "Oct", revenue: 4100, bookings: 18 },
  { label: "Nov", revenue: 4700, bookings: 21 },
  { label: "Dec", revenue: 5200, bookings: 22 },
  { label: "Jan", revenue: 5900, bookings: 24 },
  { label: "Feb", revenue: 6240, bookings: 26 },
  { label: "Mar", revenue: 6880, bookings: 28 },
];

export const activitySeries: ActivityPointDTO[] = [
  { label: "Week 1", views: 210, saves: 32 },
  { label: "Week 2", views: 248, saves: 36 },
  { label: "Week 3", views: 286, saves: 41 },
  { label: "Week 4", views: 301, saves: 47 },
];

export const trustStats = [
  { value: "1.9k+", label: "Swiss bookings completed" },
  { value: "4.8/5", label: "Verified average rating" },
  { value: "42 min", label: "Median first response time" },
  { value: "CHF 180k", label: "Provider earnings processed" },
];

export const testimonials = [
  {
    quote:
      "It feels like a premium local network, not a noisy listing directory.",
    author: "Hanna, consumer in Zurich",
  },
  {
    quote:
      "The dashboards are clear enough that I can run my coaching business without spreadsheets.",
    author: "Nico Bernoulli, provider",
  },
  {
    quote:
      "I found a language coach and had the booking confirmed in under an hour.",
    author: "James, relocation lead in Basel",
  },
];
