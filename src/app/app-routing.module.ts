import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { InthenewsComponent } from './inthenews/inthenews.component';
import { GiveComponent } from './give/give.component';
import { ContactComponent } from './contact/contact.component';
import { MenministriesComponent } from './menministries/menministries.component';
import { WomenministriesComponent } from './womenministries/womenministries.component';
import { ChildrenministriesComponent } from './childrenministries/childrenministries.component';
import { YouthministriesComponent } from './youthministries/youthministries.component';
import { WidowcareministriesComponent } from './widowcareministries/widowcareministries.component';
import { MedicalministriesComponent } from './medicalministries/medicalministries.component';
import { PrayertowerComponent } from './prayertower/prayertower.component';
import { FloodrelifComponent } from './floodrelif/floodrelif.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { KamalaartsComponent } from './kamalaarts/kamalaarts.component';

const routes: Routes = [
   { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'events', component:EventsComponent },
  { path: 'inthenews', component:InthenewsComponent },
  { path: 'give', component:GiveComponent },
  { path: 'contact', component:ContactComponent  },
  {path: 'men', component:MenministriesComponent},
  {path:'women', component:WomenministriesComponent},
  {path:'children', component:ChildrenministriesComponent},
  {path:'youth', component:YouthministriesComponent},
  {path:'widowcare', component:WidowcareministriesComponent},
  {path:'medical', component:MedicalministriesComponent},
  {path:'prayer',component:PrayertowerComponent},
  {path:'floodrelief',component:FloodrelifComponent},
  {path:'vegetables',component:VegetablesComponent},
  {path:'kamalaarts',component:KamalaartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled' 
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
