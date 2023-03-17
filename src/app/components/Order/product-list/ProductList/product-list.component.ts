import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Model/icategory';
import { IProduct } from 'src/app/Model/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit,OnChanges {
  // PrList: IProduct[];
  prdListOfCat: IProduct[] = [];
  @Input()sentCatId: number = 0;
  @Output()totalPriceChanged:EventEmitter<number>;
  OrderTotalPrice: number = 0;
  orderDate: Date;

  constructor(private staticPrdSer:StaticProductsService) {
    // this.PrList = [
    //   {
    //     id: 1,
    //     name: 'device',
    //     price: 10000000000,
    //     quantity: 0,
    //     imgURL: 'https://picsum.photos/200/100',
    //     categoryID: 1,
    //   },
    //   {
    //     id: 2,
    //     name: 'device2',
    //     price: 17000000000,
    //     quantity: 10,
    //     imgURL: 'https://picsum.photos/200/100',
    //     categoryID: 2,
    //   },
    //   {
    //     id: 3,
    //     name: 'device3',
    //     price: 13000000000,
    //     quantity: 9,
    //     imgURL: 'https://picsum.photos/200/100',
    //     categoryID: 3,
    //   },
    //   {
    //     id: 4,
    //     name: 'device3',
    //     price: 130,
    //     quantity: 9,
    //     imgURL: 'https://picsum.photos/200/100',
    //     categoryID: 3,
    //   },
    //   {
    //     id: 5,
    //     name: 'device3',
    //     price: 13000000000,
    //     quantity: 12,
    //     imgURL: 'https://picsum.photos/200/100',
    //     categoryID: 3,
    //   },
    // ];


    this.totalPriceChanged=new EventEmitter<number>;
    // ________________date
    this.orderDate = new Date();
    // this.prdListOfCat = this.PrList;
  }
  ngOnChanges(): void {
    // this.filterByCatId();
    this.prdListOfCat=this.staticPrdSer.getProductsByCatId(this.sentCatId);
  }

  ngOnInit(): void {
    this.prdListOfCat=this.staticPrdSer.getAllProducts();
  }

  buy(prdPrice: number, count: string) {

    this.OrderTotalPrice += +count * prdPrice;
    //Execute event
    this.totalPriceChanged.emit(this.OrderTotalPrice);
  }
  // filtration with best performance on run time
  // private filterByCatId() {
  //   if (this.sentCatId == 0) {
  //     this.prdListOfCat = this.PrList;
  //   } else {
  //     this.prdListOfCat = this.PrList.filter(
  //       (prd) => prd.categoryID == this.sentCatId
  //     );
  //   }
  // }
  // changeCat() {
  //   this.selectedCatId = 1;
  // }
}
