import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  @Input() comp: String;//Also abreviated to comp to avoid clashing with Angular's Component
  @Input() index: number; // part number based on it's position in the array

  partNumber = "00";
  isDamaged = 0;
  constructor() {}

  ngOnInit() {
    if((this.index + 1) < 10){
      this.partNumber = "0" + (this.index+1);
    }else{
      this.partNumber = String(this.index+1);
    }

    if(!isNaN(+this.comp)){
      this.comp = "OKAY";
    }else{
      if(this.comp == "Coating Damage and Lightning Strike"){
        this.isDamaged = 2;
      }else{
        this.isDamaged = 1
      }
    }

    console.log("Part: " + this.partNumber + " " + isNaN(+this.comp));
  }

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
