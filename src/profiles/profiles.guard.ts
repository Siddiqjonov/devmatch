import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// gurads single responsibility is to determen weather or not the given request will we handled or not
@Injectable()
export class ProfilesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return this.authenticate(context);
  }

  private authenticate(request: ExecutionContext): boolean {
    return false;
  }
}

// modules, contorllers, services, dtos, gurads, class validatiors, pipes, exeption fileters
// Connect a database // prisma or type ORM
// Authentication $ Authorization
// Automated testing
// Api documenttation (swagger)
// Deploy your application
// NestJs Docs