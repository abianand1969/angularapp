import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { ProductlistComponent } from './components/products/productlist/productlist.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { ProductComponent } from './components/products/product/product.component';
import { BootnavbarComponent } from './components/common/bootnavbar/bootnavbar.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { OrderComponent } from './components/order/order/order.component';
import { CounterComponent } from './components/products/counter/counter.component';
import { AddproductComponent } from './components/products/addproduct/addproduct.component';
import { AdduserComponent } from './components/users/adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './components/books/books/books.component';
import { BookComponent } from './components/books/book/book.component';
import { AddbookComponent } from './components/books/addbook/addbook.component';
import { EditbookComponent } from './components/books/editbook/editbook.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './components/common/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FlashMessageComponent } from './components/common/flash-message/flash-message.component';
import { EdituserComponent } from './components/users/edituser/edituser.component';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    ProductlistComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ProductComponent,
    BootnavbarComponent,
    OrdersComponent,
    OrderComponent,
    CounterComponent,
    AddproductComponent,
    AdduserComponent,
    BooksComponent,
    BookComponent,
    AddbookComponent,
    EditbookComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    FlashMessageComponent,
    EdituserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
