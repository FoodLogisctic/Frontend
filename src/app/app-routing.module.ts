import { NgModule } from '@angular/core';
import { CreateEditComponent } from './component/insumo/create-edit/create-edit.component';
import { InsumoListarComponent } from './component/insumo/insumo-listar/insumo-listar.component';
import { HomeComponent } from './component/home/home.component';
import { InsumoComponent } from './component/insumo/insumo.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './component/menu/menu.component';
import { CompraComponent } from './component/compra/compra.component';
import { CompraListarComponent } from './component/compra/compra-listar/compra-listar.component';
import { CompraCreateEditComponent } from './component/compra/compra-create-edit/compra-create-edit.component';
import { PlatoComponent } from './component/plato/plato.component';
import { PlatoListarComponent } from './component/plato/plato-listar/plato-listar.component';
import { PlatoCreateEditComponent } from './component/plato/plato-create-edit/plato-create-edit.component';
import { VentaComponent } from './component/venta/venta.component';
import { VentaListarComponent } from './component/venta/venta-listar/venta-listar.component';
import { MesaComponent } from './component/mesa/mesa.component';
import { MesaCreateEditComponent } from './component/mesa/mesa-create-edit/mesa-create-edit.component';
import { VentaCreateEditComponent } from './component/venta/venta-create-edit/venta-create-edit.component';
import { MesaListarComponent } from './component/mesa/mesa-listar/mesa-listar.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreateEditComponent } from './component/usuario/usuario-create-edit/usuario-create-edit.component';
import { LoginComponent } from './component/login/login.component';
import { ComprainsumoComponent } from './component/comprainsumo/comprainsumo.component';
import { ComprainsumoCreateEditComponent } from './component/comprainsumo/comprainsumo-create-edit/comprainsumo-create-edit.component';
import { ComprainsumoListarComponent } from './component/comprainsumo/comprainsumo-listar/comprainsumo-listar.component';
import { AuthGuardGuard } from './security/auth-guard.guard';
import { RegisterComponent } from './component/register/register.component';
import { PlatoinsumoComponent } from './component/platoinsumo/platoinsumo.component';
import { PlatoinsumoCreateEditComponent } from './component/platoinsumo/platoinsumo-create-edit/platoinsumo-create-edit.component';
import { PlatoinsumoListarComponent } from './component/platoinsumo/platoinsumo-listar/platoinsumo-listar.component';
import { VentaplatoComponent } from './component/ventaplato/ventaplato.component';
import { VentaplatoCreateEditComponent } from './component/ventaplato/ventaplato-create-edit/ventaplato-create-edit.component';
import { VentaplatoListarComponent } from './component/ventaplato/ventaplato-listar/ventaplato-listar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'insumos',
    component: InsumoComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: CreateEditComponent,
      },
      {
        path: 'listado',
        component: InsumoListarComponent,
      },
      {
        path: 'edicion/:id',
        component: CreateEditComponent,
      },
    ],
  },
  {
    path: 'compras',
    component: CompraComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: CompraCreateEditComponent,
      },
      {
        path: 'listado',
        component: CompraListarComponent,
      },
      {
        path: 'edicion/:id',
        component: CompraCreateEditComponent,
      },
    ],
  },
  {
    path: 'ventas',
    component: VentaComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: VentaCreateEditComponent,
      },
      {
        path: 'listado',
        component: VentaListarComponent,
      },
      {
        path: 'edicion/:id',
        component: VentaCreateEditComponent,
      },
    ],
  },
  {
    path: 'mesas',
    component: MesaComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: MesaCreateEditComponent,
      },
      {
        path: 'listado',
        component: MesaListarComponent,
      },
      {
        path: 'edicion/:id',
        component: MesaCreateEditComponent,
      },
    ],
  },
  {
    path: 'platos',
    component: PlatoComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: PlatoCreateEditComponent,
      },
      {
        path: 'listado',
        component: PlatoListarComponent,
      },
      {
        path: 'edicion/:id',
        component: PlatoCreateEditComponent,
      },
    ],
  },
  {
    path: 'usuarios',
    component: UsuarioComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: UsuarioCreateEditComponent,
      },
      {
        path: 'listado',
        component: UsuarioListarComponent,
      },
      {
        path: 'edicion/:id',
        component: UsuarioCreateEditComponent,
      },
    ],
  },
  {
    path: 'compInsum',
    component: ComprainsumoComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: ComprainsumoCreateEditComponent,
      },
      {
        path: 'listado',
        component: ComprainsumoListarComponent,
      },
    ],
  },
  {
    path: 'platoInsum',
    component: PlatoinsumoComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: PlatoinsumoCreateEditComponent,
      },
      {
        path: 'listado',
        component: PlatoinsumoListarComponent,
      },
    ],
  },
  {
    path: 'ventaPlato',
    component: VentaplatoComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: 'nuevo',
        component: VentaplatoCreateEditComponent,
      },
      {
        path: 'listado',
        component: VentaplatoListarComponent,
      },
    ],
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
