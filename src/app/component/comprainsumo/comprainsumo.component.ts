import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comprainsumo',
  templateUrl: './comprainsumo.component.html',
  styleUrl: './comprainsumo.component.css'
})
export class ComprainsumoComponent implements OnInit{
  constructor(public route: ActivatedRoute,public router : Router){}
  ngOnInit(): void {
  }

}
