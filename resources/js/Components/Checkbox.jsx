export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-cyan-600 shadow-sm focus:ring-cyan-500"
            onChange={(e) => handleChange(e)}
        />
    );
}
