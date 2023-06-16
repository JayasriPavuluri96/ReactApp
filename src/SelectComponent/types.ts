export type SingleSelectProps<T extends User> = {
    users: Array<T>;
    render: (user: T) => string;
    onSelect: (user: T) => void;
};

export type User = {
    id: number;
    Name: string
}

