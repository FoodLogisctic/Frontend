import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ventaplato',
  templateUrl: './ventaplato.component.html',
  styleUrl: './ventaplato.component.css'
})
export class VentaplatoComponent implements OnInit{
  constructor(public route: ActivatedRoute,public router : Router){}
  ngOnInit(): void {
  }
}
