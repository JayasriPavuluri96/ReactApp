import { PageNavigation } from "./PageNavigation";
import { PageSizeDropdown } from "./PageSizeDropdown";
import "./index.css";
import { IPageSizeOptions } from "./types";
import { useState } from "react";

export type PaginationProps = {
  PageSizeOptions: Array<IPageSizeOptions>;
  defaultPageSize: string;
};

export const Pagination = ({
  PageSizeOptions,
  defaultPageSize,
}: PaginationProps) => {
  const [selectedSize, setSelectedSize] = useState(defaultPageSize);
  return (
    <div className="pagination">
      <PageSizeDropdown
        PageSizeOptions={PageSizeOptions}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <PageNavigation />
    </div>
  );
};
