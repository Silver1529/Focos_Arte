import { stats } from "@/lib/site";
import Reveal from "../Reveal";

export default function Stats() {
  return (
    <section
      id="stats"
      className="border-y border-white/[0.06] bg-panel"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 px-[clamp(18px,5vw,64px)] lg:grid-cols-4">
        {stats.map((s) => (
          <Reveal
            key={s.label}
            className="border-r border-white/[0.06] px-[22px] py-[38px] text-center"
          >
            <div className="tg-metal-soft font-display text-[clamp(34px,4vw,52px)] font-black leading-none">
              {s.num}
            </div>
            <div className="mt-2 font-body text-[13.5px] tracking-[0.04em] text-muted-2">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
