import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';

@Component({
  selector: 'app-client-details-page',
  templateUrl: './client-details-page.component.html',
  styleUrls: ['./client-details-page.component.scss']
})
export class ClientDetailsPageComponent implements OnInit {
  selectedClient: Client;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const clientID = this.route.snapshot.paramMap.get('id');
    this.clientService.getClientByID(clientID).subscribe(res => {
      this.selectedClient = res;
    });
  }

  searchEventHandler(): void {
    this.backToSearchPage();
  }

  editEventHandler(client: Client): void {
    this.router.navigateByUrl('/clients/edit/' + client.id);
  }

  deleteClientHandler(client: Client): void {
    this.clientService.deleteClient(client.id).subscribe(() => {
      this.backToSearchPage();
    });
  }

  saveClientHandler(client: Client): void {
    this.clientService.updateClient(client).subscribe(() => {
      this.backToSearchPage();
    });
  }

  private backToSearchPage(): void {
    this.router.navigateByUrl('/clients/search');
  }
}
