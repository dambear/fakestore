import {useEffect, useState} from "react";

import ApproveDataTable from "../components/ApproveDataTable.jsx";

export default function ApproveLoan() {
  const [approve, setApprove] = useState();
  const columns = ["id", "loanPurpose", "loanAmount", "cutOffPeriod", "processingFee", "totalInterest", "perCutOffPayment", "totalLoanAmount", "loanRequestedDate", "isPaid", "status", "loanStatusChangeDate", "userId"];


  useEffect(() => {
    fetch("https://ohmycash.onrender.com/loans/unapprove")
      .then((res) => res.json())
      .then((data) => setApprove(data));
  }, []);


  if (!approve || approve.length === 0) {
    return <div>Loading</div>
  }

  return(
    <>
      <div className="flex justify-center mt-2">
        <h1 className="text-3xl font-bold">Approve Loans</h1>
      </div>

      <div className="flex flex-wrap gap-4 max-w-screen justify-center overflow-auto m-4">
        <ApproveDataTable columns={columns} data={approve}/>
      </div>
    </>
  )
}