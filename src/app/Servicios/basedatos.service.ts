

import { Injectable } from '@angular/core';
/*-- primero importamos el json al servicio como un Observable--*/
import { Observable } from 'rxjs';
/*--Esto es para hacer una peticion para generar un miniservidor--*/
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class BasedatosService {

/*--private http:HttpClient es para que funcione el import. Se llama Alias--*/  
  constructor(private http:HttpClient) { }

/*--Este es un metodo que devuelve los datos.
GET es dame, get... se le puede poner cualquier nombre
<any> es datos de cualquier tipo
Se pueden crear varios metodos dentro del mismo servicio--*/

  getDatos(): Observable<any> {
    return this.http.get('./assets/json/datos.json');
  }

}

    