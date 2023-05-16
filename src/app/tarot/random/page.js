import tarotCards from "@/tarot";

export default function Random() {
  const index = Math.floor(tarotCards.length * Math.random());
  const card = tarotCards[index];
  const meaning = card.meaning.split('\n').map(paragraph => <p>{paragraph}</p>);
  return (
    <div>
      <h1>{card.name}</h1>
      <h3>{card.keywords}</h3>
      {meaning}
    </div>
  );
}