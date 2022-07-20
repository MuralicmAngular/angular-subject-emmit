import { Component, Input, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'Comp2-app',
  template: `<div>Company Name: {{companyName}}</div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class Comp2Component implements OnInit  {
  @Input() name: string;
  constructor( private compService : CompanyService){}


  ngOnInit():void{
    this.compService.companyServName.subscribe((valu) =>{
      this.companyName = valu
    })
  }
  companyName:string;


}