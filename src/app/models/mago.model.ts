// MODELO (equivalente a MagoEntity.java en el backend)
// Una "interface" de TypeScript describe la FORMA de los datos que viajan en el JSON.
// No tiene anotaciones de BD (@Entity, @Column): al frontend solo le importa qué campos llegan.
export interface Mago {
  id?: number;      // Opcional (?): al CREAR un mago todavía no tiene id, lo asigna la BD.
  nombre: string;
  casa: string;

}


// Casas disponibles para el <select> del formulario.
export const CASAS = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
