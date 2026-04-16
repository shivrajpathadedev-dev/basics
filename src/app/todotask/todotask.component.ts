import { Component, OnInit } from '@angular/core';
import { Ianimal, Icities, Iclothes, Icompanies, Ifood, Ifruits, Igames, Isubjects, Itodo, Ivehicle } from '../shared/model/todos';

@Component({
  selector: 'app-todotask',
  templateUrl: './todotask.component.html',
  styleUrls: ['./todotask.component.scss']
})
export class TodotaskComponent implements OnInit {


  todo: any;
  constructor() { }

  ngOnInit(): void {

  }
  todosArr: Array<Itodo> = [
    {
      toodItem: "jon",
      todoId: "23"
    },
    {
      toodItem: "May",
      todoId: "26"
    },

    {
      toodItem: "John",
      todoId: "21"
    }
  ]

  OnTodoAdd(ele: HTMLInputElement) {
    let val = ele.value
    // console.log(val)
    let newTodo: Itodo = {
      toodItem: val,
      todoId: Date.now().toString()
    }
    this.todosArr.push(newTodo)
  }

  trackbyFun(index: number, item: Itodo) {
    return item.todoId
  }

  todosArrs: Array<Itodo> = [
    {
      toodItem: "shiv",
      todoId: "324"
    },
    {
      toodItem: "Rohit",
      todoId: "454"
    },

    {
      toodItem: "Arjun",
      todoId: "543"
    }
  ]

  OnTodoAdds(ele: HTMLInputElement) {
    let val = ele.value
    // console.log(val)
    let newTodo: Itodo = {
      toodItem: val,
      todoId: Date.now().toString()
    }
    this.todosArr.push(newTodo)
  }

  trackbytodo(index: number, item: Itodo) {
    return item.todoId
  }

  animalsArr: Array<Ianimal> = [
    {
      name: "Lion",
      id: "A101"
    },
    {
      name: "Tiger",
      id: "A102"
    },
    {
      name: "Elephant",
      id: "A103"
    },
    {
      name: "Dog",
      id: "A104"
    }
  ];

  OnAnimal(ele: HTMLInputElement) {
    let val = ele.value
    let newAniaml: Ianimal = {
      name: val,
      id: Date.now().toString()
    }
    this.animalsArr.push(newAniaml)
  }
  traackbyanimal(index: number, item: Ianimal) {
    return item.id
  }

  fruitsArr: Array<Ifruits> = [
    { name: "Apple", id: "FR301" },
    { name: "Banana", id: "FR302" },
    { name: "Mango", id: "FR303" },
    { name: "Orange", id: "FR304" }
  ];

  Onfruits(ele: HTMLInputElement) {
    let val = ele.value
    let newfruit: Ifruits = {
      name: val,
      id: Date.now().toString()
    }
    this.fruitsArr.push(newfruit)
  }

  trackbyfruits(index: number, item: Ifruits) {
    return item.id
  }

  foodArr: Array<Ifood> = [
    { name: "Pizza", id: "F201" },
    { name: "Burger", id: "F202" },
    { name: "Biryani", id: "F203" },
    { name: "Dosa", id: "F204" }
  ];

  onfood(ele: HTMLInputElement) {
    let val = ele.value
    let newfood: Ifood = {
      name: val,
      id: Date.now().toString()
    }
    this.foodArr.push(newfood)
  }

  trackByfood(index: number, item: Ifood) {
    return item.id
  }

  vehiclesArr: Array<Ivehicle> = [
    { name: "Car", id: "V401" },
    { name: "Bike", id: "V402" },
    { name: "Bus", id: "V403" },
    { name: "Truck", id: "V404" }
  ];

  Onvehicle(ele: HTMLInputElement) {
    let val = ele.value;
    let newvehicle: Ivehicle = {
      name: val,
      id: Date.now().toString()
    }
    this.fruitsArr.push(newvehicle)
  }
  trackByvehicle(index: number, item: Ivehicle) {
    return item.id
  }

  citiesArr: Array<Icities> = [
    { name: "Mumbai", id: "C501" },
    { name: "Delhi", id: "C502" },
    { name: "Pune", id: "C503" },
    { name: "Hyderabad", id: "C504" }
  ];

  OnCities(ele: HTMLInputElement) {
    let val = ele.value;
    let newcities: Icities = {
      name: val,
      id: Date.now().toString()
    }
    this.citiesArr.push(newcities)
  }
  trackBycities(index:number,item:Icities){
    return item.id
  }

  subjectsArr:Array<Isubjects> = [
  { name: "Math", id: "S601" },
  { name: "Science", id: "S602" },
  { name: "History", id: "S603" },
  { name: "English", id: "S604" }
];

Onsubject(ele:HTMLInputElement){
  let val=ele.value;
  let newsubject:Isubjects={
    name:val,
    id:Date.now().toString()
  }
  this.subjectsArr.push(newsubject)
}
trackBysubject(index:number,item:Isubjects){
  return item.id
}

gamesArr = [
  { name: "Cricket", id: "G801" },
  { name: "Football", id: "G802" },
  { name: "Chess", id: "G803" },
  { name: "Hockey", id: "G804" }
];

Ongames(ele:HTMLInputElement){
  let val=ele.value;
  let newgames:Igames={
    name:val,
    id:Date.now().toString()
  }
  this.gamesArr.push(newgames)
}
trackbygames(index:number,item:Igames){
  return item.id
}

clothesArr = [
  { name: "Shirt", id: "CL901" },
  { name: "T-Shirt", id: "CL902" },
  { name: "Jeans", id: "CL903" },
  { name: "Jacket", id: "CL904" }
];

onclothes(ele:HTMLInputElement){
  let val=ele.value;
  let newclothes:Iclothes={
    name:val,
    id:Date.now().toString()
  }
  this.clothesArr.push(newclothes)
}
trackByclothes(index:number,item:Iclothes){
  return item.id
}

companiesArr:Array<Icompanies>= [
  { name: "Google", id: "CO1001" },
  { name: "Microsoft", id: "CO1002" },
  { name: "Amazon", id: "CO1003" },
  { name: "TCS", id: "CO1004" }
];

Oncompanies(ele:HTMLInputElement){
    let val=ele.value;
    let newcompanies:Icompanies={
      name:val,
      id:Date.now().toString()
    }
    this.companiesArr.push(newcompanies)
}
trackbycompanies(index:number,item:Icompanies){
  return item.id
}

}
