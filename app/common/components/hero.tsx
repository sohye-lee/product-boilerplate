interface HeroProps {
  title: string;
  description?: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="min-h-[200px] flex justify-between items-center flex-col px-5 py-12 w-full bg-gradient-to-b from-purple-500/40 to-muted-foreground/5 rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-3">{title}</h1>
      {description && <p className="text-md text-center">{description}</p>}
    </div>
  );
} 