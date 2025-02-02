import { CustomError } from './custom-error';

export class NotAvailableError extends CustomError {
  constructor(message: string) {
    super(message, 'NotAvailableError', 400);
  }
}
