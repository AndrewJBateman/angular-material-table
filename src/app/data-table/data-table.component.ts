import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  amount: number;
}

const EXAMPLE_DATA: PeriodicElement[] = [
  { id: 1, name: "Hydrogen", weight: 1.0079, symbol: "H", amount: 10 },
  { id: 2, name: "Helium", weight: 4.0026, symbol: "He", amount: 10 },
  { id: 3, name: "Lithium", weight: 6.941, symbol: "Li", amount: 10 },
  { id: 4, name: "Beryllium", weight: 9.0122, symbol: "Be", amount: 10 },
  { id: 5, name: "Boron", weight: 10.811, symbol: "B", amount: 10 },
  { id: 6, name: "Carbon", weight: 12.0107, symbol: "C", amount: 10 },
  { id: 7, name: "Nitrogen", weight: 14.0067, symbol: "N", amount: 10 },
  { id: 8, name: "Oxygen", weight: 15.9994, symbol: "O", amount: 10 },
  { id: 9, name: "Fluorine", weight: 18.9984, symbol: "F", amount: 10 },
  { id: 10, name: "Neon", weight: 20.1797, symbol: "Ne", amount: 10 },
  { id: 11, name: "Sodium", weight: 22.9897, symbol: "Na", amount: 10 },
  { id: 12, name: "Magnesium", weight: 24.305, symbol: "Mg", amount: 10 },
  { id: 13, name: "Aluminum", weight: 26.9815, symbol: "Al", amount: 10 },
  { id: 14, name: "Silicon", weight: 28.0855, symbol: "Si", amount: 10 },
  { id: 15, name: "Phosphorus", weight: 30.9738, symbol: "P", amount: 10 },
  { id: 16, name: "Sulfur", weight: 32.065, symbol: "S", amount: 10 },
  { id: 17, name: "Chlorine", weight: 35.453, symbol: "Cl", amount: 10 },
  { id: 18, name: "Argon", weight: 39.948, symbol: "Ar", amount: 10 },
  { id: 19, name: "Potassium", weight: 39.0983, symbol: "K", amount: 10 },
  { id: 20, name: "Calcium", weight: 40.078, symbol: "Ca", amount: 10 },
];

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.css"],
})
export class DataTableComponent implements AfterViewInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ["id", "name", "amount", "weight"];
  dataSource = new MatTableDataSource(EXAMPLE_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  onRowClicked(row: Object) {
    console.log("Row clicked: ", row);
  }
}
