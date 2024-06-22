import { Component, OnInit, ViewChild } from '@angular/core';
import { Comprainsumo } from '../../../model/comprainsumo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ComprainsumoService } from '../../../service/comprainsumo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprainsumo-listar',
  templateUrl: './comprainsumo-listar.component.html',
  styleUrl: './comprainsumo-listar.component.css'
})
export class ComprainsumoListarComponent implements OnInit{
  lista: Comprainsumo[]=[]
  displayedColumns=['proveedor','nombre','cantidad','precio']
  dataSource = new MatTableDataSource<Comprainsumo>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private compraInsumoService: ComprainsumoService, public router: Router){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.compraInsumoService.list().subscribe(data => this.dataSource.data = data);
  //this.compraInsumoService.getList().subscribe(data => { this.dataSource.data=data;});
  }
  /*openDialog(id:string){
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
  }*/
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     }
}
