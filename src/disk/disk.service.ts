import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}

  getData() {
    this.powerService.supplyPower('Disk Service');
    console.log('running disk getData');
  }
}
