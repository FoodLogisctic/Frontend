import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Insumo } from '../model/insumo';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const baseUrl = environment.base
@Injectable({
  providedIn: 'root'
})
export class InsumoService {
  private url = `${baseUrl}`; // alt+96
 private listaCambio = new Subject<Insumo[]>();

  constructor(private http: HttpClient) { }
  list(): Observable<any>{
    console.log(this.url + "/insumos");
        return this.http.get(this.url + "/insumos");
     }
     listId(id:number){
      return this.http.get<Insumo>(this.url+"/insumo/"+id);
    }
    async obtnInsumo(id: number): Promise<Insumo> {
      try {
        const insumo: Insumo = await firstValueFrom(this.http.get<Insumo>(`${this.url}/insumo/${id}`));
        return insumo;
      } catch (error) {
        console.error('Error fetching compra', error);
        throw error;
      }
    }
     insert(insumo: Insumo){
      //por ser nueva instancia
      return this.http.post(this.url+"/insumo", insumo);
       }
      setList(listaNueva : Insumo[]){
        this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
      }
      getList(){
        return this.listaCambio.asObservable();
      }
      update(ins: Insumo){
        return this.http.put(this.url + "/insumo", ins);
      }
      delete(id:string){
        return this.http.delete(this.url + "/insumo/" + id);
      }
      ordenarCantidad(){
        return this.http.get<Insumo[]>(`${this.url+"/insumosCantidad"}`);
      }
}
