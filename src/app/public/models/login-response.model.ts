import { PersonaResponse } from "./persona-response.model";
import { RolResponse } from "./rol-response.model";
import { Usuario } from "./usuario.model";

export class LoginResponse {
    success: boolean=false;
    mensaje: string= "";
    token: string= "";
    tokenExpira: string= "";
    usuario: Usuario = new Usuario();
    rol: RolResponse = new RolResponse();
    persona: PersonaResponse = new PersonaResponse();
}