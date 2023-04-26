import { post } from '../service/Service';
import { Postagem } from './Postagem';
export interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string
  postagens?: Postagem[] | null
}

