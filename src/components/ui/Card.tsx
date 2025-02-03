interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg ${className}`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  )
}