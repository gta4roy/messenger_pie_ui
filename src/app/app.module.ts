import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddEntryFormComponent } from './add-entry-form/add-entry-form.component';
import { AddAddressService} from './add-address.service';
import { ServiceAddressService } from './service-address.service'
import { HttpClientModule } from '@angular/common/http';
import { DisplayAllComponent } from './display-all/display-all.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEntryFormComponent,
    DisplayAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AddAddressService,ServiceAddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
