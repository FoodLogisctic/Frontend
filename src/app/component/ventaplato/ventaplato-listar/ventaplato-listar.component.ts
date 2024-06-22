import { Component, OnInit, ViewChild } from '@angular/core';
import { Ventaplato } from '../../../model/ventaplato';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VentaplatoService } from '../../../service/ventaplato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventaplato-listar',
  templateUrl: './ventaplato-listar.component.html',
  styleUrl: './ventaplato-listar.component.css'
})
export class VentaplatoListarComponent implements OnInit{
  lista: Ventaplato[]=[]
  displayedColumns=['namePlato','fecha','monto','cantidad','observaciones']
  dataSource = new MatTableDataSource<Ventaplato>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private ventaPlatoService: VentaplatoService, public router: Router){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.ventaPlatoService.list().subscribe(data => this.dataSource.data = data);
  //this.ventaPlatoService.getList().subscribe(data => { this.dataSource.data=data;});
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
