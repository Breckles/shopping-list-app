enum CATEGORIES {
  Aisles = 1,
  Fruits_and_Vegetables,
  Meat,
  Dairy,
  Deli,
  Bakery,
}

export class Ingredient {
  private _name: string;
  private _category: CATEGORIES;

  constructor(ingName: string, category: CATEGORIES) {
    this._name = ingName;
    this._category = category;
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
