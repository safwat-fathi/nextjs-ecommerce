export interface Categories {
  id: number;
  name: string;
  description: string;
}

export interface HomeProps {
  categories: Categories[];
}
