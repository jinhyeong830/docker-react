import { classJoin } from '../../utils/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
  isCenter?: boolean;
}

export default function Heading1({ children, className, isCenter }: Props) {
  return (
    <h1
      className={classJoin(
        'text-3xl font-bold my-2',
        className || '',
        isCenter ? 'text-center' : 'text-left',
      )}
    >
      {children}
    </h1>
  );
}
