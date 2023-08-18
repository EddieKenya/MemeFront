import React, { useState } from 'react';
import './Home.module.scss';

export default function Table() {
  const [array, setArray] = useState([]);
  const [inputdata, setInputdata] = useState({
    date: "",
    openingago: "",
    closingago: "",
    agosales: "",
    openingpms: "",
    closingpms: "",
    salespms: "",
    totalsales: ""
  });
  const [index, setIndex] = useState();
  const [bolin, setBolin] = useState(false);
  const {
    date,
    openingago,
    closingago,
    agosales,
    openingpms,
    closingpms,
    salespms,
    totalsales
  } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function addinputdata() {
    if (
      openingago === "" ||
      closingago === "" ||
      agosales === "" ||
      openingpms === "" ||
      closingpms === "" ||
      salespms === "" ||
      totalsales === ""
    ) {
      alert("Enter all the required fields");
    } else {
      const currentDate = new Date().toLocaleDateString();
      setArray([...array, { ...inputdata, date: currentDate }]);
      setInputdata({
        date: "",
        openingago: "",
        closingago: "",
        agosales: "",
        openingpms: "",
        closingpms: "",
        salespms: "",
        totalsales: ""
      });
    }
  }

  function deletedata(i) {
    console.log(i, "this index row wants to be deleted");
    const total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  function updatedata(i) {
    const {
      date,
      openingago,
      closingago,
      agosales,
      openingpms,
      closingpms,
      salespms,
      totalsales
    } = array[i];
    setInputdata({
      date,
      openingago,
      closingago,
      agosales,
      openingpms,
      closingpms,
      salespms,
      totalsales
    });
    setBolin(true);
    setIndex(i);
  }

  function updateinfo() {
    const total = [...array];
    total.splice(index, 1, { ...inputdata });
    setArray(total);
    setBolin(false);
    setInputdata({
      date: "",
      openingago: "",
      closingago: "",
      agosales: "",
      openingpms: "",
      closingpms: "",
      salespms: "",
      totalsales: ""
    });
  }

  return (
    <div>
      <input
        className="table-input"
        type="text"
        value={inputdata.date || ""}
        name="date"
        placeholder="Enter Date"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.openingago || ""}
        name="openingago"
        placeholder="Enter Opening AGO"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.closingago || ""}
        name="closingago"
        placeholder="Enter Closing AGO"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.agosales || ""}
        name="agosales"
        placeholder="Enter AGO Sales"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.openingpms || ""}
        name="openingpms"
        placeholder="Enter Opening PMS"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.closingpms || ""}
        name="closingpms"
        placeholder="Enter Closing PMS"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.salespms || ""}
        name="salespms"
        placeholder="Enter PMS Sales"
        onChange={data}
      />
      <input
        className="table-input"
        type="number"
        value={inputdata.totalsales || ""}
        name="totalsales"
        placeholder="Enter Total Sales"
        onChange={data}
      />
      <button onClick={!bolin ? addinputdata : updateinfo}>
        {!bolin ? `Add data` : `Update data`}
      </button>

      <br />

      <table border="1">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Opening AGO</th>
            <th>Closing AGO</th>
            <th>AGO Sales</th>
            <th>Opening PMS</th>
            <th>Closing PMS</th>
            <th>PMS Sales</th>
            <th>Total Sales</th>
            <th>Actions</th>
          </tr>
          {array &&
            array.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.date}</td>
                  <td>{item.openingago}</td>
                  <td>{item.closingago}</td>
                  <td>{item.agosales}</td>
                  <td>{item.openingpms}</td>
                  <td>{item.closingpms}</td>
                  <td>{item.salespms}</td>
                  <td>{item.totalsales}</td>
                  <td>
                    <button onClick={() => updatedata(i)}>Update</button>
                    <button onClick={() => deletedata(i)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
