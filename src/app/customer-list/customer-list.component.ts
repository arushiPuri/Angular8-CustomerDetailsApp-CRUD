import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../data.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private data: DataService) { }

  customers: Array<Customer>;
  index: number;

  ngOnInit() {
    this.data.getCustomers().subscribe((data: Array<Customer>) => {
      this.customers = data
      console.log(this.customers) 
    })
  }

  onClickCreateCustomer() {
    let customerDetails: Customer = {
      name: "James Bond",
      city: "America"
    }
    this.data.createCustomer(customerDetails).subscribe((data: Customer) => {
      console.log(data);
      this.customers.push(data);
    }) 
  }

  onClickDeleteCustomer(id: number, i: number) {
    this.data.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.customers.splice(i,1);
    });
  }
}
