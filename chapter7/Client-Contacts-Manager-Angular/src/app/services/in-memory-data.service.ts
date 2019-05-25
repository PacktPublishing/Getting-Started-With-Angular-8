import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../clients/client';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      {
        id: 1,
        firstname: 'John',
        lastname: 'Doe',
        email: 'john.doe@testclient.com',
        telephoneNumber: '01231234',
        companyName: 'Test Company inc'
      },
      {
        id: 2,
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'jane.doe@example.com',
        telephoneNumber: '0777334455',
        companyName: 'Example inc'
      },
      {
        id: 3,
        firstname: 'Brad',
        lastname: 'Green',
        email: 'brad.green@google.com',
        telephoneNumber: '012312345',
        companyName: 'Google Inc'
      },
      {
        id: 4,
        firstname: 'Igor',
        lastname: 'Minar',
        email: 'igor.minar@google.com',
        telephoneNumber: '012312345',
        companyName: 'Google Inc'
      }
    ];
    const company =
      [{
        id: 1,
        companyName: 'Google Inc',
        address1: 'Googleplex',
        address2: 'Mountain View',
        town: 'San Fransisco',
        city: 'San Fransisco',
        postcode: 'SF123',
        country: 'US',
        contactEmail: 'info@google.com',
        staffCount: 4,
        industry: 'Tech'
      },
        {
          id: 2,
          companyName: 'Example Inc',
          address1: 'Example Office',
          address2: 'Example Street',
          town: 'Example Town',
          city: 'Example City',
          postcode: 'AA13BB',
          country: 'UK',
          contactEmail: 'info@example.com',
          staffCount: 3,
          industry: 'Tech'
        }
      ];
    return {clients, company};
  }
}
