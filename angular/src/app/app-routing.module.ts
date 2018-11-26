import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextpageComponent} from "./textpage/textpage.component";

const routes: Routes = [
    {path: '', component: TextpageComponent, pathMatch: 'full'},
    {path: 'lesson/:alias', component: TextpageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
