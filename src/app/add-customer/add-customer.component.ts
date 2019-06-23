import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../data.model';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private data: DataService) { }

  customers: Array<Customer>;
  customerDetails: Customer = {
    name: "",
    email: "",
    country: "",
  }

  ngOnInit() {
    this.data.getCustomers().subscribe((data: Array<Customer>) => {
      this.customers = data
      console.log(this.customers) 
    })
  }

  onClickCreateCustomer() {
    this.data.createCustomer(this.customerDetails).subscribe((data: Customer) => {
      console.log(data);
      this.customers.push(data);
    }) 
  }
}
