import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { PianiComponent } from './piani/piani.component';
import { LoginComponent } from './login/login.component';
import { lazymoduleRoutingModule } from './lazymodule.routing.module';
import { HomeComponent } from './home/home.component';
import { FreeTrialComponent } from './free-trial/free-trial.component';



@NgModule({
  declarations: [
    ProdottiComponent,
    AssistenzaComponent,
    PianiComponent,
    LoginComponent,
    HomeComponent,
    FreeTrialComponent
  ],
  imports: [
    CommonModule,
    lazymoduleRoutingModule
  ]
})
export class LazymoduleModule { }
