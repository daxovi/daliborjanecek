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

export const content = [
    new WorkModel("Za slavnými rodáky", "1", ["video"], motionImports.rodaci, "", "d-9-16", ""),
    new WorkModel("Pacientský den HAIMAOM", "2", ["video"], stillImports.haimaom3pac, "", "d-1", ""),
    new WorkModel("Gustav sleep timer", "3", ["video"], videoImports.gustavsleeptimer, "", "d-9-16", ""),
    new WorkModel("Pablo Bellezza", "4", ["video"], stillImports.pablobellezza, "", "d-1", ""),
    new WorkModel("Riva Man", "5", ["video"], videoImports.rivaman, "", "d-9-16", ""),
    new WorkModel("Ples FN 2024", "6", ["video"], motionImports.ples2024, "", "d-16-9", ""),
    new WorkModel("Rozloučení s Franc Josefem", "7", ["video"], motionImports.bouranifj, "", "d-9-16", ""),
    new WorkModel("Soutěž poutníci", "8", ["video"], motionImports.poutnici, "", "d-9-16", ""),
    new WorkModel("Výstava Na Urgent!", "9", ["video"], stillImports.naurgent, "", "d-16-9", ""),
    new WorkModel("Web CZ-PL", "10", ["video"], stillImports.czpl, "", "d-1", ""),
    new WorkModel("Riva Studio", "11", ["video"], videoImports.rivatango, "", "d-9-16", ""),
    new WorkModel("Ples FN 2023", "12", ["video"], motionImports.ples2023, "", "d-16-9", ""),
    new WorkModel("Pracovní setkání HAIMAOM", "13", ["video"], stillImports.haimaomprac27, "", "d-1", ""),
    new WorkModel("14. MLS", "14", ["video"], motionImports.haimaom14mls, "", "d-16-9", ""),
    new WorkModel("Pohybrady", "15", ["video"], motionImports.pohybrady, "", "d-9-16", ""),
    new WorkModel("Open Air Museum", "16", ["video"], stillImports.openair, "", "d-16-9", ""),
    new WorkModel("Centrum zdraví a prevence", "17", ["video"], motionImports.czpportrait, "", "d-9-16", ""),
    new WorkModel("Ambulance aktivního zdraví", "18", ["video"], motionImports.aazcut, "", "d-16-9", ""),
    new WorkModel("Pracovní setkání HAIMAOM", "19", ["video"], stillImports.haimaomprac24, "", "d-1", ""),
];

export const categories = [...new Set(content.flatMap(item => item.category))];

// Generování kategorií a počítání jejich výskytu
const categoryCounts = content.flatMap(item => item.category).reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

// Filtrování kategorií s více než 3 výskyty
export const menuCategories = Object.keys(categoryCounts).filter(category => categoryCounts[category] > 3);