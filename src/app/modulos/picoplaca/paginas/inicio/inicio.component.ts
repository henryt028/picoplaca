import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { PicoplacaModel, HoraModel } from 'src/app/modelos/picoplaca.model';
import { DatePipe } from '@angular/common';
import { getDate } from 'ngx-bootstrap/chronos/utils/date-getters';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
    predictorForm: FormGroup;
    submitted = false;
    request: PicoplacaModel;

    constructor(private formBuilder: FormBuilder, private router: Router) {

    }
    ngOnInit() {
        this.predictorForm = this.formBuilder.group({
            placa: [null, [Validators.pattern('^[0-9]{4}$'), Validators.required]],
            fecha: [''],
            hora: [null],
        });
    }
    setData() {
        this.request = new PicoplacaModel();
        this.request.numeroPlaca = this.predictorForm.get('placa').value;
        this.request.fecha = new DatePipe('en-us').
            transform(this.predictorForm.get('fecha').value, 'yyyy-MM-dd');
        const time = new Date(this.predictorForm.get('hora').value);
        this.request.hora = new HoraModel(time.getHours(), time.getMinutes());
    }
    onSubmit() {
        this.submitted = true;
        this.setData();
        localStorage.setItem('request', JSON.stringify(this.request));
        this.router.navigate(['resultado']);
    }
    get f() {
        return this.predictorForm.controls;
    }
    disableButton() {
        if (this.predictorForm.get('placa').value !== null &&
            this.predictorForm.get('fecha').value !== '' &&
            this.predictorForm.get('hora').value !== null) {
            return false;
        } else {
            return true;
        }
    }
}
