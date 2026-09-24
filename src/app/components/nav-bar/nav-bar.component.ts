import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { CameraComponent } from '../../pages/camera/camera.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule, CameraComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;


  ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: inicio 
            },
            {
                label: 'Novo Produto',
                icon: 'pi pi-star',
                routerLink: 'camera' // Adicione o routerLink para a rota da câmera
            },
            {
                label: 'Rotas',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Criar',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Consultar',
                        icon: 'pi pi-server'
                    },
                   
                    
                ]
            },
           
        ]
    }

}
