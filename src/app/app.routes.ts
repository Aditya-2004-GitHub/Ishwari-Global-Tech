import { Industries } from './pages/industries/industries';
import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Certifications } from './pages/certifications/certifications';
import { Products } from './pages/products/products';
import { Contact } from './pages/contact/contact';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { UnderConstruction } from './pages/under-construction/under-construction';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'about', component: About, title: 'About' },
  { path: 'products', component: Products, title: 'Products' },
  { path: 'industries', component: Industries, title: 'Industries' },
  { path: 'certifications', component: Certifications, title: 'Certifications' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: 'under-construction', component: UnderConstruction, title: 'Under Construction' },
  { path: '**', component: PageNotFound, title: 'Page Not Found', data: { hideLayout: true } }
];
