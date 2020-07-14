import { Component, OnInit } from "@angular/core";

import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  constructor(
    private sLS: ShoppingListService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
    });
    console.log(this.route);
  }
}
