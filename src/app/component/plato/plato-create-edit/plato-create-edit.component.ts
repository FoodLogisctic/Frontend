import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plato } from '../../../model/plato';
import { PlatoService } from '../../../service/plato.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-plato-create-edit',
  templateUrl: './plato-create-edit.component.html',
  styleUrl: './plato-create-edit.component.css'
})
export class PlatoCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  plato:Plato= new Plato()
  mensaje: string= " "
  id:number=0;
  edicion: boolean = false;
  constructor(private platoService:PlatoService, private router:Router,private route:ActivatedRoute){

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
        namePlato: new FormControl(),
        categoriaPlato: new FormControl(),
        precio: new FormControl()
      }
    )
  }
  init() {
    if (this.edicion) {
    this.platoService.listId(this.id).subscribe((data) => {
     this.form = new FormGroup({
     id: new FormControl(data.id),
     namePlato: new FormControl(data.namePlato),
        categoriaPlato: new FormControl(data.categoriaPlato),
        precio: new FormControl(data.precio)
     });
     });
    } //del if
    }
  aceptar(){
    this.plato.id= this.form.value['id']
    this.plato.namePlato=this.form.value['namePlato']
    this.plato.categoriaPlato= this.form.value['categoriaPlato']
    this.plato.precio= this.form.value['precio']

//valida si están ok
    if (this.form.valid) {
      if (this.edicion){
        console.log(this.plato);//se ve en la herramienta de desarrollador de Chrome
      this.platoService.update(this.plato).subscribe((data)=>{
        this.platoService.list().subscribe(data => {
          this.platoService.setList(data);//enviando la lista al suscriptor
        })
      });
    }else{
      console.log(this.plato);
      this.platoService.insert(this.plato).subscribe((data) => {
        this.platoService.list().subscribe(data => {
          this.platoService.setList(data);
        })
      }
      );
    }
    this.router.navigate(['platos/listado']);
  }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
