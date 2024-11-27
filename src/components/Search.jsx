import PropTypes from "prop-types"
import { useState } from "react"

export default function Search({ data }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState(data)

  const handleSearchChange = (event) => {
    const searchValue = event.target.value
    setSearchTerm(searchValue)

    // Filter data based on userId match
    const filtered = data.filter((loan) => loan.userId.includes(searchValue))
    setFilteredData(filtered)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Loan History</h1>
      <div className="mb-4">
        <input
          className="p-2 border rounded"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by User ID"
        />
      </div>
      <ul className="flex flex-wrap">
        {filteredData.length > 0 ? (
          filteredData.map((loan) => (
            <li key={loan.id} className="flex">
              <div className="p-8 border rounded shadow bg-white gap-4 ">
                <p>
                  <strong>Loan Purpose:</strong> {loan.loanPurpose}
                </p>
                <p>
                  <strong>Loan Amount:</strong> {loan.loanAmount}
                </p>
                <p>
                  <strong>Loan Requested Date:</strong>{" "}
                  {new Date(loan.loanRequestedDate).toLocaleDateString()}
                </p>
                <p>
                  <strong>Status:</strong> {loan.isPaid ? "Paid" : "Not Paid"}
                </p>
                <p>
                  <strong>Approval Status:</strong> {loan.status}
                </p>
              </div>
            </li>
          ))
        ) : (
          <li className="w-full text-center p-4">
            <p>No matching results found.</p>
          </li>
        )}
      </ul>
    </div>
  )
}

Search.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}
