import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceAllPageService {

  constructor(
    private router: Router
  ) { }

  reloadPage(){
    if(this.router.url !== JSON.parse(localStorage.getItem('routeOld'))){
      localStorage.setItem('routeOld',JSON.stringify(this.router.url));
      location.reload();
    }else if(this.router.url === JSON.parse(localStorage.getItem('routeOld')) ){
      let check = document.querySelector("#checkList").classList;
      check.remove('active');
      console.log(check)
      
    }
  }

}
