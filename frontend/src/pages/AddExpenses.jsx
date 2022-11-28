import React from "react";

export default function AddExpenses() {
  return (
    <>
      <div className="h-[800px] bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-extrabold text-4xl py-2">
            {" "}
            Add Your Daily Expenses{" "}
          </div>
          <div className="text-l font-medium text-gray-900 mt-2 text-center">
            {" "}
            Updating your expenses to make sure you get the latest version of
            your family household
          </div>
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form action="" className="space-y-6">
            <div>
              <label
                htmlFor=""
                className="text-sm text-left font-bold text-gray-600 block"
              >
                Amount
              </label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              ></input>
            </div>
            <div>
              <label
                htmlFor=""
                className="text-sm text-left font-bold text-gray-600 block"
              >
                Category
              </label>
              <select className="w-full p-2 border border-gray-300 rounded mt-1 ">
                <option value="Housing">Housing</option>
                <option value="Education">Education</option>
                <option value="Groceries">Groceries</option>
                <option value="Rent">Rent</option>
                <option value="Clothes">Clothes</option>
                <option value="Subsciptions">Subsciptions</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <div>
              <button className="w-full py-2 px-4 bg-[#8b74bd] hover:bg-[#7953ab] rounded-md text-white text-sm">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
