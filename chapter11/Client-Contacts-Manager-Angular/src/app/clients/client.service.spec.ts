import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ClientService } from './client.service';
import { Client } from './client';


describe('ClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ClientService = TestBed.get(ClientService);
    expect(service).toBeTruthy();
  });

  it('should save a client', () => {
    const mockClient: Client = {
      id: '1',
      firstname: 'test',
      lastname: 'test',
      companyName: 'test',
      email: 'test@test.com',
      telephoneNumber: '0123412345'
    }

    const service: ClientService = TestBed.get(ClientService);
    service.save(mockClient);

    service.getClientByID('1').subscribe((result) => {
      expect(result).toBe(mockClient);
    })
    
  })

  it('should return all clients', () => {
    const mockClients: Client[] = [{
      id: '1',
      firstname: 'test',
      lastname: 'test',
      companyName: 'test',
      email: 'test@test.com',
      telephoneNumber: '0123412345'
    }, {
      id: '2',
      firstname: 'test2',
      lastname: 'test2',
      companyName: 'test2',
      email: 'test2@test.com',
      telephoneNumber: '0111222333'
    }];

    const service: ClientService = TestBed.get(ClientService);
    service.save(mockClients[0]);
    service.save(mockClients[1]);

    service.getClients().subscribe((result) => {
      expect(result).toBe(mockClients);  
    });
  })

  it('should delete a client', () => {
    const mockClients: Client[] = [{
      id: '1',
      firstname: 'test',
      lastname: 'test',
      companyName: 'test',
      email: 'test@test.com',
      telephoneNumber: '0123412345'
    }, {
      id: '2',
      firstname: 'test2',
      lastname: 'test2',
      companyName: 'test2',
      email: 'test2@test.com',
      telephoneNumber: '0111222333'
    }];

    const service: ClientService = TestBed.get(ClientService);
    service.save(mockClients[0]);
    service.save(mockClients[1]);

    service.deleteClient('1').subscribe((result) => {
      expect(result).not.toContain(mockClients[0]);  
    });
  })

  it('should update a client', () => {
    const mockClient: Client = {
      id: '1',
      firstname: 'test',
      lastname: 'test',
      companyName: 'test',
      email: 'test@test.com',
      telephoneNumber: '0123412345'
    };

    const service: ClientService = TestBed.get(ClientService);
    service.save(mockClient);
  

    const savedClient = service.getClientByID('1');
    savedClient.subscribe(result => {
      expect(result).toBe(mockClient);
    });

    const updatedClient = {
      id: '1',
      firstname: 'test',
      lastname: 'updated',
      companyName: 'updated',
      email: 'test@test.com',
      telephoneNumber: '0123412345'
    };

    service.updateClient(updatedClient).subscribe((result: Client) => {
      expect(result.lastname).toBe('updated');
      expect(result.companyName).toBe('updated');
      expect(result.lastname).not.toBe('test');
      expect(result.companyName).not.toBe('test');
    })
  })

  it('should search for a client', () => {
    const mockClients: Client[] = [{
      id: '1',
      firstname: 'test',
      lastname: 'test',
      companyName: 'test',
      email: 'test@test.com',
      telephoneNumber: '0123412345'
    }, {
      id: '2',
      firstname: 'test2',
      lastname: 'test2',
      companyName: 'test2',
      email: 'test2@test.com',
      telephoneNumber: '0111222333'
    }];

    const service: ClientService = TestBed.get(ClientService);
    service.save(mockClients[0]);
    service.save(mockClients[1]);
    
    service.search('test').subscribe((searchResult) => {
      expect(searchResult).toBe(mockClients[0]);
    })
  })
});
