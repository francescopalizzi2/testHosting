import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { AssistenzaComponent } from './assistenza/assistenza.component';
import { PianiComponent } from './piani/piani.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    ProdottiComponent,
    AssistenzaComponent,
    PianiComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LazymoduleModule { }
