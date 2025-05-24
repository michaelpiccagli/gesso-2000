import '../styles/about.css';
import imgProfile2 from '../assets/img/michael-2.jpg';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="typing no-select">Sobre mim</h2>
          </div>
        </div>
        <div className="row">
          <div className="image-about no-select">
            <div className="img-box inner-shadow">
              <img
                src={imgProfile2} alt="Foto de Michael Piccagli, desenvolvedor Front-end"
                className="outer-shadow"
              />
            </div>
          </div>
          <div className="informations-about no-select">
            <p>
              <strong>Olá! Meu nome é Michael Piccagli, sou bacharel em Sistemas de Informação</strong>
              E atualmente estou desenvolvendo minhas hard skills de front-end com o curso DevQuest em formação! Sou
              apaixonado por tecnologia e acredito no poder do aprendizado contínuo. Após anos atuando como eletricista, decidi migrar para a área de tecnologia, onde encontrei minha verdadeira
              vocação. Sou bacharel em Sistemas de Informação, formação na qual adquiri conhecimentos em redes de
              computadores, segurança da informação, desenvolvimento de sistemas, engenharia de software, UML e gestão de
              projetos. Atualmente, estou focado no desenvolvimento Front-End, criando projetos pessoais com foco em
              responsividade, código limpo e design intuitivo.
            </p>
            <p>
              Estou sempre me desafiando com novos projetos, atualmente estou
              concluindo o Curso DevQuest com mentorias em grupo. O curso é
              focado no desenvolvimento web front-end e tem uma comunidade com
              mais de 400 pessoas que ajuda muito quem está iniciando, assim
              posso aprender e ensinar o que aprendi ao mesmo tempo.
            </p>
            <p>
              Ah, gosto de todos os tipos de jogos, filmes de ação/terror,
              séries principalmente relacionadas a tecnologia, animes e outras
              nerdices.
            </p>
            <div className="btn glow-on-hover">
              <a
                href="/documents/MichaelPiccagli_DevWebFrontEndJunior.pdf" target="_blank" rel="noopener noreferrer" className="btn">Veja meu CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
