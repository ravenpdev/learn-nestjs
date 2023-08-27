import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}

  compute() {
    this.powerService.supplyPower('Cpu Service');
    console.log('running cpu compute');
  }
}
