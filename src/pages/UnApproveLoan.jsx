import {useEffect, useState} from "react";
import UnapproveDataTable from "../components/UnapproveDataTable.jsx";

export default function UnApproveLoan() {
    const [unApprove, setUnApprove] = useState();
    const columns = ["id", "loanPurpose", "loanAmount", "cutOffPeriod", "processingFee", "totalInterest", "perCutOffPayment", "totalLoanAmount", "loanRequestedDate", "isPaid", "status", "loanStatusChangeDate", "userId"];


    useEffect(() => {
        fetch("https://ohmycash.onrender.com/loans/unapprove")
            .then((res) => res.json())
            .then((data) => setUnApprove(data));
    }, []);


    if (!unApprove || unApprove.length === 0) {
        return <div>No loan request to be approve</div>
    }

    return(
        <>
            <div className="flex justify-center mt-2">
                <h1 className="text-3xl font-bold">UnApprove Loans</h1>
            </div>

            <div className="flex flex-wrap gap-4 max-w-screen justify-center overflow-auto m-4">
                <UnapproveDataTable columns={columns} data={unApprove}/>
            </div>
        </>
    )
}