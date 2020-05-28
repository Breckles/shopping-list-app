import { Component, OnInit, Input } from "@angular/core";
import { Item } from "src/app/shared/item.model";

@Component({
  selector: "app-shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"],
})
export class ShoppingListItemComponent implements OnInit {
  @Input("item") item!: Item;

  constructor() {}

  ngOnInit(): void {}
}
