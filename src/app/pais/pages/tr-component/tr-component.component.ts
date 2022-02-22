import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';
import { PaisResp } from '../../interfaces/paisResp.interface';

@Component({
  selector: 'app-tr-component',
  templateUrl: './tr-component.component.html',
})
export class TrComponentComponent {
  @ViewChild('elTR') trRef!:TemplateRef<ElementRef>;
  @Input() lp:PaisResp[]=[];
  constructor() { }


}
