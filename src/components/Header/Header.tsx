import React , {useState, useEffect} from "react";
import './Header.css';


const getConnectedZilPay = async () => {
    const zilPay = (window as any).zilPay;
    try {
      if (typeof zilPay !== "undefined") {
        const result = await zilPay.wallet.connect();
        if (result === zilPay.wallet.isConnect) {
          return zilPay;
        }
      }
    } catch (e) {
      console.error(e);
    }
  };


function Header (){
    const [isConnect, setConnect] = useState((window as any).zilPay.wallet.defaultAccount !== null);
    const [account, setAccount] = useState("null");

    useEffect(() => {
        setAccount(
            (window as any).zilPay.wallet.defaultAccount === null ? "null" 
            :  (window as any).zilPay.wallet.defaultAccount.base16
            );
    },[]);

    const connectZilpay = async () => {
        if ((window as any).zilPay === undefined){
            console.log('zilPay not installed');

        }else if (isConnect) {
            console.log('wallet already connected');
        }else{
            console.log('connecting wallet');
            const zil = await getConnectedZilPay();
            if (zil.wallet.defaultAccount !== null){
                setConnect(true);
            }
        }
    }
    return (
        <nav className="Nav" onLoad={connectZilpay}>
            <div className="Nav-menus">
                    <a className="Nav-brand-logo" href="/"> </a>
                    <a className="Nav-balance" href="/">{account}</a>
                    <button onClick={connectZilpay} className="Nav-zilpay">Zilpay</button>
            </div>
        </nav>
    );
}

export default Header;