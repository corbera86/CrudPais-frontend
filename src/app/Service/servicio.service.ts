import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../Entidad/Pais';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http : HttpClient) { }
  urlListar = 'http://localhost:9000/PaisWs/listar';
  urlGuardar = 'http://localhost:9000/PaisWs/guardar';
  urlBuscar = 'http://localhost:9000/PaisWs/buscar';
  urlEditar = 'http://localhost:9000/PaisWs/editar';
  urlEliminar = 'http://localhost:9000/PaisWs/eliminar';

  listarP(){
    return this.http.get<Pais[]>(this.urlListar);
  }
  guardarP(pais : Pais){
    return this.http.post<Pais>(this.urlGuardar,pais);
  }

  buscarP(pais : Pais){
    return this.http.post<Pais>(this.urlBuscar,pais);
  }

  editarP(pais : Pais){
    return this.http.post<Pais>(this.urlEditar, pais);
  }

  eliminarP(pais : Pais){
    return this.http.post<Pais>(this.urlEliminar,pais);
  }

}
