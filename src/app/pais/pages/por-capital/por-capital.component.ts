import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResp } from '../../interfaces/paisResp.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  public termino:string='';
  private resultadoPaisesPorCapital:PaisResp[]=[];
  private _resultadoSugerenciasPorCapital:PaisResp[]=[];
  public nresultados:number= 0;
  public errorPorCapital:boolean=false;
  public placeHolder:string= 'Buscar por capital...';

  constructor(private serv:PaisService){}

  get paisesPorCapitalResp() {
    return this.resultadoPaisesPorCapital;
  }

  get sugerenciasPorCapitalResp() {
    return this._resultadoSugerenciasPorCapital;
  }

  buscarPorCapital(str:any){

    console.log(`desde buscar por capital ${ str }`);
    //ejecutar la llamada a la api
    this.serv.buscarCapital(str).subscribe(
        (resp)=>{
          this.resultadoPaisesPorCapital=resp;
          this.errorPorCapital=false;
        },(err)=>{
          this.resultadoPaisesPorCapital=[];
          this.errorPorCapital=true;
      }
    )
    //recibo el observable .get, lo suscribo y si hay registros evio la respuesta
    //al componente tabla que lo recibira a travez del @Input, si no hay retorno []
  }
  sugerencias(st:string){
    this.termino=st;
    this.serv.buscarCapital(st).subscribe({
      next:(resp)=>{
        this._resultadoSugerenciasPorCapital=resp.splice(0,3);
        this.nresultados=resp.length;
      },
      error:()=>{
        this._resultadoSugerenciasPorCapital=[];
        this.termino='';
        this.nresultados=0;
      }
    });
  }


}
