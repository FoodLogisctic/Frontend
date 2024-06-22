import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { Plato } from '../model/plato';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.base

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  private url = `${baseUrl}`; // alt+96
  private listaCambio = new Subject<Plato[]>();
 
   constructor(private http: HttpClient) { }
   list(): Observable<any>{
     console.log(this.url + "/platos");
         return this.http.get(this.url + "/platos");
      }
      listId(id:number){
        return this.http.get<Plato>(this.url+"/plato/"+id);
      }
      async obtnPlato(id: number): Promise<Plato> {
        try {
          const plato: Plato = await firstValueFrom(this.http.get<Plato>(`${this.url}/plato/${id}`));
          return plato;
        } catch (error) {
          console.error('Error fetching compra', error);
          throw error;
        }
      }
      insert(plato: Plato){
       //por ser nueva instancia
       return this.http.post(this.url+"/plato", plato);
        }
       setList(listaNueva : Plato[]){
         this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
       }
       getList(){
         return this.listaCambio.asObservable();
       }
       update(plt: Plato){
        return this.http.put(this.url + "/plato", plt);
      }
      delete(id:string){
        return this.http.delete(this.url + "/plato/" + id);
      }
}
