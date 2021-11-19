import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssistenzaComponent } from "./assistenza/assistenza.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PianiComponent } from "./piani/piani.component";
import { ProdottiComponent } from "./prodotti/prodotti.component";


const routes: Routes = [
    {path: '', component: HomeComponent, 
        children: [
            // {path: '', redirectTo: 'carosello', pathMatch: 'full'},
            {path: 'login', component: LoginComponent},
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