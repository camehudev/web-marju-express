import { Routes } from '@angular/router';
import { CameraComponent } from './pages/camera/camera.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'camera', component: CameraComponent },
  { path: '**', redirectTo: 'inicio' } // Rota coringa para 404
];