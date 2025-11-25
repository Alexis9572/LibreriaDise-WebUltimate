import { PersonaRequest } from "../persona/persona-model-request.model";

export class UsuarioVRequest {
    rolId: number=0;
    id: number=0;
    personaId: number=0;
    usuario1: string="";
    contrasenia: string="";
    documento: string="";
    persona: PersonaRequest [] =[];
}