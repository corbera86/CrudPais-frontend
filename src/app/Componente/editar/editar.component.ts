import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Entidad/Pais';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

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
    });
  }

 Editar(){
  this.service.editarP(this.pais).subscribe(data=>{
   alert("Se Edito El Pais");
   this.router.navigate(["listar"]);
  });
 }

}
