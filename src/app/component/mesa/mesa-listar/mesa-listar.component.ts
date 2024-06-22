import { Component, OnInit, ViewChild } from '@angular/core';
import { Mesa } from '../../../model/mesa';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MesaService } from '../../../service/mesa.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../../insumo/insumo-listar/dialogo/dialogo.component';

@Component({
  selector: 'app-mesa-listar',
  templateUrl: './mesa-listar.component.html',
  styleUrl: './mesa-listar.component.css'
})
export class MesaListarComponent implements OnInit{
  lista: Mesa[]=[]
  displayedColumns=['id','numeroMesa','capacidadMesa','accion01','accion02']
  dataSource = new MatTableDataSource<Mesa>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private mesaService: MesaService, private router: Router,
    private dialog:MatDialog){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.mesaService.list().subscribe(data => this.dataSource.data = data);
  this.mesaService.getLista().subscribe(data => { this.dataSource.data=data;
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
    this.mesaService.delete(id).subscribe(()=>{
      this.mesaService.list().subscribe(data=>{
        this.mesaService.setList(data);
      })
    });
  }
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     }

}
