import { daycare, fullAddress } from "@/data/krewe";

// "Ask the Krewe" is scripted: keyword matching over a fixed set of answers, all from the brief. There
// is no AI model, no API key and no network call. Anything it can't match gets the fallback, so it
// never makes up tuition, ratios, meals, curriculum or anything else about the daycare.

export type BotAction = "waitlist" | "tour" | "contact";

export type BotReply = {
  text: string;
  action?: BotAction;
};

export type Suggestion = { label: string; question: string };

export const suggestions: Suggestion[] = [
  { label: "Ages", question: "What ages do you take?" },
  { label: "Hours", question: "What are your hours?" },
  { label: "Location", question: "Where are you?" },
  { label: "Opening", question: "When do you open?" },
  { label: "Tuition", question: "How much is tuition?" },
  { label: "Tour", question: "Can I tour?" },
];

export const greeting: BotReply = {
  text: `Hi! I'm the Krewe helper. I can answer questions about ages, hours, our location and when we open. Tap a question or type your own.`,
};

const replies = {
  tuition: {
    text: "We'll share tuition with families on our waitlist.",
    action: "waitlist",
  },
  tour: {
    text: "We'd love to show you around! Tell us a little about your family in the tour form.",
    action: "tour",
  },
  opening: {
    text: `We're opening soon and licensing is pending. Join the waitlist and we'll let you know first.`,
    action: "waitlist",
  },
  hours: { text: `Our hours are ${daycare.hours.replace("–", "to")}.` },
  ages: { text: `We care for children from ${daycare.ages}.` },
  location: { text: `We're at ${fullAddress}.` },
  hello: { text: "Hi there! Ask me about ages, hours, our location, opening or tours." },
  thanks: { text: "You're welcome! We can't wait to meet your little one." },
  fallback: {
    text: "Great question! Leave your name and number and Cody will get back to you.",
    action: "contact",
  },
} satisfies Record<string, BotReply>;

type Topic = Exclude<keyof typeof replies, "fallback">;

// Checked in order, so the more specific topics win: "how much is tuition for infants" is a tuition
// question, and "what time do you open" is about hours, not the opening date. Questions about
// subjects the brief rules out (meals, staff, ratios, curriculum, capacity and the like) go straight
// to the fallback, even when they also mention ages or hours.
const rules: { topic: Topic | "fallback"; pattern: RegExp }[] = [
  { topic: "tuition", pattern: /\b(tuition|cost|costs|price|prices|pricing|rate|rates|fee|fees|how much|weekly|monthly)\b/ },
  {
    topic: "fallback",
    pattern:
      /\b(meals?|food|lunch|breakfast|snacks?|formula|diapers?|potty|naps?|allerg\w*|ratios?|teachers?|staff\w*|caregivers?|curriculum|programs?|lessons?|learn\w*|cameras?|safety|secur\w*|capacity|how many|vouchers?|ccap|subsid\w*|transport\w*|bus|sick|vaccin\w*|discount\w*)\b/,
  },
  { topic: "tour", pattern: /\b(tour|tours|visit|come by|look around|walk ?through|see (the )?(center|place|classrooms?|rooms?))\b/ },
  { topic: "hours", pattern: /\b(hours?|what time|times|close|closes|closing|early|late|drop ?off|pick ?up)\b/ },
  { topic: "opening", pattern: /\b(open|opens|opening|openings|launch|start|starting|licens\w*|enroll\w*|waitlist|wait list|spots?|space|when)\b/ },
  {
    topic: "ages",
    pattern:
      /\b(ages?|how old|years? old|months? old|weeks? old|infants?|bab(y|ies)|newborns?|toddlers?|preschool\w*|pre-?k|school-?age\w*|school age\w*|\d+ ?(weeks?|months?|years?|yrs?|mos?))\b/,
  },
  { topic: "location", pattern: /\b(where|address|located|location|directions?|claiborne|neighbou?rhood|map)\b/ },
  { topic: "thanks", pattern: /\b(thanks|thank you|thx|ty)\b/ },
  { topic: "hello", pattern: /^(hi|hey|hello|good (morning|afternoon|evening))\b/ },
];

export function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function answer(input: string): BotReply {
  const text = normalize(input);
  if (!text) return replies.hello;
  const match = rules.find(({ pattern }) => pattern.test(text));
  return match ? replies[match.topic] : replies.fallback;
}
