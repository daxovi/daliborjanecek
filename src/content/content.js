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
    new WorkModel("Za slavnými rodáky", "Animace vytvořená pro propagaci turistické soutěže pro pacienty Kliniky tělovýchovy FN Olomouc, která podporuje pohyb a objevování míst spojených s významnými rodáky.", ["motion", "design"], motionImports.rodaci, "", "d-9-16", ""),
    new WorkModel("Gustav sleep timer", "Aprílové video, které vtipně zaměňuje aplikaci pro spánek za Gustav Workout Timer, hlídající intervaly během cvičení.", ["video", "design"], videoImports.gustavsleeptimer, "", "d-9-16", ""),
    new WorkModel("Ples FN 2024", "Animace promítaná na plese FN Olomouc, která představuje sponzory a běží v pozadí za pódiem s kapelou.", ["motion"], motionImports.ples2024, "", "d-16-9", ""),
    new WorkModel("Centrum zdraví a prevence", "Propagační animace pro preventivní ambulanci, zaměřená na podporu aktivního životního stylu.", ["motion", "design"], motionImports.czpportrait, "", "d-9-16", ""),
    new WorkModel("Riva Man", "Reels prezentující masážní a kosmetický salon Riva.", ["video"], videoImports.rivaman, "", "d-9-16", ""),
    new WorkModel("Open Air Museum", "Webové stránky muzea na hranici mezi Českou republikou a Polskem v Českém Těšíně.", ["web", "design"], stillImports.openair, "", "d-16-9", ""),
]

export const content = [
    ...highlight,
    new WorkModel("Riva Studio", "Stories o procedurách v kosmetickém a masážním studiu Riva.", ["video"], videoImports.rivatango, "", "d-9-16", ""),
    new WorkModel("Ples FN 2023", "Animace promítaná na plese FN Olomouc, představující partnery akce.", ["motion"], motionImports.ples2023, "", "d-16-9", ""),
    new WorkModel("Výstava Na Urgent!", "Pozvánka na výstavu fotografií Jindřicha Štreita z prostředí Urgentního příjmu FN Olomouc.", ["design"], stillImports.naurgent, "", "d-16-9", ""),
    new WorkModel("14. MLS", "Intro video pro setkání hematologických pracovišť v ČR.", ["motion", "design"], motionImports.haimaom14mls, "", "d-16-9", ""),
    new WorkModel("Soutěž poutníci", "Reels ke spuštění fotosoutěže 'Po stopách poutníků', která podporuje pacienty v aktivním pohybu.", ["motion", "design"], motionImports.poutnici, "", "d-9-16", ""),
    new WorkModel("Pohybrady", "Pozvánka na workshop zaměřený na aktivní pohyb s fyzioterapeuty na přírodním koupališti Poděbrady.", ["motion", "design"], motionImports.pohybrady, "", "d-9-16", ""),
    new WorkModel("Pablo Bellezza", "Webové stránky pro olomoucké kadeřnictví Pablo Bellezza.", ["web", "design"], stillImports.pablobellezza, "", "d-1", ""),
    new WorkModel("Pracovní setkání HAIMAOM", "Pozvánka na pracovní setkání hematologických pracovišť pod záštitou nadace Haimaom.", ["design"], stillImports.haimaomprac24, "", "d-1", ""),
    new WorkModel("Ambulance aktivního zdraví", "Podkresový loop pro YouTube pořad zaměřený na aktivní zdraví a duševní rovnováhu.", ["motion", "design"], motionImports.aazcut, "", "d-16-9", ""),
    new WorkModel("Web CZ-PL", "Webové stránky programu Interreg CZ-PL s interaktivním kalendářem, který informuje o termínech podávání výzev.", ["web", "design"], stillImports.czpl, "", "d-1", ""),
    new WorkModel("Rozloučení s Franz Josefem", "Animace k příležitosti demolice nejstarší budovy ve FN Olomouc.", ["motion", "design"], motionImports.bouranifj, "", "d-9-16", ""),
    new WorkModel("Pacientský den HAIMAOM", "Pozvánka pro pacienty Hematooknologické kliniky na Pacientský den.", ["design"], stillImports.haimaom3pac, "", "d-1", ""),
];

export const categories = [...new Set(content.flatMap(item => item.category))];

// Generování kategorií a počítání jejich výskytu
const categoryCounts = content.flatMap(item => item.category).reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

// Filtrování kategorií s více než 3 výskyty
export const menuCategories = Object.keys(categoryCounts).filter(category => categoryCounts[category] > 3);