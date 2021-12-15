import { spawn } from 'child_process';

export const callPython = async (pythonFileName: string, args?: any) => {
  const pythonArguments: any[] = [`resources/${pythonFileName}`, '--'];

  if (typeof args !== 'string' && args?.length > 0) {
    Array.from(args).forEach((arg) => {
      pythonArguments.push(arg);
    });
  } else {
    pythonArguments.push(args);
  }

  const pythonProcess = spawn('python3', pythonArguments);
  const python = new Promise((resolve, reject) => {
    pythonProcess.stdout.on('data', (data) => {
      resolve(data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
      reject(data.toString());
    });
  });
  return await python;
};
