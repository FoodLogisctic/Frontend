import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrl: './plato.component.css'
})
export class PlatoComponent implements OnInit{
  constructor(public route: ActivatedRoute,public router : Router){}
  ngOnInit(): void {
  }
}
