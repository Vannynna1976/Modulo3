
import { Component, OnInit, } from '@angular/core';
/*-- inyectamos el servicio en el componente donde lo vamos a consumir--*/
import { BasedatosService } from '../Servicios/basedatos.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  /*--  nombre = 'Vanina' si le pongo esto lo lee en el html--*/
  /*-- para activar basedatosservice tenemos que ponerle una variable que lo consuma--*/

  /*-- inicializo la variable - tipo de datos cualquiera, siempre antes del constructor--*/
  nombre: string = "";
  apellido: string = "";
  Titulo: string = "";
  Info: string = "";
  fotoperfil: any = "";
  

  constructor(private BasedatosService: BasedatosService) { } /*-- inyecto el servicio--*/

  /*-- le dice al servicio que me de datos y le digo que me suscribo--*/
  ngOnInit(): void {
    this.BasedatosService.getDatos().subscribe(datos => {
      console.log(datos);
      this.nombre=datos.nombre;
      this.apellido=datos.apellido;
      this.Titulo=datos.Titulo;
      this.Info=datos.Info;
      this.fotoperfil=datos.fotoperfil;
    });

  }

}
