import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const useSentForm = ({form, setShowNavbar}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    //hide the navbar to block the navigation
    setShowNavbar(false);
    try {
      //show modal
      setModal(true);

      //Reseting loading and error by default
      setError(false);
      setLoading(true);

      //start sending email
      const send = await emailjs.sendForm(
        "service_3g07nm4", //service id
        "template_ui8zysa", //template id
        form.current,
        "HopZexMN1iY-mKCN6" // public key
      );

      // Email sent and stop loading
      setLoading(false);

      //modal with popup animation
      document.body.classList.add("stop-scroll");
      setTimeout(() => {
        setPopUp(true);
      }, 100);

      //Clean the form inputs
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setModal(true);
      setError(true);
      setLoading(false);

      //modal with popup animation
      document.body.classList.add("stop-scroll");
      setTimeout(() => {
        setPopUp(true);
      }, 100);
    }
  };

  const closeModal = () => {
    setModal(false);
    setPopUp(false);
    document.body.classList.remove("stop-scroll");
  };
  return {
    formVariables: {
      name,
      setName,
      email,
      setEmail,
      message,
      setMessage,
      onSubmit,
      loading,
      error,
    },
    modalVariables: {
      closeModal,
      modal,
      popUp
    }
  };
};
