import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({ // if delete must to regis in app.module.ts -> provinde
  providedIn: 'root'
})
export class CheckCanCelFormGuard implements CanDeactivate<any> {
  
  constructor(private router : Router, private location : Location){}

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.mIsSubmitted) {
      return true;
    }
    // mIsSubmitted is status submit of StockCreateComponent, StockEditComponent
    // Fix wrong route history error
    const currentUrlTree = this.router.createUrlTree([], currentRoute);
    this.location.go(currentUrlTree.toString());
    return window.confirm('Are you sure?');
  }
  
}
