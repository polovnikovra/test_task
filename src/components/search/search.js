import { Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterItem, clearSearchValue } from "../../actions";
import "./search.css";

export function SearchBar(props) {
  const dispatch = useDispatch();

  const clearButton = props.value ? (
    <button
      className="searchButton"
      onClick={() => dispatch(clearSearchValue())}
    >
      Сбросить
    </button>
  ) : null;
  return (
    <>
      <Container maxWidth="md">
        <TextField
          type="search"
          id="search"
          label="Search"
          value={props.value}
          sx={{ width: 200 }}
          onChange={(e) => dispatch(filterItem(e.target.value))}
          onKeyDown={(e) =>
            e.keyCode === 27 ? dispatch(clearSearchValue()) : null
          }
        />
        {clearButton}
      </Container>
    </>
  );
}
