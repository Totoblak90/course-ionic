import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CheckList } from '../../interfaces/checkList.interface';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  checkList: CheckList[] = [
    {
      color: 'primary',
      checked: true
    },
    {
      color: 'secondary',
      checked: false
    },
    {
      color: 'danger',
      checked: true
    },
    {
      color: 'success',
      checked: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  getData( item: CheckList) {
    console.log(item)
  }

  verData() {
    console.log(this.checkList);
    
  }
}
