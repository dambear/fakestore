import PropTypes from "prop-types";

import { useNavigate } from 'react-router-dom';

export default function LoanRequestDataTable(props) {
    // Helper function to handle boolean values
    const renderValue = (value) => {
        if (typeof value === "boolean") {
            return value ? "Yes" : "No";
        }
        return value;
    };

    const navigate = useNavigate();

    const handleApprove = async (id) => {
        try {

            const response = await fetch(`http://localhost:8000/loans/approve/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                alert("Loan approved successfully!");
                navigate(0);
            } else {
                alert("Failed to approve loan.");
            }
        } catch (error) {
            console.error("Error approving loan:", error);
            alert("Error while approving loan.");
        }
    };

    const handleDenied = async (id) => {
        try {

            const response = await fetch(`https://ohmycash.onrender.com/loans/denied/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });

            if (response.ok) {
                alert("Loan denied successfully!");
                navigate(0);
            } else {
                alert("Failed to denied loan.");
            }
        } catch (error) {
            console.error("Error denying loan:", error);
            alert("Error while denying loan.");
        }
    };

    return (
      <div className="flex gap-4 ">
          {props.data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="shadow-md bg-white border border-gray-200 rounded-lg p-4"
            >
                {props.columns.map((column, colIndex) => (
                  <div key={colIndex} className="mb-2 flex">
                      <strong className="text-gray-700">{column}:</strong>
                      <p className="text-gray-600">
                          {renderValue(row[column])}
                      </p>
                  </div>
                ))}


                <div className="flex gap-4 justify-center pt-4">
                    <button onClick={() => handleApprove(row.id)}
                            className=" justify-center bg-green-300 py-2 px-8"
                    >
                        Approve
                    </button>

                    <button onClick={() => handleDenied(row.id)}
                            className=" justify-center bg-red-300 py-2 px-8"
                    >
                        Deny
                    </button>

                </div>

            </div>
          ))}
      </div>
    );
}

LoanRequestDataTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
