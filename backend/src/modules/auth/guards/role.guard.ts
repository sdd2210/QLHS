import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private relefator: Reflector) {}

  matchRole = (roles: string[], userRole: string) => {
    return roles.some((x) => x == userRole);
  };
  canActivate(context: ExecutionContext): boolean {
    const roles = this.relefator.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();

    const user = request.user;

    return this.matchRole(roles, user.role);
  }
}
