import { TestBed } from '@angular/core/testing';

import { ViajeService } from './viaje.service';

describe('UsuarioService', () => {
  let service: ViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
