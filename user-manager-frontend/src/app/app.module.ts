import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProfileComponent} from './edit-Profile/profile.component';
import {HomeComponent} from './home/home.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import {SidenavComponent} from './sidenav/sidenav.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HeaderComponent} from './header/header.component';
import {UserGridComponent} from './user-grid/user-grid.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { UserService } from './service/user.service';
import { HttpUtils } from './utils/http-util';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    SidenavComponent,
    NavbarComponent,
    HeaderComponent,
    UserGridComponent,
    AddUserComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
  ],
  providers: [UserService, HttpUtils],
  bootstrap: [AppComponent],
})
export class AppModule {}
