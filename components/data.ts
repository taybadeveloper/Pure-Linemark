export const SITE_URL = "https://purelinemark-au.com";
export const EMAIL = "support@purelinemark-au.com";
export const MIN_DEPOSIT = "$250";

/**
 * Form submission endpoint (PHP mail action / Affilix integration).
 * Expects a JSON body with camelCase fields. On success it returns
 * { status: "success", redirectUrl: "https://..." } — the user is
 * redirected to that URL to continue signup.
 */
export const MAIL_ACTION = {
  url: "https://meridianc-au.com/homeMailAction.php",
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
  { label: "FAQs", href: "/faq" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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
      "Crypto, forex and commodities never sleep — and neither does your portfolio. The engine trades while you sleep, work or holiday.",
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
      "Track your portfolio in real time and withdraw your earnings whenever you like — 24 hours a day, 7 days a week.",
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
      "I work full-time and don't have hours to watch charts. Pure Linemark does it all for me — I just check my phone in the morning. Support has been excellent every time I've called.",
    name: "Sarah K.",
    role: "Member since 2025 · Sydney NSW",
  },
  {
    quote:
      "Two-factor security, instant withdrawals and a support team that actually answers. The AI does exactly what it says — trades around the clock while I get on with my day.",
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
      "Our AI engine continuously analyses global markets — crypto, forex and commodities — using dozens of technical indicators and real-time data feeds. When it identifies a high-probability opportunity, it executes the trade automatically on your behalf, applying your account's risk settings on every position.",
  },
  {
    question: "How much do I need to start?",
    answer:
      "You can activate the AI engine with a minimum deposit of just $250. There are no sign-up fees, no account fees and no hidden charges — your deposit is entirely your trading balance.",
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
      "Not at all. The AI handles strategy, timing and execution. You simply fund your account, activate the engine and monitor your portfolio from the dashboard — on any device.",
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

export const markets = [
  "Bitcoin",
  "Ethereum",
  "Solana",
  "Litecoin",
  "Ripple",
  "Binance Coin",
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
  "Trading in financial markets involves significant risk of loss and is not suitable for all investors. Past performance — including that of any automated trading system — is not a guarantee or indicator of future results. You should never invest money you cannot afford to lose, and you should consider seeking independent financial advice before making any investment decision. Pure Linemark does not provide financial advice.";
