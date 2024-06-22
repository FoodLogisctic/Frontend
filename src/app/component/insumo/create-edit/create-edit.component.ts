import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Insumo } from '../../../model/insumo';
import { InsumoService } from '../../../service/insumo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrl: './create-edit.component.css'
})
export class CreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  insumo:Insumo= new Insumo()
  mensaje: string= " "
  id:number=0;
  edicion: boolean = false;
  constructor(private insumoService:InsumoService, private router:Router,private route:ActivatedRoute){

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
        nombre: new FormControl(),
        cantidad: new FormControl(),
        tipo: new FormControl(),
        perecible: new FormControl(),
        fechaVencimiento: new FormControl()

      }
    )
  }
  init() {
    if (this.edicion) {
    this.insumoService.listId(this.id).subscribe((data) => {
     this.form = new FormGroup({
     id: new FormControl(data.id),
     nombre: new FormControl(data.nombre),
     cantidad: new FormControl(data.cantidad),
     tipo: new FormControl(data.tipo),
     perecible: new FormControl(data.perecible),
     fechaVencimiento: new FormControl(data.fechaVencimiento)
     });
     });
    } //del if
    }
  aceptar(){
    this.insumo.id= this.form.value['id']
    this.insumo.nombre=this.form.value['nombre']
    this.insumo.cantidad= this.form.value['cantidad']
    this.insumo.tipo= this.form.value['tipo']
    this.insumo.perecible= this.form.value['perecible']
    this.insumo.fechaVencimiento= this.form.value['fechaVencimiento']

//valida si están ok
    if (this.form.valid) {
      if (this.edicion){
        console.log(this.insumo);//se ve en la herramienta de desarrollador de Chrome
      this.insumoService.update(this.insumo).subscribe((data)=>{
        this.insumoService.list().subscribe(data => {
          this.insumoService.setList(data);//enviando la lista al suscriptor
        })
      });
    }else{
        console.log(this.insumo);
      this.insumoService.insert(this.insumo).subscribe((data) => {
        this.insumoService.list().subscribe(data => {
          this.insumoService.setList(data);
        })
      }
      );
    }
    this.router.navigate(['insumos/listado']);
  }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
      }
      
}
