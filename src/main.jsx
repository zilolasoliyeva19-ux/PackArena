import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { House, PackageOpen, Library, UsersRound, Trophy, Gift, Coins, Plus, X, ArrowUpRight, Sparkles, RotateCcw, ShieldCheck, Star, UserRound, Check, CircleHelp, BookOpen, Search, LockKeyhole, Trash2, LogOut, Database, Globe, ExternalLink, CheckCircle2, PlusCircle } from "lucide-react";
import "./style.css";

const players = [
  { id:"messi", name:"Lionel Messi", club:"INTER MIAMI", rating:94, role:"RW", tier:"Ultimate", flag:"🇦🇷", color:"pink", price:1800, image:"https://a.espncdn.com/i/headshots/soccer/players/full/45843.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Lionel_Messi_Argentina_v_Spain_19_July_2026-070.jpg/960px-Lionel_Messi_Argentina_v_Spain_19_July_2026-070.jpg", profile:"https://www.espn.com/soccer/player/_/id/45843/lionel-messi", stats:{PAC:82,SHO:90,PAS:90,DRI:95,DEF:35,PHY:65} },
  { id:"mbappe", name:"Kylian Mbappé", club:"REAL MADRID", rating:93, role:"ST", tier:"Legendary", flag:"🇫🇷", color:"gold", price:1500, image:"https://a.espncdn.com/i/headshots/soccer/players/full/231388.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/Kylian_Mbappe_France_v_Sweden_6.30.26-225.jpg/960px-Kylian_Mbappe_France_v_Sweden_6.30.26-225.jpg", profile:"https://www.espn.com/soccer/player/_/id/231388/kylian-mbappe", stats:{PAC:97,SHO:90,PAS:80,DRI:92,DEF:36,PHY:78} },
  { id:"haaland", name:"Erling Haaland", club:"MANCHESTER CITY", rating:92, role:"ST", tier:"Legendary", flag:"🇳🇴", color:"blue", price:1300, image:"https://a.espncdn.com/i/headshots/soccer/players/full/256697.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Erling_Haaland_2023.jpg/500px-Erling_Haaland_2023.jpg", profile:"https://www.espn.com/soccer/player/_/id/256697/erling-haaland", stats:{PAC:89,SHO:94,PAS:66,DRI:80,DEF:45,PHY:91} },
  { id:"bellingham", name:"Jude Bellingham", club:"REAL MADRID", rating:91, role:"CM", tier:"Epic", flag:"🏴", color:"purple", price:950, image:"https://a.espncdn.com/i/headshots/soccer/players/full/312284.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Jude_Bellingham_England_v_Panama_27_June_26-117.jpg/960px-Jude_Bellingham_England_v_Panama_27_June_26-117.jpg", profile:"https://www.espn.com/soccer/player/_/id/312284/jude-bellingham", stats:{PAC:82,SHO:85,PAS:88,DRI:90,DEF:78,PHY:85} },
  { id:"ronaldo", name:"Cristiano Ronaldo", club:"AL NASSR", rating:91, role:"ST", tier:"Ultimate", flag:"🇵🇹", color:"gold", price:1700, image:"https://a.espncdn.com/i/headshots/soccer/players/full/22774.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-070.jpg/960px-Cristiano_Ronaldo_Croatia_v_Portugal_2_July_2026-070.jpg", profile:"https://www.espn.com/soccer/player/_/id/22774/cristiano-ronaldo", stats:{PAC:80,SHO:93,PAS:76,DRI:84,DEF:34,PHY:77} },
  { id:"vinicius", name:"Vinícius Jr.", club:"REAL MADRID", rating:90, role:"LW", tier:"Epic", flag:"🇧🇷", color:"green", price:900, image:"https://a.espncdn.com/i/headshots/soccer/players/full/259382.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Vinicius_Junior_Brazil_V_Morocco_13_June_2026-94_%28cropped%29.jpg/960px-Vinicius_Junior_Brazil_V_Morocco_13_June_2026-94_%28cropped%29.jpg", profile:"https://www.espn.com/soccer/player/_/id/259382/vinicius-junior", stats:{PAC:95,SHO:84,PAS:81,DRI:94,DEF:29,PHY:68} },
  { id:"salah", name:"Mohamed Salah", club:"LIVERPOOL", rating:89, role:"RW", tier:"Rare", flag:"🇪🇬", color:"red", price:600, image:"https://a.espncdn.com/i/headshots/soccer/players/full/153189.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Mohamed_Salah_Argentina_v_Egypt_7_July_2026-277.jpg/960px-Mohamed_Salah_Argentina_v_Egypt_7_July_2026-277.jpg", profile:"https://www.espn.com/soccer/player/_/id/153189/mohamed-salah", stats:{PAC:89,SHO:88,PAS:82,DRI:89,DEF:45,PHY:75} },
  { id:"yamal", name:"Lamine Yamal", club:"FC BARCELONA", rating:88, role:"RW", tier:"Rare", flag:"🇪🇸", color:"blue", price:550, image:"https://a.espncdn.com/i/headshots/soccer/players/full/362223.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Lamine_Yamal_Argentina_v_Spain_19_July_2026-144.jpg/960px-Lamine_Yamal_Argentina_v_Spain_19_July_2026-144.jpg", profile:"https://www.espn.com/soccer/player/_/id/362223/lamine-yamal", stats:{PAC:88,SHO:78,PAS:84,DRI:92,DEF:25,PHY:55} },
  { id:"courtois", name:"Thibaut Courtois", club:"REAL MADRID", rating:90, role:"GK", tier:"Epic", flag:"🇧🇪", color:"purple", price:850, image:"https://a.espncdn.com/i/headshots/soccer/players/full/148119.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Thibaut_Courtois_Belgium_v_USA_6_July_2026-076.jpg/960px-Thibaut_Courtois_Belgium_v_USA_6_July_2026-076.jpg", profile:"https://www.espn.com/soccer/player/_/id/148119/thibaut-courtois", stats:{DIV:90,HAN:89,KIC:76,REF:91,SPE:46,POS:90} },
  { id:"van dijk", name:"Virgil van Dijk", club:"LIVERPOOL", rating:90, role:"CB", tier:"Epic", flag:"🇳🇱", color:"gold", price:900, image:"https://a.espncdn.com/i/headshots/soccer/players/full/139982.png", backupImage:"https://upload.wikimedia.org/wikipedia/commons/2/25/Alisson_Becker_and_Virgil_van_Dijk_04012026_%281%29_-_Van_Dijk_%28cropped%29.jpg", profile:"https://www.espn.com/soccer/player/_/id/139982/virgil-van-dijk", stats:{PAC:75,SHO:60,PAS:71,DRI:72,DEF:91,PHY:90} },
  { id:"debruyne", name:"Kevin De Bruyne", club:"MANCHESTER CITY", rating:90, role:"CM", tier:"Epic", flag:"🇧🇪", color:"blue", price:900, image:"https://a.espncdn.com/i/headshots/soccer/players/full/164484.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Kevin_De_Bruyne_Belgium_v_USA_6_July_2026-034.jpg/960px-Kevin_De_Bruyne_Belgium_v_USA_6_July_2026-034.jpg", profile:"https://www.espn.com/soccer/player/_/id/164484/kevin-de-bruyne", stats:{PAC:72,SHO:86,PAS:94,DRI:87,DEF:64,PHY:78} },
  { id:"saka", name:"Bukayo Saka", club:"ARSENAL", rating:88, role:"RW", tier:"Rare", flag:"🏴", color:"green", price:620, image:"https://a.espncdn.com/i/headshots/soccer/players/full/280555.png", backupImage:"https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Bukayo_Saka_England_v_Panama_27_June_26-149.jpg/960px-Bukayo_Saka_England_v_Panama_27_June_26-149.jpg", profile:"https://www.espn.com/soccer/player/_/id/280555/bukayo-saka", stats:{PAC:88,SHO:83,PAS:82,DRI:88,DEF:62,PHY:70} }
];
const extraPlayers = [{"id":"pedri","name":"Pedri","club":"FC BARCELONA","rating":91,"role":"CM","tier":"Epic","flag":"🇪🇸","color":"blue","price":900,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/250465.png","profile":"https://www.espn.com/soccer/player/_/id/250465/pedri","wikiTitle":"Pedri","stats":{"PAC":78,"SHO":72,"PAS":93,"DRI":91,"DEF":69,"PHY":70}},{"id":"rodri","name":"Rodri","club":"FC BARCELONA","rating":92,"role":"CDM","tier":"Legendary","flag":"🇪🇸","color":"gold","price":1200,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/231828.png","profile":"https://www.espn.com/soccer/player/_/id/231828/rodri","wikiTitle":"Rodri","stats":{"PAC":66,"SHO":74,"PAS":91,"DRI":80,"DEF":88,"PHY":87}},{"id":"foden","name":"Phil Foden","club":"MANCHESTER CITY","rating":89,"role":"CAM","tier":"Epic","flag":"🏴","color":"blue","price":800,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/250454.png","profile":"https://www.espn.com/soccer/player/_/id/250454/foden","wikiTitle":"Phil Foden","stats":{"PAC":84,"SHO":85,"PAS":87,"DRI":91,"DEF":51,"PHY":62}},{"id":"musiala","name":"Jamal Musiala","club":"BAYERN MUNICH","rating":90,"role":"CAM","tier":"Epic","flag":"🇩🇪","color":"purple","price":920,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/303821.png","profile":"https://www.espn.com/soccer/player/_/id/303821/musiala","wikiTitle":"Jamal Musiala","stats":{"PAC":85,"SHO":82,"PAS":86,"DRI":94,"DEF":52,"PHY":67}},{"id":"kane","name":"Harry Kane","club":"BAYERN MUNICH","rating":92,"role":"ST","tier":"Legendary","flag":"🏴","color":"gold","price":1250,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/142646.png","profile":"https://www.espn.com/soccer/player/_/id/142646/kane","wikiTitle":"Harry Kane","stats":{"PAC":72,"SHO":94,"PAS":85,"DRI":82,"DEF":47,"PHY":83}},{"id":"son","name":"Son Heung-min","club":"LOS ANGELES FC","rating":88,"role":"LW","tier":"Rare","flag":"🇰🇷","color":"red","price":650,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/149945.png","profile":"https://www.espn.com/soccer/player/_/id/149945/son","wikiTitle":"Son Heung-min","stats":{"PAC":88,"SHO":86,"PAS":81,"DRI":87,"DEF":42,"PHY":68}},{"id":"neymar","name":"Neymar Jr.","club":"SANTOS","rating":89,"role":"LW","tier":"Epic","flag":"🇧🇷","color":"purple","price":950,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/132948.png","profile":"https://www.espn.com/soccer/player/_/id/132948/neymar","wikiTitle":"Neymar","stats":{"PAC":83,"SHO":84,"PAS":86,"DRI":94,"DEF":35,"PHY":58}},{"id":"raphinha","name":"Raphinha","club":"FC BARCELONA","rating":89,"role":"RW","tier":"Epic","flag":"🇧🇷","color":"blue","price":850,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/233419.png","profile":"https://www.espn.com/soccer/player/_/id/233419/raphinha","wikiTitle":"Raphinha","stats":{"PAC":89,"SHO":86,"PAS":83,"DRI":88,"DEF":52,"PHY":73}},{"id":"odegaard","name":"Martin Ødegaard","club":"ARSENAL","rating":90,"role":"CAM","tier":"Epic","flag":"🇳🇴","color":"red","price":900,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/231092.png","profile":"https://www.espn.com/soccer/player/_/id/231092/odegaard","wikiTitle":"Martin Ødegaard","stats":{"PAC":73,"SHO":80,"PAS":92,"DRI":90,"DEF":58,"PHY":62}},{"id":"kimmich","name":"Joshua Kimmich","club":"BAYERN MUNICH","rating":89,"role":"CDM","tier":"Epic","flag":"🇩🇪","color":"red","price":850,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/173306.png","profile":"https://www.espn.com/soccer/player/_/id/173306/kimmich","wikiTitle":"Joshua Kimmich","stats":{"PAC":69,"SHO":72,"PAS":90,"DRI":82,"DEF":86,"PHY":78}},{"id":"valverde","name":"Federico Valverde","club":"REAL MADRID","rating":90,"role":"CM","tier":"Epic","flag":"🇺🇾","color":"gold","price":900,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/243659.png","profile":"https://www.espn.com/soccer/player/_/id/243659/valverde","wikiTitle":"Federico Valverde","stats":{"PAC":88,"SHO":82,"PAS":86,"DRI":85,"DEF":80,"PHY":89}},{"id":"bruno","name":"Bruno Fernandes","club":"MANCHESTER UNITED","rating":89,"role":"CAM","tier":"Epic","flag":"🇵🇹","color":"red","price":870,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/233064.png","profile":"https://www.espn.com/soccer/player/_/id/233064/bruno","wikiTitle":"Bruno Fernandes","stats":{"PAC":75,"SHO":87,"PAS":91,"DRI":84,"DEF":65,"PHY":72}},{"id":"enzo","name":"Enzo Fernández","club":"CHELSEA","rating":87,"role":"CM","tier":"Rare","flag":"🇦🇷","color":"blue","price":700,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/312411.png","profile":"https://www.espn.com/soccer/player/_/id/312411/enzo","wikiTitle":"Enzo Fernández","stats":{"PAC":70,"SHO":76,"PAS":88,"DRI":83,"DEF":72,"PHY":76}},{"id":"julian-alvarez","name":"Julián Álvarez","club":"ATLÉTICO MADRID","rating":89,"role":"ST","tier":"Epic","flag":"🇦🇷","color":"red","price":870,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/309143.png","profile":"https://www.espn.com/soccer/player/_/id/309143/julian-alvarez","wikiTitle":"Julián Álvarez","stats":{"PAC":85,"SHO":87,"PAS":80,"DRI":86,"DEF":55,"PHY":75}},{"id":"lautaro","name":"Lautaro Martínez","club":"INTER MILAN","rating":90,"role":"ST","tier":"Epic","flag":"🇦🇷","color":"blue","price":950,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/187178.png","profile":"https://www.espn.com/soccer/player/_/id/187178/lautaro","wikiTitle":"Lautaro Martínez","stats":{"PAC":82,"SHO":90,"PAS":77,"DRI":84,"DEF":48,"PHY":82}},{"id":"hakimi","name":"Achraf Hakimi","club":"PARIS SAINT-GERMAIN","rating":89,"role":"RB","tier":"Epic","flag":"🇲🇦","color":"purple","price":850,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/257522.png","profile":"https://www.espn.com/soccer/player/_/id/257522/hakimi","wikiTitle":"Achraf Hakimi","stats":{"PAC":95,"SHO":76,"PAS":83,"DRI":85,"DEF":80,"PHY":78}},{"id":"kvaratskhelia","name":"Khvicha Kvaratskhelia","club":"PARIS SAINT-GERMAIN","rating":89,"role":"LW","tier":"Epic","flag":"🇬🇪","color":"blue","price":850,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/351605.png","profile":"https://www.espn.com/soccer/player/_/id/351605/kvaratskhelia","wikiTitle":"Khvicha Kvaratskhelia","stats":{"PAC":88,"SHO":82,"PAS":82,"DRI":92,"DEF":45,"PHY":70}},{"id":"rashford","name":"Marcus Rashford","club":"FC BARCELONA","rating":87,"role":"LW","tier":"Rare","flag":"🏴","color":"red","price":650,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/211975.png","profile":"https://www.espn.com/soccer/player/_/id/211975/rashford","wikiTitle":"Marcus Rashford","stats":{"PAC":90,"SHO":84,"PAS":79,"DRI":85,"DEF":40,"PHY":70}},{"id":"luis-diaz","name":"Luis Díaz","club":"BAYERN MUNICH","rating":88,"role":"LW","tier":"Rare","flag":"🇨🇴","color":"red","price":720,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/266772.png","profile":"https://www.espn.com/soccer/player/_/id/266772/luis-diaz","wikiTitle":"Luis Díaz","stats":{"PAC":91,"SHO":82,"PAS":78,"DRI":89,"DEF":46,"PHY":72}},{"id":"wirtz","name":"Florian Wirtz","club":"LIVERPOOL","rating":90,"role":"CAM","tier":"Epic","flag":"🇩🇪","color":"blue","price":930,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/3038210.png","profile":"https://www.espn.com/soccer/player/_/id/3038210/wirtz","wikiTitle":"Florian Wirtz","stats":{"PAC":82,"SHO":82,"PAS":89,"DRI":92,"DEF":49,"PHY":63}},{"id":"mac-allister","name":"Alexis Mac Allister","club":"LIVERPOOL","rating":88,"role":"CM","tier":"Rare","flag":"🇦🇷","color":"red","price":760,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/236525.png","profile":"https://www.espn.com/soccer/player/_/id/236525/mac-allister","wikiTitle":"Alexis Mac Allister","stats":{"PAC":70,"SHO":80,"PAS":88,"DRI":83,"DEF":68,"PHY":71}},{"id":"rice","name":"Declan Rice","club":"ARSENAL","rating":89,"role":"CDM","tier":"Epic","flag":"🏴","color":"red","price":850,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/270543.png","profile":"https://www.espn.com/soccer/player/_/id/270543/rice","wikiTitle":"Declan Rice","stats":{"PAC":77,"SHO":72,"PAS":84,"DRI":80,"DEF":88,"PHY":85}},{"id":"saliba","name":"William Saliba","club":"ARSENAL","rating":88,"role":"CB","tier":"Rare","flag":"🇫🇷","color":"blue","price":760,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/315047.png","profile":"https://www.espn.com/soccer/player/_/id/315047/saliba","wikiTitle":"William Saliba","stats":{"PAC":81,"SHO":48,"PAS":76,"DRI":77,"DEF":90,"PHY":87}},{"id":"alisson","name":"Alisson Becker","club":"LIVERPOOL","rating":90,"role":"GK","tier":"Epic","flag":"🇧🇷","color":"green","price":900,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/196896.png","profile":"https://www.espn.com/soccer/player/_/id/196896/alisson","wikiTitle":"Alisson Becker","stats":{"DIV":91,"HAN":89,"KIC":86,"REF":92,"SPE":52,"POS":91}},{"id":"oblak","name":"Jan Oblak","club":"ATLÉTICO MADRID","rating":89,"role":"GK","tier":"Epic","flag":"🇸🇮","color":"red","price":820,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/149058.png","profile":"https://www.espn.com/soccer/player/_/id/149058/oblak","wikiTitle":"Jan Oblak","stats":{"DIV":89,"HAN":90,"KIC":78,"REF":92,"SPE":45,"POS":91}},{"id":"trent","name":"Trent Alexander-Arnold","club":"REAL MADRID","rating":88,"role":"RB","tier":"Rare","flag":"🏴","color":"gold","price":800,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/223340.png","profile":"https://www.espn.com/soccer/player/_/id/223340/trent","wikiTitle":"Trent Alexander-Arnold","stats":{"PAC":76,"SHO":68,"PAS":94,"DRI":82,"DEF":77,"PHY":71}},{"id":"pulisic","name":"Christian Pulisic","club":"AC MILAN","rating":87,"role":"RW","tier":"Rare","flag":"🇺🇸","color":"red","price":690,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/176413.png","profile":"https://www.espn.com/soccer/player/_/id/176413/pulisic","wikiTitle":"Christian Pulisic","stats":{"PAC":88,"SHO":82,"PAS":80,"DRI":88,"DEF":43,"PHY":64}},{"id":"dembele","name":"Ousmane Dembélé","club":"PARIS SAINT-GERMAIN","rating":90,"role":"RW","tier":"Epic","flag":"🇫🇷","color":"purple","price":1100,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/179432.png","profile":"https://www.espn.com/soccer/player/_/id/179432/dembele","wikiTitle":"Ousmane Dembélé","stats":{"PAC":94,"SHO":83,"PAS":84,"DRI":93,"DEF":40,"PHY":67}},{"id":"leao","name":"Rafael Leão","club":"AC MILAN","rating":88,"role":"LW","tier":"Rare","flag":"🇵🇹","color":"red","price":740,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/306035.png","profile":"https://www.espn.com/soccer/player/_/id/306035/leao","wikiTitle":"Rafael Leão","stats":{"PAC":94,"SHO":82,"PAS":78,"DRI":91,"DEF":39,"PHY":75}},{"id":"martinelli","name":"Gabriel Martinelli","club":"ARSENAL","rating":86,"role":"LW","tier":"Rare","flag":"🇧🇷","color":"green","price":620,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/298108.png","profile":"https://www.espn.com/soccer/player/_/id/298108/martinelli","wikiTitle":"Gabriel Martinelli","stats":{"PAC":91,"SHO":82,"PAS":76,"DRI":87,"DEF":40,"PHY":70}},{"id":"araujo","name":"Ronald Araújo","club":"FC BARCELONA","rating":87,"role":"CB","tier":"Rare","flag":"🇺🇾","color":"blue","price":700,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/280751.png","profile":"https://www.espn.com/soccer/player/_/id/280751/araujo","wikiTitle":"Ronald Araújo","stats":{"PAC":81,"SHO":50,"PAS":70,"DRI":68,"DEF":89,"PHY":88}},{"id":"griezmann","name":"Antoine Griezmann","club":"ATLÉTICO MADRID","rating":88,"role":"CF","tier":"Rare","flag":"🇫🇷","color":"purple","price":820,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/154087.png","profile":"https://www.espn.com/soccer/player/_/id/154087/griezmann","wikiTitle":"Antoine Griezmann","stats":{"PAC":78,"SHO":87,"PAS":86,"DRI":89,"DEF":52,"PHY":66}},{"id":"giroud","name":"Olivier Giroud","club":"LOS ANGELES FC","rating":85,"role":"ST","tier":"Rare","flag":"🇫🇷","color":"gold","price":500,"image":"https://a.espncdn.com/i/headshots/soccer/players/full/11001.png","profile":"https://www.espn.com/soccer/player/_/id/11001/giroud","wikiTitle":"Olivier Giroud","stats":{"PAC":56,"SHO":88,"PAS":72,"DRI":65,"DEF":42,"PHY":78}}];
const playerCatalog = [...players, ...extraPlayers].map(player => ({ ...player, wikiTitle: player.wikiTitle || player.name }));

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
  {id:"packopedia",label:"Pakopedia",icon:BookOpen},
  {id:"squad",label:"Orzu jamoam",icon:UsersRound},
  {id:"leaderboard",label:"Reyting",icon:Trophy},
  {id:"admin",label:"Admin panel",icon:LockKeyhole}
];
const formations = [
  { key:"433", label:"4-3-3", rows:[["LW","ST","RW"],["CM","CM","CM"],["LB","CB","CB","RB"],["GK"]] },
  { key:"442", label:"4-4-2", rows:[["ST","ST"],["LM","CM","CM","RM"],["LB","CB","CB","RB"],["GK"]] }
];
const eligibleRoles = { LW:["LW","LM"], ST:["ST","CF"], RW:["RW","RM"], CM:["CM","CDM","CAM"], LM:["LM","LW"], RM:["RM","RW"], LB:["LB"], CB:["CB"], RB:["RB"], GK:["GK"], CDM:["CDM","CM"], CAM:["CAM","CM","CF"], CF:["CF","ST"] };
function readSaved(key, fallback) { try { const raw=localStorage.getItem(key); return raw===null?fallback:JSON.parse(raw); } catch { return fallback; } }
function saveSaved(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Private browsing can disable storage. */ } }
function todayKey() { const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function showPortraitFallback(img) {
  if (!img) return;
  img.style.display = "none";
  img.parentElement?.classList.add("photo-missing");
}
function handlePortraitError(event, player) {
  const img = event.currentTarget;
  const currentPlayer = playerCatalog.find(item => item.id === player.id);
  const source = {...currentPlayer, ...player};
  const backup = source.backupImage;
  if (backup && img.dataset.backupTried !== "true") {
    img.dataset.backupTried = "true";
    img.classList.add("commons-photo");
    img.src = backup.replace("thumb.wikimedia.org/", "upload.wikimedia.org/");
    return;
  }
  if (source.wikiTitle && img.dataset.wikiTried !== "true") {
    img.dataset.wikiTried = "true";
    const title = encodeURIComponent(source.wikiTitle.replace(/ /g, "_"));
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + title, {headers: {Accept: "application/json"}})
      .then(response => { if (!response.ok) throw new Error("Wikipedia image unavailable"); return response.json(); })
      .then(data => {
        if (data.thumbnail?.source && img.isConnected) {
          img.classList.add("commons-photo");
          img.style.display = "";
          img.src = data.thumbnail.source;
        } else showPortraitFallback(img);
      })
      .catch(() => showPortraitFallback(img));
    return;
  }
  showPortraitFallback(img);
}

function App() {
  const [customPlayers,setCustomPlayers] = useState(()=>{const v=readSaved("packarena-custom-players",[]);return Array.isArray(v)?v:[];});
  const allPlayers = [...playerCatalog, ...customPlayers];
  const [coins,setCoins] = useState(()=>{const v=readSaved("packarena-coins",1200);return Number.isFinite(v)&&v>=0?v:1200;});
  const [collection,setCollection] = useState(()=>{const v=readSaved("packarena-collection",null);return Array.isArray(v)&&v.every(p=>p&&typeof p.id==="string"&&typeof p.image==="string"&&p.stats)?v:[players[6],players[7]];});
  const [opened,setOpened] = useState(null);
  const [page,setPage] = useState("home");
  const [notice,setNotice] = useState("");
  const [team,setTeam] = useState(()=>{const v=readSaved("packarena-team",{});return v&&typeof v==="object"&&!Array.isArray(v)?v:{};});
  const [opening,setOpening] = useState(false);
  const [selectedSlot,setSelectedSlot] = useState(null);
  const [formation,setFormation] = useState(()=>{const v=readSaved("packarena-formation","433");return formations.some(f=>f.key===v)?v:"433";});
  const [giftClaimed,setGiftClaimed] = useState(()=>readSaved("packarena-gift-date","")===todayKey());
  const [profile,setProfile] = useState(()=>{const p=readSaved("packarena-profile",null);return p&&typeof p.name==="string"&&p.name.trim().length>=2&&p.name.trim().length<=40&&(p.username===undefined||p.username===""||(typeof p.username==="string"&&p.username.length>=3&&p.username.length<=20&&[...p.username].every(ch=>/[a-zA-Z0-9_]/.test(ch))))?{name:p.name.trim(),username:p.username||""}:null;});
  const [authName,setAuthName] = useState("");
  const [authUsername,setAuthUsername] = useState("");
  const [authError,setAuthError] = useState("");
  const [wikiQuery,setWikiQuery] = useState("");
  const [wikiRole,setWikiRole] = useState("ALL");
  const [wikiSelected,setWikiSelected] = useState(null);
  const [wikiSummary,setWikiSummary] = useState(null);
  const [wikiLoading,setWikiLoading] = useState(false);
  const [adminToken,setAdminToken] = useState("");
  const [adminAuthorized,setAdminAuthorized] = useState(false);
  const [adminBusy,setAdminBusy] = useState(false);
  const [adminError,setAdminError] = useState("");
  const [adminMessage,setAdminMessage] = useState("");
  const [newPlayer,setNewPlayer] = useState({name:"",club:"",role:"ST",rating:"80",flag:"🇺🇿",image:"",wikiTitle:""});


  useEffect(() => { saveSaved("packarena-custom-players", customPlayers); }, [customPlayers]);
  useEffect(() => { saveSaved("packarena-coins", coins); }, [coins]);
  useEffect(() => { saveSaved("packarena-collection", collection); }, [collection]);
  useEffect(() => { saveSaved("packarena-team", team); }, [team]);
  useEffect(() => { saveSaved("packarena-formation", formation); }, [formation]);

  useEffect(() => {
    if (!opening || !opened) return;
    const timer = window.setTimeout(() => setOpening(false), 2500);
    return () => window.clearTimeout(timer);
  }, [opening,opened]);

  function openPack(pack) {
    if (opening) return;
    if (coins < pack.price) { setNotice("Tangalar yetarli emas. Boshqa pack tanlang!"); return; }
    const tierWeights = {
      silver:{Rare:1, Epic:0.18, Legendary:0.04, Ultimate:0.01},
      blue:{Rare:0.75, Epic:0.7, Legendary:0.14, Ultimate:0.04},
      purple:{Rare:0.3, Epic:1, Legendary:0.4, Ultimate:0.12},
      gold:{Rare:0.08, Epic:0.45, Legendary:1, Ultimate:0.4}
    };
    const pulls = Array.from({length:pack.count}, () => {
      const rows = allPlayers.map(player => ({player, weight:tierWeights[pack.color]?.[player.tier] ?? 0.25}));
      const total = rows.reduce((sum,row)=>sum+row.weight,0);
      let roll = Math.random()*total;
      return rows.find(row => (roll -= row.weight) <= 0)?.player || allPlayers[allPlayers.length-1];
    });
    setCoins(c => c-pack.price);
    setCollection(c => [...c,...pulls]);
    setOpened({pack,pulls});
    setOpening(true);
    setNotice("");
  }
  function claimGift() {
    if (giftClaimed) { setNotice("Kunlik sovg‘a bugun allaqachon olindi."); return; }
    setGiftClaimed(true); saveSaved("packarena-gift-date",todayKey()); setCoins(c=>c+100); setNotice("Kunlik mukofot: +100 tanga!");
  }
  const currentNav = nav.find(n=>n.id===page);
  const activeFormation = formations.find(f=>f.key===formation) || formations[0];
  const squadPlayers = Object.values(team).filter(Boolean).length;
  const wikiResults = allPlayers.filter(player => {
    const q=wikiQuery.trim().toLocaleLowerCase();
    const matchesQuery=!q||[player.name,player.club,player.role,player.wikiTitle].some(v=>String(v||"").toLocaleLowerCase().includes(q));
    return matchesQuery&&(wikiRole==="ALL"||player.role===wikiRole);
  });
  async function signInAdmin(e) {
    e.preventDefault();
    setAdminBusy(true); setAdminError(""); setAdminMessage("");
    try {
      const response=await fetch("/api/admin",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+adminToken},body:JSON.stringify({action:"authorize"})});
      const data=await response.json().catch(()=>({}));
      if(!response.ok||!data.authorized){setAdminAuthorized(false);setAdminError(data.error||"Admin kaliti qabul qilinmadi.");return;}
      setAdminAuthorized(true);setAdminMessage("Admin sessiyasi ushbu sahifa ochiq turgan vaqt davomida faol.");
    } catch {setAdminAuthorized(false);setAdminError("Admin API bilan bog‘lanib bo‘lmadi. Vercel deploy holatini tekshiring.");}
    finally {setAdminBusy(false);}
  }
  function addLocalPlayer(e) {
    e.preventDefault();
    const name=newPlayer.name.trim(), club=newPlayer.club.trim(), rating=Number(newPlayer.rating), wikiTitle=newPlayer.wikiTitle.trim()||name;
    if(name.length<2||club.length<2||!Number.isFinite(rating)||rating<40||rating>99){setAdminError("Ism, klub va 40–99 oralig‘idagi reytingni tekshiring.");return;}
    const id="custom-"+name.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").replace(/[^a-z0-9]+/g,"-")+"-"+Date.now();
    const stats=newPlayer.role==="GK"?{DIV:rating,HAN:Math.max(40,rating-1),KIC:Math.max(40,rating-6),REF:rating,SPE:Math.max(40,rating-30),POS:Math.max(40,rating-1)}:{PAC:rating,SHO:Math.max(40,rating-3),PAS:Math.max(40,rating-2),DRI:Math.max(40,rating-1),DEF:Math.max(40,rating-15),PHY:Math.max(40,rating-7)};
    const player={id,name,club,rating,role:newPlayer.role,tier:rating>=93?"Ultimate":rating>=90?"Legendary":rating>=86?"Epic":"Rare",flag:newPlayer.flag||"🌍",color:rating>=93?"gold":rating>=90?"purple":rating>=86?"blue":"green",price:Math.round(rating*10),image:newPlayer.image.trim(),wikiTitle,profile:"https://en.wikipedia.org/wiki/"+encodeURIComponent(wikiTitle.replace(/ /g,"_")),stats,custom:true};
    setCustomPlayers(list=>[player,...list]);setNewPlayer({name:"",club:"",role:"ST",rating:"80",flag:"🇺🇿",image:"",wikiTitle:""});setAdminError("");setAdminMessage("Futbolchi shu brauzerning katalogiga qo‘shildi.");
  }
  function removeLocalPlayer(id) {
    setCustomPlayers(list=>list.filter(player=>player.id!==id));
    setCollection(list=>list.filter(player=>player.id!==id));
    setTeam(old=>Object.fromEntries(Object.entries(old).filter(([,player])=>player?.id!==id)));
    setAdminMessage("Custom futbolchi shu brauzerdan olib tashlandi.");
  }
  function createProfile(e) {
    e.preventDefault();
    const name = authName.trim();
    const username = authUsername.trim().replace(/^@/, "");
    if (name.length < 2 || name.length > 40) {
      setAuthError("Ism 2–40 belgidan iborat bo‘lishi kerak.");
      return;
    }
    if (username && (username.length < 3 || username.length > 20 || ![...username].every(ch => /[a-zA-Z0-9_]/.test(ch)))) {
      setAuthError("Username bo‘sh qolishi mumkin; kiritsangiz 3–20 belgi, lotin harflari, raqam va _ ishlating.");
      return;
    }
    const next = { name, username };
    try {
      localStorage.setItem("packarena-profile", JSON.stringify(next));
      setProfile(next);
      setAuthError("");
    } catch {
      setAuthError("Profilni saqlab bo‘lmadi. Brauzer sozlamalarini tekshiring.");
    }
  }
  if(!profile)return <div className="auth-screen"><div className="auth-panel"><img src="/packarena-logo.svg" alt="PackArena" className="auth-logo"/><div className="eyebrow">YANGI MAVSUM BOSHLANDI</div><h1>ARENAGA <span>XUSH KELIBSIZ</span></h1><p>Profil uchun ism yetarli, username esa ixtiyoriy.</p><form onSubmit={createProfile} className="auth-form"><label>Ism</label><input value={authName} onChange={e=>setAuthName(e.target.value)} placeholder="Masalan, Ali" autoComplete="name" maxLength={40} required/><label>Username <span className="optional-label">ixtiyoriy</span></label><div className="username-input"><span>@</span><input value={authUsername} onChange={e=>setAuthUsername(e.target.value.replace(/^@/,""))} placeholder="Kiritmasangiz ham bo‘ladi" autoComplete="username" maxLength={20}/></div>{authError&&<div className="auth-error">{authError}</div>}<button className="primary-btn auth-submit" type="submit">ARENAGA KIRISH <ArrowUpRight size={17}/></button></form><small className="auth-note">Parol va telefon raqami so‘ralmaydi. Bu hozircha ushbu qurilmada saqlanadigan demo profil.</small></div></div>;
  return <div className="app">
    <aside className="sidebar">
      <a className="brand" href="#" onClick={e=>{e.preventDefault();setPage("home");}}><img src="/packarena-logo.svg" alt="PackArena logo" className="brand-logo"/><span className="brand-word">PACK<span className="green">ARENA</span><small>OPEN. COLLECT. DOMINATE.</small></span></a>
      <div className="nav-label">ASOSIY MENYU</div>
      <nav className="nav-items" aria-label="Asosiy menyu">
      {nav.map(n=>{const Icon=n.icon;return <button key={n.id} className={"nav-item "+(page===n.id?"active":"")} onClick={()=>{setPage(n.id);setOpened(null);setSelectedSlot(null);}}><Icon className="nav-icon" size={18} strokeWidth={2.1}/>{n.label}{n.id==="collection"&&<span className="nav-count">{collection.length}</span>}</button>;})}
      </nav>
      <div className="sidebar-bottom"><div className="season-card"><Trophy size={23} className="season-icon"/><b>SEASON 01</b><p>Maydonga chiqish vaqti!</p><div className="progress"><span/></div><small>Level 1 <span>0 / 500 XP</span></small></div><div className="user-mini"><div className="avatar"><UserRound size={17}/></div><div><b>{profile.name}</b><small>{profile.username ? "@"+profile.username : "Profil"}</small></div><button className="profile-reset" title="Profilni almashtirish" onClick={()=>{try{localStorage.removeItem("packarena-profile");}catch{}setProfile(null);setAuthName("");setAuthUsername("");}}>↻</button></div></div>
    </aside>
    <main className="main">
      <header className="topbar"><div className="breadcrumb">PACKARENA <span>/</span> {currentNav?.label.toUpperCase()||"ARENA"}</div><div className="top-actions"><button className="profile-switch-mobile" title="Profilni almashtirish" aria-label="Profilni almashtirish" onClick={()=>{try{localStorage.removeItem("packarena-profile");}catch{}setProfile(null);setAuthName("");setAuthUsername("");}}><UserRound size={16}/></button><button className="daily" onClick={claimGift}><Gift size={15}/><span>Kunlik sovg‘a</span></button><div className="balance"><Coins size={22}/><div><small>BALANS</small><b>{coins.toLocaleString("en-US")}</b></div><button title="Tanga olish" onClick={()=>setNotice("Kunlik sovg‘a orqali bepul 100 tanga olish mumkin.")}><Plus size={16}/></button></div></div></header>
      {notice&&<div className="notice" role="status">{notice}<button aria-label="Yopish" onClick={()=>setNotice("")}><X size={15}/></button></div>}
      {page==="home"&&<>
        <section className="hero"><div className="hero-content"><div className="eyebrow"><span className="live-dot"/> FUTBOLNING YANGI ARENASI</div><h1>OMADINGNI<br/><span>SINAB KO‘R.</span></h1><p>Packlarni och. Afsonaviy futbolchilarni yig‘.<br/>O‘z orzu jamoangni yarat.</p><button className="primary-btn" onClick={()=>setPage("packs")}>PACK OCHISH <ArrowUpRight size={17}/></button><div className="hero-stats"><div><b>{allPlayers.length}+</b><small>FUTBOLCHI</small></div><div><b>04</b><small>PACK TURI</small></div><div><b>∞</b><small>IMKONIYAT</small></div></div></div><div className="hero-art"><div className="stadium-glow"/><div className="ball">⚽</div><div className="floating-tag tag-top"><Star size={12} fill="currentColor"/> ULTIMATE</div><div className="floating-tag tag-bottom">RATING <b>94</b></div><div className="hero-card"><div className="card-top"><b>94</b><span>RW<br/>🇦🇷</span></div><img className="hero-player-photo" src={players[0].image} alt="Lionel Messi portreti" loading="eager" fetchPriority="high" onError={e=>handlePortraitError(e,players[0])}/><div className="hero-player-name">LIONEL MESSI</div><div className="card-club">INTER MIAMI</div><div className="mini-stats"><span>PAC <b>82</b></span><span>SHO <b>90</b></span><span>DRI <b>95</b></span></div></div></div><div className="hero-watermark">PACKARENA</div></section>
        <section className="section"><div className="section-head"><div><div className="eyebrow">SEN UCHUN TANLANDI</div><h2>Ommabop packlar <Sparkles size={18}/></h2></div><button className="text-btn" onClick={()=>setPage("packs")}>Barchasi <ArrowUpRight size={15}/></button></div><div className="pack-grid">{packs.slice(0,3).map(p=><PackCard key={p.name} pack={p} onOpen={openPack} disabled={opening}/>)}</div></section>
        <section className="section"><div className="section-head"><div><div className="eyebrow">KOLLEKSIYANGNI KUZAT</div><h2>Yulduzlar <Star size={17}/></h2></div><button className="text-btn" onClick={()=>setPage("packopedia")}>Pakopedia <ArrowUpRight size={15}/></button></div><div className="player-grid">{playerCatalog.slice(0,4).map(p=><PlayerCard key={p.id} player={p}/>)}</div></section>
      </>}
      {page==="packs"&&<section className="page-section"><div className="eyebrow">OMAD SEN TOMONDA BO‘LSIN</div><h1 className="page-title">PACK <span>MARKAZI</span></h1><p className="muted">Pack tanla va keyingi futbol yulduzingni kashf et.</p><div className="pack-grid all-packs">{packs.map(p=><PackCard key={p.name} pack={p} onOpen={openPack} disabled={opening}/>)}</div></section>}
      {page==="collection"&&<section className="page-section"><div className="eyebrow">SENING FUTBOL MEROSING</div><h1 className="page-title">MENING <span>KOLLEKSIYAM</span></h1><p className="muted">Yig‘ilgan futbolchilar: {collection.length} • Orzu jamoangga qo‘shish uchun “Orzu jamoam” bo‘limiga o‘t.</p>{collection.length?<div className="player-grid collection-grid">{collection.map((p,i)=><PlayerCard key={p.id+"-"+i} player={p}/>)}</div>:<div className="empty">Hozircha futbolchi yo‘q. <button onClick={()=>setPage("packs")}>Pack ochish <ArrowUpRight size={14}/></button></div>}</section>}
      {page==="packopedia"&&<section className="page-section packopedia-page">
        <div className="eyebrow">PACKARENA PLAYER ENCYCLOPEDIA</div>
        <h1 className="page-title">PACKO<span>PEDIA</span></h1>
        <p className="muted">Futbolchilarni qidir, kartalarini ko‘r va biografiyasini Wikipedia’dan o‘qi. Reyting va karta statistikasi o‘yin ichidagi demo qiymatlaridir.</p>
        <div className="wiki-toolbar">
          <label className="wiki-search"><Search size={17}/><input value={wikiQuery} onChange={e=>setWikiQuery(e.target.value)} placeholder="Futbolchi, klub yoki pozitsiya..." aria-label="Futbolchini qidirish"/></label>
          <label className="wiki-filter"><span>Pozitsiya</span><select value={wikiRole} onChange={e=>setWikiRole(e.target.value)}><option value="ALL">Barchasi</option><option value="GK">Darvozabon</option><option value="CB">Markaziy himoyachi</option><option value="LB">Chap himoyachi</option><option value="RB">O‘ng himoyachi</option><option value="CDM">Tayanch yarim himoyachi</option><option value="CM">Markaziy yarim himoyachi</option><option value="CAM">Hujumkor yarim himoyachi</option><option value="LW">Chap qanot</option><option value="RW">O‘ng qanot</option><option value="ST">Hujumchi</option><option value="CF">Ikkinchi hujumchi</option></select></label>
          <span className="wiki-result-count">{wikiResults.length} futbolchi</span>
        </div>
        {wikiResults.length>0?<div className="player-grid wiki-player-grid">{wikiResults.map(player=><PlayerCard key={player.id} player={player} onSelect={()=>setWikiSelected(player)}/>)}</div>:<div className="empty">Hech narsa topilmadi. Qidiruv so‘zini yoki pozitsiya filtrini o‘zgartiring.</div>}
        <div className="wiki-source-note"><Globe size={15}/> Biografiya Wikipedia sahifasidan yuklanadi. O‘yin ichidagi reytinglar rasmiy futbol statistikasi emas.</div>
      </section>}
      {page==="squad"&&<section className="page-section"><div className="eyebrow">TAKTIKANGNI TANLA</div><h1 className="page-title">ORZU <span>JAMOAM</span></h1><p className="muted">Har bir futbolchini o‘z pozitsiyasiga qo‘y. Faqat mos pozitsiyadagi futbolchilar tanlanadi.</p><div className="squad-toolbar"><label>Format</label><div className="formation-tabs">{formations.map(f=><button key={f.key} className={formation===f.key?"chosen":""} onClick={()=>{setFormation(f.key);setTeam({});}}>{f.label}</button>)}</div><span className="squad-count"><ShieldCheck size={15}/>{squadPlayers}/11 joy band</span></div><div className="pitch">{activeFormation.rows.map((row,ri)=><div className={"pitch-row pitch-row-"+ri} key={ri}>{row.map((pos,i)=>{const slotKey=ri+"-"+i;const p=team[slotKey];return <button key={slotKey} className={"slot "+(p?"filled":"")} onClick={()=>setSelectedSlot({key:slotKey,pos})} aria-label={pos+" pozitsiyasini tanlash"}>{p?<><img src={p.image} alt={p.name+" portreti"} loading="lazy" decoding="async" onError={e=>handlePortraitError(e,p)}/><span className="player-fallback">{p.flag}</span><span className="slot-rating">{p.rating}</span><b>{p.name}</b><small>{p.role}</small></>:<><span className="slot-plus"><Plus size={16}/></span><b>{pos}</b><small>Tanlash</small></>}</button>;})}</div>)}</div><div className="squad-actions"><button className="secondary-btn" onClick={()=>setTeam({})}><RotateCcw size={15}/> Jamoani tozalash</button><span className="muted small"><CircleHelp size={13}/> Bo‘sh pozitsiyani bosing, mos futbolchini tanlang.</span></div></section>}
      {page==="leaderboard"&&<section className="page-section"><div className="eyebrow">ENG KUCHLI KOLLEKSIYACHILAR</div><h1 className="page-title">ARENA <span>REYTINGI</span></h1><div className="leaderboard">{[["01","GoldenBoot","12,450"],["02","TikiTaka","10,820"],["03","GoalMachine","9,640"],["04",profile.username||profile.name,collection.length+" cards"]].map((r,i)=><div className="leader-row" key={r[1]}><b className="rank">{r[0]}</b><span className="leader-avatar">{[<Trophy/>,<Sparkles/>,<Star/>,<UserRound/>][i]}</span><strong>{r[1]}</strong><span className="leader-score">{r[2]}</span></div>)}</div><p className="muted small">Namuna reytingi. Online reyting server va ma’lumotlar bazasi ulanganda yangilanadi.</p></section>}
      {page==="admin"&&<section className="page-section admin-page">
        <div className="eyebrow">PRIVATE CONTROL ROOM</div>
        <h1 className="page-title">ADMIN <span>PANEL</span></h1>
        {!adminAuthorized?<div className="admin-login-panel"><div className="admin-lock"><LockKeyhole size={27}/></div><h2>Admin sifatida kirish</h2><p className="muted">Admin kaliti serverda tekshiriladi. Oddiy username yoki profil nomi bilan admin huquqi berilmaydi.</p><form className="admin-login-form" onSubmit={signInAdmin}><label>Maxfiy admin kaliti</label><input type="password" value={adminToken} onChange={e=>setAdminToken(e.target.value)} placeholder="Admin kalitini kiriting" autoComplete="current-password" required/><button className="primary-btn" disabled={adminBusy||!adminToken.trim()} type="submit">{adminBusy?"TEKSHIRILMOQDA...":"XAVFSIZ KIRISH"} <ArrowUpRight size={16}/></button></form>{adminError&&<p className="admin-error" role="alert">{adminError}</p>}<small className="auth-note">Vercel Environment Variables’da ADMIN_SECRET kalitini qo‘shish kerak.</small></div>
        :<><div className="admin-topline"><span className="admin-secure"><CheckCircle2 size={16}/> Sessiya tasdiqlandi</span><button className="secondary-btn" onClick={()=>{setAdminAuthorized(false);setAdminToken("");setAdminMessage("");setAdminError("");}}><LogOut size={15}/> Chiqish</button></div>
          <div className="admin-metrics"><div className="admin-metric"><Database size={19}/><small>Katalog</small><b>{allPlayers.length}</b></div><div className="admin-metric"><Library size={19}/><small>Kolleksiya kartalari</small><b>{collection.length}</b></div><div className="admin-metric"><Coins size={19}/><small>Joriy demo tanga</small><b>{coins.toLocaleString("en-US")}</b></div><div className="admin-metric"><UserRound size={19}/><small>Custom futbolchilar</small><b>{customPlayers.length}</b></div></div>
          <div className="admin-columns"><div className="admin-box"><div className="admin-box-heading"><PlusCircle size={18}/><h2>Futbolchi qo‘shish</h2></div><p className="muted">Hozircha qo‘shilgan karta shu brauzerda saqlanadi.</p><form className="admin-player-form" onSubmit={addLocalPlayer}>
            <label>Futbolchi ismi<input required minLength={2} maxLength={80} value={newPlayer.name} onChange={e=>setNewPlayer(p=>({...p,name:e.target.value}))} placeholder="Masalan, Otabek Shukurov"/></label>
            <label>Klub<input required minLength={2} maxLength={80} value={newPlayer.club} onChange={e=>setNewPlayer(p=>({...p,club:e.target.value}))} placeholder="Klub nomi"/></label>
            <div className="admin-field-row"><label>Pozitsiya<select value={newPlayer.role} onChange={e=>setNewPlayer(p=>({...p,role:e.target.value}))}>{["GK","CB","LB","RB","CDM","CM","CAM","LW","RW","ST","CF"].map(role=><option key={role}>{role}</option>)}</select></label><label>Karta reytingi<input type="number" min="40" max="99" value={newPlayer.rating} onChange={e=>setNewPlayer(p=>({...p,rating:e.target.value}))} required/></label></div>
            <div className="admin-field-row"><label>Bayroq/emoji<input value={newPlayer.flag} maxLength={8} onChange={e=>setNewPlayer(p=>({...p,flag:e.target.value}))} placeholder="🇺🇿"/></label><label>Wikipedia sarlavhasi<input value={newPlayer.wikiTitle} maxLength={100} onChange={e=>setNewPlayer(p=>({...p,wikiTitle:e.target.value}))} placeholder="Wikipedia maqola nomi"/></label></div>
            <label>Rasm URL manzili<input type="url" value={newPlayer.image} onChange={e=>setNewPlayer(p=>({...p,image:e.target.value}))} placeholder="https://..." required/></label>
            <button className="primary-btn" type="submit"><PlusCircle size={16}/> KATALOGGA QO‘SHISH</button>
          </form></div>
          <div className="admin-box"><div className="admin-box-heading"><ShieldCheck size={18}/><h2>Tezkor boshqaruv</h2></div><p className="muted">Bu lokal demo o‘yinni boshqaradi.</p><button className="admin-action" onClick={()=>{setCoins(v=>v+1000);setAdminMessage("+1 000 demo tanga berildi.");}}><Coins size={16}/> +1 000 demo tanga</button><button className="admin-action" onClick={()=>{setCoins(1200);setCollection([playerCatalog[6],playerCatalog[7]]);setTeam({});setFormation("433");setAdminMessage("Demo progressi qayta tiklandi.");}}><RotateCcw size={16}/> Demo progressni reset qilish</button><button className="admin-action danger" onClick={()=>{setCustomPlayers([]);setAdminMessage("Custom futbolchi katalogi tozalandi.");}}><Trash2 size={16}/> Custom kartalarni o‘chirish</button><div className="admin-note"><LockKeyhole size={16}/><span>Admin huquqi serverda tekshiriladi. Katalog va balans boshqaruvi hozircha shu brauzerda; umumiy online baza ulanmagan.</span></div></div></div>
          {customPlayers.length>0&&<div className="admin-box admin-custom-list"><div className="admin-box-heading"><Library size={18}/><h2>Qo‘shilgan kartalar</h2></div>{customPlayers.map(player=><div className="admin-custom-row" key={player.id}><span><b>{player.name}</b><small>{player.club} · {player.role} · {player.rating}</small></span><button aria-label={player.name+" kartasini o‘chirish"} onClick={()=>removeLocalPlayer(player.id)}><Trash2 size={15}/></button></div>)}</div>}
          {adminMessage&&<div className="admin-success" role="status"><CheckCircle2 size={16}/>{adminMessage}</div>}
          {adminError&&<div className="admin-error" role="alert">{adminError}</div>}
        </>}
      </section>}
      <footer><span>© 2026 PACKARENA</span><span>FUTBOL ISHTIYOQI BILAN YARATILDI</span><span>DEMO • VIRTUAL TANGALAR</span><a className="footer-credit" href="/image-credits.html">Rasm manbalari ↗</a></footer>
    </main>
    {opened&&<div className={"modal-backdrop "+(opening?"is-opening":"")} onClick={()=>{if(!opening)setOpened(null);}}><div className={"reveal-modal "+(opening?"opening-modal":"")} onClick={e=>e.stopPropagation()}>{!opening&&<button className="modal-close" onClick={()=>setOpened(null)} aria-label="Yopish"><X size={18}/></button>}<div className="eyebrow">{opening?"PACK OCHILMOQDA":"PACK OCHILDI"}</div>{opening?<div className="pack-animation"><div className={"animated-pack "+opened.pack.color}><PackArtwork pack={opened.pack}/></div><div className="animation-ring"/><h2>OMADNI SINAYAPMIZ<span>...</span></h2><p className="muted">Yulduzlar ochilmoqda</p><div className="loading-line"><span/></div></div>:<><h2>{opened.pack.name} <Sparkles size={22}/></h2><p className="muted">Sening yangi futbolchilaring!</p><div className="reveal-grid">{opened.pulls.map((p,i)=><PlayerCard key={p.id+"-"+i} player={p}/>)}</div><button className="primary-btn" onClick={()=>setOpened(null)}>DAVOM ETISH <ArrowUpRight size={17}/></button></>}</div></div>}
    {selectedSlot&&<div className="modal-backdrop" onClick={()=>setSelectedSlot(null)}><div className="picker-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedSlot(null)} aria-label="Yopish"><X size={18}/></button><div className="eyebrow">POZITSIYA TANLASH</div><h2>{selectedSlot.pos} <span>uchun futbolchilar</span></h2><p className="muted">Bu joyga faqat mos pozitsiyadagi futbolchilar qo‘yiladi.</p><div className="picker-list">{collection.filter(p=>(eligibleRoles[selectedSlot.pos]||[selectedSlot.pos]).includes(p.role)).map((p,i)=><button className="picker-player" key={p.id+"-"+i} onClick={()=>{setTeam(t=>({...t,[selectedSlot.key]:p}));setSelectedSlot(null);}}><img src={p.image} alt={p.name+" portreti"} loading="lazy" onError={e=>handlePortraitError(e,p)}/><span className="picker-flag">{p.flag}</span><span><b>{p.name}</b><small>{p.club} • {p.role}</small></span><strong>{p.rating}</strong><Check size={15}/></button>)}{collection.filter(p=>(eligibleRoles[selectedSlot.pos]||[selectedSlot.pos]).includes(p.role)).length===0&&<div className="empty">Bu pozitsiyaga mos futbolchi yo‘q. <button onClick={()=>{setSelectedSlot(null);setPage("packs");}}>Pack ochish <ArrowUpRight size={14}/></button></div>}</div><button className="secondary-btn picker-clear" onClick={()=>{setTeam(t=>{const n={...t};delete n[selectedSlot.key];return n;});setSelectedSlot(null);}}>Pozitsiyani bo‘shatish</button></div></div>}
    {wikiSelected&&<div className="modal-backdrop wiki-detail-backdrop" onClick={()=>setWikiSelected(null)}><section className="wiki-detail-modal" role="dialog" aria-modal="true" aria-labelledby="wiki-detail-title" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setWikiSelected(null)} aria-label="Yopish"><X size={18}/></button><div className="wiki-detail-layout"><div className="wiki-detail-card"><PlayerCard player={wikiSelected}/></div><div className="wiki-detail-content"><div className="eyebrow">PLAYER ENCYCLOPEDIA</div><h2 id="wiki-detail-title">{wikiSelected.name}</h2><p className="wiki-detail-subtitle">{wikiSelected.club} · {wikiSelected.role} · {wikiSelected.flag}</p><div className="wiki-detail-stats">{Object.entries(wikiSelected.stats).slice(0,6).map(([key,value])=><span key={key}><b>{value}</b>{key}</span>)}</div><h3>Biografiya</h3>{wikiLoading?<p className="muted wiki-loading"><span className="loading-spinner"/> Wikipedia ma’lumotlari yuklanmoqda...</p>:wikiSummary?.extract?<p className="wiki-extract">{wikiSummary.extract}</p>:<p className="muted">Hozir biografiyani yuklab bo‘lmadi. Wikipedia maqolasini bevosita ochib ko‘rishingiz mumkin.</p>}<div className="wiki-links"><a href={"https://en.wikipedia.org/wiki/"+encodeURIComponent((wikiSelected.wikiTitle||wikiSelected.name).replace(/ /g,"_"))} target="_blank" rel="noreferrer"><Globe size={15}/> Wikipedia maqolasi <ExternalLink size={13}/></a>{wikiSelected.profile&&<a href={wikiSelected.profile} target="_blank" rel="noreferrer"><UserRound size={15}/> Futbolchi profili <ExternalLink size={13}/></a>}</div><p className="wiki-disclaimer">Karta reytinglari va o‘yin statistikasi PackArena demo qiymatlaridir. Rasmiy mavsum statistikasi emas.</p></div></div></section></div>}
  </div>;
}
function PackArtwork({pack}) {
  const palette = {
    silver:["#f4fff8","#a5b8ad","#2e4136"],
    blue:["#dcf6ff","#57c2ff","#17304c"],
    purple:["#f6e3ff","#c77aff","#39214f"],
    gold:["#fff0bd","#ffd166","#5c4218"]
  }[pack.color] || ["#f4fff8","#b5fa45","#2e4136"];
  const gid = "pack-foil-" + pack.color;
  return <svg className="pack-art-svg" viewBox="0 0 140 160" role="img" aria-label={pack.name+" artwork"}>
    <defs>
      <linearGradient id={gid} x1="14" y1="4" x2="123" y2="151" gradientUnits="userSpaceOnUse">
        <stop stopColor={palette[0]}/><stop offset=".34" stopColor={palette[1]}/><stop offset="1" stopColor={palette[2]}/>
      </linearGradient>
      <linearGradient id={gid+"shine"} x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#ffffff" stopOpacity=".75"/><stop offset=".45" stopColor="#ffffff" stopOpacity=".03"/><stop offset="1" stopColor="#ffffff" stopOpacity=".2"/>
      </linearGradient>
    </defs>
    <path d="M29 9h82l16 17v101l-47 24-47-24V26z" fill={"url(#"+gid+")"} stroke={palette[1]} strokeWidth="2"/>
    <path d="M36 17h69l14 15v89l-39 20-39-20V32z" fill="#07130c" fillOpacity=".62" stroke="#ffffff" strokeOpacity=".34"/>
    <path d="M36 18 104 18 55 80 36 104z" fill={"url(#"+gid+"shine)"} opacity=".8"/>
    <path d="m41 37 58 58M44 22l75 76M54 18l64 65" stroke="#ffffff" strokeOpacity=".23" strokeWidth="2"/>
    <path d="M49 52h42M49 60h30" stroke={palette[0]} strokeOpacity=".8" strokeWidth="3" strokeLinecap="round"/>
    <text x="70" y="83" textAnchor="middle" fontSize="30" fontWeight="900" fontFamily="Arial, sans-serif" fill={palette[0]}>PA</text>
    <circle cx="70" cy="108" r="18" fill="#07130c" fillOpacity=".75" stroke={palette[1]} strokeWidth="2"/>
    <path d="m70 98 7 5-3 8h-8l-3-8z" fill={palette[0]}/>
    <path d="m70 98 0-5m7 10 5-3m-8 11 2 6m-10-7-5 4m0-11-5-3" stroke={palette[0]} strokeWidth="1.7" strokeLinecap="round" fill="none"/>
    <path d="M24 31 16 24M116 41l8-8M30 126l-7 8M112 125l8 8" stroke={palette[0]} strokeWidth="2" strokeLinecap="round" opacity=".8"/>
  </svg>;
}
function PackCard({pack,onOpen,disabled}){return <div className={"pack-card "+pack.color}><div className="pack-top"><span className="pack-rarity">{pack.rarity}</span><Sparkles size={16} className="pack-shine"/></div><div className="pack-illustration"><div className="pack-orbit"/><PackArtwork pack={pack}/></div><h3>{pack.name}</h3><p>{pack.detail}</p><div className="pack-bottom"><div className="price"><Coins size={16}/><b>{pack.price}</b></div><button disabled={disabled} onClick={()=>onOpen(pack)}>OCHISH <ArrowUpRight size={14}/></button></div></div>}
function PlayerCard({player,onSelect}) {
  const sourcePlayer = playerCatalog.find(item => item.id === player.id);
  const profileUrl = player.profile || sourcePlayer?.profile;
  return <article className={"player-card " + player.color} aria-label={player.name + " kartasi"}>
    <div className="player-card-head">
      <b>{player.rating}</b>
      <span>{player.role}<br/>{player.flag}</span>
    </div>
    <div className="player-art">
      <div className="photo-glow"/>
      <span className="card-watermark" aria-hidden="true">PA</span>
      <img src={player.image} alt={player.name + " futbolchi portreti"} loading="lazy" decoding="async" onError={e => handlePortraitError(e, player)}/>
      <span className="player-fallback" aria-hidden="true">{player.flag}</span>
    </div>
    <div className="player-info">
      {profileUrl ? <a className="player-name-link" href={profileUrl} target="_blank" rel="noreferrer">{player.name}</a> : <b>{player.name}</b>}
      <small>{player.club}</small>
      <div className="player-stats">{Object.entries(player.stats).slice(0,6).map(([key,value])=><span key={key}><b>{value}</b>{key}</span>)}</div>
    </div>
    <div className="player-card-foot"><span>{player.tier.toUpperCase()}</span><span><Star size={10} fill="currentColor"/> {player.rating}</span></div>
    {onSelect&&<button className="wiki-card-action" onClick={onSelect}>BIOGRAFIYA <ArrowUpRight size={13}/></button>}
  </article>;
}
createRoot(document.getElementById("root")).render(<App />);
