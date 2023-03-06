import { HttpException, HttpStatus } from '@nestjs/common';

export class NotValidException extends HttpException {
  constructor() {
    super('Not valid request', HttpStatus.BAD_REQUEST);
  }
}
