import { Icon } from ".";

type CompetitionCardProps = {
  iconName: string;
  text: string;
  value: string;
};

export function CompetitionCard(props: CompetitionCardProps) {
  const { iconName, text, value } = props;

  return (
    <li className="h-24 group shadow-md p-4 border border-main-500/20 rounded-md flex items-center text-lg gap-4 cursor-pointer">
      <Icon
        name={iconName}
        className="w-8 h-8 text-primary-300 group-hover:text-main-500 transition"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-main-400 group-hover:text-main-500 transition">
          {text}
        </span>
        <span className="font-mono font-semibold text-main-200 group-hover:text-main-500 transition">
          {value}
        </span>
      </div>
    </li>
  );
}
