import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './pages/frontpage/frontpage.component'
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { TalkToAstroComponent } from './talk-to-astro/talk-to-astro.component';

const routes: Routes = [{path:'',component:FrontpageComponent},{path:'login',component:LoginComponent},
{path:'register',component:SignUpComponent},{path:'online-astrologer',component:TalkToAstroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
