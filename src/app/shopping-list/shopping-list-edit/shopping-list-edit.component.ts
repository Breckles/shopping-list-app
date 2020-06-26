import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/shared/item.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent implements OnInit {
  public item: Item = new Item("");
  constructor(private sLS: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    console.log(this.item);

    this.sLS.addItemToShoppingList(this.item);
    this.item = new Item("");
  }
}
