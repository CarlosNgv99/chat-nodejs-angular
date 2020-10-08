export interface Mensaje {
    idUsuario: number,
    contenido: string,
    sala: number,
    estado_eliminado:boolean,
    nombreEmisor: string,
    fecha_envio?: string,
    contenido_eliminado: string
}