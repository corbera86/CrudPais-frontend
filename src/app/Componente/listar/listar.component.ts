import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/Entidad/Pais';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  pais : Pais[];
  constructor(private router : Router, private service:ServicioService) {}

  ngOnInit(): void {
    this.service.listarP().subscribe(data =>{
    this.pais = data;
    console.log("listar" + JSON.stringify(data))
    });
  }

  Editar(pais : Pais): void{
    localStorage.setItem("id", pais.id.toString());
    this.router.navigate(["editar"]);

  }

  Eliminar(pais : Pais): void{
    localStorage.setItem("id", pais.id.toString());
    this.router.navigate(["eliminar"]);

  }
}
