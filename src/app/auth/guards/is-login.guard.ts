import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isLoginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userJson = localStorage.getItem('user') ?? '{}';
  const user = JSON.parse(userJson);
  if (user.user) {
    return true;
  }
  router.navigateByUrl('/auth/ingresar');
  return false;
};
