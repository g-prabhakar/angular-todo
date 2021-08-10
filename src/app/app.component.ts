import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Bob', [
    new TodoItem('Go for Run', true),
    new TodoItem('Get Flowers'),
    new TodoItem('Collect Tickets')
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete)
  }

  addItem(newItem) {
    if(newItem != '') {
      this.list.addItem(newItem)
    }
  }

  showComplete: boolean = false;
}
