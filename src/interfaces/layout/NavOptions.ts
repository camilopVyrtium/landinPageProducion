export interface NavbarOption {
    title: string;
    endpoint: string;
    subOptions?: NavbarOption[];
  }