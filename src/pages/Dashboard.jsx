import Search from "../components/Search.jsx";
import {useEffect, useState} from "react";


export default function Dashboard() {
    const [loan, setLoan] = useState();

    useEffect(() => {
        fetch("https://ohmycash.onrender.com/loans")
            .then((res) => res.json())
            .then((data) => setLoan(data));
    }, []);


    if (!loan || loan.length === 0) {
        return <div>Loading...</div>;
    }


    return(
        <>
            <div className="flex justify-center mt-2">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>


            <div className="flex flex-wrap gap-4 max-w-screen justify-center overflow-auto m-4">
                <Search data={loan} />
            </div>
        </>
    )
}