# :zap: Angular Material Table

* App using the [Angular Material design component library](https://material.angular.io/) to add a table using mat-table and experiment with different themes.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular Material Table](#zap-angular-material-table)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Table of periodic elements used to provide data for columns.

## :camera: Screenshots

![Example screenshot](./img/table+rows-clicked.png)

## :signal_strength: Technologies

* [Angular v10](https://angular.io/)
* [Angular Material v10](https://material.angular.io/)

## :floppy_disk: Setup

* Install dependencies using `npm i` then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## :computer: Code Examples

```html
<!-- Data passed to the mat-table component using the dataSource input.
Mat-sort header is used to allow each column to be sorted in asc or desc order -->
<div class="mat-elevation-z8 data-table">
  <table mat-table class="full-width-table" [dataSource]="dataSource" matSort aria-label="Elements">
    <!-- Id Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Id</th>
      <td mat-cell *matCellDef="let row">{{row.id}}</td>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="name">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>
      <td mat-cell *matCellDef="let row">{{row.name}}</td>
    </ng-container>

    <!-- Amount Column -->
    <ng-container matColumnDef="amount">
      <th mat-header-cell *matHeaderCellDef mat-sort-header>Amount</th>
      <td mat-cell *matCellDef="let row">{{row.amount}}</td>
    </ng-container>

    <!-- Sticky header added, onRowClick function added -->
    <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="onRowClicked(row)"></tr>
  </table>

  <!-- Add a paginator -->
  <mat-paginator #paginator
      [length]="dataSource.data.length"
      [pageIndex]="0"
      [pageSize]="50"
      [pageSizeOptions]="[25, 50, 100, 250]">
  </mat-paginator>
</div>

```

## :cool: Features

* Clicking on a row will console.log the data in that row.
* Table now has a sticky header.
* Updated to Angular 10 & Angular-Material 10.
* In `data-table.component.ts`: Breaking change on ViewChild decorator: `error TS2554: Expected 2 arguments, but got 1 in v8` fixed by adding the 'static' flag to both ViewChile decorators:

```typescript
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

```

## :clipboard: Status & To-Do List

* Status: Compiles and displays in browser with zero errors. Working pagination and sorting. Updated to latest Angular 10 and all working as before, no errors and no dependency conflicts.
* To-Do: Add to the onRowClicked(row) function. Add styling, especially a coloured header.

## :clap: Inspiration

* Project inspired by these 4 Youtube tutorials. Note: the Custom Theme Youtube Video 4 was out of date. Beware other breaking changes due to change to Angular 9/10:

* [1. Intro & Setup](https://www.youtube.com/watch?v=u679SQsfRVM&list=PL55RiY5tL51p2R1L8sxaYlzmWh6yIrX8k&index=1),
* [2. Data Table](https://www.youtube.com/watch?v=ao-nY-9biWs&list=PL55RiY5tL51p2R1L8sxaYlzmWh6yIrX8k&index=2),
* [3. Responsive Navigation](https://www.youtube.com/watch?v=Q6qhzG7mObU&list=PL55RiY5tL51p2R1L8sxaYlzmWh6yIrX8k&index=3),
* [4. Custom Theme](https://www.youtube.com/watch?v=EBnTZwr0RSs&list=PL55RiY5tL51p2R1L8sxaYlzmWh6yIrX8k&index=4)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
