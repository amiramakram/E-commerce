import { Injectable } from '@angular/core';
import { IProduct } from '../Model/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
 private PrList:IProduct[];
  constructor() { 
    this.PrList = [
      {
        id: 1,
        name: 'device',
        price: 10000000000,
        quantity: 0,
        imgURL: 'https://picsum.photos/200/100',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'device2',
        price: 17000000000,
        quantity: 10,
        imgURL: 'https://picsum.photos/200/100',
        categoryID: 2,
      },
      {
        id: 3,
        name: 'device3',
        price: 13000000000,
        quantity: 9,
        imgURL: 'https://picsum.photos/200/100',
        categoryID: 3,
      },
      {
        id: 4,
        name: 'device3',
        price: 130,
        quantity: 9,
        imgURL: 'https://picsum.photos/200/100',
        categoryID: 3,
      },
      {
        id: 5,
        name: 'device3',
        price: 13000000000,
        quantity: 12,
        imgURL: 'https://picsum.photos/200/100',
        categoryID: 3,
      },
    ];
    
  }
  getAllProducts():IProduct[]{
return this.PrList;
  }
  getProductsByCatId(cID:number):IProduct[]{
    
        if (cID == 0) {
          return this.PrList;
        } else {
          return this.PrList.filter(
            (prd) => prd.categoryID == cID
          );
        }
      
  }
  getProductsById(pID:number):IProduct|null{
   let foundProduct= this.PrList.find(prd=>prd.id==pID); 
   return foundProduct?foundProduct:null;
  }
  //دي هتاثر في الاب كله
  addNewProduct(prd:IProduct){
this.PrList.push(prd);
  }
}
