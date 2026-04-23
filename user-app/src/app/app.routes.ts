import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form.component/user-form.component';
import { UserListComponent } from './user-list.component/user-list.component';
export const routes: Routes = [
  { path: '', component: UserFormComponent },
  { path: 'list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
