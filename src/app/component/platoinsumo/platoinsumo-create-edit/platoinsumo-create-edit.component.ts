import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Platoinsumo } from '../../../model/platoinsumo';
import { Plato } from '../../../model/plato';
import { Insumo } from '../../../model/insumo';
import { PlatoinsumoService } from '../../../service/platoinsumo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatoService } from '../../../service/plato.service';
import { InsumoService } from '../../../service/insumo.service';

@Component({
  selector: 'app-platoinsumo-create-edit',
  templateUrl: './platoinsumo-create-edit.component.html',
  styleUrl: './platoinsumo-create-edit.component.css'
})
export class PlatoinsumoCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  platoInsum:Platoinsumo;
  mensaje: string= " "
  /*id:number=0;
  edicion: boolean = false;*/
  //a2:Compra=new Compra();
  listaPlatos: Plato[] = [];
  public idPlatoSeleccionado: number = 0;
  listaInsumos: Insumo[] = [];
  public idInsumoSeleccionado: number = 0;
  constructor(private platoInsumService:PlatoinsumoService, private router:Router,private route:ActivatedRoute,
    private pS:PlatoService, private iS:InsumoService
  ){

  }
  ngOnInit(): void {
    this.pS.list().subscribe(data=>{this.listaPlatos=data})
    this.iS.list().subscribe(data=>{this.listaInsumos=data})
    this.form= new FormGroup(
      {
        //compraId: new FormControl(),
        //insumoId: new FormControl(),
        cantidad_insumo: new FormControl(),
        plato:new FormControl(),
        insumo:new FormControl()
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
    if (this.idPlatoSeleccionado>0 && this.idInsumoSeleccionado>0) {
      let a = new Plato();
      a.id = this.idPlatoSeleccionado;
      a=await this.pS.obtnPlato(a.id);
      console.log(this.pS.obtnPlato(a.id));
      //this.compraInsum.compraId=a.id;
      //this.compraInsum.compra=a;
      let b = new Insumo();
      b.id = this.idInsumoSeleccionado;
      b=await this.iS.obtnInsumo(b.id);
      console.log(this.iS.obtnInsumo(b.id));
      //this.compraInsum.insumoId=b.id;
      //this.compraInsum.insumo=b;
      console.log(this.platoInsum);
      this.platoInsum=new Platoinsumo(a,b,this.form.value['cantidad_insumo']);
      this.platoInsumService.insert(this.platoInsum).subscribe(() => {
      this.platoInsumService.list().subscribe(data => {
            this.platoInsumService.setList(data);
          })
        })

      this.router.navigate(['platoInsum/listado']);
    }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
