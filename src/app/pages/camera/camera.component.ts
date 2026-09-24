import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CameraService } from '../../services/camera.service';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [ButtonModule, CommonModule, ToastModule],
  providers: [MessageService],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  resposta: any = null;

  constructor(
    // private http: HttpClient,
    // private messageService: MessageService,
    private scanService: CameraService
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {    

      this.scanService.scanImage(file).subscribe({
        next: (response: any) => {

          this.resposta = response; // Recebe o JSON estruturado diretamente do n8n!          
          console.log('Dados da etiqueta:', response);
        },
        error: (err: any) => {
          console.error('Erro ao processar imagem:', err);
         
        },
      });
    }
  }

}
