import Link from "next/link";

interface PokemonCardProps {
  name: string;
}
const PokemonCard = ({ name }: PokemonCardProps) => {
  return (
    <Link
      href={name}
      className="m-4 group rounded-lg border border-transparent px-5 py-4 transition-colors dark:border-gray-500 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "Card"}
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>{name.charAt(0).toUpperCase()+name.slice(1)}</h2>
    </Link>
  );
};

export default PokemonCard;
