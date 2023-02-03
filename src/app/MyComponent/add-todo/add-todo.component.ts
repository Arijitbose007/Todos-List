import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  desc: string;
  @Output() //Use Eventemitter when transferring data from child component to parent component.. If you want your component to notify his parent about something you can use the Output decorator with EventEmitter to create a custom event.
  todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
  }
  onSubmit(){
    const todo ={ //A constructor is a special function of the class that is responsible for initializing the variables of the class.The this keyword refers to the current instance of the class.
    sno: 8,
    title: this.title,
    desc: this.desc,
    active: true
    }
    this.todoAdd.emit(todo);
  }
}
