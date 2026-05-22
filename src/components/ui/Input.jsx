export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  register,
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-slate-200">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="
          w-full
          px-4
          py-3
          rounded-xl
          bg-slate-900/70
          border
          border-slate-700
          text-white
          outline-none
          focus:border-indigo-500
          transition
        "
      />

      {error && <p className="text-red-400 text-sm">{error.message}</p>}
    </div>
  );
}
