import tarotCards from "@/tarot";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Tarot Card Meanings</h1>
    <ul>
      {tarotCards.map((card, index) => (
        <li key={index}>
          <Link href={`/tarot/${index}`}>
            {card.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
