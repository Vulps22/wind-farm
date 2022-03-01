import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DataService {
/*Remember to toggle this back to production URL*/
  diagnosticURL = 'php/diagnosis.php'
 // diagnosticURL = 'http://localhost/diagnosis.php'

  //cannot call this components as that clashes with Angular's components. Abreviated to comps
  public comps: String[];

  public ticks = 0;

  constructor(private http: HttpClient) { 
    this.getFromServer().subscribe((data: String[]) => {
      this.comps = data
    })
  }


  private getFromServer(){
    return this.http.get(this.diagnosticURL)
  }

  public getComponents(): String[] {
    return this.comps;
  }
}
