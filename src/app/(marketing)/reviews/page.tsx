import ReviewsContent from "./ReviewsContent";

export const metadata = {
  title: "Reviews — FlowconvertLab",
  description: "See what 3,200+ partners are saying about FlowconvertLab. Real stories from LiveChat partners and customer support teams.",
  openGraph: {
    title: "Reviews — FlowconvertLab",
    description: "See what 3,200+ partners are saying about FlowconvertLab. Real stories from real businesses.",
    url: "https://www.flowconvertlab.com/reviews",
    siteName: "FlowconvertLab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reviews — FlowconvertLab",
    description: "See what 3,200+ partners are saying about FlowconvertLab.",
  },
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}