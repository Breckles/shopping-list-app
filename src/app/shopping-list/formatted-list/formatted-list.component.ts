import { Component, OnInit } from "@angular/core";
import { Item } from "src/app/shared/item.model";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-formatted-list",
  templateUrl: "./formatted-list.component.html",
  styleUrls: ["./formatted-list.component.css"],
})
export class FormattedListComponent implements OnInit {
  public categorizedItems: Map<string, string[]> = new Map();
  // public categorizedItems!: { category: string; items: string[] }[];
  // private categorizedItems!: Params;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let categoriesAndItemsAsStrings: any[] = [];

    console.log(this.route.snapshot.queryParams);

    let paramMapKeys = this.route.snapshot.queryParamMap.keys;

    for (let key of paramMapKeys) {
      categoriesAndItemsAsStrings.push(
        this.route.snapshot.queryParamMap.getAll(key)
      );
    }

    for (let category of categoriesAndItemsAsStrings) {
      this.categorizedItems.set(category[0], category[1].split(","));
    }

    console.log(categoriesAndItemsAsStrings);
    console.log("final map: " + this.categorizedItems);
    console.log(Array.from(this.categorizedItems));
  }

  showValue(value: any) {
    console.log(value);
  }
}
