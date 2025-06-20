export interface Casino {
  brand: string;
  lobbySite: string;
  helpSite: string;
  language: string | string[];
  region: string;
  username: string;
  password: string;
  login(): void;
}

export type CasinoConfig = {
  brand: string;
  lobbySite: string;
  helpSite: string;
  language: string | string[];
  region: string;
  username: string;
  password: string;
};


export class BetwayCasino implements Casino {
  brand: string;
  lobbySite: string;
  helpSite: string;
  language: string | string[];
  region: string;
  username: string;
  password: string;

  constructor(config: CasinoConfig) {
    this.brand = config.brand;
    this.lobbySite = config.lobbySite;
    this.helpSite = config.helpSite;
    this.language = config.language;
    this.region = config.region;
    this.username = config.username;
    this.password = config.password;
  }

  login(): void {
    console.log(`Logging in to ${this.brand} as ${this.username}`);
  }
}


export class CasinoFactory {
  static createCasino(brand: string, config: CasinoConfig): Casino {
    switch (brand.toLowerCase()) {
      case "betway":
        return new BetwayCasino(config);
      case "spin":
        // return new SpinCasino(config);
      default:
        throw new Error(`Unsupported casino brand: ${brand}`);
    }
  }
}
