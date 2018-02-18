import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './forms/reactive-login.component';


@NgModule({
  declarations: [
     ReactiveLoginComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [ReactiveLoginComponent]
})
export class AppModule { }
