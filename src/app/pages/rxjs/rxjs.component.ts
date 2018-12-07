import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
import { SubjectSubscriber } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit,OnDestroy {

  subscription:Subscription;

  constructor() { 

      this.subscription = this.regresaObservable().pipe(
        retry(2)
      ).subscribe( 
        numero =>  console.log('Subs', numero), // funcion cuando llega info del observable
        error => console.error('Error en el obs',error), // funcion cuando hay error
        () => console.log( 'el observador termino')  // funcion cuando termina el observable
      )
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  regresaObservable(): Observable<any>{

    return new Observable( observer => {
      let contador = 1;
      let intervalo = setInterval( () => {
        contador += 1;

        let salida ={
          valor:contador
        }

        observer.next(salida); // se envia el dato del contador

      }, 1000);

    }).pipe(
      map( (resp: any) => resp.valor),
      filter( (valor,index) => {
        if((valor % 2) == 0){
          return true
        }else{
          return false
        }
      })
    );
  }

}
