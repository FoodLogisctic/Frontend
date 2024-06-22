import { Component, OnInit, ViewChild } from '@angular/core';
import { Insumo } from '../../../model/insumo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InsumoService } from '../../../service/insumo.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-insumo-listar',
  templateUrl: './insumo-listar.component.html',
  styleUrl: './insumo-listar.component.css'
})
export class InsumoListarComponent  implements OnInit {
  lista: Insumo[]=[]
  displayedColumns=['id','nombre','cantidad','tipo', 'perecible', 'fechaVencimiento','accion01','accion02']
  dataSource = new MatTableDataSource<Insumo>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private insumoService: InsumoService, private router: Router,
    private dialog:MatDialog){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
  this.insumoService.list().subscribe(data => this.dataSource.data = data);
  this.insumoService.getList().subscribe(data => { this.dataSource.data=data;
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
    this.insumoService.delete(id).subscribe(()=>{
      this.insumoService.list().subscribe(data=>{
        this.insumoService.setList(data);
      })
    });
  }
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     }
     ordenarCantidad(){
      this.insumoService.ordenarCantidad().subscribe(data => {
           this.insumoService.setList(data);
       });
     }
     listar(){
      this.insumoService.list().subscribe(data => {
          this.insumoService.setList(data);
      });
    }

}
