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
