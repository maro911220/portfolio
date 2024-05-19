import { sectionRef } from "@/types/useTypes";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AiOutlineMail } from "react-icons/ai";

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
          // 이후 컨텐츠 추가
          if (form.current) {
            for (let i = 0; i <= form.current?.elements.length - 1; i++) {
              const target = form.current[i] as HTMLInputElement;
              target.value = "";
            }
          }
          alert("성공했습니다.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useGSAP(
    (e: any) => {
      gsap.set(".home-contact-con", {
        opacity: 0,
        y: 100,
      });
      gsap.to(".home-contact-con", {
        scrollTrigger: {
          trigger: ".home-contact-con",
          start: `top-=${window.innerHeight * 0.6}`,
          toggleActions: "play none none reverse",
        },
        opacity: 1,
        y: 0,
      });
    },
    { scope: Ref.current[4] }
  );
  return (
    <section
      className="home-contact"
      ref={(e) => {
        Ref.current[4] = e;
      }}
    >
      <h2 className="home-contact-title fs-fr">Contact</h2>
      <article className="home-contact-con">
        <h3 className="hidden">문의하기</h3>
        <form className="home-contact-form" ref={form} onSubmit={sendEmail}>
          <div className="home-contact-form-item">
            <label>이름</label>
            <input placeholder="홍길동" type="text" name="user_name" required />
          </div>
          <div className="home-contact-form-item">
            <label>이메일</label>
            <input
              placeholder="abc@abc.com"
              type="email"
              name="user_email"
              required
            />
          </div>
          <div className="home-contact-form-item">
            <label>메세지</label>
            <textarea placeholder="상세 메세지" name="message" required />
          </div>
          <button type="submit">보내기</button>
        </form>
      </article>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </section>
  );
}
