import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { SuccessstoriesComponent } from './successstories/successstories.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stories', component: SuccessstoriesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'contact', component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
