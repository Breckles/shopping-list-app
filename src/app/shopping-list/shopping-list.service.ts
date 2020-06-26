import { Injectable, OnInit } from "@angular/core";
import { Item, ItemProperties } from "../shared/item.model";
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

  // ngOnInit() {
  //   let list = localStorage.getItem("shopping-list");
  //   if (list) {
  //     this._shoppingList = JSON.parse(list);
  //   } else {
  //     localStorage.setItem("shopping-list", "");
  //   }
  //   console.log(JSON.stringify(this._shoppingList));
  //   console.log("IIIIIIIIIIIIIIIIIIIIIIII");
  // }

  public addItemToShoppingList(item: Item) {
    console.log(item);

    this._shoppingList.unshift(item);
    localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public addItemsToShoppingList(items: Item[]) {
    console.log(items);

    for (const item of items) {
      this._shoppingList.unshift(item);
    }
    localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public removeFromShoppingList(index: number) {
    this._shoppingList.splice(index, 1);
    localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public getListItem(index: number) {
    return this._shoppingList[index];
  }

  public editListItem(item: Item, index: number) {
    this._shoppingList[index] = item;
    localStorage.setItem("shopping-list", JSON.stringify(this._shoppingList));
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

  public restoreSessionShoppingList(shoppingList: ItemProperties[]) {
    // this._shoppingList = shoppingList;
    // for some reason, typecasting doesn't work here, which causes issues, so i do this instead
    for (let item of shoppingList) {
      this._shoppingList.push(Item.createItemFromItemProperties(item));
    }
  }

  public resetList() {
    this._shoppingList = [];
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public get shoppingList(): Item[] {
    return [...this._shoppingList];
  }

  public get shoppingListEdited() {
    return this._shoppingListEdited;
  }
}
