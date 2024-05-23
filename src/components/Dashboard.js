// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Table from './Table';
import Pagination from './Pagination';
import DownloadCSV from './DownloadCSV';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [currentPage, recordsPerPage]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter(book =>
        book.author_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [searchQuery, data]);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://openlibrary.org/search.json?q=the+lord+of+the+rings'); 
      setData(response.data.docs);
      setFilteredData(response.data.docs);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const updateData = (rowIndex, columnId, value) => {
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-controls">
          <input
            type="text"
            placeholder="Search by author"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <DownloadCSV data={filteredData} />
        </div>
      </div>
      {error && <div>Error: {error.message}</div>}
      <Table data={filteredData} loading={loading} updateData={updateData} />
      <Pagination
        totalRecords={filteredData.length}
        recordsPerPage={recordsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </div>
  );
};

export default Dashboard;
