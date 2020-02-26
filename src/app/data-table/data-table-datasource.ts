// The Matsort directive is used to listen for sorting changes and change the order of the data.

import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface DataTableItem {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  amount: number;
}

// TODO: replace this with real data
const EXAMPLE_DATA: DataTableItem[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', amount: 10},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He', amount: 10},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', amount: 10},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', amount: 10},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B', amount: 10},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', amount: 10},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', amount: 10},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , amount: 10},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', amount: 10},
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', amount: 10},
  {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', amount: 10},
  {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', amount: 10},
  {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', amount: 10},
  {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', amount: 10},
  {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', amount: 10},
  {id: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', amount: 10},
  {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', amount: 10},
  {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', amount: 10},
  {id: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', amount: 10},
  {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', amount: 10},
];

// const EXAMPLE_DATA: DataTableItem[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
//   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
//   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
//   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
//   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
//   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
//   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
//   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
//   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
//   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
//   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<DataTableItem> {
  data: DataTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DataTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    // array
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    // transform array into a sorted copy
    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DataTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DataTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
