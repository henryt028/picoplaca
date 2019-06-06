import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PicoplacaRoutingModule } from './picoplaca.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
    imports: [
        CommonModule,
        PicoplacaRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot()
    ],
    exports: [],
    declarations: [
        PicoplacaRoutingModule.COMPONENTS,
        PicoplacaRoutingModule.COMPONENT_FACTORY
    ],
    entryComponents: [PicoplacaRoutingModule.COMPONENT_FACTORY],
    providers: []
})
export class PicoplacaModule {}
