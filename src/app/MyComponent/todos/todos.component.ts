import { Component, OnInit } from '@angular/core';
import { Todo } from  "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor(){
    this.todos = [
      {
        sno:1,
        title: "This Is The Title",
        desc: "Description",
        active: true,
      },
      {
        sno:2,
        title: "This Is The Title2",
        desc: "Description2",
        active: true,
      },
      {
        sno:3,
        title: "This Is The Title3",
        desc: "Description3",
        active: true,
      },
    ]
  }
  ngOnInit(): void {}
  deleteTodo(todo: Todo){//explaing the deleteTodo($event) in the parent component to know what is getting deleted
    console.log(todo);//prints the onclick()
    const index = this.todos.indexOf(todo);//it fetches the index to be deleted
    this.todos.splice(index, 1);//splice is used to delete a specific element(index-till we need to delete)
  }
}
