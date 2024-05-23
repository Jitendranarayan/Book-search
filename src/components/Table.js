// src/components/Table.js
import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import EditableCell from './EditableCell';
import './Table.css';

const Table = ({ data, loading, updateData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Author Name',
        accessor: 'author_name',
        Cell: EditableCell,
      },
      {
        Header: 'Title',
        accessor: 'title',
        Cell: EditableCell,
      },
      {
        Header: 'First Publish Year',
        accessor: 'first_publish_year',
        Cell: EditableCell,
      },
      {
        Header: 'Subject',
        accessor: 'subject',
        Cell: EditableCell,
      },
      {
        Header: 'Author Birth Date',
        accessor: 'author_birth_date',
        Cell: EditableCell,
      },
      {
        Header: 'Author Top Work',
        accessor: 'author_top_work',
        Cell: EditableCell,
      },
      {
        Header: 'Ratings Average',
        accessor: 'ratings_average',
        Cell: EditableCell,
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data, updateData }, useSortBy, usePagination);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted
                    ? column.isSortedDesc
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
