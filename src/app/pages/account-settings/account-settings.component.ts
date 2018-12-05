import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string , link:any){
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck( link:any ){
    let selectores:any = document.getElementsByClassName('selector');

    for(let ref of selectores){ // for de todos los elementos con class selector
      ref.classList.remove('working'); // remuevo class
    }
    link.classList.add('working'); // agregp class
  }
  
  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores){ // for de todos los elementos con class selector
        if(this._ajustes.ajustes.tema == ref.getAttribute('data-theme')){ // tomo el attributo data-theme del elemento
          ref.classList.add('working');
          break;
        }
    }
  }

}
