"use client";
import { useSearchParams } from "next/navigation";
import useColaboradores from "@/hooks/useColaboradores/useColaboradores";
import FormNewEntryContactData from "./FormNewEntryContactData";
import FormNewEntryPersonalData from "./FormNewEntryPersonalData";
import FormNewEntryBankData from "./FormNewEntryBankData";
import FormNewEntryWorkData from "./FormNewEntryWorkData";
import FormEntryHeader from "./FormEntryHeader";
import useNotification from "@/hooks/useNotification/useNotification";

const FormNewEntryWrapper = () => {
  const searchParams = useSearchParams();
  const {
    personalDataHandleSubmit,
    addressDataHandleSubmite,
    bankDataHandleSubmite,
    workDataHandlerSubmite,
    contactDataHandleSubmite,
  } = useColaboradores();
  const { addNotificationHandler } = useNotification({
    message: "Has incorporado a un nuevo colaborador",
  });
  const hasStep = searchParams.has("step");
  const step = searchParams.get("step");
  if (hasStep && step === "1")
    return (
      <div>
        <FormEntryHeader step={1} />
        <FormNewEntryPersonalData
          personalDataHandleSubmit={personalDataHandleSubmit}
          addressDataHandleSubmite={addressDataHandleSubmite}
        />
      </div>
    );
  if (hasStep && step === "2")
    return (
      <div>
        <FormEntryHeader step={2} />
        <FormNewEntryBankData bankDataHandleSubmite={bankDataHandleSubmite} />
      </div>
    );
  if (hasStep && step === "3")
    return (
      <div>
        <FormEntryHeader step={3} />
        <FormNewEntryWorkData workDataHandlerSubmite={workDataHandlerSubmite} />
      </div>
    );
  if (hasStep && step === "4")
    return (
      <div>
        <FormEntryHeader step={4} />
        <FormNewEntryContactData
          contactDataHandleSubmite={contactDataHandleSubmite}
          addNotificationHandler={addNotificationHandler}
        />
      </div>
    );
  return <div>default return</div>;
};

export default FormNewEntryWrapper;
