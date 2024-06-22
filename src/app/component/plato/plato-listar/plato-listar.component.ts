import { Component, OnInit, ViewChild } from '@angular/core';
import { Plato } from '../../../model/plato';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PlatoService } from '../../../service/plato.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogoComponent } from '../../insumo/insumo-listar/dialogo/dialogo.component';

@Component({
  selector: 'app-plato-listar',
  templateUrl: './plato-listar.component.html',
  styleUrl: './plato-listar.component.css'
})
export class PlatoListarComponent implements OnInit{
  lista: Plato[]=[]
  displayedColumns=['id','namePlato','categoriaPlato','precio','accion01','accion02']
  dataSource = new MatTableDataSource<Plato>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private platoService: PlatoService,private dialog:MatDialog,private router: Router){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.platoService.list().subscribe(data => this.dataSource.data = data);
  this.platoService.getList().subscribe(data => { this.dataSource.data=data;
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
    this.platoService.delete(id).subscribe(()=>{
      this.platoService.list().subscribe(data=>{
        this.platoService.setList(data);
      })
    });
  }
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     }

}
