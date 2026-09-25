import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CameraService } from '../../services/camera.service';


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
  resposta2: any = null; // Recebe o JSON estruturado diretamente do n8n!   

  constructor(
    // private http: HttpClient,
    // private messageService: MessageService,
    private scanService: CameraService
  ) {}

  @ViewChild('fileInput') fileInput!: ElementRef;

abrirCamera() {
  // Dispara o clique programaticamente de forma segura para o WebView do Android
  this.fileInput.nativeElement.click();
}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {    

      this.scanService.scanImage(file).subscribe({
        next: (response: any) => {         
          this.resposta = response.endereco_organizado; // Recebe o JSON estruturado diretamente do n8n!     
          this.resposta2 = response.id; // Recebe o JSON estruturado diretamente do n8n!        
        },
        error: (err: any) => {
          console.error('Erro ao processar imagem:', err);
         
        },
      });
    }
  }

}
