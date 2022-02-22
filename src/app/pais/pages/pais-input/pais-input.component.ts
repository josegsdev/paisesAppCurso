import { Component, EventEmitter, Output,OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: []
})
export class PaisInputComponent implements OnInit {
    @Input() printPlaceHolder:string='';
    @Output() onEnter:EventEmitter<string>= new EventEmitter();
    @Output() onDeBounce:EventEmitter<string>=new EventEmitter();
    debouncer: Subject<string>= new Subject();
  
    public termino:string='';

   // constructor(){}

    ngOnInit(): void {
        this.debouncer
        .pipe(debounceTime(300))
        .subscribe(valor =>{
          this.onDeBounce.emit(this.termino);
          console.log("debouncer: "+this.termino);
        })
    }

    buscarInput(){
      this.onEnter.emit(this.termino);
    }

    teclaPresionada(ev:any){
      this.debouncer.next(this.termino);
    }
}
