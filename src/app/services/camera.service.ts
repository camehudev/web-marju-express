import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  // URL da sua API FastAPI
  private apiUrl = 'http://127.0.0.1:8000/stock/scan-image'; // Ou o link de produção da sua VPS

  private apiBase = 'https://pessoal-web-marju-express.sjj3wv.easypanel.host/stock/scan-image'

  constructor(private http: HttpClient) {}

  scanImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.http.post<any>(this.apiBase, formData);
  }
}