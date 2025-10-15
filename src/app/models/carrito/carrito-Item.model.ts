import { ProductoResponse } from "../producto/productoResponse.model";

export interface CarritoItem {
    producto: ProductoResponse,
    cantidad: number
}