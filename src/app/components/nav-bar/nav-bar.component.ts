import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/public_api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] | undefined;


  ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home'
            },
            {
                label: 'Novo Produto',
                icon: 'pi pi-star'
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
