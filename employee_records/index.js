/*you are to create a collection of employee's information for your company. Each employee has the following 
attributes:
1. Name
2. Job title
3. Salary
4. Status

First, you will create an empty array named `employees`*/



/*Next, you will create an Employee constructor with the first three attributes defined at the 
time of instantiation and the fourth will be defaulted to "Full Time".*/

/*This constructor will also have a method called `printEmployeeForm` that prints the employee's 
information to the console*/

function Employee(name,jobTitle,salary,updateStatus){
    this.name=name
    this.jobTitle=jobTitle
    this.salary=salary
    
    this.updateStatus=updateStatus
    this.status="full_time"
    this.printEmployeeForm=function(){
        console.log(" "  + this.name+" ,"+ this.jobTitle +", "+this.salary+" ,"+this.updateStatus) //method will print

}
}



var rebecca = new Employee("Rebecca","Web Developer",75000,"full-time");
rebecca.printEmployeeForm()

var james = new Employee("James","Web Developer",45000,"full-time");
james.printEmployeeForm()

var cameron= new Employee("Cameron","UX/UI",68000,"part-time");
cameron.printEmployeeForm()



//put employees into array
var employees=[]

employees.push("Rebecca","Web Developer",75000,"full-time")
employees.push("James","Web Developer",45000,"full-time")
employees.push("Cameron","UX/UI",68000,"part-time")

console.log(employees)