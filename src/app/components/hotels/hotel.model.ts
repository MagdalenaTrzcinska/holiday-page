export class Hotel {
  public id: string;
  public imagePath: string[];
  public location: string;
  public description: string[];
  public price: number;

  constructor(imagePath: string[], location: string, description: string[], price: number) {
    this.imagePath = imagePath;
    this.location = location;
    this.description = description;
    this.price = price;
  }
}

