import { Routes } from '@angular/router';
import { StudentcompComponent } from './studentcomp/student';
import { StudentListComponent } from './studentlist/student-list';

export const routes: Routes = [
	{ path: '', component: StudentcompComponent },
	{ path: 'students', component: StudentListComponent },
	{ path: '**', redirectTo: '' }
];
