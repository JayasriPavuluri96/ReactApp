export type SingleSelectProps<Type> = {
    user: User<Type>;
    render: () => string;
}


export type User<Type> = {
    id: number,
    Name: Type,
}