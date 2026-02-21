export default function Card({
  title,
  subtitle,
  meta,
  href,
  children,
  className = "",
}) {
  const isLink = Boolean(href);
  const isExternal = typeof href === "string" && /^(https?:)?\/\//i.test(href); // http://, https://, //...

  const Wrapper = isLink ? "a" : "div";

  const props = isLink
    ? {
        href,
        ...(isExternal ? { target: "_blank", rel: "noreferrer" } : {}),
      }
    : {};

  return (
    <Wrapper
      {...props}
      className={[
        // Flex layout keeps cards the same height when used in grids
        "block rounded-xl border bg-white p-4 hover:shadow-sm transition flex flex-col h-full",
        isLink ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      <div className="font-semibold">{title}</div>
      {subtitle && (
        <div className="text-sm text-slate-600 mt-1">{subtitle}</div>
      )}
      {/* Push meta + actions to the bottom for neat alignment */}
      <div className="mt-auto">
        {meta && <div className="text-xs text-slate-500 mt-2">{meta}</div>}
        {children}
      </div>
    </Wrapper>
  );
}
