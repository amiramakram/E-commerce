import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/ViewModel/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  storeInfo:Store;//اي فاريابل بعرفة لازم اديلة قيمة فهشتعل عليه الكونستركتر 
  isImgShown:boolean=true;
 
constructor(){
this.storeInfo=new Store('ITI Store','https://picsum.photos/400/200',['Cairo','Qena','Assuit','Tanta']);
}
ngOnInit(): void {
  
}
toggleIMG(){
  this.isImgShown=!this.isImgShown;
}
}
