import tarotCards from "@/tarot";

export default function Tarot({ params }) {
  const { id } = params;
  const card = tarotCards[id];
  return (
    <div>
      <h1>{card.name}</h1>
      <p>{card.meaning}</p>
    </div>
  );
}