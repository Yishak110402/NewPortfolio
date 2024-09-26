import { useEffect } from "react"
import ContactHeader from "../components/Contact/ContactHeader/ContactHeader"
import ContactOptions from "../components/Contact/ContactOptions/ContactOptions"

export default function Contacts(){
    useEffect(function () {
        window.scrollTo({
          top: 0
        })
      },[])
    return(
        <>
            <ContactHeader />
            <ContactOptions />
        </>
    )
}