import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';
import { TodoComponent } from './pages/todo/todo.component';
import { FormvalidationsComponent } from './pages/formvalidations/formvalidations.component';
import { SearchproductComponent } from './pages/searchproduct/searchproduct.component';
import { ImageuploadComponent } from './pages/imageupload/imageupload.component';
import { UserdetailsComponent } from './pages/userdetails/userdetails.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditprofileComponent } from './pages/profile/editprofile/editprofile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'formvalidations', component: FormvalidationsComponent},
  {path: 'searchproduct', component: SearchproductComponent},
  {path: 'imageupload', component: ImageuploadComponent},
  {path: 'userdetails', component: UserdetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'editprofile', component: EditprofileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
