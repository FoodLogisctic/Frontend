import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Venta } from '../../../model/venta';
import { VentaService } from '../../../service/venta.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Mesa } from '../../../model/mesa';
import { MesaService } from '../../../service/mesa.service';

@Component({
  selector: 'app-venta-create-edit',
  templateUrl: './venta-create-edit.component.html',
  styleUrl: './venta-create-edit.component.css'
})
export class VentaCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  venta:Venta= new Venta()
  mensaje: string= " "
  lista:Mesa[]=[];
  id:number=0;
  edicion: boolean = false;
  public idMesaSeleccionada: number = 0;

  constructor(private ventaService:VentaService, private router:Router, private mesaServ:MesaService,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>
      {
        this.id = data['id']; //capturando el id del listado
        this.edicion = data['id'] != null;//true, false
        this.init();
       });
    this.mesaServ.list().subscribe(data=>{this.lista=data});
    this.form= new FormGroup(
      {
        id: new FormControl(),
        fecha: new FormControl(),
        monto: new FormControl(),
        mesa: new FormControl()
      }
    )
  }
  init() {
    if (this.edicion) {
    this.ventaService.listId(this.id).subscribe((data) => {
     this.form = new FormGroup({
     id: new FormControl(data.id),
     fecha: new FormControl(data.fecha),
     monto: new FormControl(data.monto),
     //mesa: new FormControl(data.mesa)
     });
     });
    } //del if
    }
  aceptar():void{
    this.venta.id= this.form.value['id']
    this.venta.fecha=this.form.value['fecha']
    this.venta.monto= this.form.value['monto']
    //this.venta.mesa.numeroMesa=this.form.value['mesa.numeroMesa']

    if (this.form.valid) {
      if (this.edicion){
          console.log(this.venta);//se ve en la herramienta de desarrollador de Chrome
          this.ventaService.update(this.venta).subscribe((data)=>{
            this.ventaService.list().subscribe(data => {
              this.ventaService.setList(data);//enviando la lista al suscriptor
              })
            });
        }else{
            if (this.idMesaSeleccionada>0) {
              let mes = new Mesa();
              mes.id = this.idMesaSeleccionada;
              console.log(mes);
              this.venta.mesa=mes;
              console.log(this.venta);
              this.ventaService.insert(this.venta).subscribe((data) => {
                this.ventaService.list().subscribe(data => {
                  this.ventaService.setList(data);
                })
              });
          }
        }
        this.router.navigate(['ventas/listado']);
        }else {
          this.mensaje = "Agregue campos omitidos";
      }
  }
}