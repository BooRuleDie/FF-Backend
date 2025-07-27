import { Injectable } from '@nestjs/common';
import { User } from './types';

@Injectable()
export class AppService {
  getUsers(): User[] {
    return [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
  }

  // this service method should be under a
  // flag, but it's controlled under the
  // controller instead of here , just so you know
  getDevelopers(): User[] {
    return [
      {
        key: '1',
        name: 'Eren Burulday',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['developer'],
      },
      {
        key: '2',
        name: 'Alper',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['developer'],
      },
      {
        key: '3',
        name: 'Khayyam',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['developer'],
      },
    ];
  }
  getAdmins(): User[] {
    return [
      {
        key: '1',
        name: 'Ertuğ',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['developer'],
      },
      {
        key: '2',
        name: 'Okay',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['developer'],
      },
    ];
  }
}
