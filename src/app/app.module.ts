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
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { interceptorProvider } from './services/interceptor-service';
import { WorkEditComponent } from './components/work-edit/work-edit.component';
import { StudiesEditComponent } from './components/studies-edit/studies-edit.component';
import { ProjectsDoneComponent } from './components/projects-done/projects-done.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';

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
    FooterComponent,
    ProjectsComponent,
    WorkEditComponent,
    StudiesEditComponent,
    ProjectsDoneComponent,
    ProjectEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
