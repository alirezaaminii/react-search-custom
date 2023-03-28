import React, {useCallback, useEffect, useRef, useState} from "react";
import {SearchStyles} from "@/components/search/style";
import {SearchProps} from "@/components/search/types";
import {useDebounce} from "@/hooks/useDebounce";
import {BackIcon, ClearIcon, SearchIcon} from "@/components/icons";
import {useFocus} from "@/hooks/useFocus";

const Search: React.FC<SearchProps> = (props) => {
  const [value, setValue] = useState(props.initialValue ?? "");
  const inputRef = useRef(null);
  const isFocused = useFocus(inputRef);
  const debouncedValue = useDebounce<string>(value, 500);

  const handleDebouncedValueChange = useCallback(() => handleSubmit(), [debouncedValue]);

  useEffect(() => {
    handleDebouncedValueChange();
  }, [debouncedValue, handleDebouncedValueChange]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    props.onSubmit(value.trim());
  };

  const handleCancel = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    event.stopPropagation();
    setValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  };

  return (
    <SearchStyles>
      {
        value === '' && !isFocused
          ? <SearchIcon className="left-icon" onClick={handleSubmit}/>
          : <BackIcon className="left-icon back-icon" onClick={handleCancel}/>
      }

      <div>
        <input
          id="search"
          ref={inputRef}
          type="search"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          placeholder={props.placeholder}
        />
        {
          value === '' && !isFocused ? <div className="label">{props.label}</div> :
            value !== '' && <ClearIcon onClick={handleCancel} className="clear"/>
        }
      </div>
    </SearchStyles>
  );
};

export default Search;