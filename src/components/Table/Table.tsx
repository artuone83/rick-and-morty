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
  Button,
} from "@mui/material";
import { Order } from "types/enums";
import { getNestedValue } from "./utils/getNestedValue";

type CharacterAccessor<T> =
  | (keyof T extends string ? keyof T : never)
  | `${string & keyof T}.${string}`;

export interface Column<T> {
  label: string;
  accessor: CharacterAccessor<T>;
  sortable?: boolean;
  renderComponent?: (accessorValue: unknown, rowValue: T) => ReactNode;
}

interface TableProps<T extends object> {
  data: T[];
  columns: Column<T>[];
  pagination?: ReactNode;
  defaultSortBy?: keyof T;
  rowActions?: {
    name: string;
    handler: (rowValue: T) => void;
  }[];
}

export const Table = <T extends { id: string | number }>({
  data,
  columns,
  pagination,
  defaultSortBy,
  rowActions,
}: TableProps<T>): JSX.Element => {
  const [order, setOrder] = useState<Order>(Order.ASC);
  const [sortBy, setSortBy] = useState<string | null>(
    typeof defaultSortBy === "string" ? defaultSortBy : null
  );

  const results = useMemo(() => {
    if (!sortBy) {
      return data;
    }

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
              <TableCell key={column.accessor}>
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
            {rowActions && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {(results || []).map((row) => (
            <TableRow key={row.id}>
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
              {rowActions && (
                <TableCell>
                  {rowActions.map((action) => (
                    <Button
                      key={action.name}
                      variant="outlined"
                      color="info"
                      onClick={() => action.handler(row)}
                      size="small"
                    >
                      {action.name}
                    </Button>
                  ))}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
      {pagination}
    </TableContainer>
  );
};
