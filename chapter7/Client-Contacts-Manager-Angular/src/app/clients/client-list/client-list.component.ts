import { Component, Input } from '@angular/core';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent {
  @Input()
  clients: any;

  constructor(private router: Router) {}

  viewClientDetails(client: Client) {
    this.router.navigateByUrl('/clients/details/' + client.id);
  }
}
