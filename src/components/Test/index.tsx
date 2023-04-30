// import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "@/core/components/Inputs/TextInput";
import SelectInput from "@/core/components/Inputs/SelectInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Drawer from "@/core/components/Drawer";
import Modal from "@/core/components/Modal";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Portal } from "@/core/components/Portal";
import Skeleton from "@/core/components/Skeleton";
import Spinner from "@/core/components/Spinner";

type FormData = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export const Test = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation("home");

  const methods = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="font-bold">{t("title")}</h1>
      {/* <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInput
            name="email"
            label="Email"
            type="email"
            className="py-2 ps-10"
            placeholder="Type Email"
            required
            icon={
              <FontAwesomeIcon
                className="absolute w-8 h-full top-1/2 -translate-y-1/2 text-[#615c5c] z-10 left-0 flex items-center pl-3 pointer-events-none"
                icon={faSearch}
              />
            }
          />
          <TextInput
            name="password"
            type="password"
            label="Password"
            placeholder="Type Password"
            className="py-2 ps-10"
            required
            icon={
              <FontAwesomeIcon
                className="absolute w-8 h-full top-1/2 -translate-y-1/2 text-[#615c5c] z-10 left-0 flex items-center pl-3 pointer-events-none"
                icon={faSearch}
              />
            }
          />
          <SelectInput
            name="cities"
            options={[
              { value: 0, label: "cairo" },
              { value: 1, label: "giza" },
            ]}
          />
          <button type="submit" disabled={methods.formState.isSubmitting}>
            Submit
          </button>
        </form>
      </FormProvider> */}
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
      {/* <button onClick={() => setIsDrawerOpen(true)}>Open Drawer</button> */}
      {/* <button onClick={() => setIsModalOpen(true)}>Open Modal</button> */}
      {/* <Portal>
        <Drawer
          isOpen={isDrawerOpen}
          isStatic={false}
          onClose={() => {
            console.log("close drawer");
            setIsDrawerOpen(false);
          }}
        >
          <h1>Hiiiiiiiiiiiii</h1>
        </Drawer>
      </Portal> */}
      {/* <Portal>
        <Modal
          isOpen={isModalOpen}
          isStatic={false}
          title="Biiiiiiiiiiiig Title"
          onClose={() => {
            console.log("close modal");
            setIsModalOpen(false);
          }}
        >
          <h1>Hiiiiiiiiiiiii from modal</h1>
        </Modal>
      </Portal> */}
      {/* <div className="bg-black w-16 h-16 flex justify-center items-center">
        <Spinner color="#fff" fontSize={30} />
      </div> */}
      {/* <div className="grid grid-cols-1 gap-4 p-4">
        <Skeleton type="list" />
        <Skeleton type="list" />
        <Skeleton type="list" />
        <Skeleton type="list" />
        <Skeleton type="list" />
        <Skeleton type="list" />
        <Skeleton type="list" />
      </div>

      <div className="grid grid-rows-3 grid-cols-4 gap-6 p-4">
        <Skeleton type="grid" />
        <Skeleton type="grid" />
        <Skeleton type="grid" />
        <Skeleton type="grid" />
        <Skeleton type="grid" />
        <Skeleton type="grid" />
        <Skeleton type="grid" />
        <Skeleton type="grid" />
      </div> */}
    </>
  );
};
