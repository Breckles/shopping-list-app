import { Component, OnInit } from "@angular/core";
import { Item } from "../shared/item.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  private _list!: Item[];
  private listSubscription!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this._list = this.shoppingListService.shoppingList;
    this.listSubscription = this.shoppingListService.shoppingListEdited.subscribe(
      (list: Item[]) => {
        this._list = list;
      }
    );
    console.log(this.shoppingListService.shoppingList);

    console.log(this.list);
  }

  public get list(): Item[] {
    return this._list;
  }
  public set list(value: Item[]) {
    this._list = value;
  }
}
