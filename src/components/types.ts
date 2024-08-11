export type Option = {
    id: number;
    value: string;
}

export interface SelectedCityProps {
    options: Option[];
    selectedCity: string;
    handleSelectedCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  