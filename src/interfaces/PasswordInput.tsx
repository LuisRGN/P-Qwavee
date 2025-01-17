export interface PasswordInputProps {
    id: string;
    placeholder: string;
    value: string;
    required?: boolean;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    'aria-label'?: string
}