import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {path:'users', component:UsersComponent},
  {path:'user', component:UserComponent},
  {path:"**", redirectTo:"users"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
