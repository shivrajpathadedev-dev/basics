import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})

export class PassengerComponent implements OnInit {
[x: string]: any;

  constructor() { }
  
  ngOnInit(): void {
   setTimeout(() => {
       this['isdisabled']=false
   }, 1000);
  }
  OnPasswords(eve:HTMLInputElement){
    let val=eve.value
    console.log(val)
  }
  
    Onemail(eve:Event){
      let val=(eve.target as HTMLInputElement).value
       console.log(val);
    }

    OnPassword(eve:Event){
      let val1=(eve.target as HTMLInputElement).value
      console.log(val1)
    }

    OnconformPassword(eve:Event){
      let val2=(eve.target as HTMLInputElement).value
      console.log(val2)
    }

    Onpassenger1(eve:Event){
      let val3=(eve.target as HTMLInputElement).value
      console.log(val3)
    }

    Onpassenger2(eve:Event){
      let val4=(eve.target as HTMLInputElement).value
      console.log(val4)
    }

    Onpassenger3(eve:Event){
      let val4=(eve.target as HTMLInputElement).value
      console.log(val4)
    }

     Onpassenger4(eve:Event){
      let val4=(eve.target as HTMLInputElement).value
      console.log(val4)
    }

     Onpassenger5(eve:Event){
      let val4=(eve.target as HTMLInputElement).value
      console.log(val4)
    }

     Onpassenger6(eve:Event){
      let val4=(eve.target as HTMLInputElement).value
      console.log(val4)
    }

    Onpassenger7(eve:Event){
      let val5=(eve.target as HTMLInputElement).value
      console.log(val5)
    }

     Onpassenger8(eve:Event){
      let val5=(eve.target as HTMLInputElement).value
      console.log(val5)
    }

    Onpassenger9(eve:Event){
      let val6=(eve.target as HTMLInputElement).value
      console.log(val6)
    }

    Onpassenger10(eve:Event){
      let val6=(eve.target as HTMLInputElement).value
      console.log(val6)
    }

    Onpassenger11(eve:Event){
      let val6=(eve.target as HTMLInputElement).value
      console.log(val6)
    }

    Onpassenger12(eve:Event){
      let val6=(eve.target as HTMLInputElement).value
      console.log(val6)
    }

    Onpassenger13(eve:Event){
      let val6=(eve.target as HTMLInputElement).value
      console.log(val6)
    }
  }


  


