// ⚔️ RETO 1: El Pergamino del Hechizo (Modelo)
// Así como Mago (mago.model.ts) refleja a MagoEntity.java, esta interfaz debe reflejar HechizoEntity.java.
//
// RETO 1.1: Agrega los campos que llegan en el JSON del backend:
//   - nombre      → texto
//   - tipoMagia   → texto
//   - nivelPoder  → número
// PISTA: los nombres deben ser IDÉNTICOS a los atributos de HechizoEntity.java (Jackson los usa tal cual).
export interface Hechizo {
  id?: number; // Opcional: al crear un hechizo todavía no tiene id.
  nombre: string;
  tipoMagia: string;
  nivelPoder: number;// Escribe aquí los demás campos:
}

// RETO 1.2: Llena la lista con los tipos de magia, en este orden: Fuego, Agua, Tierra, Aire, Oscura.
// ("Oscura" va incluida a propósito: el Manager del backend la rechaza y queremos ver ese error 400).
export const TIPOS_MAGIA: string[] = [ 
  "Fuego" ,
  "Agua" ,
  "Tierra",
  "Aire",
  "Oscura",
];


