import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/data.service';
import { HttpClient } from '@angular/common/http';

export interface EmployeeElement {
    id : number;
    name : string;
    role : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Payroll';
  displayedColumns: string[] = ['id', 'name', 'role'];
  dataSource = [];

  constructor(private dataService: DataService, private http: HttpClient) { };
  
  ngOnInit() {

    this.http.get<any>('http://localhost:8080/employees').subscribe(data => {
        console.log(data);
        this.dataSource = data;
    });
   
  }

}



