import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { PicoplacaModel } from 'src/app/modelos/picoplaca.model';

@Component({
    selector: 'app-resultado',
    templateUrl: './resultado.component.html',
    styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

    horas = [7, 8, 16, 17, 18];
    dict = [
        { key: 0, value: [1, 2] },
        { key: 1, value: [3, 4] },
        { key: 2, value: [5, 6] },
        { key: 3, value: [7, 8] },
        { key: 4, value: [9, 0] }
    ];
    request: PicoplacaModel;
    prediction: string;
    constructor(private router: Router) {

    }
    ngOnInit() {
        if (localStorage.getItem('request')) {
            this.request = JSON.parse(localStorage.getItem('request'));
            this.predict();
        } else {
            this.router.navigate(['inicio']);
        }
    }
    onSubmit() {
        localStorage.removeItem('request');
    }
    checkTime() {
        const hora = this.request.hora.hora;
        const minutos = this.request.hora.minuto;
        console.log(minutos);
        if (this.horas.indexOf(hora) !== -1) {
            return false;
        } else if (hora === 9 || hora === 19) {
            if (minutos <= 30) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
    checkRestriction(day: number) {
        const r = this.dict[day].value;
        const n = this.request.numeroPlaca.toString().split('').pop();
        if (r.indexOf(parseInt(n, 10)) !== -1) {
             return true;
        } else {
            return false;
        }
    }
    check() {
        const d = new Date(this.request.fecha);
        const day = d.getDay();
        if (day === 5 || day === 6) {
            return true;
        } else {
            if (this.checkRestriction(day)) {
                if (this.checkTime()) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    }
    predict() {
        if (this.check()) {
            this.prediction = 'Si puede circular. El día y hora mostrados a continuación.';
        } else {
            this.prediction = 'No puede circular.  El día y hora mostrados a continuación.';
        }
    }
    formatMin(m: number) {
        if (m === null) {
            return '00';
        } else if (m < 10) {
            return '0' + m;
        } else {
            return m;
        }
    }
}
