import { Injectable } from "@angular/core";

import { EventEmitter} from '@angular/core'

@Injectable({
  providedIn:'root'
})

export class CompanyService{

  companyServName = new EventEmitter<string>();


  createCompanyName(data:string){
    this.companyServName.emit(data)
  }

}