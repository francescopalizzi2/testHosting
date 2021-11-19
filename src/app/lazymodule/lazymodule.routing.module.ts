import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssistenzaComponent } from "./assistenza/assistenza.component";
import { LoginComponent } from "./login/login.component";
import { PianiComponent } from "./piani/piani.component";
import { ProdottiComponent } from "./prodotti/prodotti.component";


const routes: Routes = [
    {path: '', component: LoginComponent, 
        children: [
            // {path: '', redirectTo: 'carosello', pathMatch: 'full'},
            {path: 'assistenza', component: AssistenzaComponent},
            {path: 'piani', component: PianiComponent },
            {path: 'prodotti', component: ProdottiComponent }
        ]
    },
    // {path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class lazymoduleRoutingModule {}