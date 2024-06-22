import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../model/usuario';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsuarioService } from '../../../service/usuario.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrl: './usuario-listar.component.css'
})
export class UsuarioListarComponent implements OnInit{
  lista: Usuario[]=[]
  displayedColumns=['id','username','rol']
  dataSource = new MatTableDataSource<Usuario[]>()
  @ViewChild(MatPaginator) paginator:MatPaginator
  @ViewChild(MatSort) sort: MatSort

  constructor(private usuarioService: UsuarioService){
    console.log("CONSTRUCTOR LISTAR")
  }
  ngOnInit(): void {
    console.log("NGONINIT DE LISTAR")
  this.usuarioService.list().subscribe(data => this.dataSource.data = data);

  }
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     }

}
