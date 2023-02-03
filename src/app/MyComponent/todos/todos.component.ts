import { LocalizedString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from  "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string;
  todos:Todo[];
  constructor(){ //initial info when the page gets loaded.
    this.localItem = localStorage.getItem("todos") || "";//string cannot have null and gere is a case when no todos its null thus we get a empty string in the or part.
    if(this.localItem == null){
    this.todos = [];
    }
    else{
    this.todos = JSON.parse(this.localItem);//if there was prior todo then in else part and parse the prior todo to keep it.
    }
  }
  ngOnInit(): void {}
  deleteTodo(todo: Todo){//explaing the deleteTodo($event) in the parent component to know what is getting deleted
    console.log(todo);//prints the onclick()
    const index = this.todos.indexOf(todo);//it fetches the index to be deleted
    this.todos.splice(index, 1);//splice is used to delete a specific element(index-till we need to delete)
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){//explaing the deleteTodo($event) in the parent component to know what is getting deleted
    console.log(todo);//prints the onclick()
    this.todos.push(todo);//splice is used to delete a specific element(index-till we need to delete)
    localStorage.setItem("todos", JSON.stringify(this.todos));//storing the todos so that when the page loaded it remains
  }
  toggleTodo(todo: Todo){//explaing the deleteTodo($event) in the parent component to know what is getting deleted
    const index = this.todos.indexOf(todo);//it fetches the index to be deleted
    this.todos[index].active = !this.todos[index].active;//splice is used to delete a specific element(index-till we need to delete)
    localStorage.setItem("todos", JSON.stringify(this.todos));//storing the todos so that when the page loaded it remains
    
  }
}

