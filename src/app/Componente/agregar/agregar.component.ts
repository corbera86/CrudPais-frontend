import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Entidad/Pais';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  constructor(private router : Router, private service: ServicioService) { }

  ngOnInit(): void {
  }
  
  pais : Pais = new Pais();
  Guardar(){
    console.log("Guardar Pais-->"+JSON.stringify(this.pais));
    this.service.guardarP(this.pais).subscribe(data =>{
     alert("Se Guardo El Pais");
     this.router.navigate(["listar"])
    });
  }

}
