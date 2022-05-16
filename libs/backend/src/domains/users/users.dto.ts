import { Type } from 'class-transformer';

export class UsersDto {
  id: string;
  name: string;


  @Type(() => UserDetails)
  details: UserDetails
}


class UserDetails {
  address: string;
  phoneNumber: string;
}
