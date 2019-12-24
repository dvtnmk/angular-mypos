import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/member/login/login.component';
import { RegisterComponent } from './components/member/register/register.component';
import { StockHomeComponent } from './components/stock/stock-home/stock-home.component';
import { StockCreateComponent } from './components/stock/stock-create/stock-create.component';
import { StockEditComponent } from './components/stock/stock-edit/stock-edit.component';


const routes: Routes = [
  {path:'auth/login', component: LoginComponent},
  {path:'auth/register', component: RegisterComponent},
  {path:'stock', component: StockHomeComponent},
  {path:'stock/create', component: StockCreateComponent},
  {path:'stock/edit', component: StockEditComponent},
  {path:'**', redirectTo:'auth/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
