import { formatCurrency, NgIf } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { LogueoComponent } from 'src/app/navbar/logueo/logueo.component';
import { AuthService } from 'src/app/Servicios/auth.service';


@Component({
  selector: 'app-modlogueo',
  templateUrl: './modlogueo.component.html',
  styleUrls: ['./modlogueo.component.css']
})
export class ModlogueoComponent implements OnInit {

  email = '';
  password = '';
  /*--login: any;--*/

  constructor(private authService: AuthService ) { }

  Login(){
    this.authService.login(this.email, this.password)
  }


  ngOnInit(): void {
  }

}

  /*--loginin() {
    if (this.email == "vanina" && this.password == "arg"){
      this.login = true
    } else {
      this.login = false
    }
  
  }--*/

/*--
function loginin() {
    if (inputEmail.value == "va" && inputPassword.value == "ar"){
      document.getElementById("boton1").style.display = "none";
      document.getElementById("boton2").style.display = "block";
      document.getElementById("inputEmail").value = "email@mail.com";
      document.getElementById("inputPassword").value = "";
      for(var i=1; i<13; i++){
        var laped = document.getElementById("lapized" + i)
         laped.style.display = "block";
      } 
      
    } else {
      alert("Datos incorrectos");
      document.getElementById("inputEmail").value = "email@mail.com";
      document.getElementById("inputPassword").value = "";
    }
    
  }
  --*/