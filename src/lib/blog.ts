// Varied, Linktree-style card visuals — cycled per card so each post is stable.
export const CARD_COLORS = [
  "#4F7CFF", // blue
  "#7C2D3A", // maroon
  "#E84C8A", // pink
  "#2FBF71", // green
  "#C026D3", // magenta
  "#C75B39", // terracotta
  "#6D28D9", // purple
  "#0EA5A4", // teal
  "#E8A23D", // amber
];

export const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
];

export function cardColor(i: number) {
  return CARD_COLORS[i % CARD_COLORS.length];
}
export function cardImage(i: number) {
  return CARD_IMAGES[i % CARD_IMAGES.length];
}
