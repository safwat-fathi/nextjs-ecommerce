export interface Categories {
  id: number;
  name: string;
  url: string;
}

export interface HomeProps {
  categories: Categories[];
}
