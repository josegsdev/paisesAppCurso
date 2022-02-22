import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { PaisResp } from '../../interfaces/paisResp.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`button{margin-right:5px}`
  ]
})
export class PorRegionComponent implements OnInit {
  public regiones:string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];
  public regionActiva:string='';
  private resultados:PaisResp[]=[];
  public err:boolean=false;
  constructor(private serv:PaisService) { }

  ngOnInit(): void {
  }

  get muestraResultados():PaisResp[]{
    return [...this.resultados];
  }


  activarRegion(s:string):void{
    if(s === this.regionActiva){return;}
    this.regionActiva=s;
    this.serv.buscarRegion(this.regionActiva).subscribe({
      next: (respuesta)=>{
        this.err=false;
        this.resultados=respuesta;
      },error: ()=>{
        this.err=true;
        this.resultados=[];
      }/*,
      complete: ()=>{

      }*/
    })
  }

  cambiarClase(reg:string):string{
    return reg === this.regionActiva? 'btn btn-primary': 'btn btn-outline-primary' ;
  }
}
