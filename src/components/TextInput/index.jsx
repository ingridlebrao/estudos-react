
export const TextInput = ({ searchValue, handleChange }) => {    
    return (
        <input
        className="search"
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        />
    );
    }