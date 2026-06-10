import { Routes } from '@angular/router';
import { StudentList } from './components/student-list/student-list';
import { StudentAdd } from './components/student-add/student-add';
import { StudentEdit } from './components/student-edit/student-edit';
import { StudentView } from './components/student-view/student-view';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'display',
        component:StudentList
    },
    {
        path:'add',
        component:StudentAdd
    },
    {
        path:'edit/:id',
        component:StudentEdit
    },
    {
        path:'view/:id',
        component:StudentView
    }
];
