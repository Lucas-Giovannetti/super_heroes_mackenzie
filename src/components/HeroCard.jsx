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
  