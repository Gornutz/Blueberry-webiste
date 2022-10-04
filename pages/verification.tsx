import { useState, useEffect } from 'react'
import type { NextPage } from "next";
import Image from 'next/image'
import Link from 'next/link'
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

    formData.append("access_key", "9ef9f0c7-b617-4f77-ba13-57e7f51c88b3");

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
      <Link href={"/home"}>
        <a className={styles.btnTakeHome}>Take me Home</a>
      </Link>
      <div className='flex justify-center'>
        <img
          src={"/logo.svg"}
          alt="blueberry logo"
          className={styles.logo}
        />
      </div>

      <h3 className={styles.title1}>
        Congratulations anon. You found Blueberry while still in stealth mode.
        Claim your spot by completing the steps below. And remember--the early
        bird gets the blueberries.
      </h3>

      <ul className={styles.alignLeft}>
        <li className="mx-[30px] my-[10px]">
          Join{" "}
          <a
            href="https://discord.com/invite/VJAPVjy5uk"
            className="text-[#00e186]"
          >
            Discord
          </a>{" "}
          group
        </li>
        <li className="mx-[30px] my-[10px]">
          Follow{" "}
          <a href="https://twitter.com/BLBprotocol/" className="text-[#00e186]">
            @BLBprotocol
          </a>{" "}
          on Twitter
        </li>
      </ul>
      
      <form onSubmit={onSubmit} className={styles.form}>

        <div className={styles.errors}>
          {showError && (
            <>
              {psuedoName == "" && <p>Please enter a twitter handle.</p>}
              {walletAddress == "" && <p>Please enter a wallet address.</p>}
              {verifyUrl == "" && (
                <p>Please enter the tweet url for verification.</p>
              )}
            </>
          )}
        </div>
        Please do not change twitter handle and wallet address after generating
        verification tweet.
        <div className={styles.field}>
          <label>twitter_handle</label>
          <input
            type="text"
            required
            placeholder="ninja"
            name="psuedoName"
            id="psuedoName"
            onChange={(e) => setPsuedoName(e.target.value)}
            value={psuedoName}
          />
        </div>

        <div className={styles.field}>
          <label>wallet_address</label>

          <input
            type="text"
            required
            placeholder="0xEE4....890"
            name="walletAddress"
            id="walletAddress"
            onChange={(e) => setWalletAddress(e.target.value)}
            value={walletAddress}
          />
        </div>
        <button
          className={styles.btnTwitterShare}
          data-size="large"
          onClick={btnVerifyHandle}
        >
          Generate verification tweet
        </button>
        <div className={`${styles.field} mt-[2rem]`}>
          <label>verification_url</label>

          <input
            type="text"
            required
            placeholder="https:// of the tweet"
            name="validate"
            id="validate"
            onChange={(e) => setVerifyUrl(e.target.value)}
            value={verifyUrl}
          />
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Verification
