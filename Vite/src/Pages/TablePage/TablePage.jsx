import React, { useState } from "react";
import "./TablePage.module.scss";
import TableRow from "../../components/TableRow/TableRow";

export default function Table({ data, setData }) {
  function removeRowData(id) {
    setData(data.filter((item) => item.id !== id));
  }

  return (
    <div className="table">
      <table className="container">
        <thead>
          <tr>
            <th>Английский</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <TableRow
              key={person.id}
              {...person}
              removeRowData={removeRowData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
