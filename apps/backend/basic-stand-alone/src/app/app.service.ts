import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { UsersDto } from '@cheol-nx/backend';

@Injectable()
export class AppService {
  getData() {
    const userData = {
      id: 'adsasdf',
      name: 'cheolcheol',
      details: {
        address: 'adsf',
      },
    };

    return plainToInstance(UsersDto, userData);
  }
}
