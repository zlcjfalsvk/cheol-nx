import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';

@Injectable()
export class AnimalsService {
  async greeting(name: string) {
    const pythonProcess = spawn('python3', [`resources/hello.py`, name]);
    const python = new Promise((resolve, reject) => {
      pythonProcess.stdout.on('data', (data) => {
        resolve(data.toString());
      });

      pythonProcess.stderr.on('data', (data) => {
        reject(data.toString());
      });
    });
    return await python;
  }
}
