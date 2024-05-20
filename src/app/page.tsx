import { Header } from './components/header/header';
import { Section } from './section/section';
import { Sidebar } from './sidebar/sidebar';

export default function Home() {
  return (
    <main>
      <Header />
      <Sidebar />
      <Section />

    </main>
  );
}
