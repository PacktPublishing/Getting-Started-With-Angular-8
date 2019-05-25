# Client Contacts Manager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


# Changes in this version

- Updated both the Client and Company services to show that Observables are being returned from the HttpClient calls
- Updated both the Client Edit form and the Company Edit form to Reactive forms
- Used RxJs in the Search Form Component so it now starts searching as you type
- Added OnChanges lifecycle hook to both the Client and Company edit forms in order to populate a Reactive form with the data passed in from the parent Component
