import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About} from './about/about';
import { Contact } from './contact/contact';
import { User } from './user/user';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },

  // 🔥 Dynamic Route
  { path: 'user/:id', component: User },

  { path: '**', redirectTo: '' }
];
