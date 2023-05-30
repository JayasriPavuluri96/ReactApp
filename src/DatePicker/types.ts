import { Dispatch, SetStateAction } from "react";

export interface DatePickerProps {
    //render(date: Date): string, 
    date: Date,
    onChange(selectedDate: Date): void
}