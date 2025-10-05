"use client";
import { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "@/styles/components/home.module.scss";

// 환경 변수값 가져오기
const API_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const EMAILSERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILTEMP = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

// Contact 컴포넌트
const Contact = forwardRef<HTMLElement>((props, ref) => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILSERVICE as string,
        EMAILTEMP as string,
        form.current,
        API_KEY
      );

      alert("메일이 전송되었습니다!");
      form.current.reset();
    } catch (error) {
      alert("메일 전송에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles["home-contact"]} ref={ref}>
      <h2 className={`${styles["home-contact-title"]} fs-fr f-title`}>
        Contact
      </h2>
      <article className={styles["home-contact-con"]}>
        <h3 className="hidden">문의하기</h3>
        <form
          className={styles["home-contact-form"]}
          ref={form}
          onSubmit={handleSubmit}
        >
          <div className={styles["home-contact-form-item"]}>
            <label htmlFor="user_name">이름</label>
            <input
              id="user_name"
              placeholder="홍길동"
              type="text"
              name="user_name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className={styles["home-contact-form-item"]}>
            <label htmlFor="user_email">이메일</label>
            <input
              id="user_email"
              placeholder="abc@abc.com"
              type="email"
              name="user_email"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className={styles["home-contact-form-item"]}>
            <label htmlFor="message">메시지</label>
            <textarea
              id="message"
              placeholder="상세 메시지"
              name="message"
              required
              disabled={isSubmitting}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "전송 중..." : "보내기"}
          </button>
        </form>
      </article>
      <div className={styles["home-contact-wave"]}></div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
