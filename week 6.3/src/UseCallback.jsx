import { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";

const UseCallback = () => {
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

    const cryptoReturns = useCallback(() => {

        return exchange1Data.returns + exchange2Data.returns;

    }, [exchange1Data, exchange2Data])


    const incomeTax = useMemo(() => { return ((cryptoReturns() + bankData.income) * 0.3) },
        [bankData, cryptoReturns])

    return (
        <>

            <CryptoGainCalculator cryptoReturns={cryptoReturns} />
            <div>
                hi there, your income tax returns are {incomeTax}
            </div>


        </>
    )
}


function CryptoGainCalculator({ cryptoReturns }) {
    console.log("child component rereders")
    return (
        <>
            <h1>Your Total cryptogain is {cryptoReturns()}</h1>
        </>
    )
}
export default UseCallback;