interface HeroProps {
  title: string;
  description?: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className="min-h-[200px] flex justify-center items-center flex-col gap-4 px-5 py-8 w-full bg-gradient-to-b from-purple-500/40 to-muted-foreground/5 rounded-xl">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      {description && <p className="text-md text-center">{description}</p>}
    </div>
  );
} 