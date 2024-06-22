import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

const baseUrl = environment.base
const baseregUrl=environment.baseRegister

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = `${baseUrl}`; // alt+96
  private urlRegist=`${baseregUrl}`;
  private listaCambio = new Subject<Usuario[]>();

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    console.log(this.urlRegist + "/list");
        return this.http.get(this.urlRegist + "/list");
     }
     insert(usuario: Usuario){
      //por ser nueva instancia
      return this.http.post(this.url+"/usuario", usuario);
       }
      setList(listaNueva : Usuario[]){
        this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
      }
      getList(){
        return this.listaCambio.asObservable();
      }
      save(user: Usuario){
        return this.http.post(this.urlRegist+"/save", user);
      }
      saveUserRol(user_id:number,rol_id:number){
        const url2=`${this.urlRegist+"/save"}/${user_id}/${rol_id}`;
        return this.http.post(url2,{},{responseType:'json'});
      }
}
