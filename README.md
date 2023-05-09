# :zap: Angular Material Table

* App using the [Angular Material design component library](https://material.angular.io/) to add a table using mat-table with sortable columns, as per [Angular Material sort docs](https://material.angular.io/components/sort/overview).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-material-table?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-material-table?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-material-table?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-material-table?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Angular Material Table](#zap-angular-material-table)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Table of periodic elements used to provide data for columns.

## :camera: Screenshots

![Example screenshot](./img/table+rows-clicked.png)

## :signal_strength: Technologies

* [Angular v16](https://angular.io/)
* [Angular Material v16](https://material.angular.io/)

## :floppy_disk: Setup

* Install dependencies using `npm i`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## :computer: Code Examples

* use ng breakpoint observer to see if use has a phone-sized screen or not.

```typescript
ngOnInit(): void {
  this.breakpointObserver
    .observe(Breakpoints.Handset)
    .subscribe(async result => {
      this.isHandset = result.matches
    })
}
```

## :cool: Features

* Clicking on a row will console.log the data in that row
* Table now has a sticky header
* Table columns now sortable

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Nothing

## :clap: Inspiration

* [Angular Material sort docs](https://material.angular.io/components/sort/overview).

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@gmail.com`
