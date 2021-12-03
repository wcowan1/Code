import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthorizationService} from '../authorization.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  userForm: FormGroup;
  successMsg: string ='';
  errorMsg: string ='';

  error_msg={
    'email':[
      {type: 'required,'
        }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
