import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../data.model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-customer-details',
  templateUrl: './show-customer-details.component.html',
  styleUrls: ['./show-customer-details.component.css']
})
export class ShowCustomerDetailsComponent implements OnInit {

  index: number;
  customers: Array<Customer>;
  selectedCustomer: Customer;

  constructor(private data: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let customerId: number = parseInt(this.route.snapshot.paramMap.get("id"))
    this.data.getCustomer(customerId).subscribe((data: Customer) => {
      this.selectedCustomer = data
    })
  }
}
