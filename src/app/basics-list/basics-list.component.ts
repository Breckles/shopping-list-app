import { Component, OnInit } from "@angular/core";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Item } from "../shared/item.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-basics-list",
  templateUrl: "./basics-list.component.html",
  styleUrls: ["./basics-list.component.css"],
})
export class BasicsListComponent implements OnInit {
  public basicsList: Item[] = [
    new Item("milk", "Dairy"),
    new Item("eggs", "Dairy"),
    new Item("margarine", "Dairy"),
    new Item("coffee creamer", "Dairy"),
    new Item("sliced cheese", "Dairy"),
    new Item("sharp cheddar", "Dairy"),
    new Item("cream cheese", "Dairy"),
    new Item("mayonnaise", "Aisles"),
    new Item("ketchup", "Aisles"),
    new Item("soft drink", "Aisles"),
    new Item("fizzy water", "Aisles"),
    new Item("fruit cups", "Aisles"),
    new Item("instant coffee", "Aisles"),
    new Item("garbage bags", "Aisles"),
    new Item("recycling bags", "Aisles"),
    new Item("pam", "Aisles"),
    new Item("baking soda", "Aisles"),
    new Item("sliced bread", "Aisles"),
    new Item("olive oil", "Aisles"),
    new Item("vegetable oil", "Aisles"),
    new Item("salt", "Aisles"),
    new Item("pepper", "Aisles"),
    new Item("dish soap", "Aisles"),
    new Item("body wash", "Aisles"),
    new Item("shampoo", "Aisles"),
    new Item("toothpaste", "Aisles"),
    new Item("dental floss", "Aisles"),
    new Item("bar soap", "Aisles"),
    new Item("mouth wash", "Aisles"),
    new Item("toilet paper", "Aisles"),
    new Item("paper towels", "Aisles"),
    new Item("kleenex", "Aisles"),
    new Item("bagels", "Bakery"),
    new Item("garlic", "Fruits & Vegetables"),
  ];
  private basicsToAdd: Item[] = [];

  constructor(
    private sLS: ShoppingListService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onAddItemsToList() {
    const items = document.querySelectorAll("input");

    for (let i = 0; i < items.length; i++) {
      if (items[i].checked) {
        this.basicsToAdd.unshift(this.basicsList[+items[i].value]);
      }
    }
    this.sLS.addItemsToShoppingList(this.basicsToAdd);
    this.snackBar.open("Ingredients have been added to the list!", "", {
      duration: 1000,
    });
    window.console.log(this.basicsToAdd);
  }
}
