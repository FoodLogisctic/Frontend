import { Component, OnInit, ViewChild } from '@angular/core';
import { Compra } from '../../../model/compra';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CompraService } from '../../../service/compra.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../../insumo/insumo-listar/dialogo/dialogo.component';

@Component({
  selector: 'app-compra-listar',
  templateUrl: './compra-listar.component.html',
  styleUrl: './compra-listar.component.css'
})
export class CompraListarComponent implements OnInit{
  lista: Compra[]=[]
  displayedColumns=['id','proveedor','fecha','monto','telefProveedor','accion01','accion02']
  dataSource = new MatTableDataSource<Compra>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private compraService: CompraService, public router: Router,
    private dialog:MatDialog){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.compraService.list().subscribe(data => this.dataSource.data = data);
  this.compraService.getList().subscribe(data => { this.dataSource.data=data;
  });
  }
  openDialog(id:string){
    const dialogRef = this.dialog.open(DialogoComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.delete(id)
            }else{
        console.log("FALSE");
      }
    });
  }
  delete(id:string){
    this.compraService.delete(id).subscribe(()=>{
      this.compraService.list().subscribe(data=>{
        this.compraService.setList(data);
      })
    });
  }
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     }

}
