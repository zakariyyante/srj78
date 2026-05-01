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
    name: "Bwin",
    logo: "/bwin-l.png",
    rating: 9.9,
    votes: 9547,
    bonus: "Ganhe Até €300 + 25 Giros Grátis!",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159106&btag=Bwin-PT04UM&tpdeh=",
    badge: "Operador em Destaque",
  },



];
