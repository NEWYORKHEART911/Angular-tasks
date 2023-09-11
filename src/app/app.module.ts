import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './pages/counter/counter.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormvalidationsComponent } from './pages/formvalidations/formvalidations.component';
import { SearchproductComponent } from './pages/searchproduct/searchproduct.component';
import { SearchFilterPipe } from './pipes/searchFilter';
import { ImageuploadComponent } from './pages/imageupload/imageupload.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditprofileComponent } from './pages/profile/editprofile/editprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HomeComponent,
    TodoComponent,
    FormvalidationsComponent,
    SearchproductComponent,
    SearchFilterPipe,
    ImageuploadComponent,
    UserdetailsComponent,
    ProfileComponent,
    EditprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
