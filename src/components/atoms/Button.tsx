import { classJoin } from '../../utils/utils';

interface Props {
  type: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => {};
  children: React.ReactNode;
}

export default function Button({ type, children, onClick, className }: Props) {
  return (
    <button
      type={type}
      className={classJoin(className || '', 'rounded-md text-white px-4 py-2')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
