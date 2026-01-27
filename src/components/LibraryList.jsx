import { useState } from "react";
import {
  FiGlobe,
  FiMail,
  FiBell,
  FiSearch,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiX,
  FiRefreshCw,
} from "react-icons/fi";
import { MdOutlineSchool } from "react-icons/md";

/* SAMPLE DATA */
const initialBooks = Array.from({ length: 20 }, (_, i) => ({
  id: 2901 + i,
  name: "English Grammar",
  writer: "John Smith",
  subject: "English",
  class: (i % 6) + 1,
  year: 2017,
  date: "24/08/2017",
}));

const LibraryList = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchId, setSearchId] = useState("");
  const [searchWriter, setSearchWriter] = useState("");
  const [deleteBook, setDeleteBook] = useState(null);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);

  /* 🔍 FILTER */
  const filteredBooks = books.filter((book) => {
    const matchId =
      searchId === "" || book.id.toString().includes(searchId);
    const matchWriter =
      searchWriter === "" ||
      book.writer.toLowerCase().includes(searchWriter.toLowerCase());
    return matchId && matchWriter;
  });

  /* ✅ CHECKBOX LOGIC */
  const isAllSelected =
    filteredBooks.length > 0 &&
    selectedIds.length === filteredBooks.length;

  const toggleSelectAll = () => {
    setSelectedIds(isAllSelected ? [] : filteredBooks.map((b) => b.id));
  };

  const toggleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  /* 🔄 REFRESH */
  const handleRefresh = () => {
    setBooks(initialBooks);
    setSelectedIds([]);
    setSearchId("");
    setSearchWriter("");
  };

  /* 🗑 SINGLE DELETE */
  const confirmDelete = () => {
    setBooks((prev) => prev.filter((b) => b.id !== deleteBook.id));
    setSelectedIds((prev) =>
      prev.filter((id) => id !== deleteBook.id)
    );
    setDeleteBook(null);
  };

  /* 🗑 BULK DELETE */
  const confirmBulkDelete = () => {
    setBooks((prev) =>
      prev.filter((b) => !selectedIds.includes(b.id))
    );
    setSelectedIds([]);
    setBulkDeleteOpen(false);
  };

  return (
    <div className="w-full p-4 bg-gray-100 min-h-screen">
      {/* 🔹 TOP BAR */}
      <div className="bg-white rounded-md shadow-sm p-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-center gap-1 text-gray-700">
          <MdOutlineSchool className="text-xl text-yellow-500" />
          <span className="font-semibold">
            Welcome To Akkhor
            <span className="text-gray-400 font-normal">
              {" "}
              School Management System
            </span>
          </span>
        </div>

        <div className="relative w-full lg:w-60">
          <FiSearch className="absolute right-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full pl-5 pr-3 py-2 bg-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-400 outline-none"
          />
        </div>

        <div className="flex items-center gap-5 text-sm text-gray-600">
          <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
            <FiGlobe />
            <select className="bg-transparent outline-none">
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className="relative bg-gray-100 rounded-full p-2">
            <FiMail />
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              5
            </span>
          </div>

          <div className="relative bg-gray-100 rounded-full p-2">
            <FiBell />
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              9
            </span>
          </div>
        </div>
      </div>

      {/* 🔹 TABLE CARD */}
      <div className="bg-white rounded shadow mt-4">
        {/* HEADER */}
        <div className="flex flex-wrap items-center justify-between p-4 border-b gap-2">
          <h2 className="font-semibold text-gray-700">All Book List</h2>

          {/* 🔹 HEADER ACTIONS */}
          <div className="flex gap-2 flex-wrap items-center">
            <input
              type="text"
              placeholder="ID Type Here..."
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className=" rounded-2xl bg-gray-100 px-3 py-1 text-sm"
            />
            <input
              type="text"
              placeholder="Writer Name..."
              value={searchWriter}
              onChange={(e) => setSearchWriter(e.target.value)}
              className=" rounded-2xl  bg-gray-100 px-3 py-1 text-sm"
            />

            {/* 🔄 REFRESH */}
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1 px-3 py-1 text-sm rounded-2xl bg-gray-100   hover:bg-gray-100"
            >
              <FiRefreshCw /> Refresh
            </button>

            {/* 🗑 BULK DELETE */}
            {selectedIds.length > 0 && (
              <button
                onClick={() => setBulkDeleteOpen(true)}
                className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded"
              >
                <FiTrash2 />
                Delete ({selectedIds.length})
              </button>
            )}
          </div>
        </div>

        {/* 🔹 SCROLLABLE TABLE */}
        <div className="overflow-x-auto">
          <div className="h-[420px] overflow-y-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="p-2 pl-1 w-10">
                    <input
                      type="checkbox"
                      checked={isAllSelected}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  {[
                    "ID",
                    "Book Name",
                    "Writer",
                    "Subject",
                    "Class",
                    "Year",
                    "Creating Date",
                    "Action",
                  ].map((h) => (
                    <th key={h} className="p-2 font-medium text-gray-600">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredBooks.map((book, i) => (
                  <tr
                    key={book.id}
                    className={`${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100`}
                  >
                    <td className="p-2 pl-1 w-10">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(book.id)}
                        onChange={() => toggleSelectOne(book.id)}
                      />
                    </td>
                    <td className="p-2">#{book.id}</td>
                    <td className="p-2">{book.name}</td>
                    <td className="p-2">{book.writer}</td>
                    <td className="p-2">{book.subject}</td>
                    <td className="p-2 text-center">{book.class}</td>
                    <td className="p-2 text-center">{book.year}</td>
                    <td className="p-2">{book.date}</td>
                    <td className="p-2">
                      <div className="flex gap-2 text-lg">
                        <FiEye className="text-green-600 cursor-pointer" />
                        <FiEdit2 className="text-blue-600 cursor-pointer" />
                        <FiTrash2
                          className="text-red-600 cursor-pointer"
                          onClick={() => setDeleteBook(book)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-3 text-xs text-gray-500 border-t">
          © Copyrights akkhor 2017. All rights reserved.
        </div>
      </div>

      {/* 🔴 SINGLE DELETE MODAL */}
      {deleteBook && (
        <ConfirmModal
          title="Confirm Delete"
          onClose={() => setDeleteBook(null)}
          onConfirm={confirmDelete}
        >
          Delete <strong>{deleteBook.name}</strong>?
        </ConfirmModal>
      )}

      {/* 🔴 BULK DELETE MODAL */}
      {bulkDeleteOpen && (
        <ConfirmModal
          title="Delete Selected Books"
          onClose={() => setBulkDeleteOpen(false)}
          onConfirm={confirmBulkDelete}
        >
          Are you sure you want to delete{" "}
          <strong>{selectedIds.length}</strong> books?
        </ConfirmModal>
      )}
    </div>
  );
};

/* 🔹 REUSABLE CONFIRM MODAL */
const ConfirmModal = ({ title, children, onClose, onConfirm }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg w-80 p-5 shadow-lg">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold">{title}</h3>
        <FiX className="cursor-pointer" onClick={onClose} />
      </div>

      <p className="text-sm text-gray-600 mb-4">{children}</p>

      <div className="flex justify-end gap-2">
        <button
          onClick={onClose}
          className="px-3 py-1 border rounded"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="px-3 py-1 bg-red-600 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default LibraryList;
