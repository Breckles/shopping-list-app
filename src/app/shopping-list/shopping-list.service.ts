import { Injectable } from "@angular/core";
import { Item } from "../shared/item.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  // "Aisles",
  // "Fruits & Vegetables",
  // "Meat",
  // "Dairy",
  // "Deli",
  // "Bakery",
  // "Unknown",
  private _shoppingList: Item[] = [
    // new Item("Brocolli", "Fruits & Vegetables"),
    // new Item("Asparagus", "Fruits & Vegetables"),
    // new Item("Romaine Hearts", "Fruits & Vegetables"),
    // new Item("Cucumber x 2", "Fruits & Vegetables"),
    // new Item("Eggs", "Dairy"),
    // new Item("Sharp Cheddar", "Dairy"),
    // new Item("Beer", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Gravy", "Aisles"),
    // new Item("Fruit Cups", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Gravy", "Aisles"),
    // new Item("Fruit Cups", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Gravy", "Aisles"),
    // new Item("Fruit Cups", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Gravy", "Aisles"),
    // new Item("Fruit Cups", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Gravy", "Aisles"),
    // new Item("Fruit Cups", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Gravy", "Aisles"),
    // new Item("Fruit Cups", "Aisles"),
    // new Item("Frozen Pizza", "Aisles"),
    // new Item("Fizz", "Aisles"),
    // new Item("Soda", "Aisles"),
    // new Item("Asian Noodles x 4", "Aisles"),
    // new Item("Worcestershire Sauce", "Aisles"),
    // new Item("Bagels", "Bakery"),
    // new Item("Sandwich Bread", "Bakery"),
    // new Item("Minced Beef", "Meat"),
    // new Item("Breakfast Meat", "Meat"),
    // new Item("Chicken Breasts", "Meat"),
    // new Item("Provolone", "Deli"),
    // new Item("Cold Cuts", "Deli"),
    // new Item("Milk", "Dairy"),
  ];
  private _shoppingListEdited = new Subject<Item[]>();

  constructor() {}

  public addToShoppingList(item: Item) {
    this._shoppingList.unshift(item);
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public removeFromShoppingList(index: number) {
    this._shoppingList.splice(index, 1);
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public getListItem(index: number) {
    return this._shoppingList[index];
  }

  public editListItem(item: Item, index: number) {
    this._shoppingList[index] = item;
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public getCategorizedList() {
    let categorizedItemsMap = new Map();

    for (let item of this._shoppingList) {
      categorizedItemsMap.has(item.category)
        ? categorizedItemsMap.get(item.category).push(item.name)
        : categorizedItemsMap.set(item.category, [item.name]);
    }

    let categorizedItemsArray = Array.from(categorizedItemsMap);
    // console.log(categorizedItemsArray);

    return categorizedItemsArray;
  }

  public get shoppingList(): Item[] {
    return [...this._shoppingList];
  }

  public get shoppingListEdited() {
    return this._shoppingListEdited;
  }
}
