import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  // Substitua pela URL correta da sua API (ou IP da sua VPS/Easypanel)
  private apiUrl = 'http://localhost:8000/stock/scan-image';

  constructor(private http: HttpClient) {}

  enviarImagem(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    
    return this.http.post<any>('http://localhost:8000/stock/scan-image',formData);
  }
}
