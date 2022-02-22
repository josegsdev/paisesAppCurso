import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of,tap } from 'rxjs';
import { PaisResp } from '../interfaces/paisResp.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';

 
  get camposRequeridos(){
    return new HttpParams().set('fields' , 'flag,name,capital,population,cca2');
  }
  constructor(private http:HttpClient) {  }

  buscarPais(termino:string):Observable<PaisResp[]>{
    const full =`${this.apiUrl}name/${termino}`;
   // return this.http.get(full).pipe(catchError(err=>{of(['Manero de 404 con pipe'])}))
   return this.http.get<PaisResp[]>(full,{params:this.camposRequeridos});
  }

  buscarCapital(termino:string):Observable<PaisResp[]>{
    const full =`${this.apiUrl}capital/${termino}`;
   return this.http.get<PaisResp[]>(full,{params:this.camposRequeridos});
  }

  detallePais(termino:string):Observable<PaisResp[]>{
    const full =`${this.apiUrl}alpha/${termino}`;
   return this.http.get<PaisResp[]>(full);
  }

  buscarRegion(termino:string):Observable<PaisResp[]>{
    const full =`${this.apiUrl}region/${termino}`;
   return this.http.get<PaisResp[]>(full,{params:this.camposRequeridos}).pipe(tap(console.log));
  }

}
