export const SITE_URL = "https://purelinemark-au.com";
export const EMAIL = "support@purelinemark-au.com";
export const MIN_DEPOSIT = "$250";

/**
 * Form submission endpoint (PHP mail action / Affilix integration).
 * Expects a JSON body with camelCase fields. On success it returns
 * { status: "success", redirectUrl: "https://..." }, the user is
 * redirected to that URL to continue signup.
 */
export const MAIL_ACTION = {
  url: "https://meridianc-au.com/homeMailAction.php",
  /** Offer/campaign name reported to the client's backend for every lead */
  offerName: "Pure-Linemark-Site",
  fields: {
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    phone: "phone",
    dialCode: "dialCode",
    country: "country",
  },
};

export type IconName =
  | "bot"
  | "clock"
  | "wallet"
  | "lock"
  | "shield"
  | "headset"
  | "chart"
  | "check"
  | "star";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "AI Trading", href: "/ai-trading" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Review", href: "/pure-linemark-review" },
  { label: "FAQs", href: "/faq" },
];

export interface Feature {
  title: string;
  description: string;
  icon: IconName;
}

export const features: Feature[] = [
  {
    title: "AI Trading Engine",
    description:
      "Our proprietary algorithm scans global markets 24/7, identifying opportunities and executing trades on your behalf with split-second precision.",
    icon: "bot",
  },
  {
    title: "Round-the-Clock Coverage",
    description:
      "Crypto, forex and commodities never sleep, and neither does your portfolio. The engine trades while you sleep, work or holiday.",
    icon: "clock",
  },
  {
    title: "Instant Withdrawals",
    description:
      "Withdraw your funds anytime you like. Most requests are processed within 24 hours, straight to your Australian bank account.",
    icon: "wallet",
  },
  {
    title: "Bank-Grade Security",
    description:
      "256-bit encryption, mandatory two-factor authentication and segregated client accounts keep your funds protected at all times.",
    icon: "lock",
  },
  {
    title: "Automatic Risk Management",
    description:
      "Built-in stop-losses, position sizing and drawdown limits keep risk controlled on every single trade the engine makes.",
    icon: "shield",
  },
  {
    title: "Dedicated AU Support",
    description:
      "A real Australian support team, available around the clock to help with deposits, withdrawals and everything in between.",
    icon: "headset",
  },
];

export interface Step {
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    title: "Create Your Account",
    description:
      "Sign up in under two minutes with just your name and email. Verify your details and you're ready to go.",
  },
  {
    title: "Fund & Activate the AI",
    description:
      "Deposit from $250 and switch the AI engine on. It immediately starts scanning markets and trading on your behalf.",
  },
  {
    title: "Withdraw Your Profits",
    description:
      "Track your portfolio in real time and withdraw your earnings whenever you like, 24 hours a day, 7 days a week.",
  },
];

export const stats = [
  { value: "28,000+", label: "Australian Traders" },
  { value: "$12M+", label: "Paid Out to Members" },
  { value: "24/7", label: "Automated Trading" },
  { value: "4.8/5", label: "Average Member Rating" },
];

export interface Review {
  quote: string;
  name: string;
  role: string;
}

export const reviews: Review[] = [
  {
    quote:
      "I started with the minimum deposit just to test it. The AI made its first trades that same night, and my first withdrawal hit my bank in under 24 hours. Genuinely impressed.",
    name: "Michael R.",
    role: "Member since 2024 · Brisbane QLD",
  },
  {
    quote:
      "I work full-time and don't have hours to watch charts. Pure Linemark does it all for me, I just check my phone in the morning. Support has been excellent every time I've called.",
    name: "Sarah K.",
    role: "Member since 2025 · Sydney NSW",
  },
  {
    quote:
      "Two-factor security, instant withdrawals and a support team that actually answers. The AI does exactly what it says, trades around the clock while I get on with my day.",
    name: "James T.",
    role: "Member since 2024 · Melbourne VIC",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How does the Pure Linemark AI work?",
    answer:
      "Our AI engine continuously analyses global markets, crypto, forex and commodities, using dozens of technical indicators and real-time data feeds. When it identifies a high probability opportunity, it executes the trade automatically on your behalf, applying your account's risk settings on every position.",
  },
  {
    question: "How much do I need to start?",
    answer:
      "You can activate the AI engine with a minimum deposit of just $250. There are no sign-up fees, no account fees and no hidden charges, your deposit is entirely your trading balance.",
  },
  {
    question: "How much can I earn?",
    answer:
      "Results vary with market conditions, your balance and your risk settings. The platform's headline figure reflects the upper range of daily performance achieved by active accounts, but trading always involves risk of loss and no return is ever guaranteed. Past performance is not an indicator of future results.",
  },
  {
    question: "Can I withdraw my money anytime?",
    answer:
      "Yes. Withdrawals are processed on request, 24/7, and most are completed within 24 hours directly to your Australian bank account. There are no withdrawal fees and no lock-up periods.",
  },
  {
    question: "Is my money safe?",
    answer:
      "All accounts are protected with 256-bit encryption and mandatory two-factor authentication. Client funds are held in segregated accounts with established Australian banking partners, separate from company operating funds.",
  },
  {
    question: "Do I need trading experience?",
    answer:
      "Not at all. The AI handles strategy, timing and execution. You simply fund your account, activate the engine and monitor your portfolio from the dashboard, on any device.",
  },
  {
    question: "Is Pure Linemark available across Australia?",
    answer:
      "Yes. Pure Linemark is available to residents in every Australian state and territory. Our support team operates on Australian hours, seven days a week.",
  },
  {
    question: "What markets does the AI trade?",
    answer:
      "The engine trades the world's most liquid markets, including Bitcoin, Ethereum, Solana, Litecoin, Ripple and Binance Coin, as well as major forex pairs and commodities such as gold.",
  },
];

export const australianStates = [
  "New South Wales",
  "Victoria",
  "Queensland",
  "Western Australia",
  "South Australia",
  "Tasmania",
  "Australian Capital Territory",
  "Northern Territory",
];

export const riskDisclaimer =
  "Trading in financial markets involves significant risk of loss and is not suitable for all investors. Past performance, including that of any automated trading system, is not a guarantee or indicator of future results. You should never invest money you cannot afford to lose, and you should consider seeking independent financial advice before making any investment decision. Pure Linemark does not provide financial advice.";

/* ------------------------------------------------------------------ */
/* Reference-flow content (all Pure Linemark branded)                  */
/* ------------------------------------------------------------------ */

export const intro = {
  title: "What Is Pure Linemark?",
  body: [
    "Pure Linemark is an AI trading platform built for everyday Australians. You fund your account, switch on the AI engine and it trades global markets on your behalf.",
    "No charts to study. No experience needed. The engine scans crypto, forex and commodities 24/7 and follows strict risk rules on every trade it makes.",
  ],
  points: [
    "28,000+ Australian members",
    "Minimum deposit just $250",
    "24/7 automated trading",
    "Australian support team",
  ],
};

export interface JourneyStep {
  title: string;
  description: string;
}

export const journeySteps: JourneyStep[] = [
  {
    title: "Explore The Market",
    description:
      "The AI engine studies global markets around the clock. You simply decide how much you want to start with.",
  },
  {
    title: "Activate The AI Engine",
    description:
      "One tap switches the engine on. It follows your risk settings on every trade it makes.",
  },
  {
    title: "Review AI Insights",
    description:
      "Open your dashboard anytime and see what the engine is doing, which markets it trades and how your balance is tracking.",
  },
  {
    title: "Consider Risk",
    description:
      "You stay in control. Set your risk level, adjust it when you like and stop the engine whenever you want.",
  },
  {
    title: "Watch Your Portfolio",
    description:
      "Check in when it suits you. Withdraw your money anytime and most payouts land within 24 hours.",
  },
];

export const benefits = [
  {
    title: "Faster Market Research",
    description:
      "The engine analyses dozens of indicators in seconds. Work that would take you hours is done for you, around the clock.",
  },
  {
    title: "Pattern Analysis",
    description:
      "It spots market patterns and price movements you would miss, then acts on them in milliseconds.",
  },
  {
    title: "Better Organisation",
    description:
      "Your trades, balance and history sit in one clean dashboard. No spreadsheets, no confusion.",
  },
  {
    title: "Trend Monitoring",
    description:
      "The engine watches trends across crypto, forex and commodities so your portfolio is never caught off guard.",
  },
  {
    title: "Risk Awareness",
    description:
      "Stop losses and position limits are built into every trade. Risk is controlled automatically.",
  },
  {
    title: "Structured Decisions",
    description:
      "Every trade follows the same disciplined rules. No emotion, no guessing, no chasing losses.",
  },
];

export const processSteps = [
  {
    title: "Market Data",
    description:
      "The engine pulls live data from global markets, 24 hours a day, 7 days a week.",
  },
  {
    title: "AI Analysis",
    description:
      "Dozens of technical indicators and real time feeds are analysed in milliseconds.",
  },
  {
    title: "Trading Insights",
    description:
      "The engine finds high probability opportunities and sizes every position to your risk settings.",
  },
  {
    title: "Your Decision",
    description:
      "You stay in control. You set the risk level, you can stop trading anytime and you withdraw when it suits you.",
  },
];

export const aiTradingExplain = {
  title: "What Is AI Trading?",
  body: [
    "AI trading means software studies the markets and makes trades for you. Instead of you watching charts all day, a trained engine does the watching.",
    "Pure Linemark's engine never gets tired, never panics and never misses a market move while you sleep.",
  ],
  points: [
    {
      title: "Runs 24/7",
      description: "Markets never close. Neither does the engine.",
    },
    {
      title: "Follows Strict Rules",
      description: "Stop losses and position limits on every trade.",
    },
    {
      title: "No Emotion",
      description: "No panic selling. No chasing losses. Just discipline.",
    },
  ],
};

export const australiaSection = {
  title: "Built With Australian Investors In Mind",
  body: "Pure Linemark was created in Australia, for Australians. Every feature is designed around how Aussie investors actually trade.",
  points: [
    "Australian support team, 7 days a week",
    "AUD friendly with no surprise fees",
    "Open to residents in every state",
    "Built for all experience levels",
  ],
};

export const reviewSections = [
  {
    title: "What Is Pure Linemark?",
    body: "Pure Linemark is an AI trading platform for Australians. You deposit funds, activate the AI engine and it trades crypto, forex and commodities on your behalf, 24 hours a day. There is no experience required and no chart watching involved.",
  },
  {
    title: "How Pure Linemark Works",
    body: "The engine collects live market data, analyses dozens of indicators and executes trades automatically when it finds a high probability opportunity. Every trade follows your account's risk settings, with stop losses and position limits built in.",
  },
  {
    title: "Who Is Pure Linemark For?",
    body: "Pure Linemark suits busy Australians who want market exposure without spending hours on research. It works for complete beginners who have never traded, and for experienced investors who simply want their capital working harder around the clock.",
  },
  {
    title: "Benefits At A Glance",
    body: "Minimum deposit of just $250. No sign up fees, no account fees and no withdrawal fees. Two factor authentication and bank level encryption as standard. Withdrawals processed within 24 hours in most cases. Australian support, 7 days a week.",
  },
];
