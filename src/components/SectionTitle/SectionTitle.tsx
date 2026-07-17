interface SectionTitleProps {
  title: string;
  subtitle: string;
}

function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">

      <p className="text-blue-400">
        {subtitle}
      </p>

      <h2 className="mt-3 text-5xl font-bold text-slate-50">
        {title}
      </h2>

    </div>
  );
}

export default SectionTitle;