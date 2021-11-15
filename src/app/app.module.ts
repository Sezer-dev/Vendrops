import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { UserDropdownComponent } from './shared/components/user-dropdown/user-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    NavigationComponent,
    UserDropdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
