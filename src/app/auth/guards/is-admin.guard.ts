import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const userJson = localStorage.getItem('user') ?? '{}';
  const user = JSON.parse(userJson);
  if (user.user) {
    if (user.rol == 'admin') {
      return true;
    } else {
      router.navigateByUrl('/home');
      return false; 
    }
  }
  router.navigateByUrl('/auth/ingresar');
  return false;
};
