import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/Order/product-list/ProductList/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './components/Order/product-list/order-master/order-master.component';
import { NotFoundComponent } from './components/NotFound/not-found/not-found.component';
import { UserLoginComponent } from './components/userLogin/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    NotFoundComponent,
    UserLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
