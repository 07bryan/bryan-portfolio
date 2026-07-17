import Card from "../../components/Card";

interface ImpactCardProps {
  icon: string;
  title: string;
  description: string;
}

function ImpactCard({
  icon,
  title,
  description,
}: ImpactCardProps) {
  return (
    <Card>
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-5 text-2xl font-bold text-slate-100">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </Card>
  );
}

export default ImpactCard;