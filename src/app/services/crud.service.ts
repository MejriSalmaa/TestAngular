import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Album } from 'modele/Album';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/album';

  constructor(private http: HttpClient) { }

  getall(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }

  post(album: Album) {
    return this.http.post('http://localhost:3000/album', Album);
  }


  getById(id:any): Observable<any> {
    return this.http.get<any>('http://localhost:3000/album/' + id);
  }



}