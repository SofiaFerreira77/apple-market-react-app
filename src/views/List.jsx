import React from "react";
import Refinements from "../components/ProductRefinements";
import List from "../components/ProductList";

const ListPage = props => {
  return (
    <main className="List">
        <Refinements />
        <List />
    </main>
  )
}

export default ListPage