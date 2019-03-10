import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BloginfoFormComponent } from './bloginfo/bloginfo-form/bloginfo-form.component';
import { BlogDetailFormComponent } from './bloginfo/blog-detail-form/blog-detail-form.component';
import {AppRoutingModule} from './app-routing.module';
import { BloglistComponent } from './home/bloglist/bloglist.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BloginfoFormComponent,
    BlogDetailFormComponent,
    BloglistComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
