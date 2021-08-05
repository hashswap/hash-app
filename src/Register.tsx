import React, { ReactElement } from 'react';
import { Register } from "hashswap-zilliqa-sdk/lib/register"
import { Network } from "hashswap-zilliqa-sdk/lib/constants"


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


//const privateKey = '5d99e6eb161b5a693934dacc6bd54d87d89bbb43ebda9d95f9cadcd322fcc862';
//const privateKey = '2c9eb921e67410aa658140c0c79c294473a5ae5fa111c7af7ededd0d3592dca3';
const privateKeyInfluencer = '3a3ada7ba3f7f8e6a6270b62f1f6644e7f416c2a3d6ff0ef8c802b1fbf81ef9e';

export const Register1 = (async() => {
    getConnectedZilPay();
    //const owner = new Register(Network.TestNet, privateKey);
    const influencer = new Register(Network.TestNet, privateKeyInfluencer);
    await influencer.initialize();
    //await hashswap.SetRegisterOracle();
    //await hashswap.RegisterLink('https://www.instagram.com/kendalljenner/');
    await influencer.RequestToken('Kendall Jenner', 'KJT', 18, 900000);
    //await influencer.getAppState();
    await influencer.teardown();

    const h = "hello"

    return h;
});

function Reg() {
    return (
        <>
            <Register1/>

</>
    );
  }
  
  export default Reg;
  