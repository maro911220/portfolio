"use client";
import { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";

// 환경 변수에서 API 키와 서비스 ID 가져오기
const API_KEY = process.env.EMAIL;
const EMAILSERVICE = process.env.EMAILSERVICE;
const EMAILTEMP = process.env.EMAILTEMP;

// Contact 컴포넌트
const Contact = forwardRef<HTMLElement>((props, ref) => {
  const form = useRef<HTMLFormElement>(null);

  // 이메일 전송 함수
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
          if (form.current) {
            // 폼 초기화
            Array.from(form.current.elements).forEach((element) => {
              const target = element as HTMLInputElement;
              target.value = "";
            });
          }
          alert("메일을 전송했습니다.");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="home-contact" ref={ref}>
      <h2 className="home-contact-title fs-fr f-title">Contact</h2>
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
      <div className="home-contact-wave"></div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
