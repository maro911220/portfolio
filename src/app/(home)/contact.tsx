import { sectionRef } from "@/types/useTypes";

export default function Contact({ Ref }: { Ref: sectionRef }) {
  return (
    <section
      ref={(e) => {
        Ref.current[4] = e;
      }}
    >
      Contact
    </section>
  );
}
