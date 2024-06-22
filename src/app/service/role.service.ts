import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Role } from '../model/role';
import { HttpClient } from '@angular/common/http';

const baseUrl=environment.baseRole

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private url = `${baseUrl}`; // alt+96
  private listaCambio = new Subject<Role[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    console.log(this.url + "/listar");
        return this.http.get(this.url + "/listar");
     }
     /*
     insert(role: Role){
      //por ser nueva instancia
      return this.http.post(this.url+"/usuario", usuario);
       }*/
      setList(listaNueva : Role[]){
        this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
      }
      getList(){
        return this.listaCambio.asObservable();
      }
      save(role: Role){
        return this.http.post(this.url+"/save", role);
      }
}
