import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/member/login/login.component';
import { RegisterComponent } from './components/member/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShopHomeComponent } from './components/shop/shop-home/shop-home.component';
import { ShopPaymentComponent } from './components/shop/shop-payment/shop-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ShopHomeComponent,
    ShopPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    
    //DI
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
