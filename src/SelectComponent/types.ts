export type SingleSelectProps<T extends unknown> = {
  users: Array<T>;
  render: (user: T) => string;
  onChange: (user:T) => void;
  user: T;
};
