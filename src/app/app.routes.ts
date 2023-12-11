import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExhibitComponent } from './exhibit/exhibit.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'exhibit/:id', component: ExhibitComponent },
];
