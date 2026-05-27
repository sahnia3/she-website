export type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  price: string;
  squareCheckoutUrl: string;
};

export const events: Event[] = [
  {
    id: "voices-unveiled",
    title: "Voices Unveiled",
    date: "May 24, 2026",
    location: "Toronto, ON",
    description:
      "An evening of storytelling, spoken word, and song — celebrating the women who lit our paths.",
    image: "",
    price: "$25",
    squareCheckoutUrl: "https://checkout.square.site/",
  },
  {
    id: "canvas-of-courage",
    title: "Canvas of Courage",
    date: "June 14, 2026",
    location: "Hamilton, ON",
    description:
      "A pop-up gallery and live painting event. All proceeds fund girls' education initiatives.",
    image: "",
    price: "$20",
    squareCheckoutUrl: "https://checkout.square.site/",
  },
  {
    id: "shakti-circle",
    title: "Shakti Circle",
    date: "July 12, 2026",
    location: "Mississauga, ON",
    description:
      "An intimate gathering of women in business, art, and education — a night of mentorship and reflection.",
    image: "",
    price: "$35",
    squareCheckoutUrl: "https://checkout.square.site/",
  },
];
