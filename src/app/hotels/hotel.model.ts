export class Hotel {
  public id: string;
  public imagePath: string[];
  public location: string;
  public description: string[];

  constructor(imagePath: string[], location: string, description: string[]) {
    this.imagePath = imagePath;
    this.location = location;
    this.description = description;
  }
}

