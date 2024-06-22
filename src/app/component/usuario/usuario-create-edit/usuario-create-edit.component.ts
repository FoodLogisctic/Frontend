import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../../model/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { Router } from '@angular/router';
import { Role } from '../../../model/role';
import { RoleService } from '../../../service/role.service';

@Component({
  selector: 'app-usuario-create-edit',
  templateUrl: './usuario-create-edit.component.html',
  styleUrl: './usuario-create-edit.component.css'
})
export class UsuarioCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  usuario:Usuario= new Usuario()
  mensaje: string= " "
  hide = true;
  lista:Role[]=[]
  public idRolSelec: number = 0;

  clickEvent(event: MouseEvent) {
    this.hide = !this.hide;
    event.stopPropagation();
  }
  constructor(private usuarioService:UsuarioService, private router:Router,private rolService:RoleService){

  }
  ngOnInit(): void {
    this.rolService.list().subscribe(data=>{this.lista=data});
    this.form= new FormGroup(
      {
        id: new FormControl(),
        username: new FormControl(),
        //rolUsuario: new FormControl(),
        //email: new FormControl('',[Validators.email]),
        password: new FormControl(),
        role:new FormControl()
      }
    )
  }
  aceptar(){
    this.usuario.id= this.form.value['id']
    this.usuario.username=this.form.value['username']
    //this.usuario.email= this.form.value['email']
    this.usuario.password= this.form.value['password']


//valida si están ok
    if (this.form.valid) {
      if (this.idRolSelec>0) {
        let rol = new Role();
        rol.id = this.idRolSelec;
        console.log(rol);
        //this.venta.mesa=mes;
        //console.log(this.venta);
      console.log(this.usuario);
      this.usuarioService.save(this.usuario).subscribe((data) => {
        this.usuarioService.list().subscribe(data => {
          this.usuarioService.setList(data);
        })
      }
      );
      this.usuarioService.saveUserRol(this.usuario.id,rol.id);
    }
      this.router.navigate(['usuarios/listado']);
    }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
