interface Props {
  label: string;
  htmlFor: string; // 웹접근성을 위해해
  children: React.ReactNode;
  className?: string;
}

export default function LabelWithInput({ label, htmlFor, children, className }: Props) {
  return (
    <label className="flex justify-between items-center" htmlFor={htmlFor}>
      <span className="text-center inline-block w-full">{label}</span>
      {children}
    </label>
  );
}
