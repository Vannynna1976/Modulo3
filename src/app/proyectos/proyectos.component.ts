import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../Servicios/basedatos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  misproyectos: any;

  constructor(private BasedatosService: BasedatosService) { }

  ngOnInit(): void {

    this.BasedatosService.getDatos().subscribe(datos => {
      this.misproyectos=datos.Proyectos;
  });

  }

}
