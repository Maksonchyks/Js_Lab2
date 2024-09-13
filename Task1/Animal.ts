export interface Animal {
    name: string;             
    age?: number;           
    move(): void;              
    makeSound?(): void;        
}