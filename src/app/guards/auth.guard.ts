import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem("token")
  if(token)
  {
     return true;
  } 
  const router = new Router();
  router.navigate(['/login']);
  return false
};
