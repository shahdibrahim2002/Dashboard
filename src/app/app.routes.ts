import { Routes } from '@angular/router';
import { Layout } from './Layouts/layout/layout';
import { Dashboard } from './Components/Features/dashboard/dashboard';
import { Prodcuts } from './Components/Features/Services/prodcuts/prodcuts';
import { Domains } from './Components/Features/Services/domains/domains';
import { Invoices } from './Components/Features/Services/invoices/invoices';
import { Tickets } from './Components/Features/Services/tickets/tickets';
import { Solutions } from './Components/Features/Services/solutions/solutions';
import { ChangePassword } from './Components/Features/Settings/change-password/change-password';
import { NotificationAlert } from './Components/Features/Settings/notification-alert/notification-alert';
import { PersonalData } from './Components/Features/Settings/personal-data/personal-data';
import { Chat } from './Components/chat/chat';
import { Calendar } from './Components/calendar/calendar';
import { NotFound } from './pages/not-found/not-found';
import { Footer } from './Components/footer/footer';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: Dashboard },
            { path: 'products', component: Prodcuts },
            { path: 'domains', component: Domains },
            { path: 'invoices', component: Invoices },
            { path: 'tickets', component: Tickets },
            { path: 'solutions', component: Solutions },
            { path: 'ChangePassword', component: ChangePassword },
            { path: 'NotificationAlert', component: NotificationAlert },
            { path: 'PersonalData', component: PersonalData },
            { path: 'Chat', component: Chat },
            { path: 'Calendar', component: Calendar },
            { path: 'Footer', component: Footer },
        ]
    },
    { path: '**', component: NotFound }
];
