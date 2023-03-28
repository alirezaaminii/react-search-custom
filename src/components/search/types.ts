export interface SearchProps {
  placeholder: string;
  label: string;
  onSubmit: (value: string) => void;
  initialValue?: string;
}