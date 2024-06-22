import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { Venta } from '../model/venta';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.base

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  private url = `${baseUrl}`; // alt+96
  private listaCambio = new Subject<Venta[]>();
 
   constructor(private http: HttpClient) { }
   list(): Observable<any>{
     console.log(this.url + "/ventas");
         return this.http.get(this.url + "/ventas");
      }
      listId(id:number){
        return this.http.get<Venta>(this.url+"/venta/"+id);
      }
      async obtnVenta(id: number): Promise<Venta> {
        try {
          const venta: Venta = await firstValueFrom(this.http.get<Venta>(`${this.url}/venta/${id}`));
          return venta;
        } catch (error) {
          console.error('Error fetching compra', error);
          throw error;
        }
      }
      insert(venta: Venta){
       //por ser nueva instancia
       return this.http.post(this.url+"/venta", venta);
        }
       setList(listaNueva : Venta[]){
         this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
       }
       getList(){
         return this.listaCambio.asObservable();
       }
       update(vent: Venta){
        return this.http.put(this.url + "/venta", vent);
      }
      delete(id:string){
        return this.http.delete(this.url + "/venta/" + id);
      }
      buscarXFecha(fecha:Date){
        console.log("FechaVenta:"+ `${this.url+"/ventasFecha"}/${fecha}`)
        return this.http.get<Venta[]>(`${this.url+"/ventasFecha"}/${fecha}`);
      }
      buscarXMonto(monto:number){
        console.log("Monto:"+ `${this.url+"/ventasMonto"}/${monto}`)
        return this.http.get<Venta[]>(`${this.url+"/ventasMonto"}/${monto}`);
      }
}
