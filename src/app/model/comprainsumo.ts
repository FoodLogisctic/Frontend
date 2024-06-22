import { Compra } from "./compra"
import { Comprainsumokey } from "./comprainsumokey"
import { Insumo } from "./insumo"

export class Comprainsumo {
    id:Comprainsumokey
    cantidad:number=0
    precioUnit:number=0.0
    compra:Compra=new Compra()
    insumo:Insumo=new Insumo()
    constructor(compra:Compra,insumo:Insumo,cantidad: number,precioUnit:number) {
        this.id = new Comprainsumokey(compra.id,insumo.id);
        this.cantidad = cantidad;
        this.precioUnit=precioUnit;
        this.compra=compra;
        this.insumo=insumo;
    }
}
