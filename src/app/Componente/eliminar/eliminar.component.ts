import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Entidad/Pais';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  constructor(private router : Router, private service: ServicioService) { }

  pais : Pais = new Pais();

  ngOnInit(): void {
   this.Buscar();
  }
  Buscar(){
    let id= localStorage.getItem("id");
    this.pais.id =+ Number(id);

    this.service.buscarP(this.pais).subscribe(data=>{
      this.pais = data;
      console.log("Se Localizo El Objeto --> Servidor" +JSON.stringify(data));
    });
  }

 Eliminar(){
  this.service.eliminarP(this.pais).subscribe(data=>{
   alert("Se Elimino El Pais");
   this.router.navigate(["listar"]);
  });
 }


}
