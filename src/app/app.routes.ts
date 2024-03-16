import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SaleComponent } from './sale/sale.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "sale", component: SaleComponent },
  { path: "store", component: StoreComponent }
];
