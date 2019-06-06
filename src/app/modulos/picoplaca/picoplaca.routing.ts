import { NgModule} from '@angular/core';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultadoComponent } from './paginas/resultado/resultado.component';

const routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'resultado',
        component: ResultadoComponent
    },
    {
        path: '',
        component: InicioComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PicoplacaRoutingModule {
    static COMPONENTS = [
        InicioComponent,
        ResultadoComponent
    ];
    static COMPONENT_FACTORY = [];
}
