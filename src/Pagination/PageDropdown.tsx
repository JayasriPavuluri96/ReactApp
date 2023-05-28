import { RefObject } from "react";
import { IPageSizeOptions } from "./types";

export type PageDropdownProps = {
  PageSizeOptions: Array<IPageSizeOptions>;
  onClick: (sizeLabel: string) => void;
};

export const PageDropdown = ({
  PageSizeOptions,
  onClick,
}: PageDropdownProps) => {
  return (
    <div className="pagination-pagesize-card">
      {PageSizeOptions.map((size) => (
        <span
          className="pagination-pagesize-values"
          onClick={() => onClick(size.label)}
        >
          {size.label}
        </span>
      ))}
    </div>
  );
};
