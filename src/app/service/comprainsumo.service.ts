import { Injectable } from '@angular/core';
import { Comprainsumo } from '../model/comprainsumo';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const baseUrl = environment.base

@Injectable({
  providedIn: 'root'
})
export class ComprainsumoService {

  private url = `${baseUrl}`; // alt+96
 private listaCambio = new Subject<Comprainsumo[]>();

  constructor(private http: HttpClient) { }
  list(): Observable<any>{
    console.log(this.url + "/ciDetails");
        return this.http.get(this.url + "/ciDetails");
     }
     /*listId(id:number){
      return this.http.get<Compra>(this.url+"/compra/"+id);
    }*/
     insert(compraInsumo: Comprainsumo){
      //por ser nueva instancia
      return this.http.post(this.url+"/compraInsumo", compraInsumo);
       }
      setList(listaNueva : Comprainsumo[]){
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
