import GuideContent from "./GuideContent";

export const metadata = {
  title: "Guide — FlowconvertLab",
  description: "A practical guide for businesses ready to transform customer support into sales. Learn how to turn conversations into revenue.",
  openGraph: {
    title: "Guide — FlowconvertLab",
    description: "A practical guide for businesses ready to transform customer support into sales.",
    url: "https://www.flowconvertlab.com/guide",
    siteName: "FlowconvertLab",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guide — FlowconvertLab",
    description: "Turn customer conversations into revenue with live chat, chatbots & smart automation.",
  },
};

export default function GuidePage() {
  return <GuideContent />;
}