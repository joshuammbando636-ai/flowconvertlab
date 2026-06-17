"use client";

import { useRef } from "react";
import { 
  MessageSquare, Bot, Headset, Database, 
  Sparkles, Smartphone, Star, Users, Clock 
} from "lucide-react";

const CATEGORIES = [
  {
    title: "Ease of Setup",
    icon: Clock,
    scores: { 
      "LiveChat": 95, 
      "ChatBot": 90, 
      "HelpDesk": 85, 
      "Knowledge Base": 92 
    },
  },
  {
    title: "Automation Power",
    icon: Bot,
    scores: { 
      "LiveChat": 70, 
      "ChatBot": 98, 
      "HelpDesk": 85, 
      "Knowledge Base": 60 
    },
  },
  {
    title: "Team Collaboration",
    icon: Users,
    scores: { 
      "LiveChat": 88, 
      "ChatBot": 65, 
      "HelpDesk": 96, 
      "Knowledge Base": 80 
    },
  },
  {
    title: "Customer Self-Service",
    icon: Database,
    scores: { 
      "LiveChat": 40, 
      "ChatBot": 85, 
      "HelpDesk": 60, 
      "Knowledge Base": 98 
    },
  },
  {
    title: "Proactive Engagement",
    icon: Sparkles,
    scores: { 
      "LiveChat": 92, 
      "ChatBot": 88, 
      "HelpDesk": 45, 
      "Knowledge Base": 30 
    },
  },
  {
    title: "Multi-Channel Support",
    icon: Smartphone,
    scores: { 
      "LiveChat": 90, 
      "ChatBot": 85, 
      "HelpDesk": 75, 
      "Knowledge Base": 50 
    },
  },
];

const USE_CASES = [
  {
    situation: "I want to talk to customers in real-time",
    bestTool: "LiveChat",
    why: "Human connection closes deals faster",
    icon: MessageSquare,
  },
  {
    situation: "I'm losing leads overnight and on weekends",
    bestTool: "ChatBot",
    why: "24/7 automated qualification captures every lead",
    icon: Bot,
  },
  {
    situation: "My support inbox is complete chaos",
    bestTool: "HelpDesk",
    why: "Unified ticketing keeps everything organized",
    icon: Headset,
  },
  {
    situation: "I keep answering the same questions over and over",
    bestTool: "Knowledge Base",
    why: "Self-service reduces repetitive tickets by 60%",
    icon: Database,
  },
  {
    situation: "Visitors leave my site without saying anything",
    bestTool: "LiveChat + Open Widget",
    why: "Proactive triggers engage visitors at the right moment",
    icon: Sparkles,
  },
  {
    situation: "My customers prefer texting over email",
    bestTool: "Text Platform",
    why: "SMS and WhatsApp meet customers where they are",
    icon: Smartphone,
  },
];

export default function ComparisonContent() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1
            className="font-display font-bold mb-3 sm:mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Which tool is{" "}
            <span style={{ color: "#FF6B00" }}>right for you?</span>
          </h1>
          <p className="text-sm sm:text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Compare based on what matters most to your business.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center" style={{ color: "var(--text)" }}>
            Tell us what you need
          </h2>
          <p className="text-center text-sm sm:text-base mb-8 sm:mb-10" style={{ color: "var(--text-muted)" }}>
            Click any situation that sounds like you
          </p>
          
          <div className="usecase-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {USE_CASES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.situation}
                  className="usecase-card p-4 sm:p-5 rounded-xl border cursor-pointer"
                  style={{ borderColor: "var(--border)", background: "var(--bg)" }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#FF6B0015" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#FF6B00" }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>
                        "{item.situation}"
                      </p>
                      <p className="text-xs mb-2" style={{ color: "#FF6B00" }}>
                        → Best fit: <strong>{item.bestTool}</strong>
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {item.why}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16" style={{ background: "var(--bg)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center" style={{ color: "var(--text)" }}>
            How each tool performs
          </h2>
          <p className="text-center text-sm sm:text-base mb-8 sm:mb-10" style={{ color: "var(--text-muted)" }}>
            Higher score = better suited for that category
          </p>

          <div className="charts-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="chart-card p-5 sm:p-6 rounded-2xl"
                  style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2 mb-4 sm:mb-5">
                    <Icon className="w-4 h-4" style={{ color: "#FF6B00" }} />
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {cat.title}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    {Object.entries(cat.scores).map(([tool, score]) => (
                      <div key={tool}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                            {tool}
                          </span>
                          <span className="text-xs font-semibold" style={{ color: "#FF6B00" }}>
                            {score}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg)" }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              background: "#FF6B00",
                              width: `${score}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="mt-10 sm:mt-12 p-6 sm:p-8 text-center rounded-2xl"
            style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.05), rgba(255,107,0,0.02))" }}
          >
            <Star className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3" style={{ color: "#FF6B00" }} />
            <p className="text-base sm:text-lg font-medium mb-2" style={{ color: "var(--text)" }}>
              They work better together
            </p>
            <p className="text-sm max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Most businesses use 2-3 of these tools. LiveChat for sales + ChatBot for after-hours + Knowledge Base for self-service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}