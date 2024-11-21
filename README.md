# Page
``` tsx
import HeroCard from "../components/HeroCard"

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

export default function Home() {
  return (
    <div id="heroes">
      <HeroCard code={getRandomIntInclusive(1,100)}/>
      <HeroCard code={getRandomIntInclusive(100,200)}/>
      <HeroCard code={getRandomIntInclusive(200,300)}/>
      <HeroCard code={getRandomIntInclusive(300,400)}/>
    </div>
  );
}
```

Renderiza um contêiner ```<div>``` com o ID ```heroes```. Dentro desse ```<div>```, o componente ```HeroCard``` é chamado quatro vezes, cada vez com um código gerado aleatoriamente.
Cada ```HeroCard``` vai receber um valor único no atributo ```code```.

Função ```getRandomIntInclusive```:

 * Gera um número aleatório inteiro dentro de um intervalo ```[min, max]```.
 * É usada para selecionar números aleatórios representando códigos de heróis.


# HeroCard

``` jsx
const ACCESS_TOKEN = "4995282617154105";
const BASE_URL = "https://superheroapi.com/api.php/"+ ACCESS_TOKEN;

export default async function HeroCard({code}) {
    const data = await fetch(`${BASE_URL}/${code}`)
    .then(response => response.json())
    .then(json => json);
    return (
      <article>
        <img src={data.image.url}/>
        <h1>{data.name}</h1>
        <p>intelligence: <span style={{width:`${data.powerstats.intelligence}%`, backgroundColor:'#F9B32F'}}></span> </p>
        <p>strength: <span style={{width:`${data.powerstats.strength}%`, backgroundColor:'#FF7C6C'}}></span> </p>
      </article>
    );
  }
  ```

```ACCESS_TOKEN``` e ```BASE_URL``` contêm os valores necessários para fazer requisições à API de super-heróis.
A URL completa da API para acessar um herói específico é formada por ```BASE_URL + "/" + code```.

## Comportamento do Componente

1. **Recebe a prop `code`**:
   - Define o **ID do herói** que será buscado na API.

2. **Faz uma requisição assíncrona**:
   - Utiliza a função `fetch` para buscar os dados da API com o ID fornecido.
   - Os dados da resposta são convertidos para o formato JSON.

3. **Renderiza o componente com os dados do herói**:
   - Exibe:
     - **Imagem do herói**: Renderizada a partir de `data.image.url`.
     - **Nome do herói**: Exibido a partir de `data.name`.
     - **Estatísticas de poder**: Renderizadas com base em `data.powerstats`:
       - **Inteligência (`intelligence`)**: Uma barra com largura proporcional ao valor da inteligência.
       - **Força (`strength`)**: Uma barra com largura proporcional ao valor da força.

# Resultado

![image](https://github.com/user-attachments/assets/06d8f984-6e1e-476b-b15a-b8c60e3df9d5)

# Integrantes

* Thiago de Oliveira Silva - RA: 10427342
* Lucas Giovanneti Motta Horn - RA: 10374691
* Erik Yutaka Takara - RA: 10427684
