import { Component } from '@angular/core';
import { PaisResp } from '../../interfaces/paisResp.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{cursor:pointer}
  `
  ]
})
export class PorPaisComponent  {
  public termino:string='';
  public _error:boolean=false;
  private _resultados:PaisResp[]=[];
  public placeHolder:string= 'Buscar por pais...';
  public nresultados:number=0;

  private _resultadosSugerencia:PaisResp[]=[];
  
  constructor(private _pservice:PaisService) { }

  get paisesResp():PaisResp[]{
    return [...this._resultados];
  }
  get paisesSug(){
    return [...this._resultadosSugerencia];
  }

  buscar(q:string){
    this.termino=q;
    this._pservice.buscarPais(this.termino)
    .subscribe(resp=>{
      this._error = false;
      //this.paistabla.setResultados(resp);
      //console.log(this.paistabla.paisesResp);
      this._resultados=resp;
    },error=>{
      console.log('nada enecontrado');
      this._error = true;
      //this.paistabla.setResultados([]);
      this._resultados=[];
    });
  }

  sugerencias(st:string){
    this._error=false;
    this.termino=st;
    this._pservice.buscarPais(st).subscribe(
      {
        next:(respuesta)=>{
          this.nresultados=respuesta.length;
          this._resultadosSugerencia=respuesta.splice(0,3);
          
        },
        error:(err)=>{
          this.nresultados=0;
          this._resultadosSugerencia=[];
          this.termino='';
        }
      }
    )



  }
}
