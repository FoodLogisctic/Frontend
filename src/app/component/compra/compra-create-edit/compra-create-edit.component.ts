import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Compra } from '../../../model/compra';
import { CompraService } from '../../../service/compra.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-compra-create-edit',
  templateUrl: './compra-create-edit.component.html',
  styleUrl: './compra-create-edit.component.css'
})
export class CompraCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  compra:Compra= new Compra()
  mensaje: string= " "
  id:number=0;
  edicion: boolean = false;
  constructor(private compraService:CompraService, private router:Router,private route:ActivatedRoute){

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
        proveedor: new FormControl(),
        fecha: new FormControl(),
        monto: new FormControl(),
        telefProveedor: new FormControl()
      }
    )
  }
  init() {
    if (this.edicion) {
    this.compraService.listId(this.id).subscribe((data) => {
     this.form = new FormGroup({
     id: new FormControl(data.id),
     proveedor: new FormControl(data.proveedor),
        fecha: new FormControl(data.fecha),
        monto: new FormControl(data.monto),
        telefProveedor: new FormControl(data.telefProveedor)
     });
     });
    } //del if
    }
  aceptar(){
    this.compra.id= this.form.value['id']
    this.compra.proveedor=this.form.value['proveedor']
    this.compra.fecha= this.form.value['fecha']
    this.compra.monto= this.form.value['monto']
    this.compra.telefProveedor= this.form.value['telefProveedor']
//valida si están ok
    if (this.form.valid) {
      if (this.edicion){
        console.log(this.compra);//se ve en la herramienta de desarrollador de Chrome
      this.compraService.update(this.compra).subscribe((data)=>{
        this.compraService.list().subscribe(data => {
          this.compraService.setList(data);//enviando la lista al suscriptor
        })
      });
    }else{
      console.log(this.compra);
      this.compraService.insert(this.compra).subscribe((data) => {
        this.compraService.list().subscribe(data => {
          this.compraService.setList(data);
        })
      }
      );
    }
    this.router.navigate(['compras/listado']);
  }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
