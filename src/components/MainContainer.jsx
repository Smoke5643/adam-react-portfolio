import React, {useState} from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import pageComponents from './pages'

const pages = Object.keys(pageComponents);

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const Page = () => pageComponents[currentPage]();

    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <Navigation 
      currentPage = {currentPage}
      handlePageChange = {handlePageChange}
      pages = {pages}
      />
      <Page />
    </div>
  );
}