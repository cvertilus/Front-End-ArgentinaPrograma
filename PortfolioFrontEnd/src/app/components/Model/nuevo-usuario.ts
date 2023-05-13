export class NuevoUsuario {
    nombre:string;
    nombreUsuario:string;
    email:string;
    password:string;
    
    constructor(nombre:string,nombreUsuario:string,email:string,contrasena:string){
        this.nombre = nombre
        this.password = contrasena
        this.email =email
        this.nombreUsuario = nombreUsuario
    }
    
}
