import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RoleGuard implements CanActivate {
    private relefator;
    constructor(relefator: Reflector);
    matchRole: (roles: string[], userRole: string) => boolean;
    canActivate(context: ExecutionContext): boolean;
}
