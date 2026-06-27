import "./App.css";

export default function App() {
  return (
    <div className="page-wrapper">
      <div className="envelope-shadow">
        <article className="letter-card">

          {/* Ornamental top border */}
          <div className="gold-ornament top-ornament" aria-hidden="true">
            <span className="ornament-line" />
            <span className="ornament-diamond">◆</span>
            <span className="ornament-line" />
          </div>

          {/* Header */}
          <header className="letter-header">
            <p className="letter-eyebrow">Para nossa líder</p>
            <h1 className="letter-name">Gláucia</h1>
            <span className="letter-heart" aria-hidden="true">❤</span>
            <p className="letter-subtitle">
              "Uma pequena lembrança de quem caminha com você."
            </p>
          </header>

          {/* Divider */}
          <div className="gold-ornament mid-ornament" aria-hidden="true">
            <span className="ornament-line short" />
            <span className="ornament-diamond small">◆</span>
            <span className="ornament-line short" />
          </div>

          {/* Body */}
          <section className="letter-body">
            <p>
              Sua caminhada na liderança está apenas começando, mas já
              enxergamos seu carinho, dedicação e disposição para servir.
            </p>
            <p>
              Que Deus continue fortalecendo sua vida, dando sabedoria em
              cada decisão e renovando suas forças a cada desafio.
            </p>
            <p>
              Conte com a JUBRAC nessa caminhada. Estamos juntos, orando por
              você e acreditando no propósito que Deus confiou às suas mãos.
            </p>
            <p>
              Que este seja apenas o começo de uma jornada marcada por fé,
              crescimento e vidas alcançadas através do seu servir.
            </p>
            <p>
              Seguiremos caminhando ao seu lado, confiando que Deus
              continuará conduzindo cada passo.
            </p>
          </section>

          {/* Footer */}
          <footer className="letter-footer">
            <div className="gold-ornament mid-ornament" aria-hidden="true">
              <span className="ornament-line short" />
              <span className="ornament-diamond small">◆</span>
              <span className="ornament-line short" />
            </div>
            <p className="footer-closing">Com carinho,</p>
            <p className="footer-signature">
              Família JUBRAC <span className="letter-heart small" aria-hidden="true">❤</span>
            </p>
          </footer>

          {/* Bottom ornament */}
          <div className="gold-ornament top-ornament bottom-ornament" aria-hidden="true">
            <span className="ornament-line" />
            <span className="ornament-diamond">◆</span>
            <span className="ornament-line" />
          </div>

        </article>
      </div>
    </div>
  );
}
