import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrl: './insumo.component.css'
})
export class InsumoComponent implements OnInit {
  constructor(public route: ActivatedRoute,public router : Router){}
  ngOnInit(): void {
  }

}
