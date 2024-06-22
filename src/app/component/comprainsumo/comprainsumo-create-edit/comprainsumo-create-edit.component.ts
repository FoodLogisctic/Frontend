import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comprainsumo } from '../../../model/comprainsumo';
import { ComprainsumoService } from '../../../service/comprainsumo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from '../../../model/compra';
import { Insumo } from '../../../model/insumo';
import { CompraService } from '../../../service/compra.service';
import { InsumoService } from '../../../service/insumo.service';

@Component({
  selector: 'app-comprainsumo-create-edit',
  templateUrl: './comprainsumo-create-edit.component.html',
  styleUrl: './comprainsumo-create-edit.component.css'
})
export class ComprainsumoCreateEditComponent implements OnInit{
  form: FormGroup = new FormGroup({})
  compraInsum:Comprainsumo;
  mensaje: string= " "
  /*id:number=0;
  edicion: boolean = false;*/
  //a2:Compra=new Compra();
  listaCompras: Compra[] = [];
  public idCompraSeleccionado: number = 0;
  listaInsumos: Insumo[] = [];
  public idInsumoSeleccionado: number = 0;
  constructor(private compraInsumService:ComprainsumoService, private router:Router,private route:ActivatedRoute,
    private cS:CompraService, private iS:InsumoService
  ){

  }
  ngOnInit(): void {
    this.cS.list().subscribe(data=>{this.listaCompras=data})
    this.iS.list().subscribe(data=>{this.listaInsumos=data})
    this.form= new FormGroup(
      {
        //compraId: new FormControl(),
        //insumoId: new FormControl(),
        cantidad: new FormControl(),
        precioUnit: new FormControl(),
        compra:new FormControl(),
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
    if (this.idCompraSeleccionado>0 && this.idInsumoSeleccionado>0) {
      let a = new Compra();
      a.id = this.idCompraSeleccionado;
      a=await this.cS.obtnCompra(a.id);
      console.log(this.cS.obtnCompra(a.id));
      //this.compraInsum.compraId=a.id;
      //this.compraInsum.compra=a;
      let b = new Insumo();
      b.id = this.idInsumoSeleccionado;
      b=await this.iS.obtnInsumo(b.id);
      console.log(this.iS.obtnInsumo(b.id));
      //this.compraInsum.insumoId=b.id;
      //this.compraInsum.insumo=b;
      console.log(this.compraInsum);
      this.compraInsum=new Comprainsumo(a,b,this.form.value['cantidad'],this.form.value['precioUnit']);
      this.compraInsumService.insert(this.compraInsum).subscribe(() => {
      this.compraInsumService.list().subscribe(data => {
            this.compraInsumService.setList(data);
          })
        })

      this.router.navigate(['compInsum/listado']);
    }
    else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}
