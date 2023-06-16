import { useEffect, useRef, useState } from "react";
import "./select.css";

export type SelectOption = {
  label: string;
  value: any;
};

export type MultiSelectProps = {
  multiple?: true;
  value?: SelectOption[];
  onChange: (value: SelectOption[] | undefined) => void;
};

export type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultiSelectProps);

export const MultiSelect = ({
  multiple,
  value,
  options,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highLightedIndex, setHighLightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value?.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        if (value != undefined) {
          onChange([...value, option]);
        }
      }
    } else {
      if (option !== value) {
        onChange(option);
      }
    }
  };

  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value?.includes(option) : option == value;
  };

  useEffect(() => {
    if (isOpen) setHighLightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highLightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown":{
          if (!isOpen) {
            setIsOpen(true);
            break
          }
          const newValue =
            highLightedIndex + (e.code === " ArrowDown" ? 1 : -1)
           if(newValue >=0 && newValue < options.length){
            setHighLightedIndex(newValue)
           } 
          break;
        }
          case "Escape":
            setIsOpen(false)
            break
      }
    };
    containerRef.current?.addEventListener("keydown", handler);
    return () => {
      containerRef.current?.removeEventListener("keydown", handler);
    };
  }, [isOpen, highLightedIndex, options]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={(prev) => setIsOpen(!prev)}
      tabIndex={0}
      className="container"
    >
      <span className="value">
        {multiple
          ? value?.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className="option-badge"
              >
                {v.label}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : value?.label}{" "}
      </span>
      <button
        className="clear-btn"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        {" "}
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={'$options ${isOpen ? "show" : ""}'}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation;
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighLightedIndex(index)}
            key={option.value}
            className={
              '$option ${isOptionSelected(option) ? "selected" : ""} ${ index===highlightedIndex ? highlighted:""}'
            }
          >
            {option.label}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
};
