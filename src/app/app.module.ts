import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { InthenewsComponent } from './inthenews/inthenews.component';
import { GiveComponent } from './give/give.component';
import { ContactComponent } from './contact/contact.component';
import { MenministriesComponent } from './menministries/menministries.component';
import { WomenministriesComponent } from './womenministries/womenministries.component';
import { YouthministriesComponent } from './youthministries/youthministries.component';
import { WidowcareministriesComponent } from './widowcareministries/widowcareministries.component';
import { MedicalministriesComponent } from './medicalministries/medicalministries.component';
import { ChildrenministriesComponent } from './childrenministries/childrenministries.component';
import { PrayertowerComponent } from './prayertower/prayertower.component';
import { FloodrelifComponent } from './floodrelif/floodrelif.component';
import { KamalaartsComponent } from './kamalaarts/kamalaarts.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { BibleCollegeComponent } from './bible-college/bible-college.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    EventsComponent,
    InthenewsComponent,
    GiveComponent,
    ContactComponent,
    MenministriesComponent,
    WomenministriesComponent,
    YouthministriesComponent,
    WidowcareministriesComponent,
    MedicalministriesComponent,
    ChildrenministriesComponent,
    PrayertowerComponent,
    FloodrelifComponent,
    KamalaartsComponent,
    VegetablesComponent,
    BibleCollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
