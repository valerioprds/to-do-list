import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeletedTodosComponent } from './deleted-todos/deleted-todos.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { CompletedTodosComponent } from './completed-todos/completed-todos.component';

export const routes: Routes = [

  { path: '', component: MainComponent },
  { path: 'deleted', component: DeletedTodosComponent },
  { path: 'all', component: AllItemsComponent },
  { path: 'completed', component: CompletedTodosComponent },



  { path: '**', redirectTo: '', pathMatch: 'full' },

];
