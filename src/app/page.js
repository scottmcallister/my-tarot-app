import AutoComplete from '@/components/autocomplete';
import tarotCards from "@/tarot";
import Link from 'next/link';

const Home = () => {
  const tarotNames = tarotCards.map(card => card.name);
  return (
    <div className="content">
      <h1>DnD Tarot</h1>
      <AutoComplete data={tarotNames} />
      <Link href="/tarot/random">
        <button>Random</button>
      </Link>
    </div>
  );
};

export default Home;
