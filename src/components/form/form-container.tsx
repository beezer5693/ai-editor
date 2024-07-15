import React, { PropsWithChildren } from "react";

const FormContainer = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex flex-col max-w-[365px]">{children}</div>;
};

export default FormContainer;
