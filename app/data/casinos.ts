import { LogoKey } from '../components/CasinoLogos';

export interface Casino {
  name: string;
  logo: LogoKey | string;
  rating: number;
  votes: number;
  bonus: string;
  url: string;
  badge?: string;
  isMobile?: boolean;
}
//

export const casinos: Casino[] = [


   {
    name: "WildTokyo",
    logo: "/wildtokyo.svg",
    rating: 10,
    votes: 9547,
    bonus: "PACOTE DE BOAS-VINDAS OLÍMPICO 260% até 3000€ + 620 Rodadas Grátis",
    url: "https://gowildtokyo.com/duutjrifn?subid=WildTokyo-SRJ78&clickid=",
    badge: "Pagamentos Instantâneos",
    isMobile: true
  },
  {
    name: "WishKing",
    logo: "/WISHKING.svg",
    rating: 9.9,
    votes: 9547,
    bonus: "Bónus de Boas-Vindas Até 6.000€ + 250 GG",
    url: "https://clickwk.com/tzqyjweyi?subid=WishKing-SRJ78&visit_id=",
    badge: "Grandes Bónus e Levantamento Instantâneo",
    isMobile: true
  },
  {
    name: "BetNjet",
    logo: "/BETNEJT.svg",
    rating: 9.8,
    votes: 9547,
    bonus: "RECEBA O BÓNUS DE BOAS-VINDAS 400% ATÉ €1000 + 250 GG",
    url: "https://gtrfk.com/jhtktbtvz?subid=BetNJet-SRJ78&visit_id=",
    badge: "",
    isMobile: true
  },
  {
    name: "SlotRave",
    logo: "/SLOTRAVE.png",
    rating: 9.7,
    votes: 9547,
    bonus: "400% ate 15000€ + 400 GG",
    url: "https://mu.fastmui.com/redirect.aspx?pid=405638&lpid=2713&bid=2172&subid=SlotRave-SRJ78&dynamic2=",
    badge: "",
    isMobile: true
  },
  {
    name: "Bwin",
    logo: "/bwin-l.png",
    rating: 9.9,
    votes: 9547,
    bonus: "Ganhe Até €300 + 25 Giros Grátis!",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159106&btag=Bwin-PT04UM&tpdeh=",
    badge: "Operador em Destaque",
  },



];
