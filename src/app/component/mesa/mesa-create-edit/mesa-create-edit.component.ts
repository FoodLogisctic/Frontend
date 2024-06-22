import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Mesa } from '../../../model/mesa';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MesaService } from '../../../service/mesa.service';

@Component({
  selector: 'app-mesa-create-edit',
  templateUrl: './mesa-create-edit.component.html',
  styleUrl: './mesa-create-edit.component.css'
})
export class MesaCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  mesa:Mesa= new Mesa()
  mensaje: string= " "
  id:number=0;
  edicion: boolean = false;
  constructor(private mesaService:MesaService, private router:Router,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>
      {
        this.id = data['id']; //capturando el id del listado
        this.edicion = data['id'] != null;//true, false
        this.init();
       });
    this.form= new FormGroup(
      {
        id: new FormControl(),
        numeroMesa: new FormControl(),
        capacidadMesa: new FormControl()
      }
    )
  }
  init() {
    if (this.edicion) {
    this.mesaService.listId(this.id).subscribe((data) => {
     this.form = new FormGroup({
     id: new FormControl(data.id),
     numeroMesa: new FormControl(data.numeroMesa),
        capacidadMesa: new FormControl(data.capacidadMesa)
     });
     });
    } //del if
    }
  aceptar(){
    this.mesa.id= this.form.value['id']
    this.mesa.numeroMesa=this.form.value['numeroMesa']
    this.mesa.capacidadMesa= this.form.value['capacidadMesa']

//valida si están ok
    if (this.form.valid) {
      if (this.edicion){
        console.log(this.mesa);//se ve en la herramienta de desarrollador de Chrome
      this.mesaService.update(this.mesa).subscribe((data)=>{
        this.mesaService.list().subscribe(data => {
          this.mesaService.setList(data);//enviando la lista al suscriptor
        })
      });
    }else{
      console.log(this.mesa);
      this.mesaService.insert(this.mesa).subscribe((data) => {
        this.mesaService.list().subscribe(data => {
          this.mesaService.setList(data);
        })
      }
      );
      this.router.navigate(['mesas/listado']);
    }
  }else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
