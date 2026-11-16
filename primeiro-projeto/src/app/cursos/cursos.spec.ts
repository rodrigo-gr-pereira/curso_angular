import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosService } from './cursos-service';
import { Cursos } from './cursos';

describe('Cursos', () => {
  let component: Cursos;
  let fixture: ComponentFixture<Cursos>;
  let service: CursosService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cursos],
      providers: [CursosService],
    }).compileComponents();

    service = TestBed.inject(CursosService);
    fixture = TestBed.createComponent(Cursos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load courses from the service', () => {
    expect(component.cursos).toEqual(service.getCursos());
  });
});
