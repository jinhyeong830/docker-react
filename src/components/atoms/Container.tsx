import { classJoin } from '../../utils/utils';

interface Props {
  isCenter?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Container({ children, className, isCenter }: Props) {
  return (
    <div
      className={classJoin(
        className || '',
        isCenter ? 'text-center' : 'text-left',
        'mx-auto max-w-[1000px] px-4',
      )}
    >
      {children}
    </div>
  );
}
