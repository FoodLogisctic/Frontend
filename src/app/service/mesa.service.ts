import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mesa } from '../model/mesa';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  private url = `${base_url}` //OJO
  private listaCambio = new Subject<Mesa[]>()


  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get(this.url+"/mesas");
  }
  listId(id:number){
    return this.http.get<Mesa>(this.url+"/mesa/"+id);
  }
  insert(mesa: Mesa) {
    return this.http.post(this.url+"/mesa", mesa);
  }
  setList(listaNueva: Mesa[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }
  update(mes: Mesa){
    return this.http.put(this.url + "/mesa", mes);
  }
  delete(id:string){
    return this.http.delete(this.url + "/mesa/" + id);
  }
}
