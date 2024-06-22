import { isFakeTouchstartFromScreenReader } from '@angular/cdk/a11y';
import { HttpClient, HttpFeatureKind } from '@angular/common/http';
import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';
import { withHttpTransferCacheOptions } from '@angular/platform-browser';
import { ActivatedRoute, Router, defaultUrlMatcher } from '@angular/router';
import { defaultFormat } from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(public route: ActivatedRoute,public router : Router,private http:HttpClient ){}
  ngOnInit(): void {
  }
}