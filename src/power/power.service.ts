import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(className: string) {
    console.log(`supply power to ${className}`);
  }
}
