import video_riva from '../video/riva_tango_web.mp4';
import img1 from "../img/img.jpg";
import { WorkModel } from '../models/WorkModel';

export const content = [
    new WorkModel("titulek 2", "lipsum lipsum lipsum lipsum", ["video", "motion"], img1, "", "d-2", ""),
    new WorkModel("Nějaký titulek", "lipsum lipsum lipsum lipsum", ["design", "motion"], video_riva, "", "d-2", ""),
    new WorkModel("titulek 2", "lipsum lipsum lipsum lipsum", ["video"], img1, "", "d-4", "http://www.seznam.cz"),
    new WorkModel("Nějaký titulek", "lipsum lipsum lipsum lipsum", ["design"], video_riva, "", "d-2", ""),
    new WorkModel("titulek 2", "lipsum lipsum lipsum lipsum", ["video"], img1, "", "d-3", ""),
    new WorkModel("titulek 2", "lipsum lipsum lipsum lipsum", ["video", "motion"], img1, "", "d-2", "https://www.google.com"),
    new WorkModel("Nějaký titulek", "lipsum lipsum lipsum lipsum", ["design", "motion"], video_riva, "", "d-2", ""),
    new WorkModel("titulek 2", "lipsum lipsum lipsum lipsum", ["video"], img1, "", "d-2", ""),
    new WorkModel("Nějaký titulek", "lipsum lipsum lipsum lipsum", ["design"], video_riva, "", "d-4", ""),
    new WorkModel("titulek 2", "lipsum lipsum lipsum lipsum", ["video"], img1, "", "d-3", "")
];

export const categories = [...new Set(content.flatMap(item => item.category))];

// Generování kategorií a počítání jejich výskytu
const categoryCounts = content.flatMap(item => item.category).reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
}, {});

// Filtrování kategorií s více než 3 výskyty
export const menuCategories = Object.keys(categoryCounts).filter(category => categoryCounts[category] > 3);