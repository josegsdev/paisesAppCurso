import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { PaisResp } from '../../interfaces/paisResp.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais:PaisResp[]=[];

  constructor(private serv:PaisService,
              private rutaActivaObservable:ActivatedRoute
              ) { }

  ngOnInit(): void {

    this.rutaActivaObservable.params.pipe(
      switchMap(({ pid })=> {
        return this.serv.detallePais(pid)
      }),
      tap(console.log)
      ).subscribe(
      (paisData)=>{
        this.pais=paisData;
        console.log(paisData);
      }
    ) 


    /*this.rutaActivaObservable.params.subscribe(
      ({ pid })=>{
        console.log(pid);
        this.serv.detallePais(pid).subscribe(
          (resp)=>{
            console.log(resp);
          },
          (err)=>{
            console.log(err)
          });
    },(err)=>{
        console.log(err)
    })*/

  }

}
