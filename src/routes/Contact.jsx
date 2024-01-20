import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
export const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    message: "",
    success: true,
  });

  const toggleModal = (message, success) => {
    setModalData({
      message,
      success,
    });
    setShowModal(true);
  };

  const initialValues = {
    name: "",
    email: "",
    cellphone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/,
        "Invalid email domain"
      )
      .required("Email is required"),
    cellphone: Yup.string()
      .matches(/^9[0-9]{8}$/, "Invalid cellphone format")
      .required("Cellphone is required"),
    message: Yup.string().required("Message is required"),
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (formik.isValid) {
      emailjs
        .sendForm(
          "service_1iz6jp9",
          "template_ps9r0i4",
          form.current,
          "_CUeMWhHwqw4xuPCj"
        )
        .then((response) => {
          toggleModal(
            `Form successfully submitted: ${response.status} ${response.text}`,
            true
          ); // Mostrar el modal de éxito con la respuesta
          formik.resetForm(); // Restablecer los valores del formulario
        })
        .catch((error) => {
          toggleModal(`Error sending the form: ${error}`, false); // Mostrar el modal de error con el mensaje de error
        });
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: sendEmail,
  });

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="contact">
      <form onSubmit={sendEmail} className="contact__section" ref={form}>
        <fieldset className="contact__section--fieldset">
          <legend>Name</legend>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.name && formik.errors.name ? "error" : ""}
            pattern="[A-Za-z0-9._%+\-\]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
            required
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}
        </fieldset>

        <fieldset className="contact__section--fieldset">
          <legend>Email</legend>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}"
            required
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </fieldset>

        <fieldset className="contact__section--fieldset">
          <legend>Cellphone</legend>
          <input
            type="tel"
            id="cellphone"
            name="cellphone"
            placeholder="Cellphone"
            value={formik.values.cellphone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.cellphone && formik.errors.cellphone ? "error" : ""
            }
            pattern="[0-9]*"
            required
          />
          {formik.touched.cellphone && formik.errors.cellphone && (
            <div className="error-message">{formik.errors.cellphone}</div>
          )}
        </fieldset>

        <fieldset className="contact__section--fieldset">
          <legend>Message</legend>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.message && formik.errors.message ? "error" : ""
            }
          />
          {formik.touched.message && formik.errors.message && (
            <div className="error-message error-message--end">
              {formik.errors.message}
            </div>
          )}
        </fieldset>

        <button className="contact__section--button" type="submit">
          Send
        </button>
      </form>
      {showModal && (
        <div className={`modal ${modalData.success ? "success" : "error"}`}>
          <div className="modal__content">
            <h2>
              {modalData.success
                ? "Form sent successfully"
                : "Error submitting the form"}
            </h2>
            <p>{modalData.message}</p>
            <button className="modal__content--button" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
