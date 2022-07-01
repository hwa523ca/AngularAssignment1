import { Component } from '@angular/core';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
    empID = "";
    empName = "";
    empSalary = "";
    empDesignation = "";
    employeeInfo = "";

    displayEmployeeInfo(empID:string, empName:string, empSalary:string, empDesignation:string) {
           this.empID = "Employee ID:          " + empID + "          ";
         this.empName = "Employee Name:        " + empName + "        ";
       this.empSalary = "Employee Salary:      " + empSalary + "      ";
  this.empDesignation = "Employee Designation: " + empDesignation + " ";
      //this.employeeInfo += "Employee ID: " + this.empID + " Employee Name: " + this.empName + " Employee Salary: " + this.empSalary + " Employee Designation: " + this.empDesignation + "                                             ";
      this.employeeInfo +=  this.empID  + this.empName + this.empSalary +  this.empDesignation + "                                             ";
      console.log(this.employeeInfo);
    }
}
