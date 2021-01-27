import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Profile2Component } from './profile2/profile2.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { ProfileModule } from './profile/profile.module';
import { CloudServicesComponent } from './components/cloud/cloud-services/cloud-services.component';
import { MobileAppsComponent } from './components/mobile/mobile-apps/mobile-apps.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Profile2Component,
    ChangeThemeComponent,
    CloudServicesComponent,
    MobileAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
