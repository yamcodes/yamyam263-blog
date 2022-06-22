export default function Button({ children, className }) {
  return (
    <button
      type="button"
      className={`
      bg-violet-500 rounded-lg text-white px-5 py-2
      select-none
      ${className}
      `}
    >
      {children}
    </button>
  );
}
