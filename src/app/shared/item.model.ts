enum CATEGORIES {
  Aisles,
  Fruits_and_Vegetables,
  Meat,
  Dairy,
  Deli,
  Bakery,
  Unknown,
}

export class Item {
  private _name: string;
  private _category = CATEGORIES.Unknown;

  constructor(ingName: string) {
    this._name = ingName;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get category(): CATEGORIES {
    return this._category;
  }
  public set category(value: CATEGORIES) {
    this._category = value;
  }
}
