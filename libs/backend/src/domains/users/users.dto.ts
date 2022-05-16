import {  Type } from 'class-transformer';

// Hoisting
class UserDetails {
  address: string = 'bbbb';
  phoneNumber: string = 'asdfadsf';

}

export class UsersDto {
  id: string = '';
  name: string = '';

  @Type(() => UserDetails)
  details:  UserDetails = new UserDetails()
}


