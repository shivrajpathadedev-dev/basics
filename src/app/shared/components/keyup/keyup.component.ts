import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";


@Component({
    selector: 'app-keyup',
    templateUrl: './keyup.component.html',
    styleUrls: ['./keyup.component.scss']
})
export class Keyup implements OnInit {
    isDisabled: boolean = true;

    ngOnInit(): void {
        setTimeout(() => {
            this.isDisabled = false
        }, 1000);
    }

    OnProduct(eve: Event) {
        let val3 = (eve.target as HTMLInputElement).value
        console.log(val3)
    }

    OnUser(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    Onapp(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }
    Onvehicle(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    Onmotors(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

     Oncars(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

     OnBMW(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

     OnSwift(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

     OnToyota(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

     Onproducts(eve: Event) {
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
    }

    Onsearch(ele:HTMLInputElement){
         let val=ele.value
         console.log(`The searched product is ${val}`);
         ele.value=``
    }

    Onusers(ele:HTMLInputElement){
         let val=ele.value
         console.log(`The searched User is ${val}`);
         ele.value=``
    }

    Onproductss(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched products is ${val}`);
        ele.value=``
    }

     OnVehicle(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched Vehicle is ${val}`);
        ele.value=``
    }
    
     OnVehicles(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched Vehicles is ${val}`);
        ele.value=``
    }

     Oncarss(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched cars is ${val}`);
        ele.value=``
    }

    
      OnBMWs(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched BMWs is ${val}`);
        ele.value=``
    }
    

     OnSwifts(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched Swifts is ${val}`);
        ele.value=``
    }
 
      OnToyotas(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched Toyotas is ${val}`);
        ele.value=``
    }

      Onproductsss(ele:HTMLInputElement){
        let val=ele.value
        console.log(`The searched productsss is ${val}`);
        ele.value=``
    }


     @ViewChild('productName')
      pn!: ElementRef

      Onsearchs(){
      console.log(this.pn.nativeElement.value);
      }

      @ViewChild('productName')
      pns!: ElementRef

      Onmodels(){
      console.log(this.pns.nativeElement.value);
      }

      @ViewChild('productName')
      pns1!: ElementRef

      Onprofit(){
      console.log(this.pns1.nativeElement.value);
      }
      
      @ViewChild('productName')
      pns2!: ElementRef

      Onfood(){
      console.log(this.pns2.nativeElement.value);
      }
      
      @ViewChild('productName')
      pns3!: ElementRef

      Onanimal(){
      console.log(this.pns3.nativeElement.value);
      }
}