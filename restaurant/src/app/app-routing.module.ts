import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaComponent } from './pizza/pizza.component';
import { PastaComponent } from './pasta/pasta.component';
import { BeefComponent } from './beef/beef.component';
import { SaladComponent } from './salad/salad.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'Pizza',pathMatch:'full'},
  {path:'Pizza',component:PizzaComponent},
  {path:'Pasta',component:PastaComponent},
  {path:'Beef',component:BeefComponent},
  {path:'Salad',component:SaladComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
