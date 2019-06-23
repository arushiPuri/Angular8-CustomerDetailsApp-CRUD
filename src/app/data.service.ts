import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './data.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getCustomers() {
    return this.http.get('http://127.0.0.1:3000/customers')
  }

  createCustomer(customerDetails: Customer) {
    return this.http.post('http://127.0.0.1:3000/customers', customerDetails)
  }

  deleteCustomer(id: number) {
    return this.http.delete('http://127.0.0.1:3000/customers/'+id)
  }

  getCustomer(id: number) {
    return this.http.get('http://127.0.0.1:3000/customers/'+id)
  }
  
  updateCustomer(customerDetails: Customer, id: number) {
    return this.http.put('http://127.0.0.1:3000/customers/'+id, customerDetails)
  }
}

