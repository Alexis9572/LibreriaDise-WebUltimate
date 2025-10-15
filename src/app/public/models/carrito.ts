import { ProductoResponse } from "../../models/producto/productoResponse.model";
import { Producto } from "./producto";

export interface CarritoItem {
    producto: ProductoResponse,
    cantidad: number
}
