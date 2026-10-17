import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { House, PackageOpen, Library, UsersRound, Trophy, Gift, Coins, Plus, X, ArrowUpRight, Sparkles, RotateCcw, ShieldCheck, Star, UserRound, Check, CircleHelp } from "lucide-react";
import "./style.css";

const players = [
  { id:"messi", name:"Lionel Messi", club:"INTER MIAMI", rating:94, role:"RW", tier:"Ultimate", flag:"🇦🇷", color:"pink", price:1800, image:"https://a.espncdn.com/i/headshots/soccer/players/full/45843.png", stats:{PAC:82,SHO:90,PAS:90,DRI:95,DEF:35,PHY:65} },
  { id:"mbappe", name:"Kylian Mbappé", club:"REAL MADRID", rating:93, role:"ST", tier:"Legendary", flag:"🇫🇷", color:"gold", price:1500, image:"https://a.espncdn.com/i/headshots/soccer/players/full/231388.png", stats:{PAC:97,SHO:90,PAS:80,DRI:92,DEF:36,PHY:78} },
  { id:"haaland", name:"Erling Haaland", club:"MANCHESTER CITY", rating:92, role:"ST", tier:"Legendary", flag:"🇳🇴", color:"blue", price:1300, image:"https://a.espncdn.com/i/headshots/soccer/players/full/256697.png", stats:{PAC:89,SHO:94,PAS:66,DRI:80,DEF:45,PHY:91} },
  { id:"bellingham", name:"Jude Bellingham", club:"REAL MADRID", rating:91, role:"CM", tier:"Epic", flag:"🏴", color:"purple", price:950, image:"https://a.espncdn.com/i/headshots/soccer/players/full/312284.png", stats:{PAC:82,SHO:85,PAS:88,DRI:90,DEF:78,PHY:85} },
  { id:"ronaldo", name:"Cristiano Ronaldo", club:"AL NASSR", rating:91, role:"ST", tier:"Ultimate", flag:"🇵🇹", color:"gold", price:1700, image:"https://a.espncdn.com/i/headshots/soccer/players/full/22774.png", stats:{PAC:80,SHO:93,PAS:76,DRI:84,DEF:34,PHY:77} },
  { id:"vinicius", name:"Vinícius Jr.", club:"REAL MADRID", rating:90, role:"LW", tier:"Epic", flag:"🇧🇷", color:"green", price:900, image:"https://a.espncdn.com/i/headshots/soccer/players/full/259382.png", stats:{PAC:95,SHO:84,PAS:81,DRI:94,DEF:29,PHY:68} },
  { id:"salah", name:"Mohamed Salah", club:"LIVERPOOL", rating:89, role:"RW", tier:"Rare", flag:"🇪🇬", color:"red", price:600, image:"https://a.espncdn.com/i/headshots/soccer/players/full/153189.png", stats:{PAC:89,SHO:88,PAS:82,DRI:89,DEF:45,PHY:75} },
  { id:"yamal", name:"Lamine Yamal", club:"FC BARCELONA", rating:88, role:"RW", tier:"Rare", flag:"🇪🇸", color:"blue", price:550, image:"https://a.espncdn.com/i/headshots/soccer/players/full/362223.png", stats:{PAC:88,SHO:78,PAS:84,DRI:92,DEF:25,PHY:55} },
  { id:"courtois", name:"Thibaut Courtois", club:"REAL MADRID", rating:90, role:"GK", tier:"Epic", flag:"🇧🇪", color:"purple", price:850, image:"https://a.espncdn.com/i/headshots/soccer/players/full/148119.png", stats:{DIV:90,HAN:89,KIC:76,REF:91,SPE:46,POS:90} },
  { id:"van dijk", name:"Virgil van Dijk", club:"LIVERPOOL", rating:90, role:"CB", tier:"Epic", flag:"🇳🇱", color:"gold", price:900, image:"https://a.espncdn.com/i/headshots/soccer/players/full/139982.png", stats:{PAC:75,SHO:60,PAS:71,DRI:72,DEF:91,PHY:90} },
  { id:"debruyne", name:"Kevin De Bruyne", club:"MANCHESTER CITY", rating:90, role:"CM", tier:"Epic", flag:"🇧🇪", color:"blue", price:900, image:"https://a.espncdn.com/i/headshots/soccer/players/full/164484.png", stats:{PAC:72,SHO:86,PAS:94,DRI:87,DEF:64,PHY:78} },
  { id:"saka", name:"Bukayo Saka", club:"ARSENAL", rating:88, role:"RW", tier:"Rare", flag:"🏴", color:"green", price:620, image:"https://a.espncdn.com/i/headshots/soccer/players/full/280555.png", stats:{PAC:88,SHO:83,PAS:82,DRI:88,DEF:62,PHY:70} }
];
const packs = [
  { name:"Starter Pack", rarity:"COMMON", price:100, icon:"📦", detail:"3 ta futbolchi • boshlash uchun", color:"silver", count:3 },
  { name:"Pro Pack", rarity:"RARE", price:250, icon:"⚡", detail:"3 ta futbolchi • omad imkoniyati yuqori", color:"blue", count:3 },
  { name:"Elite Pack", rarity:"EPIC", price:500, icon:"💎", detail:"5 ta futbolchi • Epic imkoniyati", color:"purple", count:5 },
  { name:"Legend Pack", rarity:"LEGENDARY", price:1000, icon:"👑", detail:"5 ta futbolchi • afsonaviy pack", color:"gold", count:5 }
];
const nav = [
  {id:"home",label:"Bosh sahifa",icon:House},
  {id:"packs",label:"Pack ochish",icon:PackageOpen},
  {id:"collection",label:"Kolleksiya",icon:Library},
  {id:"squad",label:"Orzu jamoam",icon:UsersRound},
  {id:"leaderboard",label:"Reyting",icon:Trophy}
];
const formations = [
  { key:"433", label:"4-3-3", rows:[["LW","ST","RW"],["CM","CM","CM"],["LB","CB","CB","RB"],["GK"]] },
  { key:"442", label:"4-4-2", rows:[["ST","ST"],["LM","CM","CM","RM"],["LB","CB","CB","RB"],["GK"]] }
];
const eligibleRoles = { LW:["LW","LM"], ST:["ST","CF"], RW:["RW","RM"], CM:["CM","CDM","CAM"], LM:["LM","LW"], RM:["RM","RW"], LB:["LB"], CB:["CB"], RB:["RB"], GK:["GK"], CDM:["CDM","CM"], CAM:["CAM","CM","CF"], CF:["CF","ST"] };

function App() {
  const [coins,setCoins] = useState(1200);
  const [collection,setCollection] = useState([players[6],players[7]]);
  const [opened,setOpened] = useState(null);
  const [page,setPage] = useState("home");
  const [notice,setNotice] = useState("");
  const [team,setTeam] = useState({});
  const [opening,setOpening] = useState(false);
  const [selectedSlot,setSelectedSlot] = useState(null);
  const [formation,setFormation] = useState("433");
  const [giftClaimed,setGiftClaimed] = useState(false);
  const [profile,setProfile] = useState(()=>{try{return JSON.parse(localStorage.getItem("packarena-profile")||"null")}catch{return null}});
  const [authName,setAuthName] = useState("");
  const [authUsername,setAuthUsername] = useState("");
  const [authError,setAuthError] = useState("");

  useEffect(() => {
    if (!opening || !opened) return;
    const timer = window.setTimeout(() => setOpening(false), 2500);
    return () => window.clearTimeout(timer);
  }, [opening,opened]);

  function openPack(pack) {
    if (opening) return;
    if (coins < pack.price) { setNotice("Tangalar yetarli emas. Boshqa pack tanlang!"); return; }
    const pulls = Array.from({length:pack.count}, () => players[Math.floor(Math.random()*players.length)]);
    setCoins(c => c-pack.price);
    setCollection(c => [...c,...pulls]);
    setOpened({pack,pulls});
    setOpening(true);
    setNotice("");
  }
  function claimGift() {
    if (giftClaimed) { setNotice("Kunlik sovg‘a bugun allaqachon olindi."); return; }
    setGiftClaimed(true); setCoins(c=>c+100); setNotice("Kunlik mukofot: +100 tanga!");
  }
  const currentNav = nav.find(n=>n.id===page);
  const activeFormation = formations.find(f=>f.key===formation) || formations[0];
  const squadPlayers = Object.values(team).filter(Boolean).length;
  function createProfile(e){e.preventDefault();const name=authName.trim();const username=authUsername.trim().replace(/^@/,"").replace(/\\s+/g,"");if(name.length<2){setAuthError("Ismingizni kamida 2 ta harf bilan kiriting.");return;}if(!/^[a-zA-Z0-9_]{3,20}$/.test(username)){setAuthError("Username 3–20 belgi: lotin harflari, raqam yoki _.");return;}const next={name,username};localStorage.setItem("packarena-profile",JSON.stringify(next));setProfile(next);setAuthError("");}
  if(!profile)return <div className="auth-screen"><div className="auth-panel"><img src="/packarena-logo.svg" alt="PackArena" className="auth-logo"/><div className="eyebrow">YANGI MAVSUM BOSHLANDI</div><h1>ARENAGA <span>XUSH KELIBSIZ</span></h1><p>Profil yaratish uchun faqat ismingiz va username’ingiz kerak.</p><form onSubmit={createProfile} className="auth-form"><label>Ism</label><input value={authName} onChange={e=>setAuthName(e.target.value)} placeholder="Masalan, Ali" autoComplete="name" maxLength={40} required/><label>Username</label><div className="username-input"><span>@</span><input value={authUsername} onChange={e=>setAuthUsername(e.target.value.replace(/^@/,""))} placeholder="ali_uz" autoComplete="username" maxLength={20} required/></div>{authError&&<div className="auth-error">{authError}</div>}<button className="primary-btn auth-submit" type="submit">ARENAGA KIRISH <ArrowUpRight size={17}/></button></form><small className="auth-note">Parol va telefon raqami so‘ralmaydi. Bu hozircha ushbu qurilmada saqlanadigan demo profil.</small></div></div>;
  return <div className="app">
    <aside className="sidebar">
      <a className="brand" href="#" onClick={e=>{e.preventDefault();setPage("home");}}><img src="/packarena-logo.svg" alt="PackArena logo" className="brand-logo"/><span className="brand-word">PACK<span className="green">ARENA</span><small>OPEN. COLLECT. DOMINATE.</small></span></a>
      <div className="nav-label">ASOSIY MENYU</div>
      {nav.map(n=>{const Icon=n.icon;return <button key={n.id} className={"nav-item "+(page===n.id?"active":"")} onClick={()=>{setPage(n.id);setOpened(null);setSelectedSlot(null);}}><Icon className="nav-icon" size={18} strokeWidth={2.1}/>{n.label}{n.id==="collection"&&<span className="nav-count">{collection.length}</span>}</button>;})}
      <div className="sidebar-bottom"><div className="season-card"><Trophy size={23} className="season-icon"/><b>SEASON 01</b><p>Maydonga chiqish vaqti!</p><div className="progress"><span/></div><small>Level 1 <span>0 / 500 XP</span></small></div><div className="user-mini"><div className="avatar"><UserRound size={17}/></div><div><b>{profile.name}</b><small>@{profile.username}</small></div><button className="profile-reset" title="Profilni almashtirish" onClick={()=>{localStorage.removeItem("packarena-profile");setProfile(null);}}>↻</button></div></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="breadcrumb">PACKARENA <span>/</span> {currentNav?.label.toUpperCase()||"ARENA"}</div><div className="top-actions"><button className="daily" onClick={claimGift}><Gift size={15}/><span>Kunlik sovg‘a</span></button><div className="balance"><Coins size={22}/><div><small>BALANS</small><b>{coins.toLocaleString("en-US")}</b></div><button title="Tanga olish" onClick={()=>setNotice("Kunlik sovg‘a orqali bepul 100 tanga olish mumkin.")}><Plus size={16}/></button></div></div></header>
      {notice&&<div className="notice" role="status">{notice}<button aria-label="Yopish" onClick={()=>setNotice("")}><X size={15}/></button></div>}
      {page==="home"&&<>
        <section className="hero"><div className="hero-content"><div className="eyebrow"><span className="live-dot"/> FUTBOLNING YANGI ARENASI</div><h1>OMADINGNI<br/><span>SINAB KO‘R.</span></h1><p>Packlarni och. Afsonaviy futbolchilarni yig‘.<br/>O‘z orzu jamoangni yarat.</p><button className="primary-btn" onClick={()=>setPage("packs")}>PACK OCHISH <ArrowUpRight size={17}/></button><div className="hero-stats"><div><b>12+</b><small>FUTBOLCHI</small></div><div><b>04</b><small>PACK TURI</small></div><div><b>∞</b><small>IMKONIYAT</small></div></div></div><div className="hero-art"><div className="stadium-glow"/><div className="ball">⚽</div><div className="floating-tag tag-top"><Star size={12} fill="currentColor"/> ULTIMATE</div><div className="floating-tag tag-bottom">RATING <b>94</b></div><div className="hero-card"><div className="card-top"><b>94</b><span>RW<br/>🇦🇷</span></div><img className="hero-player-photo" src={players[0].image} alt="Lionel Messi" onError={e=>{e.currentTarget.style.display="none";}}/><div className="hero-player-name">LIONEL MESSI</div><div className="card-club">INTER MIAMI</div><div className="mini-stats"><span>PAC <b>82</b></span><span>SHO <b>90</b></span><span>DRI <b>95</b></span></div></div></div><div className="hero-watermark">PACKARENA</div></section>
        <section className="section"><div className="section-head"><div><div className="eyebrow">SEN UCHUN TANLANDI</div><h2>Ommabop packlar <Sparkles size={18}/></h2></div><button className="text-btn" onClick={()=>setPage("packs")}>Barchasi <ArrowUpRight size={15}/></button></div><div className="pack-grid">{packs.slice(0,3).map(p=><PackCard key={p.name} pack={p} onOpen={openPack} disabled={opening}/>)}</div></section>
        <section className="section"><div className="section-head"><div><div className="eyebrow">KOLLEKSIYANGNI KUZAT</div><h2>Yulduzlar <Star size={17}/></h2></div><button className="text-btn" onClick={()=>setPage("collection")}>Kolleksiyam <ArrowUpRight size={15}/></button></div><div className="player-grid">{players.slice(0,4).map(p=><PlayerCard key={p.id} player={p}/>)}</div></section>
      </>}
      {page==="packs"&&<section className="page-section"><div className="eyebrow">OMAD SEN TOMONDA BO‘LSIN</div><h1 className="page-title">PACK <span>MARKAZI</span></h1><p className="muted">Pack tanla va keyingi futbol yulduzingni kashf et.</p><div className="pack-grid all-packs">{packs.map(p=><PackCard key={p.name} pack={p} onOpen={openPack} disabled={opening}/>)}</div></section>}
      {page==="collection"&&<section className="page-section"><div className="eyebrow">SENING FUTBOL MEROSING</div><h1 className="page-title">MENING <span>KOLLEKSIYAM</span></h1><p className="muted">Yig‘ilgan futbolchilar: {collection.length} • Orzu jamoangga qo‘shish uchun “Orzu jamoam” bo‘limiga o‘t.</p>{collection.length?<div className="player-grid collection-grid">{collection.map((p,i)=><PlayerCard key={p.id+"-"+i} player={p}/>)}</div>:<div className="empty">Hozircha futbolchi yo‘q. <button onClick={()=>setPage("packs")}>Pack ochish <ArrowUpRight size={14}/></button></div>}</section>}
      {page==="squad"&&<section className="page-section"><div className="eyebrow">TAKTIKANGNI TANLA</div><h1 className="page-title">ORZU <span>JAMOAM</span></h1><p className="muted">Har bir futbolchini o‘z pozitsiyasiga qo‘y. Faqat mos pozitsiyadagi futbolchilar tanlanadi.</p><div className="squad-toolbar"><label>Format</label><div className="formation-tabs">{formations.map(f=><button key={f.key} className={formation===f.key?"chosen":""} onClick={()=>{setFormation(f.key);setTeam({});}}>{f.label}</button>)}</div><span className="squad-count"><ShieldCheck size={15}/>{squadPlayers}/11 joy band</span></div><div className="pitch">{activeFormation.rows.map((row,ri)=><div className={"pitch-row pitch-row-"+ri} key={ri}>{row.map((pos,i)=>{const slotKey=ri+"-"+i;const p=team[slotKey];return <button key={slotKey} className={"slot "+(p?"filled":"")} onClick={()=>setSelectedSlot({key:slotKey,pos})} aria-label={pos+" pozitsiyasini tanlash"}>{p?<><img src={p.image} alt={p.name} onError={e=>{e.currentTarget.style.opacity=0;}}/><span className="slot-rating">{p.rating}</span><b>{p.name}</b><small>{p.role}</small></>:<><span className="slot-plus"><Plus size={16}/></span><b>{pos}</b><small>Tanlash</small></>}</button>;})}</div>)}</div><div className="squad-actions"><button className="secondary-btn" onClick={()=>setTeam({})}><RotateCcw size={15}/> Jamoani tozalash</button><span className="muted small"><CircleHelp size={13}/> Bo‘sh pozitsiyani bosing, mos futbolchini tanlang.</span></div></section>}
      {page==="leaderboard"&&<section className="page-section"><div className="eyebrow">ENG KUCHLI KOLLEKSIYACHILAR</div><h1 className="page-title">ARENA <span>REYTINGI</span></h1><div className="leaderboard">{[["01","GoldenBoot","12,450"],["02","TikiTaka","10,820"],["03","GoalMachine","9,640"],["04",profile.username,collection.length+" cards"]].map((r,i)=><div className="leader-row" key={r[1]}><b className="rank">{r[0]}</b><span className="leader-avatar">{[<Trophy/>,<Sparkles/>,<Star/>,<UserRound/>][i]}</span><strong>{r[1]}</strong><span className="leader-score">{r[2]}</span></div>)}</div><p className="muted small">Namuna reytingi. Online reyting server va ma’lumotlar bazasi ulanganda yangilanadi.</p></section>}
      <footer><span>© 2026 PACKARENA</span><span>FUTBOL ISHTIYOQI BILAN YARATILDI</span><span>DEMO • VIRTUAL TANGALAR</span></footer>
    </main>
    {opened&&<div className={"modal-backdrop "+(opening?"is-opening":"")} onClick={()=>{if(!opening)setOpened(null);}}><div className={"reveal-modal "+(opening?"opening-modal":"")} onClick={e=>e.stopPropagation()}>{!opening&&<button className="modal-close" onClick={()=>setOpened(null)} aria-label="Yopish"><X size={18}/></button>}<div className="eyebrow">{opening?"PACK OCHILMOQDA":"PACK OCHILDI"}</div>{opening?<div className="pack-animation"><div className={"animated-pack "+opened.pack.color}><span>{opened.pack.icon}</span></div><div className="animation-ring"/><h2>OMADNI SINAYAPMIZ<span>...</span></h2><p className="muted">Yulduzlar ochilmoqda</p><div className="loading-line"><span/></div></div>:<><h2>{opened.pack.name} <Sparkles size={22}/></h2><p className="muted">Sening yangi futbolchilaring!</p><div className="reveal-grid">{opened.pulls.map((p,i)=><PlayerCard key={p.id+"-"+i} player={p}/>)}</div><button className="primary-btn" onClick={()=>setOpened(null)}>DAVOM ETISH <ArrowUpRight size={17}/></button></>}</div></div>}
    {selectedSlot&&<div className="modal-backdrop" onClick={()=>setSelectedSlot(null)}><div className="picker-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedSlot(null)} aria-label="Yopish"><X size={18}/></button><div className="eyebrow">POZITSIYA TANLASH</div><h2>{selectedSlot.pos} <span>uchun futbolchilar</span></h2><p className="muted">Bu joyga faqat mos pozitsiyadagi futbolchilar qo‘yiladi.</p><div className="picker-list">{collection.filter(p=>(eligibleRoles[selectedSlot.pos]||[selectedSlot.pos]).includes(p.role)).map((p,i)=><button className="picker-player" key={p.id+"-"+i} onClick={()=>{setTeam(t=>({...t,[selectedSlot.key]:p}));setSelectedSlot(null);}}><img src={p.image} alt={p.name} onError={e=>{e.currentTarget.style.opacity=0;}}/><span><b>{p.name}</b><small>{p.club} • {p.role}</small></span><strong>{p.rating}</strong><Check size={15}/></button>)}{collection.filter(p=>(eligibleRoles[selectedSlot.pos]||[selectedSlot.pos]).includes(p.role)).length===0&&<div className="empty">Bu pozitsiyaga mos futbolchi yo‘q. <button onClick={()=>{setSelectedSlot(null);setPage("packs");}}>Pack ochish <ArrowUpRight size={14}/></button></div>}</div><button className="secondary-btn picker-clear" onClick={()=>{setTeam(t=>{const n={...t};delete n[selectedSlot.key];return n;});setSelectedSlot(null);}}>Pozitsiyani bo‘shatish</button></div></div>}
  </div>;
}
function PackCard({pack,onOpen,disabled}){return <div className={"pack-card "+pack.color}><div className="pack-top"><span className="pack-rarity">{pack.rarity}</span><Sparkles size={16} className="pack-shine"/></div><div className="pack-illustration"><div className="pack-orbit"/><span>{pack.icon}</span></div><h3>{pack.name}</h3><p>{pack.detail}</p><div className="pack-bottom"><div className="price"><Coins size={16}/><b>{pack.price}</b></div><button disabled={disabled} onClick={()=>onOpen(pack)}>OCHISH <ArrowUpRight size={14}/></button></div></div>}
function PlayerCard({player}){return <div className={"player-card "+player.color}><div className="player-card-head"><b>{player.rating}</b><span>{player.role}<br/>{player.flag}</span></div><div className="player-art"><div className="photo-glow"/><img src={player.image} alt={player.name} loading="lazy" onError={e=>{e.currentTarget.style.display="none";e.currentTarget.parentElement.classList.add("photo-missing");}}/><span className="player-fallback">{player.flag}</span></div><div className="player-info"><b>{player.name}</b><small>{player.club}</small></div><div className="player-card-foot"><span>{player.tier.toUpperCase()}</span><span><Star size={10} fill="currentColor"/> {player.rating}</span></div></div>}
createRoot(document.getElementById("root")).render(<App />);
