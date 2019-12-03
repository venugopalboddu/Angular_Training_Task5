import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private ht: HttpClient) { }

  ge() {
    return this.ht.get('http://localhost:3000/details');
  }
}
