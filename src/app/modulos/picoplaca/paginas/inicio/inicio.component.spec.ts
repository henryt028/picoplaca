import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio.component';
import { TimepickerModule, TimepickerConfig, TimepickerActions } from 'ngx-bootstrap/timepicker';
import { RouterTestingModule } from '@angular/router/testing';

describe('InicioComponent', () => {
    let component: InicioComponent;
    let fixture: ComponentFixture<InicioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                TimepickerModule,
                RouterTestingModule
            ],
            declarations: [InicioComponent],
            providers: [TimepickerConfig,
            TimepickerActions]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InicioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create Inicio', () => {
        expect(component).toBeTruthy();
    });

    it('disableButton should return boolean', () => {
        expect(component.disableButton()).toBeTruthy();
      });
});
