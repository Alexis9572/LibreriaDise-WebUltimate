import { LoginResponse } from "../../public/models/login-response.model";

export class UsuarioVResponse {
    rolId: number=0;
    id: number=0;
    personaId: number=0;
    usuario1: string="";
    contrasenia: string="";
    documento: string="";
    loginResponse: LoginResponse = new LoginResponse()
}