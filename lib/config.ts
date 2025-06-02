// ===== KASH PROJECT CONFIGURATION =====
// Modify these settings to customize your blockchain project website

export const SITE_CONFIG = {
  // Project Information
  PROJECT_NAME: "KASH",
  PROJECT_TAGLINE: "Real Gold, Digital Trust",
  PROJECT_DESCRIPTION:
    "KASH transforms real-world gold reserves into a stable digital financial infrastructure through tokenization and DeFi integration.",

  // Navigation Links
  WHITEPAPER_URL: "/kash-whitepaper.pdf", // Change this to your actual whitepaper URL
  LAUNCH_APP_URL: "", // Leave empty to show "Coming Soon" - Change to your actual app URL when ready

  // Contact Information
  EMAIL: "team@kash.finance",
  LOCATIONS: "Indonesia & Singapore",

  // Social Media & Community Links (External links only)
  QUICK_LINKS: [
    {
      name: "Discord",
      url: "https://discord.gg/kash",
      icon: "MessageCircle",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/kash_finance",
      icon: "Twitter",
    },
    {
      name: "Telegram",
      url: "https://t.me/kash_finance",
      icon: "MessageCircle",
    },
    {
      name: "Medium",
      url: "https://medium.com/@kash_finance",
      icon: "FileText",
    },
  ],

  // Protocol Statistics
  STATS: {
    GOLD_RESERVES: "50,000 oz",
    VRWA_ISSUED: "25,000",
    KASH_SUPPLY: "2.5M",
    APY: "18.5%",
  },
}

// News Articles Configuration
export const NEWS_ARTICLES = [
  {
    title: "KASH Announces Partnership with Indonesian Gold Mining Consortium",
    source: "CoinDesk",
    date: "Jan 20, 2025",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "Revolutionary RWA project secures exclusive rights to tokenize gold production from Buru Island mining operations.",
    link: "https://example.com/news1",
  },
  {
    title: "First vRWA(Gold) Tokens Successfully Minted on Ethereum",
    source: "The Block",
    date: "Jan 15, 2025",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "KASH protocol launches with initial issuance of tokenized gold forward contracts, backed by verified mining reserves.",
    link: "https://example.com/news2",
  },
  {
    title: "High-Yield Staking Program Attracts Early DeFi Adopters",
    source: "DeFi Pulse",
    date: "Jan 10, 2025",
    image: "/placeholder.svg?height=200&width=300",
    excerpt:
      "KASH staking pools offer competitive APY rates for early participants willing to back forward gold production risk.",
    link: "https://example.com/news3",
  },
]

// Team Members Configuration
export const TEAM_MEMBERS = [
  {
    name: "Dr. Sarah Kim",
    role: "CEO & Co-Founder",
    image: "/placeholder.svg?height=150&width=150",
    bio: "Former Goldman Sachs commodities trader with 15+ years in precious metals markets and blockchain finance.",
    linkedin: "https://linkedin.com/in/sarahkim",
    twitter: "https://twitter.com/sarahkim",
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=150&width=150",
    bio: "Ex-ConsenSys engineer specializing in RWA tokenization and smart contract security for financial protocols.",
    linkedin: "https://linkedin.com/in/michaelchen",
    twitter: "https://twitter.com/michaelchen",
  },
  {
    name: "Dr. James Suharto",
    role: "Head of Mining Operations",
    image: "/placeholder.svg?height=150&width=150",
    bio: "Mining engineer with 20+ years experience in Indonesian gold extraction and sustainable mining practices.",
    linkedin: "https://linkedin.com/in/jamessuharto",
    twitter: "https://twitter.com/jamessuharto",
  },
  {
    name: "Lisa Wang",
    role: "Head of DeFi Strategy",
    image: "/placeholder.svg?height=150&width=150",
    bio: "Former Aave protocol contributor with expertise in yield farming mechanisms and reserve management.",
    linkedin: "https://linkedin.com/in/lisawang",
    twitter: "https://twitter.com/lisawang",
  },
]

// Partners Configuration
export const PARTNERS = [
  { name: "Chainlink", logo: "/placeholder.svg?height=80&width=120", url: "https://chain.link" },
  { name: "OpenZeppelin", logo: "/placeholder.svg?height=80&width=120", url: "https://openzeppelin.com" },
  { name: "Certik", logo: "/placeholder.svg?height=80&width=120", url: "https://certik.com" },
  { name: "Polygon", logo: "/placeholder.svg?height=80&width=120", url: "https://polygon.technology" },
  { name: "Binance Labs", logo: "/placeholder.svg?height=80&width=120", url: "https://labs.binance.com" },
  { name: "Coinbase Ventures", logo: "/placeholder.svg?height=80&width=120", url: "https://ventures.coinbase.com" },
]

// FAQ Configuration
export const FAQ_ITEMS = [
  {
    question: "What is vRWA(Gold)?",
    answer:
      "A voucher token representing a claim on 1 oz of gold to be mined from the Buru project. It is redeemed over time into real assets or stablecoins.",
  },
  {
    question: "What backs KASH?",
    answer:
      "KASH is collateralized by vRWA(Gold), which is gradually replaced by USDT or gold-backed RWA as redemptions occur.",
  },
  {
    question: "Is KASH a stablecoin?",
    answer:
      "Not strictly. KASH is a reserve-backed asset — its price fluctuates around the reserve pool value but has mechanisms to support price stability.",
  },
  {
    question: "Who governs KASH?",
    answer:
      "The project is led by a foundation rather than a DAO, with plans to explore community governance participation in later phases.",
  },
  {
    question: "How can investors benefit?",
    answer:
      "Early participants in staking receive high-yield rewards as compensation for backing forward risk. KASH also gains utility as a DeFi collateral and reserve token.",
  },
]
