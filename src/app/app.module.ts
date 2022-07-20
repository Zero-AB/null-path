import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule  } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { homeComponent } from './home/app.homeComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { contactComponent } from './contact/app.contactComponent';
import { sbExampleComponent } from './sbexample/app.sbExampleComponent';



@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    homeComponent,
    footerComponent,
    aboutComponent,
    contactComponent,
    sbExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'sbexample',
        component: sbExampleComponent
      },
      {
        path: 'contact',
        component: contactComponent
      },
      {
        path: 'about',
        component: aboutComponent
      },
      {
        path: '',
        component: homeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
