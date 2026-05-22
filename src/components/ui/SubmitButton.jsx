export default function SubmitButton({ title, loading }) {
  return (
    <button
      disabled={loading}
      className="
        w-full
        py-3
        rounded-2xl
        bg-indigo-600
        hover:bg-indigo-700
        active:scale-[0.98]
        transition-all
        text-white
        font-semibold
        shadow-lg
        shadow-indigo-500/20
        disabled:opacity-70
      "
    >
      {loading ? "Loading..." : title}
    </button>
  );
}
