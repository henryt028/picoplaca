import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultadoComponent } from './resultado.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PicoplacaModel, HoraModel } from 'src/app/modelos/picoplaca.model';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule, TimepickerConfig, TimepickerActions } from 'ngx-bootstrap/timepicker';
import { APP_BASE_HREF } from '@angular/common';

describe('InicioComponent', () => {
    const routes: Routes = [
        {
            path: 'inicio',
            component: InicioComponent
        },
        {
            path: '',
            component: InicioComponent
        }
    ];
    let component: ResultadoComponent;
    let fixture: ComponentFixture<ResultadoComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                RouterModule.forRoot(routes),
                ReactiveFormsModule,
                TimepickerModule,
            ],
            declarations: [ResultadoComponent,
            InicioComponent],
            providers: [
                TimepickerActions,
                TimepickerConfig,
                {provide: APP_BASE_HREF, useValue: '/'}
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultadoComponent);
        component = fixture.componentInstance;
        component.request = new PicoplacaModel();
        component.request.hora = new HoraModel(0, 0);
        fixture.detectChanges();
    });

    it('should create Resultado', () => {
        expect(component).toBeTruthy();
    });

    it('should check hour', () => {
        expect(component.checkTime()).toBeTruthy();
    });

    it('should check day restriction', () => {
        expect(component.checkRestriction).toBeTruthy();
    });

    it('should check day pico placa restriction', () => {
        expect(component.check).toBeTruthy();
    });

    it('should return minutes value', () => {
        expect(component.formatMin).toBeDefined();
    });

});
