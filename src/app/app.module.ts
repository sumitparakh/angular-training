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
import { DirectivesComponent } from './components/directives/directives.component';
import { NgDataDirective } from './core/directives/ng-data.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { FirstNamePipe } from './core/pipes/first-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormHandlingComponent } from './components/form-handling/form-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    Profile2Component,
    ChangeThemeComponent,
    CloudServicesComponent,
    MobileAppsComponent,
    DirectivesComponent,
    NgDataDirective,
    PipesComponent,
    FirstNamePipe,
    DataBindingComponent,
    FormHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
