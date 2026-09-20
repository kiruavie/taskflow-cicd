import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Apprendre le CI/CD Jenkins';
  }
}
