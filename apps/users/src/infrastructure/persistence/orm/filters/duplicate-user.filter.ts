import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { DuplicateUserException } from 'apps/users/src/domain/exceptions/duplicate-user.error';
import { Response } from 'express';

@Catch(DuplicateUserException)
export class DuplicateUserExceptionFilter implements ExceptionFilter {
  catch(exception: DuplicateUserException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = HttpStatus.CONFLICT;

    response.status(status).json({
      statusCode: status,
      message: exception.message,
      error: exception.name,
    });
  }
}
