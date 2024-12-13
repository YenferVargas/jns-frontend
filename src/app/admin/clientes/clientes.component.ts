import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../core/services/cliente.service';
import { Cliente } from '../../core/models/cliente';

@Component({
  selector: 'app-clientes',
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit  {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  
  ngOnInit(): void {
    this.clienteService.findAll().subscribe(
      (data) => {
        this.clientes = data; // Asigna la respuesta a la variable clientes
        console.log('Clientes obtenidos exitosamente', data);
      },
      (error) => {
        console.error('Hubo un error al obtener los clientes', error);
      }
    );
  }
}
