import { Injectable, OnInit } from '@angular/core';
import { Expose, serialize, Type } from 'class-transformer';
import { User } from './user';

@Injectable()
export class StorageService implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Expose({ name: 'user' })
  @Type(() => User)
  private _user!: User;

  getUser(): User {
      this._user = new User();
    
    return this._user;
  }
    
  setUser(user: User): StorageService {
    this._user = user;
    return this;
  }
}
