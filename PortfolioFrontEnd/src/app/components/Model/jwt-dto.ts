export class JwtDto {
    token: string;
    type: string;
    nombreUsuario:string;
    authorities:string[];
    constructor(token:string, type:string, nombreUsuario:string, authorities:string[]){
        this.type = type;
        this.nombreUsuario = nombreUsuario;
        this.authorities = authorities;
        this.token  = token;
    }


}
