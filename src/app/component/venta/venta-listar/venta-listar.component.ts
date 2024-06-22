import { Component, OnInit, ViewChild } from '@angular/core';
import { Venta } from '../../../model/venta';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { VentaService } from '../../../service/venta.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../../insumo/insumo-listar/dialogo/dialogo.component';
import moment from 'moment';

@Component({
  selector: 'app-venta-listar',
  templateUrl: './venta-listar.component.html',
  styleUrl: './venta-listar.component.css'
})
export class VentaListarComponent implements OnInit{
  lista: Venta[] = [];
  dataSource: MatTableDataSource<Venta> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'fecha', 'monto', 'mesa','accion01','accion02']
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  selectedDate: Date;
  montoSelected:number;

  constructor(private vS: VentaService, private router: Router,
    private dialog:MatDialog) {
      //this.selectedDate=new Date();
  }
  ngOnInit(): void {
    this.vS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.vS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
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
    this.vS.delete(id).subscribe(()=>{
      this.vS.list().subscribe(data=>{
        this.vS.setList(data);
      })
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    }
    ventasFecha(date:Date) {
      if (this.selectedDate) {
        // Aquí puedes procesar la fecha como necesites
        console.log('Fecha seleccionada:', this.selectedDate);
        date=this.selectedDate;
        this.vS.buscarXFecha(date).subscribe(data => {
          this.vS.setList(data);
      });
      } else {
        console.log('No se ha seleccionado ninguna fecha');
      }
    }
    buscarMonto(monto:number){
      if (this.montoSelected) {
        // Aquí puedes procesar la fecha como necesites
        console.log('Monto seleccionado:', this.montoSelected);
        monto=this.montoSelected
        this.vS.buscarXMonto(monto).subscribe(data => {
          this.vS.setList(data);
      });
      } else {
        console.log('No se ha seleccionado ningun monto');
      }
     }
     listar(){
      this.vS.list().subscribe(data => {
          this.vS.setList(data);
      });
    }
}
