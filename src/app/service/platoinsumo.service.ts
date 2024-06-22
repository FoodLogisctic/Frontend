import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Platoinsumo } from '../model/platoinsumo';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.base

@Injectable({
  providedIn: 'root'
})
export class PlatoinsumoService {
  private url = `${baseUrl}`; // alt+96
  private listaCambio = new Subject<Platoinsumo[]>();
 
   constructor(private http: HttpClient) { }
   list(): Observable<any>{
     console.log(this.url + "/piDetails");
         return this.http.get(this.url + "/piDetails");
      }
      /*listId(id:number){
       return this.http.get<Compra>(this.url+"/compra/"+id);
     }*/
      insert(platoInsumo: Platoinsumo){
       //por ser nueva instancia
       return this.http.post(this.url+"/platoInsumo", platoInsumo);
        }
       setList(listaNueva : Platoinsumo[]){
         this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
       }
       getList(){
         return this.listaCambio.asObservable();
       }
       /*update(cmp: Compra){
         return this.http.put(this.url + "/compra", cmp);
       }
       delete(id:string){
         return this.http.delete(this.url + "/compra/" + id);
       }*/
}
