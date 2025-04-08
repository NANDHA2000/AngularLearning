import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './AngularCoreConcepts/interpolation/interpolation.component';
import { BindingComponent } from './AngularCoreConcepts/binding/binding.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'binding', component: BindingComponent },
  // Add others as you build them
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
