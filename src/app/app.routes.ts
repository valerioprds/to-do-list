import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';

export const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'deleted', component: DeletedTodosComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' },

];
