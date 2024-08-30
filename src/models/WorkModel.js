export class WorkModel {
  /**
   * Vytvoření nového WorkModel objektu.
   *
   * @param {string} title - Název projektu nebo díla.
   * @param {string} description - Krátký popis projektu, vysvětlující jeho obsah nebo účel.
   * @param {Array<string>} category - Kategorie, do kterých projekt spadá, např. "motion", "design", "web".
   * @param {string} src - Cesta k souboru projektu, např. URL obrázku nebo videa.
   * @param {string} icon - (Volitelný) Cesta k ikoně, která reprezentuje projekt. Může být prázdná, pokud ikona není použita.
   * @param {string} size - Poměr stran nebo velikost projektu, např. "d-9-16" pro 9:16 nebo "d-16-9" pro 16:9.
   * @param {string} link - (Volitelný) URL odkaz na detailní stránku nebo externí zdroj s projektem. Může být prázdný, pokud není potřeba.
   */
  
  constructor(title, description, category, src, icon, size, link) {
    this.title = title;
    this.type = this.determineType(src); // Automatické určení typu
    this.category = category;
    this.src = src;
    this.icon = icon;
    this.size = size;
    this.description = description;
    this.link = link;
  }

  // Metoda pro určení typu podle přípony souboru
  determineType(src) {
    const extension = src.split('.').pop().toLowerCase();
    if (['mp4', 'webm', 'ogg'].includes(extension)) {
      return 'video';
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
      return 'img';
    } else {
      return 'unknown'; // Pro případ neznámé přípony
    }
  }
}