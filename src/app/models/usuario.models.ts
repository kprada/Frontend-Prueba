export class Usuario{
    constructor(
        public nombre: string,
        public apellido: string,
        public email: string,
        public password :string,
        public avatar?: string,
        public fecha_nacimiento?: string,
        public pais?: string,
        public ciudad?: string,
        public tipo_usuario?: string,
       


    ){}
}


