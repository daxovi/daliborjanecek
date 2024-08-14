export class WorkModel {
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