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
  const [discordName, setDiscordName] = useState('')
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
      toast.success("Submission Success!")
    } else {
      toast.error("Submission Error!")
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
        Join our Social Media pages to be in the loop. 
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
    </div>
  );
};

export default Verification
