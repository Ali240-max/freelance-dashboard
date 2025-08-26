function InputField({ label, placeholder, disabled, defaultValue, ...rest }) {
  console.log(rest);
  return (
    <div className="flex flex-col gap-1 ">
      <label htmlFor="" className="text-md text-gray-800">
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="focus:outline-none transition-all duration-300 shadow-sm bg-stone-100 rounded-lg px-2 py-1 border-gray-300 border-1   disabled:text-black text-gray-600 disabled:cursor-not-allowed "
        disabled={disabled}
        {...rest}
      />
    </div>
  );
}

export default InputField;
