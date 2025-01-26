import { ReactNode } from "react";

type TProps = { children: ReactNode };

const RegisterLayout = ({ children }: TProps) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between min-h-screen ">
      <div className="flex flex-col gap-2 py-8 md:ps-16 md:px-8 container">
        <section className="w-full lg:w-1/2 flex md:my-8">{children}</section>
      </div>
      <div className="w-full lg:w-1/2 lg:min-h-screen bg-no-repeat bg-cover bg-register-bg z-50"></div>
    </div>
  );
};

export default RegisterLayout;
