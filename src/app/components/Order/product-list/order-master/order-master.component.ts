import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Model/icategory';
import { ProductListComponent } from '../ProductList/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent  implements OnInit,AfterViewInit{
  CatList:ICategory[];
  selectedCatId:number=0;
  receivedOrderTotalPrice:number=0;
  // حل سئ
  // clientNameInputElem:ElementRef=new ElementRef();
//برضه مش احسن حاجه
// clientNameInputElem:ElementRef=new ElementRef();

  // clientNameInputElem?:ElementRef
  //برضه نفس اللي فوق يعتبر
  // clientNameInputElem:ElementRef|undefined=undefined;
  // clientNameInputElem:ElementRef|null=null;

  //non-null asseration operator==>كده باكدله انه مش بنل

  //***********best performance***********
  @ViewChild('clientInp') clientNameInputElem!:ElementRef;

  @ViewChild(ProductListComponent) prdListCompObj!:ProductListComponent;



  constructor(){
  this.CatList=[{id:1,name:'Laptop'},
    {id:2,name:'Phone'},
    {id:3,name:'Tablet'},
   
  ]
  
}
  ngAfterViewInit(): void {
    this.clientNameInputElem.nativeElement.value="Your name is here";
    this.clientNameInputElem.nativeElement.style.border="2px solid red";
    //دي طريقة باكسز بيها الفانكشنز كلها بالداتا بتاعتا
  //  console.log(this.prdListCompObj.PrList);
    // this.prdListCompObj.PrList

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onTotalPriceChanged(totalPrice:number){
    this.receivedOrderTotalPrice=totalPrice;
  }
}
 