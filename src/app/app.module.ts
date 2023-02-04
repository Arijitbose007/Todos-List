import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodoItemComponent } from './MyComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponent/about/about.component';
import { AppRoutingModule } from './app-routing.module';
//import { RouterModule, Routes } from '@angular/router';

/* const appRoutes: Routes=[
  {path:'/',component: TodosComponent},
  {path:'/about',component: AboutComponent},
  /* {path:'contact',component: ContactComponent},
  {path:'products',component: ProductsComponent}, 
]  */



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
   //RouterModule.forRoot(appRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
