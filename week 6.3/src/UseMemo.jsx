import { useMemo, useState } from "react";
import { useEffect } from "react";

const UseMemo = () => {
    const [exchange1Data, setExchange1Data] = useState({});
    const [exchange2Data, setExchange2Data] = useState({});
    const [bankData, setBankData] = useState({});

    useEffect(() => {
        setExchange1Data({
            returns: 100
        });
    }, [])

    useEffect(() => {
        setExchange2Data({
            returns: 100
        });
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setBankData({
                income: 100
            });
        }, 5000)
    }, [])

    const cryptoReturns = useMemo(() => {
        console.log("hi there ");

        return exchange1Data.returns + exchange2Data.returns;

    }, [setExchange1Data, setExchange2Data])


    const incomeTax = (cryptoReturns + bankData.income) * 0.3

    return (
        <div>
            hi there, your income tax returns are {incomeTax}
        </div>
    )
}

export default UseMemo