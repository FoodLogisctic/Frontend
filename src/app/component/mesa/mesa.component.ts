import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.css'
})
export class MesaComponent implements OnInit{
  constructor(public route: ActivatedRoute,public router : Router){}
  ngOnInit(): void {
  }
}
