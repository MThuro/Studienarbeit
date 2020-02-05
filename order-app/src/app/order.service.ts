import { Injectable } from '@angular/core';
import { Process } from './process';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  processes: Process[];

  constructor() { 
    this.processes = [];
  }

  addProcess(process: Process): void {
    this.processes.push(process);
  }

  getProcesses(){
    return this.processes;
  }
}