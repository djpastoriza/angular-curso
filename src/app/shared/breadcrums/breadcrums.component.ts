import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  titulo:string;

  constructor( private router:Router, 
               private title: Title) {
    this.getDataRoute().subscribe( event => {
      this.titulo = event.titulo;
      this.title.setTitle(this.titulo);
    })

  }

  getDataRoute(){

    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento:ActivationEnd) => evento.snapshot.firstChild == null ),
      map( (evento:ActivationEnd) => evento.snapshot.data )

    )
  }

  ngOnInit() {
  }

}
