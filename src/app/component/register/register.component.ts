import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoRegisterComponent } from './dialogo-register/dialogo-register.component';
import { Role } from '../../model/role';
import { RoleService } from '../../service/role.service';
import { Credentials } from '../../model/credentials';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form:FormGroup=new FormGroup({})
  usuario:Usuario= new Usuario()
 lista:Role[]=[];
 public idRolSelec: number = 0;
 hide = true;
 clickEvent(event: MouseEvent) {
  this.hide = !this.hide;
  event.stopPropagation();
}
 constructor(private usuarioService: UsuarioService,public router: Router, private dialog:MatDialog, private rolService:RoleService){};
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
/*
 register(form: NgForm){
  if (this.idRol>0) {
    let role = new Role();
    role.id = this.idRol;
    console.log(role);
  this.usuarioService.save(this.user).subscribe((data) => {
    this.usuarioService.list().subscribe(data => {
      this.usuarioService.setList(data);
    })
  }
  );
}
  this.usuarioService.saveUserRol(this.user.id,this.idRol);
  this.openDialog();
}*/
register(){
  this.usuario.id= this.form.value['id']
    this.usuario.username=this.form.value['username']
    //this.usuario.email= this.form.value['email']
    this.usuario.password= this.form.value['password']
    
  if (this.idRolSelec>0) {
    let role = new Role();
    role.id = this.idRolSelec;
    console.log(role);
  this.usuarioService.save(this.usuario).subscribe((data) => {
    this.usuarioService.list().subscribe(data => {
      this.usuarioService.setList(data);
    })
  }
  );
}
  this.usuarioService.saveUserRol(this.usuario.id,this.idRolSelec);
  this.openDialog();
}
 openDialog(){this.dialog.open(DialogoRegisterComponent);}


}
