import { Routes } from '@angular/router';
import { ListComponent } from '../../components/list/list.component';
import { AddNewComponent } from '../../components/add-new/add-new.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: ListComponent },
  { path: 'add', component: AddNewComponent }
];
