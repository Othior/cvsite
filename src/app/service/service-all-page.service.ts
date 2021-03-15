import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceAllPageService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  setParams(value: string): void{
    // let params = new HttpParams().set('')
    this.route.params.subscribe(test => {
      console.log(test);
    })
  }

}
