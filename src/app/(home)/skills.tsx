import { sectionRef } from "@/types/useTypes";

export default function Skills({ Ref }: { Ref: sectionRef }) {
  return (
    <section
      className="home-skills"
      ref={(e) => {
        Ref.current[1] = e;
      }}
    >
      Skills
    </section>
  );
}
