import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FormsComponent, PasswordMatcher } from "./forms/forms.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { SwitchControlComponent } from "./switch-control/switch-control.component";

import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormsComponent,
    SwitchControlComponent,
    PasswordMatcher,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
