import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [

  {
    path: 'contacts',
    component: ContactsComponent,
    // canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  },

  {
    path: 'contacts/:id',
    component: ContactComponent,
    // canActivate: [AuthGuard],
    // canDeactivate: [CanDeactivateGuard],
    runGuardsAndResolvers: 'always'
  }

  /*
  {
    path: 'contacts/new',
    component: ContactWizardComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always'
  }
  */

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PartyLibRoutingModule {}
