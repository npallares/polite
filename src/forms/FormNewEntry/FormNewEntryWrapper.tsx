"use client";
import { useSearchParams } from "next/navigation";
import useColaboradores from "@/hooks/useColaboradores/useColaboradores";
import FormNewEntryContactData from "./FormNewEntryContactData";
import FormNewEntryPersonalData from "./FormNewEntryPersonalData";
import FormNewEntryBankData from "./FormNewEntryBankData";
import FormNewEntryWorkData from "./FormNewEntryWorkData";

const FormNewEntryWrapper = () => {
  const searchParams = useSearchParams();
  const {
    personalDataHandleSubmit,
    addressDataHandleSubmite,
    bankDataHandleSubmite,
    workDataHandlerSubmite,
    contactDataHandleSubmite,
  } = useColaboradores();
  const hasStep = searchParams.has("step");
  const step = searchParams.get("step");
  if (hasStep && step === "1")
    return (
      <div>
        <FormNewEntryPersonalData
          personalDataHandleSubmit={personalDataHandleSubmit}
          addressDataHandleSubmite={addressDataHandleSubmite}
        />
      </div>
    );
  if (hasStep && step === "2")
    return (
      <div>
        <FormNewEntryBankData bankDataHandleSubmite={bankDataHandleSubmite} />
      </div>
    );
  if (hasStep && step === "3")
    return (
      <div>
        <FormNewEntryWorkData workDataHandlerSubmite={workDataHandlerSubmite} />
      </div>
    );
  if (hasStep && step === "4")
    return (
      <div>
        <FormNewEntryContactData
          contactDataHandleSubmite={contactDataHandleSubmite}
        />
      </div>
    );
  return <div>default return</div>;
};

export default FormNewEntryWrapper;
