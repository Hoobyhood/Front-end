import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProfilepageComponent } from "./profilepage/profilepage.component";
import { LoginComponent } from "./login/login.component";
import { EventpageComponent } from "./eventpage/eventpage.component";
import { CreateeventComponent } from "./createevent/createevent.component";

const APP_ROUTES: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path:'home', component: HomePageComponent },
    { path:'profile', component: ProfilepageComponent },
    { path:'login', component: LoginComponent },
    { path:'event', component: EventpageComponent },
    { path:'create', component: CreateeventComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);