import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebhookService {
  // URL completa do seu webhook no n8n
  private webhookUrl = 'https://pessoal-n8n-start.sjj3wv.easypanel.host/webhook/84ed9913-5511-42a1-b4df-79997f7a4def';

  constructor(private http: HttpClient) {}

  enviarImagemEtiqueta(file: File): Observable<any> {
    const formData = new FormData();
    // 'file' é o nome do campo que o n8n vai receber (pode ajustar conforme necessário)
    formData.append('file', file, file.name);

    return this.http.post(this.webhookUrl, formData);
  }
}