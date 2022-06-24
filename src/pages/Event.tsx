import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';
import Lottie from 'lottie-react-web';
import oops from '../animations/oops.json';

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  const bodyMovinOptions = {
    loop: true,
    prerender: true,
  };

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-1 min-h-screen">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1 h-[600px] items-center">
            <Lottie
              options={{
                animationData: oops,
              }}
            />
            <h1 className="font-bold text-2xl block text-center text-green-300">
              Clique em uma aula para acessar o conteúdo 🛸
            </h1>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
