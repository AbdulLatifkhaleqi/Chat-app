import { FiAlertCircle } from "react-icons/fi";

export default function Input({
  label,
  type = "text",
  placeholder,
  register,
  error,
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
          rounded-2xl
          bg-slate-900/70
          border
          border-slate-700
          text-white
          placeholder:text-slate-400
          outline-none
          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-500/20
          transition-all
        "
      />

      {error && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <FiAlertCircle />
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
}
