export class Item {
  private _name: string;
  private _category: string;
  private static _Categories: string[] = [
    "Aisles",
    "Fruits & Vegetables",
    "Meat",
    "Dairy",
    "Deli",
    "Bakery",
    "Unknown",
  ];

  constructor(name: string, category?: string) {
    this._name = name;
    if (category) {
      this._category = category;
    } else {
      this._category = "Unknown";
    }
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get category(): string {
    return this._category;
  }
  public set category(value: string) {
    this._category = value;
  }

  public static get Categories(): string[] {
    return [...Item._Categories];
  }
}
