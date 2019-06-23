import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerDetailsComponent } from './edit-customer-details/edit-customer-details.component';
import { ShowCustomerDetailsComponent } from './show-customer-details/show-customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes: Routes = [
  { path: '', component: CustomerListComponent },
  { path: 'edit/:id', component: EditCustomerDetailsComponent },
  { path: 'show/:id', component: ShowCustomerDetailsComponent },
  { path: 'add-customer', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
