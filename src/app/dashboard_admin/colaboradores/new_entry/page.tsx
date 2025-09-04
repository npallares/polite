import FormNewEntryWrapper from "@/forms/FormNewEntry/FormNewEntryWrapper";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense fallback={null /* o un skeleton */}>
        <FormNewEntryWrapper />
      </Suspense>
    </div>
  );
};

export default page;
