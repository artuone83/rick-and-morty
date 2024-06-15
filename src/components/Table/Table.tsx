import React, { ReactNode, useMemo, useState } from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import { Order } from "../../types/enums";
import { getNestedValue } from "./utils/getNestedValue";

export interface Column<T> {
  label: string;
  accessor: string;
  sortable?: boolean;
  renderComponent?: <U extends string>(
    accessorValue: U,
    rowValue: T
  ) => ReactNode;
}

interface TableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  pagination?: ReactNode;
  defaultSortBy?: keyof T;
}

export const Table = <T extends object>({
  data,
  columns,
  pagination,
  defaultSortBy,
}: TableProps<T>): JSX.Element => {
  const [order, setOrder] = useState<Order>(Order.ASC);
  const [sortBy, setSortBy] = useState<string | null>(
    typeof defaultSortBy === "string" ? defaultSortBy : null
  );

  const sortedData = useMemo(() => {
    if (!sortBy) return data;

    const sortedData = [...data].sort((a, b) => {
      const aValue = getNestedValue(a, sortBy);
      const bValue = getNestedValue(b, sortBy);

      if (aValue !== undefined && bValue !== undefined) {
        if (aValue < bValue) {
          return order === Order.ASC ? -1 : 1;
        }
        if (aValue > bValue) {
          return order === Order.ASC ? 1 : -1;
        }
      }

      return 0;
    });

    return sortedData;
  }, [data, order, sortBy]);

  const handleSort = (accessor: string) => {
    const isAsc = sortBy === accessor && order === Order.ASC;
    setOrder(isAsc ? Order.DESC : Order.ASC);
    setSortBy(accessor);
  };

  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.accessor as string}>
                {column.sortable ? (
                  <TableSortLabel
                    active={sortBy === column.accessor}
                    direction={sortBy === column.accessor ? order : Order.ASC}
                    onClick={() => handleSort(column.accessor)}
                  >
                    {column.label}
                  </TableSortLabel>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.accessor}>
                  {column.renderComponent
                    ? column.renderComponent(
                        getNestedValue(row, column.accessor),
                        row
                      )
                    : getNestedValue(row, column.accessor)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      {pagination}
    </TableContainer>
  );
};
