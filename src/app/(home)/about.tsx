import { sectionRef } from "@/types/useTypes";

export default function About({ Ref }: { Ref: sectionRef }) {
  return (
    <section
      ref={(e) => {
        Ref.current[2] = e;
      }}
    >
      About
    </section>
  );
}
