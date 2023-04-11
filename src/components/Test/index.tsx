import InputField from "@/core/components/input";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const Test = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="text-end">Teeeeeeeeeeeeeesssssssssst</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <InputField
            name="email"
            label="Email"
            validationSchema={validationSchema}
          />
          <InputField
            name="password"
            type="password"
            label="Password"
            validationSchema={validationSchema}
          />
          <button type="submit" disabled={methods.formState.isSubmitting}>
            Submit
          </button>
        </form>
      </FormProvider>
      {/* <SlideshowLightbox className="grid grid-cols-3 gap-2 mx-auto">
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/580151/pexels-photo-580151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13996896/pexels-photo-13996896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
        <img
          className="w-full rounded"
          src="https://images.pexels.com/photos/13208323/pexels-photo-13208323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </SlideshowLightbox> */}
    </div>
  );
};
