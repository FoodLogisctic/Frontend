import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Ventaplato } from '../../../model/ventaplato';
import { Venta } from '../../../model/venta';
import { Plato } from '../../../model/plato';
import { VentaplatoService } from '../../../service/ventaplato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatoService } from '../../../service/plato.service';
import { VentaService } from '../../../service/venta.service';

@Component({
  selector: 'app-ventaplato-create-edit',
  templateUrl: './ventaplato-create-edit.component.html',
  styleUrl: './ventaplato-create-edit.component.css'
})
export class VentaplatoCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  ventaPlato:Ventaplato;
  mensaje: string= " "
  /*id:number=0;
  edicion: boolean = false;*/
  //a2:Compra=new Compra();
  listaPlatos: Plato[] = [];
  public idPlatoSeleccionado: number = 0;
  listaVentas: Venta[] = [];
  public idVentaSeleccionado: number = 0;
  constructor(private ventaPlatoService:VentaplatoService, private router:Router,private route:ActivatedRoute,
    private pS:PlatoService, private vS:VentaService
  ){

  }
  ngOnInit(): void {
    this.pS.list().subscribe(data=>{this.listaPlatos=data})
    this.vS.list().subscribe(data=>{this.listaVentas=data})
    this.form= new FormGroup(
      {
        //compraId: new FormControl(),
        //insumoId: new FormControl(),
        cantidad: new FormControl(),
        observaciones: new FormControl(),
        plato:new FormControl(),
        venta:new FormControl()
      }
    )
  }
  async aceptar(){
    //this.compraInsum.compraId= this.form.value['compra.id']
    //this.compraInsum.insumoId=this.form.value['insumo.id']
    //this.compraInsum.cantidad= this.form.value['cantidad']
    //this.compraInsum.precioUnit= this.form.value['precioUnit']
    //this.compraInsum.compra.id= this.form.value['compra.id']
    //this.compraInsum.insumo.id= this.form.value['insumo.id']
//valida si están ok
    if (this.idPlatoSeleccionado>0 && this.idVentaSeleccionado>0) {
      let a = new Plato();
      a.id = this.idPlatoSeleccionado;
      a=await this.pS.obtnPlato(a.id);
      console.log(this.pS.obtnPlato(a.id));
      //this.compraInsum.compraId=a.id;
      //this.compraInsum.compra=a;
      let b = new Venta();
      b.id = this.idVentaSeleccionado;
      b=await this.vS.obtnVenta(b.id);
      console.log(this.vS.obtnVenta(b.id));
      //this.compraInsum.insumoId=b.id;
      //this.compraInsum.insumo=b;
      console.log(this.ventaPlato);
      this.ventaPlato=new Ventaplato(a,b,this.form.value['cantidad'],this.form.value['observaciones']);
      this.ventaPlatoService.insert(this.ventaPlato).subscribe(() => {
      this.ventaPlatoService.list().subscribe(data => {
            this.ventaPlatoService.setList(data);
          })
        })

      this.router.navigate(['ventaPlato/listado']);
    }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
