import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";

export const userRoutes = [
    //user/profile
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent}
]