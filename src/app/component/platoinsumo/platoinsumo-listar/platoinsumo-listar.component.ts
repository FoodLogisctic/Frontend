import { Component, OnInit, ViewChild } from '@angular/core';
import { Platoinsumo } from '../../../model/platoinsumo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PlatoinsumoService } from '../../../service/platoinsumo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platoinsumo-listar',
  templateUrl: './platoinsumo-listar.component.html',
  styleUrl: './platoinsumo-listar.component.css'
})
export class PlatoinsumoListarComponent implements OnInit{
  lista: Platoinsumo[]=[]
  displayedColumns=['namePlato','nombre','cantidad_insumo']
  dataSource = new MatTableDataSource<Platoinsumo>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private platoInsumoService: PlatoinsumoService, public router: Router){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.platoInsumoService.list().subscribe(data => this.dataSource.data = data);
  //this.platoInsumoService.getList().subscribe(data => { this.dataSource.data=data;});
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
