export default function SectionHeading({ kicker, title, accent, intro }) {
  return (
    <>
      <p className="mb-4 text-xs font-bold uppercase italic tracking-[.15em] text-primary">
        {kicker}
      </p>
      <h2 className="max-w-[730px] font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold italic leading-[.95] tracking-[-.04em] text-ink">
        {title} <span className="text-primary">{accent}</span>
      </h2>
      {intro ? (
        <p className="mt-5 max-w-[610px] text-base leading-[1.8] text-muted">
          {intro}
        </p>
      ) : null}
    </>
  );
}
