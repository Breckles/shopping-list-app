import { Component, OnInit } from "@angular/core";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(private sLS: ShoppingListService, private router: Router) {}

  ngOnInit(): void {}

  public onNavigateToFormattedList() {
    let categorizedItems = this.sLS.getCategorizedList();
    // let categorizedItemsString = JSON.stringify(categorizedItems);
    // let routerCommands = ["formatted-list"];

    this.router.navigate(["formatted-list"], { queryParams: categorizedItems });
  }

  onResetList() {
    localStorage.removeItem("shopping-list");
    this.sLS.resetList();
  }
}
