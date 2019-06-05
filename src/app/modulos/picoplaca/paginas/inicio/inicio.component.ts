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
            placa: ['', Validators.required],
            fecha: [null]
        });
    }
    onSubmit() {
        this.submitted = true;
    }
}
