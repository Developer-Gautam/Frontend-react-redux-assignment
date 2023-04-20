const SelectField = ({ label, name, options, value, onChange, ...props }) => {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">
          <select
            id={name}
            name={name}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            value={value}
            onChange={onChange}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default SelectField;
  