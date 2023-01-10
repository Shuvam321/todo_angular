import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './myComponent/todos/todos.component';
import { TodoItemComponent } from './myComponent/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './myComponent/add-todo/add-todo.component';
// import { AddTodoComponent } from './myComponent/add-todo/add-todo.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    // AddTodoComponent,
    // AddTodoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
