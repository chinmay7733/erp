import { useState } from "react";

const ExpensesList = () => {
  const data = [
    {
      id: 2901,
      type: "Salary",
      name: "Nathan Smith",
      amount: "$20,000",
      status: "Paid",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/08/2017",
    },
    {
      id: 2902,
      type: "Utility Expense",
      name: "Mike Hussy",
      amount: "$1,500",
      status: "Paid",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "09/08/2017",
    },
    {
      id: 2903,
      type: "Transport",
      name: "David Smith",
      amount: "$1,000",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/06/2010",
    },
    {
      id: 2904,
      type: "Salary",
      name: "Mike Hussy",
      amount: "$15,000",
      status: "Paid",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/03/2010",
    },
    {
      id: 2905,
      type: "Stationary",
      name: "David Smith",
      amount: "$5,500",
      status: "Due",
      phone: "8812005098",
      email: "ndisons@gmail.com",
      date: "10/03/2010",
    },
  ];

  const [selected, setSelected] = useState([]);

  const handleAll = (e) => {
    setSelected(e.target.checked ? data.map((d) => d.id) : []);
  };

  const handleOne = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white border overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">
              <input
                type="checkbox"
                checked={selected.length === data.length}
                onChange={handleAll}
              />
            </th>
            <th className="p-2 text-left">ID</th>
            <th className="p-2 text-left">Expense Type</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Phone</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((e) => (
            <tr key={e.id} className="border-b">
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selected.includes(e.id)}
                  onChange={() => handleOne(e.id)}
                />
              </td>
              <td className="p-2">{e.id}</td>
              <td className="p-2">{e.type}</td>
              <td className="p-2">{e.name}</td>
              <td className="p-2">{e.amount}</td>
              <td className="p-2">
                <span
                  className={`px-3 py-1 text-xs rounded-full text-white ${
                    e.status === "Paid"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {e.status}
                </span>
              </td>
              <td className="p-2">{e.phone}</td>
              <td className="p-2">{e.email}</td>
              <td className="p-2">{e.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesList;
