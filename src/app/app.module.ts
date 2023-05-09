import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { WorksDoneComponent } from './components/works-done/works-done.component';
import { WorkComponent } from './components/work/work.component';
import { HttpClientModule } from '@angular/common/http' ;
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudiesComponent } from './components/studies/studies.component';
import { StudiesDoneComponent } from './components/studies-done/studies-done.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { SkillComponent } from './components/skill/skill.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    HeaderComponent,
    AboutComponent,
    WorksDoneComponent,
    WorkComponent,
    DeleteComponent,
    EditComponent,
    StudiesComponent,
    StudiesDoneComponent,
    LoginComponent,
    HomeComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    HabilitiesComponent,
    SkillComponent,
    EditSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
