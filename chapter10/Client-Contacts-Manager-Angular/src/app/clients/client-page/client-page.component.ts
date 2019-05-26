import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss'],
  providers: [ClientService]
})
export class ClientPageComponent implements OnInit {
  clientList: Client[];

  constructor(private clientService: ClientService, private router: Router) {}

  ngOnInit() {
    this.clientService.getClients().subscribe((res: Client[]) => {
      this.clientList = res;
    });
  }

  saveClient(clientDetails: Client) {
    this.clientService.save(clientDetails).subscribe((client: Client) => {
      this.clientList.push(client);
      this.router.navigateByUrl('/clients/search');
    });
  }
}
