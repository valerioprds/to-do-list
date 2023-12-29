import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerMock = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the root route on showPendingTasks', () => {
    component.showPendingTasks();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });

  it('should navigate to /deleted on showDeleted', () => {
    component.showDeleted();
    expect(router.navigate).toHaveBeenCalledWith(['/deleted']);
  });

  it('should navigate to /all on showAlltasks', () => {
    component.showAlltasks();
    expect(router.navigate).toHaveBeenCalledWith(['/all']);
  });

  it('should navigate to /completed on showCompletedTasks', () => {
    component.showCompletedTasks();
    expect(router.navigate).toHaveBeenCalledWith(['/completed']);
  });
});
