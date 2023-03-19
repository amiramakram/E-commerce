import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
private adsList:string[];
  constructor() {
this.adsList=["big discounts..."
             ,"Sale up to 50%"
             ,"watch our friday offers"
            //  ,""
             ,"Special white friday"];
   }
   getScheduledAds(intervalSeconds:number):Observable<string>{
return new Observable<string>((observer)=>{
  // observer.next();
  // observer.error();these 3 functions in observable
  // observer.complete();
  let counter=0;
let adsTimer=setInterval(()=>{
  if(counter==this.adsList.length){
    observer.complete();
  }
  if(this.adsList[counter]==""){
    observer.error("empty ads error")
  }
observer.next(this.adsList[counter]);
counter++;

},intervalSeconds*1000)

});
   }
}
