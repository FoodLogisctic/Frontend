import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { Compra } from '../model/compra';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.base

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private url = `${baseUrl}`; // alt+96
 private listaCambio = new Subject<Compra[]>();

  constructor(private http: HttpClient) { }
  list(): Observable<any>{
    console.log(this.url + "/compras");
        return this.http.get(this.url + "/compras");
     }
     listId(id:number){
      return this.http.get<Compra>(this.url+"/compra/"+id);
    }
    async obtnCompra(id: number): Promise<Compra> {
      try {
        const compra: Compra = await firstValueFrom(this.http.get<Compra>(`${this.url}/compra/${id}`));
        return compra;
      } catch (error) {
        console.error('Error fetching compra', error);
        throw error;
      }
    }
     insert(compra: Compra){
      //por ser nueva instancia
      return this.http.post(this.url+"/compra", compra);
       }
      setList(listaNueva : Compra[]){
        this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
      }
      getList(){
        return this.listaCambio.asObservable();
      }
      update(cmp: Compra){
        return this.http.put(this.url + "/compra", cmp);
      }
      delete(id:string){
        return this.http.delete(this.url + "/compra/" + id);
      }
}
