import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { Ventaplato } from '../model/ventaplato';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../model/venta';

const baseUrl = environment.base

@Injectable({
  providedIn: 'root'
})
export class VentaplatoService {
  private url = `${baseUrl}`; // alt+96
  private listaCambio = new Subject<Ventaplato[]>();
 
   constructor(private http: HttpClient) { }
   list(): Observable<any>{
     console.log(this.url + "/vpDetails");
         return this.http.get(this.url + "/vpDetails");
      }
      /*listId(id:number){
       return this.http.get<Compra>(this.url+"/compra/"+id);
     }*/
      insert(ventaPlato: Ventaplato){
       //por ser nueva instancia
       return this.http.post(this.url+"/ventaPlato", ventaPlato);
        }
       setList(listaNueva : Ventaplato[]){
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
