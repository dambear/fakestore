import PropTypes from "prop-types";

export default function UnapproveDataTable(props) {
    // Helper function to handle boolean values
    const renderValue = (value) => {
        if (typeof value === "boolean") {
            return value ? "Yes" : "No";
        }
        return value;
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

                </div>
            ))}
        </div>
    );
}

UnapproveDataTable.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
