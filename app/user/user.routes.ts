import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

export const userRoutes = [
    // user/profile
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent},
];
