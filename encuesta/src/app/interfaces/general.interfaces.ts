export interface CardDataInterface {
  title: string,
  description: string;
  route: string,
  url: string
}

export interface EncuestaDataInterface {
  email: string,
  genero: Array<string>
}

export interface ResultadoDataInterface {
  genero: string;
  count: number;
}
