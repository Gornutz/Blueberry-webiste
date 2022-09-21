import { useState, useEffect } from 'react'
import type { NextPage } from "next";
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from "../styles/Verification.module.scss"
import { toast } from 'react-toastify'

const Verification: NextPage = () => {
  const router = useRouter()
  const [psuedoName, setPsuedoName] = useState('')
  const [walletAddress, setWalletAddress] = useState('')
  const [verifyUrl, setVerifyUrl] = useState('')
  const [showError, setShowError] = useState(false)

  const makeid = (length: number) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    const status = window.localStorage.getItem("verifyStatus")
    if(status) {
      router.push("/home")
    }
  }, []);

  const btnVerifyHandle = () => {
    if(psuedoName == '' || walletAddress == '') {
      setShowError(true)
      return
    }
    if(verifyUrl == '') {
      setShowError(true)
    } else {
      setShowError(false)
    }

    var text = `I am a verified Blueberry %40blbprotocol early adopter
    Verification:${makeid(64)}
    verify.blueberry.garden`

    var url = `https://twitter.com/intent/tweet?text=${text}`
    window.open(url, '_blank');
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1110f8e5-d278-4698-aeca-0c0b52c9a0c4");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      window.localStorage.setItem("verifyStatus", "true")
      router.push("/home")
      toast.success("Submit Success!")
    } else {
      toast.error("Submit Error!")
    }
  }
  return (
    <div className={styles.container}>
      <div className='flex justify-center'>
        <img src={'/logo.svg'} alt="canto logo" className={styles.logo} />
      </div>
      
      <h1 className={styles.title}>Settlers of Blueberry</h1>

      {/* <p className={styles.alignLeft}>Settlers of Canto is a dress rehearsal for the Canto launch. In this walkthrough, you will have the chance to use Canto’s Free Public Infrastructure, including the Canto Dex LP and Canto Lending Market, for the very first time. Settling starts on July 16 at 11AM CST.<br/><br/> 
      </p> */}

      <h3 className={styles.title1}>Congratulations anon. You found Blueberry while still in stealth mode. Claim your spot by completing the steps below. And remember--the early bird gets the blueberries.</h3>

      <p className={styles.alignLeft}>
        {/* Read more about Canto&apos;s full launch schedule
        <a className='text-[#00e186]' href="https://mirror.xyz/0x4CeD9817cAD891aEFfbF5Fb7DcB6f3c6aEBd4228/kSrSQcHROw41HlS0M3YU_Yj1ljRarGXChrKbE0Z7BJc">&nbsp;here</a>
        <br/><br/> */}
        <span className='font-semibold'>The goals of Settlers are as follows:</span>
      </p>

      <ul className={styles.alignLeft}>
        {/* <li className='mx-[30px] my-[10px]'>Fill out the form below to register and claim your testnet tokens</li> */}
        <li className='mx-[30px] my-[10px]'>Join <a href="https://t.me/+1I1JgueMSbU2NjRh" className='text-[#00e186]'>Discord</a> group</li>
        <li className='mx-[30px] my-[10px]'>Follow <a href="https://twitter.com/CantoPublic" className='text-[#00e186]'>@CantoPublic</a> on Twitter</li>
        <li className='mx-[30px] my-[10px]'>Join <a href="https://t.me/+1I1JgueMSbU2NjRh" className='text-[#00e186]'>Telegram</a> group</li>
        {/* <li className='mx-[30px] my-[10px]'>Provide liquidity to the Canto DEX</li>
        <li className='mx-[30px] my-[10px]'>Supply LP tokens in the Canto Lending Market</li>
        <li className='mx-[30px] my-[10px]'>Report bugs and design changes in Telegram to help us improve the overall experience for all Canto users</li> */}
      </ul>

      {/* <span className='font-semibold'>If verified, please check your wallet for tokens at 11AM CST. The links below will also be updated at that time.</span>

      <p className={styles.alignLeft}>
        <br/>
        Testnet RPC url: https://node.plexnode.wtf
        <br/>
        Chain ID: 7733
        <br/>
        Canto Lending Market url: <a href="https://settlers-lending.canto.io/" className='text-[#00e186]'>https://settlers-lending.canto.io/</a>
        <br/>
        DEX url: <a href="https://settlers-dex.canto.io/" className='text-[#00e186]'>https://settlers-dex.canto.io/</a>
        <br/>
        Submit Feedback: <a href="https://kwzwx5buwy5.typeform.com/to/srtAtPRT" className='text-[#00e186]'>Typeform</a>
        <br/>
      </p>

      <button className={styles.btnAddMetaMask}>Click to add testnet to metamask</button>
      <br/><br/>

      <p className={styles.alignLeft}>We appreciate your early support.</p> */}
      
      <form onSubmit={onSubmit} className={styles.form}>
      {/* <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}> */}
        {/* <input type="hidden" name="access_key" value="1110f8e5-d278-4698-aeca-0c0b52c9a0c4"/> */}
        <div className={styles.errors}>
          {
            showError &&
            <>
              {psuedoName == '' && <p>Please enter a twitter handle.</p>}
              {walletAddress == '' && <p>Please enter a wallet address.</p>}
              {verifyUrl == '' && <p>Please enter the tweet url for verification.</p>}
            </>
          }
        </div>
        Please do not change twitter handle and wallet address after generating verification tweet. 

        <div className={styles.field}>
          <label>twitter_handle</label>
          <input type="text" required placeholder="ninja" name="psuedoName" id="psuedoName" onChange={(e)=> setPsuedoName(e.target.value)} value={psuedoName} />
        </div>

        <div className={styles.field}>
          <label>wallet_address</label>

          <input type="text" required placeholder="0xEE4....890" name="walletAddress" id="walletAddress" onChange={(e)=> setWalletAddress(e.target.value)} value={walletAddress}/>
        </div>

        <button className={styles.btnTwitterShare} data-size="large" onClick={btnVerifyHandle}>Generate verification tweet</button>

        <div className={`${styles.field} mt-[2rem]`}>
          <label>verification_url</label>

          <input type="text" required placeholder="https:// of the tweet" name="validate" id="validate" onChange={(e)=> setVerifyUrl(e.target.value)} value={verifyUrl} />
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Verification