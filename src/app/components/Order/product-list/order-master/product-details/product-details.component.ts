import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ReceivedPrdID:number=0;
  prd:IProduct|null=null;
  prdIDArray:number[]=[];
constructor(private activatedRoute:ActivatedRoute,private prdService:StaticProductsService,private location:Location,
  private router:Router){}
  ngOnInit(): void {
  //  this.ReceivedPrdID=Number(this.activatedRoute.snapshot.paramMap.get('pid'));

  //  this.prd=this.prdService.getProductsById(this.ReceivedPrdID);
   this.prdIDArray=this.prdService.getPrdsIds();

this.activatedRoute.paramMap.subscribe((paramMap)=>{this.ReceivedPrdID=Number(paramMap.get('pid'))
this.prd=this.prdService.getProductsById(this.ReceivedPrdID);
});
   

  }
  goBack(){
this.location.back();
  }
  previousPrd(){
let currentIndex=this.prdIDArray.findIndex((elem)=>elem==this.ReceivedPrdID);
// console.log(currentIndex);
let prevPrdId;
if(currentIndex>0){
  prevPrdId= this.prdIDArray[currentIndex-1];
this.router.navigate(['/Products',prevPrdId]);}
  }
  NextPrd(){
    let currentIndex=this.prdIDArray.findIndex((elem)=>elem==this.ReceivedPrdID);
    // console.log(currentIndex);
    let nextIndex;
    if(currentIndex<this.prdIDArray.length){
      nextIndex= this.prdIDArray[currentIndex+1];
    this.router.navigate(['/Products',nextIndex]);}
  }
} 
  