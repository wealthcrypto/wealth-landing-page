import React from "react";
import Image from "next/image";
import Community from '@/public/assets/Community2.svg';
import Grow from '@/public/assets/Grow.svg';
import Shield from '@/public/assets/Shiled.svg';
import Team from '@/public/assets/Time.svg';

const DistributionSection: React.FC = () => {
  const items = [
    {
      id: 1,
      title: "Community & Experiences",
      amount: "400M WEALTH",
      desc: "Dedicated to community rewards, experience access, and member benefits",
      percent: 72,
      icon: Community,
    },
    {
      id: 2,
      title: "Ecosystem Growth",
      amount: "400M WEALTH",
      desc: "Reserved for partnerships, integrations and platform incentives",
      percent: 55,
      icon: Grow,
    },
    {
      id: 3,
      title: "Security & Reserves",
      amount: "400M WEALTH",
      desc: "Held for protocol security, audits and long-term stability",
      percent: 44,
      icon: Shield,
    },
    {
      id: 4,
      title: "Team & Advisors",
      amount: "400M WEALTH",
      desc: "Token allocation for founders, contributors and advisors",
      percent: 26,
      icon: Team,
    },
  ];

  const styles: { [k: string]: React.CSSProperties } = {
    wrapper: {
      padding: "40px 24px",
      maxWidth: 980,
      height: "100%",
      margin: "0 auto",
      fontFamily: "'Inter', system-ui, sans-serif",
    },
    header: { textAlign: "end", marginBottom: 28 },
    titleRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 12,
    },
    title: { fontSize: 28, fontWeight: 700, margin: 0 },
    badge: {
      background: "#11c179",
      color: "white",
      padding: "6px 20px",
      borderRadius: 12,
      fontSize: 16,
      fontWeight: 600,
    },
    subtitle: { color: "#667085", fontSize: 13, marginTop: 8 },
    grid: { display: "grid", gap: 18, marginTop: 18 },
    card: {
      display: "flex",
      gap: 18,
      alignItems: "center",
      background: "#8ee6c8",
      padding: "22px",
      borderRadius: 18,
      boxShadow: "0 8px 18px rgba(23, 42, 37, 0.08)",
    },
    iconWrap: {
      minWidth: 64,
      minHeight: 64,
      borderRadius: "50%",
      background: "#00b37a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "inset 0 -6px 10px rgba(0,0,0,0.06)",
    },
    content: { flex: 1 },
    heading: { fontSize: 20, margin: 0, fontWeight: 700, color: "#032" },
    amount: {
      fontSize: 12,
      color: "#032",
      fontWeight: 700,
      marginTop: 6,
      opacity: 0.9,
    },
    desc: { fontSize: 12, marginTop: 8, color: "#0b3b34", opacity: 0.85 },
    progressWrap: {
      marginTop: 12,
      background: "rgba(255,255,255,0.55)",
      height: 12,
      borderRadius: 999,
      overflow: "hidden",
    },
    percentText: {
      fontSize: 12,
      marginTop: 8,
      color: "#0b3b34",
      fontWeight: 600,
    },
  };

  const progressFill = (p: number): React.CSSProperties => ({
    width: `${p}%`,
    height: "18px",
    background: "#f43b6b",
    borderRadius: 999,
    transition: "width 600ms ease",
    boxShadow: "0 2px 6px rgba(244,59,107,0.25)",
  });

  return (
    <section style={styles.wrapper} aria-labelledby="distribution-heading">
      <div style={styles.header}>
        <div className="flex items-center justify-end mr-8 space-x-3">
          <span className="text-4xl">Token</span>
          <div className="bg-[#19CC85] mt-2 mb-6 flex items-center justify-center p-4 rounded-lg -rotate-1">
            <span className="text-4xl text-white">Distribution</span>
          </div>
        </div>
        <p style={styles.subtitle}>
          Transparent allocation focused on community value and long-term
          sustainability.
        </p>
      </div>

      <div style={styles.grid}>
        {items.map((it) => (
          <article key={it.id} style={styles.card}>
            <div style={styles.iconWrap} aria-hidden>
              <Image
                src={it.icon}
                alt={it.title}
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            <div className="flex flex-col" style={styles.content}>
              <span className="font-body text-3xl">{it.title}</span>
              <span className="font-body text-xl">{it.amount}</span>
              <p style={styles.desc}>{it.desc}</p>
              <div className="!h-4" style={styles.progressWrap} aria-hidden>
                <div style={progressFill(it.percent)} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DistributionSection;
