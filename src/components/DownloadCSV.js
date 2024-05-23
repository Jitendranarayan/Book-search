// src/components/DownloadCSV.js
import React from 'react';
import { CSVLink } from 'react-csv';

const DownloadCSV = ({ data }) => {
  const headers = [
    { label: 'Author', key: 'author_name' },
    { label: 'Title', key: 'title' },
    { label: 'First Publish Year', key: 'first_publish_year' },
    { label: 'Subject', key: 'subject' },
    { label: 'Author Birth Date', key: 'author_birth_date' },
    { label: 'Author Top Work', key: 'author_top_work' },
    { label: 'Ratings Average', key: 'ratings_average' },
  ];

  return (
    <CSVLink data={data} headers={headers} filename="books.csv">
      Download CSV
    </CSVLink>
  );
};

export default DownloadCSV;
