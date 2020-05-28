import { Injectable } from "@angular/core";
import { Item } from "../shared/item.model";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ShoppingListService {
  private _shoppingList: Item[] = [
    new Item("Brocolli"),
    new Item("Eggs"),
    new Item("Sharp Cheddar"),
  ];
  private _shoppingListEdited = new Subject<Item[]>();

  constructor() {}

  public addToShoppingList(item: Item) {
    this._shoppingList.push(item);
    this._shoppingListEdited.next([...this._shoppingList]);
  }

  public removeFromShoppingList(index: number) {
    this._shoppingList.splice(index, 1);
  }

  public get shoppingList(): Item[] {
    return [...this._shoppingList];
  }

  public get shoppingListEdited() {
    return this._shoppingListEdited;
  }
}
