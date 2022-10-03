import { Component, OnInit } from '@angular/core';
//en cada ts importo el servicio
import { BasedatosService } from '../Servicios/basedatos.service';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit {
  // Se inicializar el array y no las variables

  mishabilidades: any;

  //en cada ts tengo que declarar private...
  constructor(private BasedatosService: BasedatosService) { }

  ngOnInit(): void {

    this.BasedatosService.getDatos().subscribe(datos => {
        this.mishabilidades=datos.habilidades;
    });

  }

}
