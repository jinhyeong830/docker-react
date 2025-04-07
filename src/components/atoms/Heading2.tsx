import { classJoin } from '../../utils/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  isCenter?: boolean;
}
export default function Heading2({ children, isCenter, className }: Props) {
  return (
    <h2
      className={classJoin(
        'text-2xl font-bold my-2',
        className || '',
        isCenter ? 'text-center' : 'text-left',
      )}
    >
      {children}
    </h2>
  );
}
