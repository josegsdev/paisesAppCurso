import { Component,  Input} from '@angular/core';
import { PaisResp } from '../../interfaces/paisResp.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent  {

 //private paisesLista:PaisResp[]=[];
 @Input() paisesLista:PaisResp[]=[];
  constructor() { }




 /* setResultados(r:PaisResp[]){
    console.log(r);
   this.paisesLista=r;
   console.log(this.paisesLista);
  }

  get paisesResp():PaisResp[]{
    return [...this.paisesLista];
  }*/


}
