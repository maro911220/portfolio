import { sectionRef } from "@/types/useTypes";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const API_KEY = process.env.EMAIL;
const EMAILSERVICE = process.env.EMAILSERVICE;
const EMAILTEMP = process.env.EMAILTEMP;

export default function Contact({ Ref }: { Ref: sectionRef }) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("환경 변수가 설정되지 않았거나 올바르지 않습니다.");
      return;
    }

    emailjs
      .sendForm(
        EMAILSERVICE as string, //서비스 아이디
        EMAILTEMP as string, // 메일 템플릿 아이디
        form.current, // 연결 폼
        API_KEY // API keys
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      className="home-contact"
      ref={(e) => {
        Ref.current[4] = e;
      }}
    >
      <h2 className="home-contact-title fs-fr">Contact</h2>
      <article className="home-contact-con">
        <h3 className="hidden">Contact Form</h3>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </article>
    </section>
  );
}
