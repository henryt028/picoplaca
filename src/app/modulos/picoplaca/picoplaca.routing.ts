import { NgModule} from '@angular/core';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PicoplacaRoutingModule {
    static COMPONENTS = [
        InicioComponent
    ];
    static COMPONENT_FACTORY = [];
}
