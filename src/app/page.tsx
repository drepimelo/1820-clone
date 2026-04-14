import Hero from "./components/Hero";
import OverlaySection from "./components/OverlaySection";

export default function Home() {
  return (
    <main>
        <Hero />
        <OverlaySection title="Portfolio"
          headline="Um catálogo de histórias incríveis."
          buttonText="Explorar projetos"
          text_content="Bora dar uma olhadinha em alguns clientes que se encantaram pelos serviços da Pupila?"
          buttonHref="#"
          id="work"
          backgroundImage="https://i.imgur.com/ooURG34.jpeg"
        />
        <OverlaySection title="Trabalhos"
          headline="Produção criativa. Entrega sem complicação."
          buttonText="Quero detalhes"
          text_content="Do conceito à tela, cuidamos de tudo. Nossos serviços incluem: planejamento de pré-produção, cinematografia, edição de pós-produção, motion graphics e muito mais. Damos vida à sua visão com criatividade e precisão."
          buttonHref="#"
          id="services"
          backgroundImage="https://i.imgur.com/zodIQk4.jpeg"
        />
        <OverlaySection title="Sobre nós"
          headline="Somos uma empresa júnior de audiovisual do DF. "
          text_content="Criada na Universidade de Brasília, o nosso objetivo é transformar o conteúdo da sua empresa em uma obra cinematográfica. Nossa equipe é formada por universitários que são movidos pela paixão em transformar ideias em histórias, imagens e vídeos que emocionem e te tragam retorno."
          buttonText="Oi, prazer"
          buttonHref="#"
          id="about"
          backgroundImage="https://www.pupilaaudiovisual.com.br/assets/pupila3.png"
        />
        <OverlaySection title="Bastidores"
          headline="Você não viu nada ainda"
          text_content="Entre takes perfeitos e erros melhores ainda, é aqui que tudo acontece de verdade. Ideias surgem do nada, planos mudam no meio do caminho e o improviso vira destaque. Sem roteiro, sem filtro — só o processo real de transformar caos criativo em algo que vale o play."
          buttonText="Dar uma olhada"
          buttonHref="#"
          id="about"
          backgroundImage="https://www.pupilaaudiovisual.com.br/assets/Bastidores.png"
        />
    </main>
  );
}