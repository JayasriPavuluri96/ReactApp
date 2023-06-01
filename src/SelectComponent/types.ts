export type SingleSelectProps<T extends { id: number; Name: string }> = {
    users: Array<T>;
    render: (user: T) => string;
};
  