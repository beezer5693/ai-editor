import React, { PropsWithChildren } from "react";

const FormContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col max-w-[380px] m-auto">{children}</div>
  );
};

export default FormContainer;
