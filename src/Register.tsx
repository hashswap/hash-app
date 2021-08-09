import { Hello } from "hashswap-zilliqa-sdk/lib/hello"
import { Network } from "hashswap-zilliqa-sdk/lib/constants"
import './Register.css';

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



const Register11= (async () => {
    const st = await getConnectedZilPay().then((zilp)=>{
        console.log('zilp', zilp);
        const hashswap = new Hello(Network.TestNet, zilp.wallet.provider);
        return hashswap}).then(async(hashswap: any)=>{
            await hashswap.initialize();
            return hashswap.getAppState().contractState.welcome_msg;
        });
        console.log('st',st);
    return st;
    });


function Register() {
    const st = Register11();
    //console.log('st1',st);
    return (
      <div className="Register">
        <header className="Register-header">
          <p>
          </p>
          <a
            className="Register-link"
            href={`${st}`}
            target="_blank"
            rel="noopener noreferrer"
          >
                      </a>
        </header>
      </div>
    );
  }
  
function Reg() {
    return (
        <Register/>

    );
  }
  
  export default Reg;
  