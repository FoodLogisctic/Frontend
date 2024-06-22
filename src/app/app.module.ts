import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule} from '@angular/material/button'
import { MatInputModule} from '@angular/material/input'
import { MatSortModule } from '@angular/material/sort' 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material/core';
import { CreateEditComponent } from './component/insumo/create-edit/create-edit.component'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NavbarComponent } from './component/navbar/navbar.component'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select';
import { HomeComponent } from './component/home/home.component';
import { InsumoComponent } from './component/insumo/insumo.component';
import { MenuComponent } from './component/menu/menu.component';
import { CompraComponent } from './component/compra/compra.component';
import { CompraListarComponent } from './component/compra/compra-listar/compra-listar.component';
import { CompraCreateEditComponent } from './component/compra/compra-create-edit/compra-create-edit.component';
import { PlatoComponent } from './component/plato/plato.component';
import { PlatoListarComponent } from './component/plato/plato-listar/plato-listar.component';
import { PlatoCreateEditComponent } from './component/plato/plato-create-edit/plato-create-edit.component';
import { VentaComponent } from './component/venta/venta.component';
import { MesaComponent } from './component/mesa/mesa.component';
import { MesaListarComponent } from './component/mesa/mesa-listar/mesa-listar.component';
import { VentaListarComponent } from './component/venta/venta-listar/venta-listar.component';
import { VentaCreateEditComponent } from './component/venta/venta-create-edit/venta-create-edit.component';
import { MesaCreateEditComponent } from './component/mesa/mesa-create-edit/mesa-create-edit.component';
import { MatIconModule} from '@angular/material/icon';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioListarComponent } from './component/usuario/usuario-listar/usuario-listar.component';
import { UsuarioCreateEditComponent } from './component/usuario/usuario-create-edit/usuario-create-edit.component';
import { DialogoComponent } from './component/insumo/insumo-listar/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import { InsumoListarComponent } from './component/insumo/insumo-listar/insumo-listar.component';
import { LoginComponent } from './component/login/login.component';
import { TokenInterceptor } from './service/token.interceptor';
import {MatGridListModule} from '@angular/material/grid-list';
import { ComprainsumoComponent } from './component/comprainsumo/comprainsumo.component';
import { ComprainsumoListarComponent } from './component/comprainsumo/comprainsumo-listar/comprainsumo-listar.component';
import { ComprainsumoCreateEditComponent } from './component/comprainsumo/comprainsumo-create-edit/comprainsumo-create-edit.component';
import { RegisterComponent } from './component/register/register.component';
import { DialogoRegisterComponent } from './component/register/dialogo-register/dialogo-register.component';
import { PlatoinsumoComponent } from './component/platoinsumo/platoinsumo.component';
import { PlatoinsumoListarComponent } from './component/platoinsumo/platoinsumo-listar/platoinsumo-listar.component';
import { PlatoinsumoCreateEditComponent } from './component/platoinsumo/platoinsumo-create-edit/platoinsumo-create-edit.component';
import { VentaplatoComponent } from './component/ventaplato/ventaplato.component';
import { VentaplatoListarComponent } from './component/ventaplato/ventaplato-listar/ventaplato-listar.component';
import { VentaplatoCreateEditComponent } from './component/ventaplato/ventaplato-create-edit/ventaplato-create-edit.component';
import { RoleComponent } from './component/role/role.component';
import { RoleService } from './service/role.service';
import { DEFAULT_DIALOG_CONFIG } from '@angular/cdk/dialog';
import { defaultFormat } from 'moment';


@NgModule({
  declarations: [
    AppComponent,
    InsumoListarComponent,
    CreateEditComponent,
    NavbarComponent,
    HomeComponent,
    InsumoComponent,
    MenuComponent,
    CompraComponent,
    CompraListarComponent,
    CompraCreateEditComponent,
    PlatoComponent,
    PlatoListarComponent,
    PlatoCreateEditComponent,
    VentaComponent,
    MesaComponent,
    MesaListarComponent,
    VentaListarComponent,
    VentaCreateEditComponent,
    MesaCreateEditComponent,
    UsuarioComponent,
    UsuarioListarComponent,
    UsuarioCreateEditComponent,
    DialogoComponent,
    LoginComponent,
    ComprainsumoComponent,
    ComprainsumoListarComponent,
    ComprainsumoCreateEditComponent,
    RegisterComponent,
    DialogoRegisterComponent,
    PlatoinsumoComponent,
    PlatoinsumoListarComponent,
    PlatoinsumoCreateEditComponent,
    VentaplatoComponent,
    VentaplatoListarComponent,
    VentaplatoCreateEditComponent,
    RoleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule ,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSortModule,
    FormsModule, ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },RoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

