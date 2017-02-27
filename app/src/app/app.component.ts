import { Component } from '@angular/core';

import '../style/app.css';

@Component({
  selector: 'my-app',
  template: `
    <!-- top navigation bar -->
    <pet-store-navbar></pet-store-navbar>

    <!-- main body -->
    <div class="container-fluid">
      <div class="row">
        <!-- left menu -->
        <div class="col-sm-3 col-md-2 sidebar">
          <pet-store-menu></pet-store-menu>
        </div>

        <!-- content -->
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    `
})

export class AppComponent {
  title = "Pet Store";
}
