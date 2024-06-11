import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSomething(){
    return {
      name:"warda",
      age:22
    };
  }
}
