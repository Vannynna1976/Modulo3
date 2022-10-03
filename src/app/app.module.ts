import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; /**--Los servicios no se importan solos--*/
import { FormsModule } from '@angular/forms';

/*-- aca importo los servicios-- */
import { BasedatosService } from './Servicios/basedatos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FacebookComponent } from './navbar/facebook/facebook.component';
import { LinkedinComponent } from './navbar/linkedin/linkedin.component';
import { InstagramComponent } from './navbar/instagram/instagram.component';
import { LogueoComponent } from './navbar/logueo/logueo.component';
import { NologueoComponent } from './navbar/nologueo/nologueo.component';
import { ModlogueoComponent } from './modales/modlogueo/modlogueo.component';
import { BannerComponent } from './banner/banner.component';
import { LaboralComponent } from './laboral/laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardsoftComponent } from './hardsoft/hardsoft.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { FotoperfilComponent } from './modales/fotoperfil/fotoperfil.component';
import { NomusuarioComponent } from './modales/nomusuario/nomusuario.component';
import { TituloComponent } from './modales/titulo/titulo.component';
import { InfoComponent } from './modales/info/info.component';
import { ModlaboralComponent } from './modales/modlaboral/modlaboral.component';
import { ModestudioComponent } from './modales/modestudio/modestudio.component';
import { ModhardsoftComponent } from './modales/modhardsoft/modhardsoft.component';
import { ModproyectosComponent } from './modales/modproyectos/modproyectos.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FacebookComponent,
    LinkedinComponent,
    InstagramComponent,
    LogueoComponent,
    NologueoComponent,
    ModlogueoComponent,
    BannerComponent,
    LaboralComponent,
    EducacionComponent,
    HardsoftComponent,
    ProyectosComponent,
    FooterComponent,
    FotoperfilComponent,
    NomusuarioComponent,
    TituloComponent,
    InfoComponent,
    ModlaboralComponent,
    ModestudioComponent,
    ModhardsoftComponent,
    ModproyectosComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [BasedatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
