import Container from '../atoms/Container';
interface Props {
  isCenter?: boolean;
  children: React.ReactNode;
}
export default function Main({ children, isCenter }: Props) {
  return (
    <main>
      <Container isCenter={isCenter}>{children}</Container>
    </main>
  );
}
