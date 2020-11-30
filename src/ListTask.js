import React from "react";

const ListTask = ({tasks}) => {
  return (
    <>
      <h3>Todo List</h3>
      <table>
        <thead>
        <tr>
          <th>
            Task
          </th>
          <th>&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {Array.isArray(tasks) ? tasks.map(t => (
          <tr key={t.id}>
            <td>{t.description}</td>
          </tr>
        )) : null}
        </tbody>
      </table>
    </>
  )
}

export default ListTask;
