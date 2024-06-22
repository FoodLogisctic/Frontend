import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-platoinsumo',
  templateUrl: './platoinsumo.component.html',
  styleUrl: './platoinsumo.component.css'
})
export class PlatoinsumoComponent implements OnInit{
  constructor(public route: ActivatedRoute,public router : Router){}
  ngOnInit(): void {
  }
}
