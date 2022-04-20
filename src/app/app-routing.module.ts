import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PagenotfoundComponent } from './components/common/pagenotfound/pagenotfound.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { HomeComponent } from './components/home/home.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { CounterComponent } from './components/products/counter/counter.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductlistComponent } from './components/products/productlist/productlist.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { UserComponent } from './components/users/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductGuard } from './guards/product.guard';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "home", component: HomeComponent, canActivate:[AuthGuard]},
  {path: "customers", component: CustomerlistComponent},
  {path: "products", component:ProductlistComponent},
  {path: "products/:id", component:ProductComponent},
  {path: "products/edit/:id", component:ProductComponent},
  {path: "products/view/:id", component:ProductComponent, canActivate:[ProductGuard]},
  {path: 'users', component: UsersComponent, canActivate:[AuthGuard]},
  {path: 'orders', component: OrdersComponent},
  {path: 'counter', component: CounterComponent},
  {path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
