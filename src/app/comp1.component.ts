import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'Comp1-app',
  template: `<div><input type="text" [(ngModel)]="companytext"/> <button (click)="addCompany()"> Add Name</button></div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Comp1Component implements OnInit {
  @Input() name: string;
  constructor( private compService : CompanyService){}

  ngOnInit():void{

  }
  companytext : string;

  addCompany(){
    this.compService.createCompanyName(this.companytext)
  }
}
