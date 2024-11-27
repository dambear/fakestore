import PropTypes from "prop-types";

export default function DataTable(props) {
    // Helper function to handle boolean values
    const renderValue = (value) => {
        if (typeof value === "boolean") {
            return value ? "Yes" : "No";
        }
        return value;
    };

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
            } else {
                alert("Failed to approve loan.");
            }
        } catch (error) {
            console.error("Error approving loan:", error);
            alert("Error while approving loan.");
        }
    };

    return (
        <div className="flex flex-wrap gap-4">
            {props.data.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="shadow-md bg-white border border-gray-200 rounded-lg p-6 w-1/4"
                >
                    {props.columns.map((column, colIndex) => (
                        <div key={colIndex} className="mb-2">
                            <strong className="text-gray-700">{column}:</strong>
                            <p className="text-gray-600">
                                {renderValue(row[column])}
                            </p>
                        </div>
                    ))}

                    <button
                        onClick={() => handleApprove(row.id)} // Use row.id for the specific loan ID
                        className="w-full justify-center bg-blue-300 p-2"
                    >
                        Approve
                    </button>
                </div>
            ))}
        </div>
    );
}

DataTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
