import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../Servicios/basedatos.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {

  mislaborales: any;

  constructor(private BasedatosService: BasedatosService) { }

  ngOnInit(): void {

    this.BasedatosService.getDatos().subscribe(datos => {
      this.mislaborales=datos.Laboral;
  });
  }

}
