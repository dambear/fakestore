import {useEffect, useState} from "react";

import LoanRequestDataTable from "../components/LoanRequestDataTable.jsx";

export default function LoanRequest() {
    const [loanRequest, setLoanRequest] = useState();
    const columns = ["id", "loanPurpose", "loanAmount", "cutOffPeriod", "processingFee", "totalInterest", "perCutOffPayment", "totalLoanAmount", "loanAvailDate", "isPaid", "isApprove", "userId"];


    useEffect(() => {
        fetch("https://ohmycash.onrender.com/loans/request")
            .then((res) => res.json())
            .then((data) => setLoanRequest(data));
    }, []);


    if (!loanRequest || loanRequest.length === 0) {
        return <div>No loan request to be approve</div>
    }

    return(
        <>
            <div className="flex justify-center mt-2">
                <h1 className="text-3xl font-bold">Loans Request</h1>
            </div>

            <div className="flex flex-wrap gap-4 max-w-screen justify-center overflow-auto m-4">
                <LoanRequestDataTable columns={columns} data={loanRequest}/>
            </div>
        </>
    )
}