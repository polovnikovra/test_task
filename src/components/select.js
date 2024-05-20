import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { sortIncrease } from "../actions";
import { useDispatch } from "react-redux";

export function SelectSmall() {
  const [sortType, setSortType] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSortType(event.target.value);
    dispatch(sortIncrease(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Created</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sortType}
        onChange={handleChange}
      >
        <MenuItem value={"default"}>Без сортировки</MenuItem>
        <MenuItem value={"up"}>По возрастанию</MenuItem>
        <MenuItem value={"down"}>По убыванию</MenuItem>
      </Select>
    </FormControl>
  );
}
