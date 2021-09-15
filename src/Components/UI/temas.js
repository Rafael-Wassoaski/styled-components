import {
  corPrimaria,
  fundoClaro,
  textoFundoClaro,
  conteudoClaro,
  fundoEscuro,
  textoFundoEscuro,
  conteudoEscuro
} from "./variaveis";

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  texto: textoFundoClaro,
}

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  texto: textoFundoEscuro,
  filter: "invert(100)"
}
