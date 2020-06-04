import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shopping-list.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "shopping-list";

  constructor(private sLS: ShoppingListService) {}

  ngOnInit() {
    // When app is first initialized, check if a list exists from this session (protects the list from being wiped when page relods)
    let list = localStorage.getItem("shopping-list");
    if (list) {
      this.sLS.restoreSessionShoppingList(JSON.parse(list));
    } else {
      localStorage.setItem("shopping-list", "");
    }
  }
}
