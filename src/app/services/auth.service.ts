import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000/api'; // La Url que corresponda en cada caso
  token: any;

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login(email: string, password: string) {
    this.http.post(this.uri + '/authenticate', {email: email, password: password})
      .subscribe((resp: any) => {
        // Redirecciona al usuario a su perfil
        this.router.navigate(['home']);
        // Guarda el token en localStorage
        localStorage.setItem('auth_token', resp.token);
      })
  };

  // Para cerrar la sesion se elimina el token
  logout() {
    localStorage.removeItem('token');
  }

  // Un metodo para verificar si existe la sesion
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
