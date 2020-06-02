import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private sLS: ShoppingListService, private router: Router) {}

  ngOnInit(): void {}

  public onNavigateToFormattedList() {
    let categorizedItems = this.sLS.getCategorizedList();
    // let categorizedItemsString = JSON.stringify(categorizedItems);
    // let routerCommands = ["formatted-list"];

    this.router.navigate(["formatted-list"], { queryParams: categorizedItems });
  }
}
