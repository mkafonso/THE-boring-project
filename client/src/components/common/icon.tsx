import sprites from "../../assets/sprites.svg";

type IconProps = {
  name: string;
  className: string;
};

export function Icon(props: IconProps) {
  const { name, className } = props;

  return (
    <svg className={className}>
      <use xlinkHref={`${sprites}#${name}`} />
    </svg>
  );
}
