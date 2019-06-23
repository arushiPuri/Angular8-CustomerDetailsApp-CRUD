import { Component, OnInit } from '@angular/core';
import { Customer } from '../data.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-customer-details',
  templateUrl: './edit-customer-details.component.html',
  styleUrls: ['./edit-customer-details.component.css']
})

export class EditCustomerDetailsComponent implements OnInit {

  id: number;
  customers: Array<Customer>;
  selectedCustomer: Customer;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let customerId: number = parseInt(this.route.snapshot.paramMap.get("id"))
    this.data.getCustomer(customerId).subscribe((data: Customer) => {
      this.selectedCustomer = data
    },
    error  => {
      console.log("Error", error);
    })
  }

  onClickUpdateCustomer(selectedCustomer: Customer, id) {
    console.log(selectedCustomer, "New customer Details")
    this.data.updateCustomer(selectedCustomer, id).subscribe(data => {
      console.log(data);
    });
  }
}