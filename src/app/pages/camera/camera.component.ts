import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CameraService } from '../../services/camera.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  providers: [MessageService],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  resposta: any = null;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private scanService: CameraService
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('Arquivo selecionado:', file);
      this.enviarParaApi(file);
    }
  }

 enviarParaApi(file: File) {
    // Chama o método do serviço
    this.scanService.enviarImagem(file).subscribe({
      next: (response: any) => {
        this.resposta = response;
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: `ID lido: ${response.id}`
        });
      },
      error: (err) => {
        console.error('Erro ao enviar imagem:', err);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Falha ao processar a etiqueta.'
        });
      }
    });
  }

}
