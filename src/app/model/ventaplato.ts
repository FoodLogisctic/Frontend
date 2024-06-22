import { Plato } from "./plato"
import { Venta } from "./venta"
import { Ventaplatokey } from "./ventaplatokey"

export class Ventaplato {
    id:Ventaplatokey
    cantidad:number=0
    observaciones:string=""
    plato:Plato=new Plato()
    venta:Venta=new Venta()
    constructor(plato:Plato,venta:Venta,cantidad: number,observaciones:string) {
        this.id = new Ventaplatokey(plato.id,venta.id);
        this.cantidad = cantidad;
        this.observaciones=observaciones;
        this.plato=plato;
        this.venta=venta;
    }
}
