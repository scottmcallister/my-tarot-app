import AutoComplete from '@/components/autocomplete';
import tarotCards from "@/tarot";
import Link from "next/link";

const Home = () => {
  const tarotNames = tarotCards.map(card => card.name);
  return (
    <div>
      <h1>DnD Tarot</h1>
      <AutoComplete data={tarotNames} />
      {/* <ul>
        {tarotCards.map((card, index) => (
          <li key={index}>
            <Link href={`/tarot/${index}`}>
              {card.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Home;
