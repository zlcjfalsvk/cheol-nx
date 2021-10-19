import type { ApiResponseInterface } from '@cheol-nx/api-interfaces';

export class ApiResponseDto<T> implements ApiResponseInterface<T> {
  statusCode: number;
  message: string;
  data: T;

  constructor(options?: { statusCode?: number; message?: string; data?: T }) {
    options = options || {};
    this.statusCode = options.statusCode ?? 200;
    this.message = options.message ?? '';
    this.data = options.data ?? undefined;
  }
}
