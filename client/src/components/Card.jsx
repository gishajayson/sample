import { Link } from "react-router-dom";

export default function Card({
  title,
  subtitle,
  meta,
  href,
  children,
  className = "",
  // OPTIONAL (safe): you can ignore these props if you don’t use them
  imageSrc,
  imageAlt = "",
}) {
  const isLink = Boolean(href);
  const isExternal =
    typeof href === "string" && /^(https?:)?\/\/|^mailto:|^tel:/i.test(href);

  const Wrapper = !isLink ? "div" : isExternal ? "a" : Link;

  const props = !isLink
    ? {}
    : isExternal
      ? { href, target: "_blank", rel: "noreferrer" }
      : { to: href };

  return (
    <Wrapper
      {...props}
      className={[
        "group block rounded-2xl border border-cfc-callout/40 bg-cfc-card overflow-hidden",
        "transition duration-200",
        "hover:shadow-lg hover:-translate-y-[1px]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-cfc-callout/70",
        isLink ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      {/* Accent strip */}
      <div className="h-1 w-full bg-cfc-callout/60 group-hover:bg-cfc-cta/80 transition" />

      {/* Optional image */}
      {imageSrc ? (
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt || title}
            className="h-36 w-full object-cover"
            loading="lazy"
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-cfc-dark/10" />
        </div>
      ) : null}

      <div className="p-5 flex flex-col h-full">
        <div className="text-[15px] font-extrabold text-cfc-dark leading-snug">
          {title}
        </div>

        {subtitle ? (
          <div className="mt-2 text-sm text-cfc-dark/75 leading-relaxed">
            {subtitle}
          </div>
        ) : null}

        {/* Push meta + actions to bottom */}
        <div className="mt-auto pt-4">
          {meta ? (
            <div className="inline-flex items-center rounded-full border border-cfc-callout/40 bg-white/60 px-3 py-1 text-xs font-semibold text-cfc-dark/80">
              {meta}
            </div>
          ) : null}

          {children ? <div className="mt-3">{children}</div> : null}
        </div>
      </div>
    </Wrapper>
  );
}