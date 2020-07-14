import { Component, OnInit, Input } from "@angular/core";
import { Item } from "src/app/shared/item.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-list-item",
  templateUrl: "./shopping-list-item.component.html",
  styleUrls: ["./shopping-list-item.component.css"],
})
export class ShoppingListItemComponent implements OnInit {
  @Input("index") index!: number;

  public item!: Item;

  categories: string[] = Item.Categories;

  constructor(private sLS: ShoppingListService) {}

  ngOnInit(): void {
    this.item = this.sLS.getListItem(this.index);
  }

  onRemoveItem() {
    this.sLS.removeFromShoppingList(this.index);
  }

  onCategorySelect() {
    this.sLS.editListItem(this.item, this.index);
  }

  getImage() {
    return (
      "url(" +
      "../../../assets/images/" +
      this.item.category.replace(/\s/g, "") +
      ".jpg)"
    );
  }
}
