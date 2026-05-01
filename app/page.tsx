import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import Footer from './components/Footer';
import { casinos } from './data/casinos';
import { headers } from 'next/headers';
import MobileCasinoModal from "@/app/components/MobileCasinoModal";

type PageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const gclid = resolvedSearchParams?.gclid as string | undefined;
  const headersList = await headers();

  const forwarded =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    headersList.get("cf-connecting-ip") ||
    headersList.get("true-client-ip") ||
    headersList.get("x-client-ip") ||
    "";

  let ip = forwarded ? forwarded.split(",")[0].trim() : '';
  const userAgent = headersList.get("user-agent") || "";
  const referer = headersList.get("referer") || "";
  const hasGclid = !!gclid;



  const isOnline = hasGclid;
  const regularCasinos = casinos.filter(casino => !casino.isMobile);
  const mobileCasinos = casinos.filter(casino => casino.isMobile === true);

  return (
    <div className="min-h-screen bg-transparent">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />

      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pb-4 pt-6 text-center sm:pb-6 sm:pt-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex rounded-full border border-amber-500/25 bg-amber-500/8 px-3 py-1.5 shadow-sm">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-amber-400 sm:text-xs">
              Entretenimento Responsável
            </span>
          </div>
          <h1 className="mb-3 text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            A Plataforma Líder de Comparação de Casinos Online Licenciados em Portugal
          </h1>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
            Guia independente especializado na revisão e comparação de operadores de jogo autorizados pelo SRIJ. Avaliações aprofundadas, detalhes sobre bónus e conteúdos educativos para decisões mais informadas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/15 bg-white/[0.04] px-3 py-1.5">
              <span className="text-sm text-amber-400">🛡️</span>
              <span className="text-xs font-semibold text-white/70">Licenciado pelo SRIJ</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-violet-500/15 bg-white/[0.04] px-3 py-1.5">
              <span className="text-sm text-violet-400">⭐</span>
              <span className="text-xs font-semibold text-white/70">Avaliações Independentes</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/15 bg-white/[0.04] px-3 py-1.5">
              <span className="text-sm text-amber-400">🔒</span>
              <span className="text-xs font-semibold text-white/70">Segurança Garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Casino */}
      <section id="casinos" className="container mx-auto px-4 pb-16">
        <div className="mx-auto max-w-lg">
          {regularCasinos.map((casino, index) => (
            <CasinoCard
              key={index}
              casino={casino}
              rank={index + 1}
              badge={index === 0 ? 'gold' : undefined}
            />
          ))}
        </div>

        {/* Section label + disclaimer under card */}
        <div className="mx-auto mt-5 max-w-lg">
          <div className="mb-3 text-center">
            <h2 className="mb-1 text-lg font-extrabold tracking-wide text-amber-400 sm:text-xl">
              Casino em Destaque com Licença Válida
            </h2>
            <p className="text-xs text-white/40 sm:text-sm">
              Analisamos operadores certificados pelo SRIJ e apresentamos comparações objetivas e bem documentadas.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/10 bg-white/[0.025] px-4 py-3 text-center">
            <p className="text-xs leading-relaxed text-white/50 sm:text-sm">
              <strong className="text-white/70">⚠️ Apenas para maiores de 18 anos.</strong> O jogo pode criar dependência. Se precisar de ajuda ligue para a{' '}
              <strong className="text-amber-400">Linha Vida: 1414</strong>{' '}(gratuita, 24h). Jogue com responsabilidade. Sujeito a T&amp;C.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="border-y border-white/[0.06] bg-white/[0.018] py-10 sm:py-14 lg:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-center text-xl font-extrabold text-white sm:mb-8 sm:text-2xl lg:mb-10 lg:text-3xl">
            Conheça o Nosso Serviço de Comparação
          </h2>

          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Criámos este portal para tornar mais simples a pesquisa e avaliação de casinos online acessíveis a jogadores em Portugal. Num mercado em rápido crescimento com dezenas de operadores licenciados, é essencial analisar com rigor aspetos como promoções, variedade de jogos e processos de registo antes de escolher uma plataforma.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Reunimos informações detalhadas e imparciais sobre bónus, funcionalidades e condições de cada operador, para que os visitantes possam tomar decisões esclarecidas e fundamentadas.
            </p>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              Não disponibilizamos jogos nem operamos como casa de jogo. A nossa missão foca-se inteiramente em análises, comparações e conteúdos educativos.
            </p>
          </div>

          {/* Licensed Casinos */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Operadores com Licença do SRIJ
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Todos os casinos listados neste portal possuem uma licença ativa emitida pelo Serviço de Regulação e Inspeção de Jogos (SRIJ), o organismo oficial responsável pela supervisão do jogo online em Portugal. Esta certificação garante conformidade regulamentar, proteção dos jogadores e transparência nas operações.
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Historial e credibilidade comprovada do operador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Diversidade e qualidade do catálogo de jogos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Eficácia e rapidez do apoio ao cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Adoção de boas práticas de jogo responsável</span>
              </li>
            </ul>
          </div>

          {/* Bonuses */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Promoções e Campanhas de Bónus
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Os operadores licenciados em Portugal disponibilizam regularmente ações promocionais, incluindo bónus de boas-vindas, giros gratuitos e ofertas especiais. Organizamos esta informação e destacamos os pontos fundamentais, nomeadamente:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Condições de apostas associadas ao bónus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Valor mínimo de depósito exigido</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Período de validade da oferta promocional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Regras específicas de cada campanha</span>
              </li>
            </ul>
            <p className="mt-4 text-xs italic text-white/35 sm:text-sm">
              Recomendamos a leitura integral dos termos e condições na página oficial do operador antes de aceitar qualquer promoção.
            </p>
          </div>

          {/* Payments */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Pagamentos e Segurança de Dados
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              A proteção das transações é um fator determinante na seleção de um casino online. Os operadores com licença recorrem a tecnologia de encriptação avançada para assegurar a segurança dos dados pessoais e das operações financeiras.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-white/55 sm:text-base">
              Os métodos de pagamento mais frequentes incluem:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Cartões de crédito e débito (Visa, Mastercard)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Carteiras eletrónicas (PayPal, Skrill, Neteller)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Transferências bancárias nacionais e internacionais</span>
              </li>
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div id="responsabilidade" className="mb-6 rounded-2xl border border-amber-500/15 bg-[linear-gradient(135deg,rgba(12,14,26,0.98),rgba(20,12,8,0.98))] p-5 shadow-lg sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-amber-400 sm:text-xl">
              Dedicação ao Jogo Responsável
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/60 sm:text-base">
              As plataformas supervisionadas pelo SRIJ disponibilizam ferramentas criadas para assegurar uma experiência de jogo equilibrada e consciente, incluindo:
            </p>
            <ul className="space-y-2 text-sm text-white/60 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Estabelecimento de limites para depósitos e perdas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Opção de suspensão temporária da conta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Ferramentas de autoexclusão permanente</span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              O jogo deve ser visto exclusivamente como uma forma de lazer. Se tiver dificuldade em controlar os seus hábitos de jogo, procure ajuda junto das organizações de apoio disponíveis em Portugal.
            </p>
          </div>

          {/* Evaluation Criteria */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Como Avaliamos os Operadores
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              As nossas classificações baseiam-se em critérios rigorosos e bem definidos:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Licença ativa e válida emitida pelo SRIJ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Amplitude de slots e jogos de mesa disponíveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Transparência nas regras e condições dos bónus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Competência e disponibilidade do suporte ao cliente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Desempenho e usabilidade em dispositivos móveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Avaliações e comentários de utilizadores reais</span>
              </li>
            </ul>
            <p className="mt-4 text-xs italic text-white/35 sm:text-sm">
              As posições nos nossos rankings são estritamente editoriais e não comerciais. Qualquer operador que perca a licença ou viole requisitos regulamentares será removido de imediato.
            </p>
          </div>

          {/* Regular Info Update */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Conteúdo Continuamente Atualizado
            </h3>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              O setor do jogo online está em permanente evolução, com novas promoções, condições revistas e jogos recém-lançados. Revemos regularmente as nossas análises e tabelas comparativas para assegurar que a informação disponibilizada reflete sempre os dados mais recentes dos operadores autorizados.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-14 lg:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-xl font-extrabold text-white sm:mb-10 sm:text-2xl lg:text-3xl">
            O Que Dizem os Nossos Visitantes
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-white/40 sm:mb-10 sm:text-base">
            Experiências de utilizadores que recorreram a este portal para explorar operadores licenciados e compreender melhor condições, promoções e características dos casinos online em Portugal.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Pedro Almeida</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Encontrei informação fiável sobre operadores certificados pelo SRIJ. As condições dos bónus estão descritas de forma clara, o que tornou a comparação entre plataformas muito mais prática. Um recurso indispensável para quem valoriza dados de qualidade.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Mariana Lopes</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                As explicações sobre RTP e volatilidade foram extremamente úteis. Noutros sites estes temas são tratados de forma complexa, mas aqui estão apresentados com uma linguagem simples e direta. Passei a entender muito melhor como funcionam as slots.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Tiago Nunes</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Como iniciante, tinha muitas dúvidas sobre promoções e as respetivas condições. Este portal apresenta tudo de forma clara e sem exageros. Foi uma ajuda preciosa antes de tomar qualquer decisão.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Catarina Ribeiro</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Saber que todos os operadores listados têm licença do SRIJ dá-me muita confiança. A secção sobre jogo responsável é igualmente muito completa, com informação sobre limites de depósito e mecanismos de autoexclusão.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">André Mendes</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Este portal simplifica muito a comparação entre casinos online. As tabelas são bem organizadas e a informação é precisa e objetiva. Sem promessas inflacionadas, apenas dados concretos para uma análise séria.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Beatriz Correia</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Os conteúdos educativos são um ponto muito forte. Aprendi sobre métodos de pagamento, prazos de levantamento e como interpretar corretamente as regras dos bónus. Um portal que faz realmente a diferença.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies notice */}
      <section id="cookies" className="border-t border-white/[0.06] bg-white/[0.012] py-8 sm:py-10">
        <div className="container mx-auto max-w-4xl px-4">
          <h3 className="mb-4 text-center text-lg font-bold text-white sm:text-xl">
            Política de Cookies
          </h3>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/45 sm:text-sm">
            Este portal utiliza cookies para aprimorar a experiência de navegação, analisar padrões de uso e personalizar os conteúdos exibidos. Alguns cookies são indispensáveis para o correto funcionamento do site, enquanto outros contribuem para a melhoria dos nossos serviços e análise de tráfego. Pode ajustar as suas preferências de cookies em qualquer altura.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
