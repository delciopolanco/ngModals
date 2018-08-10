import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    Form2Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [FormComponent, Form2Component, Form3Component],
  bootstrap: [AppComponent]
})
export class AppModule { }
