import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
{path:'Album',component:ListAlbumsComponent},
{path:"add",component:AddAlbumComponent},

{path:"archives",component:ArchivesComponent},


  {
    path:'**', component: NotFoundComponent
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ListAlbumsComponent,
    ArchivesComponent,
    AddAlbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
