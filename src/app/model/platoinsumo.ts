import { Insumo } from "./insumo"
import { Plato } from "./plato"
import { Platoinsumokey } from "./platoinsumokey"

export class Platoinsumo {
    id:Platoinsumokey
    insumoId:number=0
    cantidad_insumo:number=0
    plato:Plato=new Plato()
    insumo:Insumo=new Insumo()
    constructor(plato:Plato,insumo:Insumo,cantidad_insumo: number) {
        this.id = new Platoinsumokey(plato.id,insumo.id);
        this.cantidad_insumo = cantidad_insumo;
        this.plato=plato;
        this.insumo=insumo;
    }
}
