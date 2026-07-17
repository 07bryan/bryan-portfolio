import Card from "../../components/Card";
import { aboutStats } from "../../data/about.ts";

function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-5">

      {aboutStats.map((item) => (
        <Card key={item.label}>

          <h3 className="text-4xl font-bold text-blue-500">
            {item.value}
          </h3>

          <p className="mt-2 text-slate-400">
            {item.label}
          </p>

        </Card>
      ))}

    </div>
  );
}

export default AboutStats;