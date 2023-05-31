export interface DatePickerProps { 
    date: Date,
    onChange(selectedDate: Date): void
}

export interface DatePickerRangeOptions {
    from_date: Date;
    to_date: Date;
    onChange: (fromDate: Date, toDate: Date) => void;
  }