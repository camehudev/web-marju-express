import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  // Cole aqui o URL de produção (Production URL) do webhook do n8n
  //private n8nWebhookUrl = 'webhook/84ed9913-5511-42a1-b4df-79997f7a4def';
  private n8nWebhookUrl = 'http://localhost:8000';

  private readonly apiUrl = 'https://pessoal-marju-express.sjj3wv.easypanel.host'; // Substitua pelo URL do seu backend

  constructor(private http: HttpClient) {}

  scanImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    // Envia o FormData diretamente para o n8n
    return this.http.post<any>(`${this.apiUrl}/stock/scan-image`, formData);
  }
}