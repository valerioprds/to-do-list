import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { AllItemsComponent } from './all-items/all-items.component';

export const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'deleted', component: DeletedTodosComponent },
  { path: 'all', component: AllItemsComponent },


  { path: '**', redirectTo: '', pathMatch: 'full' },

];
