import { FormProvider as RHFormProvider } from "react-hook-form";
const FormProvider = ({ children, onSubmit, methods }) => {
  // console.log("submit", onSubmit);
  return (
    <RHFormProvider {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </RHFormProvider>
  );
};
export default FormProvider;
