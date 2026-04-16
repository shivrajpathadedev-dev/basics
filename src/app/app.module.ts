import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/components/product/product.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { userComponent } from './shared/components/users/user.component';
import { VehicleComponent } from './shared/components/vehicle/vehicle.component';
import { MountainComponent } from './shared/components/Mountain/Mountain.component';
import { TestComponent } from './shared/components/test/test.component';
import { PassengerComponent } from './passenger/passenger.component';
import { Keyup } from './shared/components/keyup/keyup.component';
import { TodotaskComponent } from './todotask/todotask.component';
import { TodocrudComponent } from './todocrud/todocrud.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    userComponent,
    VehicleComponent,
    MountainComponent,
    TestComponent,
    PassengerComponent,
    Keyup,
    TodotaskComponent,
    // TodocrudComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
