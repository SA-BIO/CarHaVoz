export default function CollapseItem({ id, title, children }) {
  const buttonId = `hs-collapse-btn-${id}`;
  const contentId = `hs-collapse-content-${id}`;

  return (
    <div className="w-full">
      <button
        type="button"
        id={buttonId}
        aria-expanded="false"
        aria-controls={contentId}
        data-hs-collapse={`#${contentId}`}
        className="hs-collapse-toggle inline-flex items-center gap-x-3 py-2 text-2xl font-Ovo font-bold text-primary-foreground"
      >
        <span>{title}</span>
        <svg
          className="hs-collapse-open:rotate-180 shrink-0 size-5 transition-transform duration-300"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        id={contentId}
        aria-labelledby={buttonId}
        role="region"
        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
      >
        <div className="mt-4 w-full rounded-xl bg-white/60  shadow-sm justified-text">
          {children}
        </div>
      </div>
    </div>
  );
}