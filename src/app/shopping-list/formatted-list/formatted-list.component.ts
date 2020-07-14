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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // let categoriesAndItemsAsStrings: any[] = [];

    // console.log(this.route.snapshot.queryParams);

    // let paramMapKeys = this.route.snapshot.queryParamMap.keys;

    // for (let key of paramMapKeys) {
    //   categoriesAndItemsAsStrings.push(
    //     this.route.snapshot.queryParamMap.getAll(key)
    //   );
    // }

    // for (let category of categoriesAndItemsAsStrings) {
    //   this.categorizedItems.set(category[0], category[1].split(","));
    // }

    this.route.queryParams.subscribe((params) => {
      console.log("in callback: " + this.route.queryParams);

      if (this.route.snapshot.queryParams[0]) {
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
      } else {
        this.categorizedItems = new Map();
      }
    });
  }

  showValue(value: any) {
    console.log(value);
  }
}
