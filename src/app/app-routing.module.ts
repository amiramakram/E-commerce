import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { OrderMasterComponent } from './components/Order/product-list/order-master/order-master.component';
import { ProductDetailsComponent } from './components/Order/product-list/order-master/product-details/product-details.component';
import { ProductListComponent } from './components/Order/product-list/ProductList/product-list.component';
import { UserLoginComponent } from './components/userLogin/user-login/user-login.component';

const routes: Routes = [
  {path:'',component: LayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},//default path
    {path:'Home',component:HomeComponent},
    {path:'Products',component:ProductListComponent},
    {path:'Products/:pid',component:ProductDetailsComponent},

    {path:'Order',component:OrderMasterComponent},
   ]},
 
   {path:'Login',component:UserLoginComponent},
  {path:'**',component:NotFoundComponent },//wild path==>error


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
