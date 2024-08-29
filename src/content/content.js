import { WorkModel } from '../models/WorkModel';

const motionFiles = ["aazcut", "bouranifj", "czpportrait", "haimaom14mls", "ples2023", "ples2024", "pohybrady", "poutnici", "rodaci"];
const motionImports = Object.fromEntries(
    motionFiles.map(file => [file, require(`./motion/${file}.mp4`)])
);

const videoFiles = ["gustavsleeptimer", "rivaman", "rivatango"];
const videoImports = Object.fromEntries(
    videoFiles.map(file => [file, require(`./video/${file}.mp4`)])
);

const stillFiles = ["czpl", "haimaom3pac", "haimaomprac24", "haimaomprac27", "naurgent", "openair", "pablobellezza"];
const stillImports = Object.fromEntries(
    stillFiles.map(file => [file, require(`./still/${file}.jpg`)])
);

export const highlight = [
    new WorkModel("Za slavnými rodáky", "Animace propagující turistickou soutěž pro pacienty Kliniky tělovýchovy, která motivuje k pohybu a návštěvě míst spojených se známými rodáky.", ["motion", "design"], motionImports.rodaci, "", "d-9-16", ""),
    new WorkModel("Gustav sleep timer", "Aprílové video, které zaměňuje aplikaci pro spánek za aplikaci Gustav Workout Timer sloužící k hlídání intervalů při cvičení.", ["video", "design"], videoImports.gustavsleeptimer, "", "d-9-16", ""),
    new WorkModel("Ples FN 2024", "Podkresová animace představující partnery plesu, která běží za pódiem s kapelou.", ["motion"], motionImports.ples2024, "", "d-16-9", ""),
    new WorkModel("Centrum zdraví a prevence", "Propagační animace preventivní ambulance zaměřená na aktivní životní styl.", ["motion", "design"], motionImports.czpportrait, "", "d-9-16", ""),
    new WorkModel("Riva Man", "Reels představující masážní a kosmetický salon.", ["video"], videoImports.rivaman, "", "d-9-16", ""),
    new WorkModel("Open Air Museum", "Internetové stránky muzea na hranicích okolo řeky v Českém Těšíně.", ["web", "design"], stillImports.openair, "", "d-16-9", ""),
]

export const content = [
    ...highlight,
    new WorkModel("Riva Studio", "Stories o procedurách v kosmetickém a masážním studiu Riva", ["video"], videoImports.rivatango, "", "d-9-16", ""),
    new WorkModel("Ples FN 2023", "Animace provázející ples a představující jeho partnery.", ["motion"], motionImports.ples2023, "", "d-16-9", ""),
    new WorkModel("Výstava Na Urgent!", "Pozvánka na výstavu fotografií Jindřicha Štreita z Urgentu FN Olomouc.", ["design"], stillImports.naurgent, "", "d-16-9", ""),
    new WorkModel("14. MLS", "Intro na setkání hematologických pracovišť ČR.", ["motion", "design"], motionImports.haimaom14mls, "", "d-16-9", ""),
    new WorkModel("Soutěž poutníci", "Reels ke spuštění fotosoutěže Po stopách poutníků, která motivuje pacienty k aktivnímu pohybu.", ["motion", "design"], motionImports.poutnici, "", "d-9-16", ""),
    new WorkModel("Pohybrady", "Pozvánka na aktivní pohybový wokrshop s fyzioterapeuty na přírodním koupališti Poděbrady.", ["motion", "design"], motionImports.pohybrady, "", "d-9-16", ""),
    new WorkModel("Pablo Bellezza", "Internetové stránky kadeřnictví v Olomouci.", ["web", "design"], stillImports.pablobellezza, "", "d-1", ""),
    new WorkModel("Pracovní setkání HAIMAOM", "Pozvánka na pracovní setkání hematologických pracovišť od nadace Haimaom.", ["design"], stillImports.haimaomprac24, "", "d-1", ""),
    new WorkModel("Ambulance aktivního zdraví", "Podkresový loop do studia YouTube pořadu zaměřeného na aktivní zdraví a duševní rovnováhu.", ["motion", "design"], motionImports.aazcut, "", "d-16-9", ""),
    new WorkModel("Web CZ-PL", "Internetové stránky programu Interreg CZ-PL s interaktivním kalendářem, který informuje o termínech podávání výzev.", ["web", "design"], stillImports.czpl, "", "d-1", ""),
    new WorkModel("Rozloučení s Franz Josefem", "Animace k příležitosti bourání nejstarší budovy ve FN Olomouc.", ["motion", "design"], motionImports.bouranifj, "", "d-9-16", ""),
    new WorkModel("Pacientský den HAIMAOM", "Pacientská pozvánka pro pacienty Hematooknologické kliniky.", ["design"], stillImports.haimaom3pac, "", "d-1", ""),
];

export const categories = [...new Set(content.flatMap(item => item.category))];

// Generování kategorií a počítání jejich výskytu
const categoryCounts = content.flatMap(item => item.category).reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

// Filtrování kategorií s více než 3 výskyty
export const menuCategories = Object.keys(categoryCounts).filter(category => categoryCounts[category] > 3);