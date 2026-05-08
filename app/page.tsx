import CasinoCard from './components/CasinoCard';
import Header from './components/Header';
import Footer from './components/Footer';
import PublisherDisclosure from './components/PublisherDisclosure';
import { casinos } from './data/casinos';
import { headers } from 'next/headers';
import MobileCasinoModal from "@/app/components/MobileCasinoModal";
import { withGclid } from './lib/affiliateTracking';

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
  const regularCasinos = casinos
    .filter(casino => !casino.isMobile)
    .map(casino => ({ ...casino, url: withGclid(casino.url, gclid) }));
  const mobileCasinos = casinos
    .filter(casino => casino.isMobile === true)
    .map(casino => ({ ...casino, url: withGclid(casino.url, gclid) }));

  return (
    <div className="min-h-screen bg-transparent">
      <MobileCasinoModal mobileCasinos={mobileCasinos} isOnline={isOnline} gclidValue={gclid} />

      <Header />

      {/* Hero */}
      <section className="container mx-auto px-4 pb-4 pt-6 text-center sm:pb-6 sm:pt-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 inline-flex rounded-full border border-violet-500/30 bg-violet-500/[0.09] px-3 py-1.5 shadow-sm">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300 sm:text-xs">
              Jogo Consciente e Seguro
            </span>
          </div>
          <h1 className="mb-3 text-2xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            O Guia Definitivo dos Casinos Online Certificados em Portugal
          </h1>
          <p className="mx-auto mb-5 max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base">
            Portal independente dedicado à análise rigorosa de operadores certificados pelo SRIJ. Revisões detalhadas, informações sobre promoções e conteúdos formativos para que tome decisões mais conscientes e fundamentadas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1.5">
              <span className="text-sm">🛡️</span>
              <span className="text-xs font-semibold text-white/70">Certificado pelo SRIJ</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/[0.06] px-3 py-1.5">
              <span className="text-sm">⭐</span>
              <span className="text-xs font-semibold text-white/70">Análises Imparciais</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.06] px-3 py-1.5">
              <span className="text-sm">🔒</span>
              <span className="text-xs font-semibold text-white/70">Proteção Assegurada</span>
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
              Operador em Destaque com Licença Ativa
            </h2>
            <p className="text-xs text-white/40 sm:text-sm">
              Avaliamos plataformas autorizadas pelo SRIJ e disponibilizamos comparações transparentes e rigorosas.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-500/10 bg-white/[0.025] px-4 py-3 text-center">
            <p className="text-xs leading-relaxed text-white/50 sm:text-sm">
              <strong className="text-white/70">⚠️ Exclusivo para maiores de 18 anos.</strong> O jogo pode causar dependência. Em caso de necessidade, contacte a{' '}
              <strong className="text-amber-400">Linha Vida: 1414</strong>{' '}(gratuita, disponível 24h). Aposte de forma responsável. Sujeito a T&amp;C.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="border-y border-violet-500/[0.07] bg-violet-500/[0.012] py-10 sm:py-14 lg:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-center text-xl font-extrabold text-white sm:mb-8 sm:text-2xl lg:mb-10 lg:text-3xl">
            O Que Fazemos e Como Trabalhamos
          </h2>

          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Desenvolvemos este portal com o objetivo de simplificar a pesquisa de casinos online para jogadores em Portugal. Num setor em expansão acelerada com múltiplos operadores autorizados, é fundamental avaliar criteriosamente aspectos como promoções, catálogo de jogos e facilidade de registo antes de optar por uma plataforma.
            </p>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Compilamos informação completa e neutra sobre bónus, funcionalidades e condições de cada operador, para que os utilizadores possam tomar decisões informadas e seguras.
            </p>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              Não operamos nem disponibilizamos jogos de azar. A nossa atividade centra-se exclusivamente em análises comparativas e conteúdos informativos.
            </p>
          </div>

          {/* Licensed Casinos */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Plataformas Autorizadas pelo SRIJ
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Todos os operadores apresentados neste portal dispõem de uma licença válida emitida pelo Serviço de Regulação e Inspeção de Jogos (SRIJ), a entidade pública responsável pela fiscalização do jogo online em Portugal. Esta homologação assegura conformidade legal, salvaguarda dos utilizadores e transparência operacional.
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Reputação e historial sólido do operador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Amplitude e qualidade da oferta de jogos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Prontidão e eficiência do serviço de apoio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Compromisso com práticas de jogo responsável</span>
              </li>
            </ul>
          </div>

          {/* Bonuses */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Bónus e Ofertas Promocionais
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              Os operadores autorizados em Portugal lançam periodicamente campanhas promocionais, que incluem bónus de boas-vindas, rodadas gratuitas e promoções especiais. Organizamos e sintetizamos essa informação, realçando os aspetos mais relevantes:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Requisitos de rollover aplicáveis ao bónus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Montante mínimo de depósito necessário</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Prazo de utilização da oferta promocional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Condicionantes específicas de cada promoção</span>
              </li>
            </ul>
            <p className="mt-4 text-xs italic text-white/35 sm:text-sm">
              Aconselhamos a consulta integral dos termos e condições no site oficial do operador antes de ativar qualquer oferta.
            </p>
          </div>

          {/* Payments */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Métodos de Pagamento e Proteção de Dados
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              A segurança das transações é um critério essencial na escolha de um casino online. Os operadores licenciados utilizam sistemas de encriptação de elevado nível para garantir a integridade dos dados pessoais e a proteção de todas as operações financeiras.
            </p>
            <p className="mb-3 text-sm leading-relaxed text-white/55 sm:text-base">
              As opções de pagamento habitualmente disponíveis incluem:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Cartões bancários de crédito e débito (Visa, Mastercard)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Carteiras digitais (PayPal, Skrill, Neteller)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">•</span>
                <span>Transferências bancárias nacionais e internacionais</span>
              </li>
            </ul>
          </div>

          {/* Responsible Gambling */}
          <div id="responsabilidade" className="mb-6 rounded-2xl border border-violet-500/20 bg-[linear-gradient(135deg,rgba(8,6,28,0.98),rgba(12,8,24,0.98))] p-5 shadow-lg sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-violet-300 sm:text-xl">
              Compromisso com o Jogo Responsável
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/60 sm:text-base">
              Os operadores regulados pelo SRIJ disponibilizam recursos desenvolvidos para promover uma experiência de jogo saudável e equilibrada, designadamente:
            </p>
            <ul className="space-y-2 text-sm text-white/60 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Configuração de limites de depósito e de perdas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Possibilidade de pausa voluntária da conta</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-violet-400">•</span>
                <span>Mecanismos de autoexclusão definitiva</span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-base">
              O jogo deve ser praticado unicamente como forma de entretenimento. Se sentir dificuldades em gerir o seu comportamento de jogo, contacte as entidades de apoio disponíveis em Portugal.
            </p>
          </div>

          {/* Evaluation Criteria */}
          <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:mb-8 sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              A Nossa Metodologia de Avaliação
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/55 sm:text-base">
              As pontuações atribuídas assentam em parâmetros objetivos e consistentes:
            </p>
            <ul className="space-y-2 text-sm text-white/55 sm:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Licença em vigor, emitida pelo SRIJ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Variedade de slots, mesas e jogos ao vivo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Clareza e equidade nas condições dos bónus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Qualidade e disponibilidade do suporte ao utilizador</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Experiência e desempenho em plataformas móveis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-amber-400">✓</span>
                <span>Opiniões verificadas de jogadores reais</span>
              </li>
            </ul>
            <p className="mt-4 text-xs italic text-white/35 sm:text-sm">
              As classificações publicadas são inteiramente editoriais, sem qualquer influência comercial. Operadores que percam a autorização ou incumpram requisitos legais são removidos imediatamente.
            </p>
          </div>

          {/* Regular Info Update */}
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-5 shadow-sm sm:p-7 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Informação Sempre Atualizada
            </h3>
            <p className="text-sm leading-relaxed text-white/55 sm:text-base">
              O mercado do jogo online evolui constantemente, com promoções renovadas, condições atualizadas e novos títulos em permanente lançamento. Revemos periodicamente as nossas análises e comparativos para garantir que os dados publicados reflitam sempre a realidade mais recente dos operadores autorizados.
            </p>
          </div>

          <PublisherDisclosure />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 sm:py-14 lg:py-18">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-xl font-extrabold text-white sm:mb-10 sm:text-2xl lg:text-3xl">
            A Opinião dos Nossos Utilizadores
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-white/40 sm:mb-10 sm:text-base">
            Testemunhos de pessoas que utilizaram este portal para descobrir operadores certificados e aprofundar o seu conhecimento sobre promoções, condições e funcionalidades dos casinos online em Portugal.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Pedro Almeida</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Encontrei aqui dados sólidos sobre plataformas homologadas pelo SRIJ. As condições dos bónus são apresentadas de forma direta, facilitando muito a comparação entre operadores. Uma referência essencial para quem procura informação de confiança.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Mariana Lopes</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Os conteúdos sobre RTP e volatilidade foram muito esclarecedores. Noutros portais estes conceitos surgem de forma demasiado técnica, mas aqui tudo é explicado de modo claro e acessível. Hoje compreendo muito melhor o funcionamento das slots.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Tiago Nunes</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Enquanto principiante, tinha inúmeras questões sobre promoções e os seus requisitos. Este portal expõe tudo com clareza e sem exageros. Foi um apoio valioso antes de avançar com qualquer escolha.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Catarina Ribeiro</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                A certeza de que todos os operadores apresentados possuem licença do SRIJ transmite-me grande tranquilidade. A área dedicada ao jogo responsável é também muito abrangente, abordando limites de depósito e ferramentas de autoexclusão.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">André Mendes</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Este portal torna a comparação entre casinos online muito mais simples. A informação está bem estruturada, é precisa e totalmente objetiva. Sem promessas exageradas — apenas dados concretos para uma análise fundamentada.
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
              <div className="mb-3 text-sm text-amber-400">★★★★★</div>
              <h4 className="mb-2 text-sm font-bold text-white">Beatriz Correia</h4>
              <p className="text-xs leading-relaxed text-white/45 sm:text-sm">
                Os recursos formativos são um ponto de destaque claro. Aprendi sobre meios de pagamento, prazos de levantamento e como interpretar corretamente as regras associadas aos bónus. Um portal que genuinamente acrescenta valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies notice */}
      <section id="cookies" className="border-t border-white/[0.06] bg-white/[0.012] py-8 sm:py-10">
        <div className="container mx-auto max-w-4xl px-4">
          <h3 className="mb-4 text-center text-lg font-bold text-white sm:text-xl">
            Utilização de Cookies
          </h3>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/45 sm:text-sm">
            Este portal recorre a cookies para melhorar a experiência de navegação, monitorizar padrões de utilização e adequar os conteúdos apresentados. Certos cookies são necessários para o funcionamento correto do site, enquanto outros auxiliam na melhoria dos serviços e na análise de tráfego. As suas preferências de cookies podem ser alteradas a qualquer momento.
          </p>
        </div>
      </section>

      {/* Publisher disclosure */}
      <section className="container mx-auto px-4 pb-8">
        <PublisherDisclosure />
      </section>

      <Footer />
    </div>
  );
}
