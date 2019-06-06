import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
    predictorForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private router: Router) {

    }
    ngOnInit() {
        this.predictorForm = this.formBuilder.group({
            placa: [null, [Validators.pattern('^[0-9]{4}$'), Validators.required ]],
            fecha: [''],
            hora: [null],
        });
    }
    onSubmit() {
        this.submitted = true;
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
