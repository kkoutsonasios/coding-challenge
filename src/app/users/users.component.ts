import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users-service';
import { User } from '../Shared/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService) { }

  users: User[];
  displayedColumns: string[]=['firstName','lastName','address','dateOfBirth'];

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }


  ngOnInit(): void {
    this.getUsers();
  }
  
  onDeleteUser(id: number) {
    this.usersService.deleteUser(id);
    console.log(id + ' deleted!')
  }

  ngOnDestroy(): void {
      
  }
}
