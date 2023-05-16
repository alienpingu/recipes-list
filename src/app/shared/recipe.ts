import { Item } from "./item";

export interface Recipe {
    name: string,
    description: string, 
    image: string,
    list: Item[]
}
