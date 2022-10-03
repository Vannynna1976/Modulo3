import { Component, OnInit } from '@angular/core';
import { BasedatosService } from '../Servicios/basedatos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  misestudios: any;

  constructor(private BasedatosService: BasedatosService) { }

  ngOnInit(): void {

    this.BasedatosService.getDatos().subscribe(datos => {
      this.misestudios=datos.Educacion;
  });

  }

}
