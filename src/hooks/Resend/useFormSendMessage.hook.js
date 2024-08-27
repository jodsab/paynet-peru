import { useState, useEffect } from "react";
import ResendService from "@/api/resend";

const useFormSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const [resendResponse, setResendResponse] = useState({});

  const sendMessage = async (dataCome) => {
    try {
      setLoading(true);
      const data = await ResendService.sendForm(dataCome);
      setResendResponse(data);
    } catch (error) {
      setResendResponse(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {}, []);

  return { loading, resendResponse, sendMessage };
};

export { useFormSendMessage };
