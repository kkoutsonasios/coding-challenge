import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import { Router } from '@angular/router';
import { UsersService } from '../users-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  loading: boolean

  constructor(private snackBar: MatSnackBar, private userService: UsersService, private router: Router) { 
    this.loading = false;
  }



  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      lastName: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
      address: new FormControl(null, [Validators.max(20)]),
      dateOfBirth: new FormControl(null, [])
    }
    );
  }
  
  onSubmit() : void{
    this.loading = true;
    this.userService.createUser(this.userForm.getRawValue());
    console.log(this.userForm);
    setTimeout(()=>{this.onSuccess()},2000);
  }

  onSuccess() : void
  {
    this.loading = false;
    this.snackBar.open('Saved successfully','Done');
    this.router.navigate(['users']);
  }
}
