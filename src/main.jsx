import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const players = [
  { name: "Lionel Messi", club: "INTER MIAMI", rating: 94, role: "RW", tier: "Ultimate", flag: "🇦🇷", color: "pink", price: 1800 },
  { name: "Kylian Mbappé", club: "REAL MADRID", rating: 93, role: "ST", tier: "Legendary", flag: "🇫🇷", color: "gold", price: 1500 },
  { name: "Erling Haaland", club: "MANCHESTER CITY", rating: 92, role: "ST", tier: "Legendary", flag: "🇳🇴", color: "blue", price: 1300 },
  { name: "Jude Bellingham", club: "REAL MADRID", rating: 91, role: "CM", tier: "Epic", flag: "🏴", color: "purple", price: 950 },
  { name: "Cristiano Ronaldo", club: "AL NASSR", rating: 91, role: "ST", tier: "Ultimate", flag: "🇵🇹", color: "gold", price: 1700 },
  { name: "Vinícius Jr.", club: "REAL MADRID", rating: 90, role: "LW", tier: "Epic", flag: "🇧🇷", color: "green", price: 900 },
  { name: "Mohamed Salah", club: "LIVERPOOL", rating: 89, role: "RW", tier: "Rare", flag: "🇪🇬", color: "red", price: 600 },
  { name: "Lamine Yamal", club: "FC BARCELONA", rating: 88, role: "RW", tier: "Rare", flag: "🇪🇸", color: "blue", price: 550 }
];
const packs = [
  { name: "Starter Pack", rarity: "COMMON", price: 100, icon: "📦", detail: "3 ta futbolchi", color: "silver" },
  { name: "Pro Pack", rarity: "RARE", price: 250, icon: "⚡", detail: "3 ta futbolchi • yuqori imkoniyat", color: "blue" },
  { name: "Elite Pack", rarity: "EPIC", price: 500, icon: "💎", detail: "5 ta futbolchi • Epic imkoniyati", color: "purple" },
  { name: "Legend Pack", rarity: "LEGENDARY", price: 1000, icon: "👑", detail: "5 ta futbolchi • maxsus pack", color: "gold" }
];

function App() {
  const [coins, setCoins] = useState(1200);
  const [collection, setCollection] = useState([players[6], players[7]]);
  const [opened, setOpened] = useState(null);
  const [page, setPage] = useState("home");
  const [notice, setNotice] = useState("");
  const [team, setTeam] = useState({});

  function openPack(pack) {
    if (coins < pack.price) {
      setNotice("Tangalar yetarli emas. Boshqa pack tanlang!");
      return;
    }
    const count = pack.name === "Starter Pack" || pack.name === "Pro Pack" ? 3 : 5;
    const pulls = Array.from({ length: count }, () => players[Math.floor(Math.random() * players.length)]);
    setCoins(c => c - pack.price);
    setCollection(c => [...c, ...pulls]);
    setOpened({ pack, pulls });
    setNotice("");
  }

  const nav = [{ id: "home", label: "Bosh sahifa", icon: "⌂" }, { id: "packs", label: "Pack ochish", icon: "▣" }, { id: "collection", label: "Kolleksiya", icon: "▤" }, { id: "squad", label: "Jamoam", icon: "⚽" }, { id: "leaderboard", label: "Reyting", icon: "♜" }];

  return <div className="app">
    <aside className="sidebar">
      <a className="brand" href="#" onClick={e => {e.preventDefault(); setPage("home");}}><span className="brand-mark">P</span><span>PACK<span className="green">ARENA</span><small>OPEN. COLLECT. DOMINATE.</small></span></a>
      <div className="nav-label">MENU</div>
      {nav.map(n => <button key={n.id} className={"nav-item " + (page === n.id ? "active" : "")} onClick={() => {setPage(n.id); setOpened(null);}}><span className="nav-icon">{n.icon}</span>{n.label}{n.id === "collection" && <span className="nav-count">{collection.length}</span>}</button>)}
      <div className="sidebar-bottom"><div className="season-card"><span className="season-icon">🏆</span><b>SEASON 01</b><p>Maydonga chiqish vaqti!</p><div className="progress"><span /></div><small>Level 1 <span>0 / 500 XP</span></small></div><div className="user-mini"><div className="avatar">⚽</div><div><b>Pack Player</b><small>Free account</small></div><span className="dots">•••</span></div></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="breadcrumb">ARENA <span>/</span> {nav.find(n => n.id === page)?.label.toUpperCase() || "ARENA"}</div><div className="top-actions"><button className="daily" onClick={() => {setCoins(c => c + 100); setNotice("Kunlik mukofot: +100 tanga!");}}>🎁 <span>Kunlik sovg‘a</span></button><div className="balance"><span>🪙</span><div><small>BALANS</small><b>{coins.toLocaleString("en-US")}</b></div><button title="Tanga olish" onClick={() => setNotice("Kunlik sovg‘a tugmasi orqali bepul tanga oling.")}>＋</button></div></div></header>
      {notice && <div className="notice" onClick={() => setNotice("")}>{notice}<button>✕</button></div>}
      {page === "home" && <>
        <section className="hero"><div className="hero-content"><div className="eyebrow"><span className="live-dot" /> FUTBOLNING YANGI ARENASI</div><h1>OMADINGNI<br/> <span>SINAB KO‘R.</span></h1><p>Packlarni och. Afsonaviy futbolchilarni yig‘.<br/>O‘z orzu jamoangni yarat.</p><button className="primary-btn" onClick={() => setPage("packs")}>PACK OCHISH <span>↗</span></button><div className="hero-stats"><div><b>08</b><small>FUTBOLCHI</small></div><div><b>04</b><small>PACK TURI</small></div><div><b>∞</b><small>IMKONIYAT</small></div></div></div><div className="hero-art"><div className="stadium-glow" /><div className="ball">⚽</div><div className="floating-tag tag-top">★ ULTIMATE</div><div className="floating-tag tag-bottom">RATING <b>94</b></div><div className="hero-card"><div className="card-top"><b>94</b><span>RW<br/>🇦🇷</span></div><div className="silhouette">⚽</div><div className="hero-player-name">M E S S I</div><div className="card-club">INTER MIAMI</div><div className="mini-stats"><span>PAC <b>88</b></span><span>SHO <b>90</b></span><span>DRI <b>95</b></span></div></div></div><div className="hero-watermark">PACKARENA</div></section>
        <section className="section"><div className="section-head"><div><div className="eyebrow">SEN UCHUN TANLANDI</div><h2>Ommabop packlar <span>↗</span></h2></div><button className="text-btn" onClick={() => setPage("packs")}>Barchasi <span>→</span></button></div><div className="pack-grid">{packs.slice(0,3).map(p => <PackCard key={p.name} pack={p} onOpen={openPack}/>)}</div></section>
        <section className="section"><div className="section-head"><div><div className="eyebrow">KOLLEKSIYANGNI KUZAT</div><h2>Yulduzlar <span>✦</span></h2></div><button className="text-btn" onClick={() => setPage("collection")}>Kolleksiyam <span>→</span></button></div><div className="player-grid">{players.slice(0,4).map((p,i) => <PlayerCard key={p.name+i} player={p}/>)}</div></section>
      </>}
      {page === "packs" && <section className="page-section"><div className="eyebrow">OMAD SEN TOMONDA BO‘LSIN</div><h1 className="page-title">PACK <span>MARKAZI</span></h1><p className="muted">Pack tanla va keyingi futbol yulduzingni kashf et.</p><div className="pack-grid all-packs">{packs.map(p => <PackCard key={p.name} pack={p} onOpen={openPack}/>)}</div></section>}
      {page === "collection" && <section className="page-section"><div className="eyebrow">SENING FUTBOL MEROSING</div><h1 className="page-title">MENING <span>KOLLEKSIYAM</span></h1><p className="muted">Yig‘ilgan futbolchilar: {collection.length}</p>{collection.length ? <div className="player-grid collection-grid">{collection.map((p,i) => <PlayerCard key={p.name+i} player={p}/>)}</div> : <div className="empty">Hozircha futbolchi yo‘q. <button onClick={() => setPage("packs")}>Pack ochish →</button></div>}</section>}
      {page === "squad" && <section className="page-section"><div className="eyebrow">TAKTIKANGNI TANLA</div><h1 className="page-title">ORZU <span>JAMOAM</span></h1><p className="muted">4-3-3 sxemasi • O‘yinchilaringni joylashtir.</p><div className="pitch">{["LW","ST","RW","CM","CM","CM","LB","CB","CB","RB","GK"].map((pos,i) => <button key={pos+i} className="slot" onClick={() => {const p = collection.find(x => !Object.values(team).includes(x.name)); if(p) setTeam(t => ({...t,[i]:p.name})); else setNotice("Avval pack ochib futbolchi yig‘!");}}><span>{team[i] ? "⚽" : "+"}</span><b>{team[i] || pos}</b></button>)}</div><button className="secondary-btn" onClick={() => setTeam({})}>Jamoani tozalash</button></section>}
      {page === "leaderboard" && <section className="page-section"><div className="eyebrow">ENG KUCHLI KOLLEKSIYACHILAR</div><h1 className="page-title">ARENA <span>REYTINGI</span></h1><div className="leaderboard">{[["01","GoldenBoot","12,450"],["02","TikiTaka","10,820"],["03","GoalMachine","9,640"],["04","Pack Player",collection.length.toLocaleString() + " cards"]].map((r,i)=><div className="leader-row" key={r[1]}><b className="rank">{r[0]}</b><span className="leader-avatar">{["👑","⚡","🔥","⚽"][i]}</span><strong>{r[1]}</strong><span className="leader-score">{r[2]}</span></div>)}</div><p className="muted small">Namuna reytingi. Online reyting server va ma’lumotlar bazasi ulanganda yangilanadi.</p></section>}
      <footer>© 2026 PACKARENA <span>FUTBOL ISHTIYOQI BILAN YARATILDI</span><span>DEMO • VIRTUAL TANGALAR</span></footer>
    </main>
    {opened && <div className="modal-backdrop" onClick={() => setOpened(null)}><div className="reveal-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setOpened(null)}>✕</button><div className="eyebrow">PACK OCHILDI</div><h2>{opened.pack.name} <span>✨</span></h2><p className="muted">Sening yangi futbolchilaring!</p><div className="reveal-grid">{opened.pulls.map((p,i)=><PlayerCard key={p.name+i} player={p}/>)}</div><button className="primary-btn" onClick={() => setOpened(null)}>DAVOM ETISH →</button></div></div>}
  </div>;
}

function PackCard({ pack, onOpen }) {
  return <div className={"pack-card " + pack.color}><div className="pack-top"><span className="pack-rarity">{pack.rarity}</span><span className="pack-shine">✦</span></div><div className="pack-illustration"><div className="pack-orbit" /><span>{pack.icon}</span></div><h3>{pack.name}</h3><p>{pack.detail}</p><div className="pack-bottom"><div className="price"><span>🪙</span><b>{pack.price}</b></div><button onClick={() => onOpen(pack)}>OCHISH <span>↗</span></button></div></div>;
}
function PlayerCard({ player }) {
  return <div className={"player-card " + player.color}><div className="player-card-head"><b>{player.rating}</b><span>{player.role}<br/>{player.flag}</span></div><div className="player-art">⚽</div><div className="player-info"><b>{player.name}</b><small>{player.club}</small></div><div className="player-card-foot"><span>{player.tier.toUpperCase()}</span><span>★ {player.rating}</span></div></div>;
}
createRoot(document.getElementById("root")).render(<App />);