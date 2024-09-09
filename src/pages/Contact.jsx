/* eslint-disable no-unused-vars */
import { Button, Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimationBoxes from "../features/AnimationBox";
import { useTheme } from "../components/ThemeProviderComponent";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // function speak() {
  //   let text = document.getElementById("input").value;
  //   let utterance = new SpeechSynthesisUtterance(text);
  //   speechSynthesis.speak(utterance);
  // }
  const { themeMode } = useTheme();

  const sendEmail = () => {
    setSuccess("");
    if (!email) {
      setError("Please Enter Your Email");
      return;
    }
    if (!message) {
      setError("please enter your message");
      return;
    }
    const templateParams = {
      from_name: email,
      to_name: "Zeekq Tech",
      message,
    };

    setError("");
    setIsloading(true);
    emailjs
      .send(
        "service_u63fa39" ?? "",
        "template_1brl8ej" ?? "",
        templateParams,
        "llwIs7b1PhTYdLGwO"
      )
      .then(
        function (response) {
          setEmail("");
          setName("");
          setMessage("");
          setIsloading(false);
          setSuccess("Your message has been sent successfully.");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        function (error) {
          setError(
            "some Error occurred. Please send a direct email using the email on this page"
          );
          console.log(error);
          setIsloading(false);
        }
      );
  };

  const [form] = Form.useForm();
  return (
    <>
      <section
        id="contact"
        className="p-5 py-10 lg:p-20 max-w-[1860px] mx-auto"
      >
      <AnimationBoxes />
        <div className="space-y-8 ">
          <div
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="text-center space-y-2"
          >
            <h2 className="font-bold text-[30px] md:text-[36px] text-sky-500">
              Contact{" "}
            </h2>
            <p
              className={`${
                themeMode === "dark" ? "text-white" : "text-[#666666]"
              }`}
            >
              Do you have any questions? Please do not hesitate to contact me
              directly.
            </p>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-duration="3000"
            className="flex justify-center items-center pt-4"
          >
            <Form
              onFinish={sendEmail}
              form={form}
              layout="vertical"
              requiredMark="optional"
              className="!text-red-600"
            >
              {error && (
                <div className="text-center bg-red-400 text-white border rounded-lg h-[6] w-full ">
                  {error}
                </div>
              )}
              {success && (
                <div className="text-center bg-green-400 text-white border rounded-lg h-[6] w-full ">
                  {success}
                </div>
              )}
              <Row
                gutter={{
                  xs: 0,
                  sm: 16,
                }}
                style={{ width: "100%" }}
              >
                <Col xs={24} md={12}>
                  <Form.Item
                    label={
                      <div
                        className={`${
                          themeMode === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {" "}
                        Your Name
                      </div>
                    }
                    name="user_name"
                    rules={[
                      { required: true, message: "Please enter your username" },
                    ]}
                  >
                    <Input
                      className="focus:border-sky-500 hover:border-sky-500"
                      style={{ height: 45, resize: "none" }}
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label={
                      <div
                        className={`${
                          themeMode === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {" "}
                        Your Email
                      </div>
                    }
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                    ]}
                  >
                    <Input
                      className="focus:border-sky-500 hover:border-sky-500 !text-red-700"
                      style={{ height: 45, resize: "none" }}
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label={
                      <div
                        className={`${
                          themeMode === "dark" ? "text-white" : "text-black"
                        }`}
                      >
                        {" "}
                        Your Message
                      </div>
                    }
                    name="message"
                    rules={[
                      { required: true, message: "Please enter your message" },
                    ]}
                  >
                    <TextArea
                      // value="send"
                      name="message"
                      id="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      maxLength={1000}
                      style={{ height: 120, resize: "none", width: "100%" }}
                      className="focus:border-sky-500 hover:border-sky-500"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    htmlType="submit"
                    className="hover:bg-[#0e6f02] text-black  border-sky-500 mt-3 hover:border-sky-500 hover:text-[black!important]"
                  >
                    {isLoading ? (
                      <div className="">sending...</div>
                    ) : success ? (
                      "sent !"
                    ) : (
                      "send"
                    )}
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
