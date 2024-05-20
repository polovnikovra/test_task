import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { getData } from "../actions";

export default function BasicButton() {
  const dispatch = useDispatch();
  return (
    <Stack>
      <Button variant="contained" onClick={() => dispatch(getData())}>
        Загрузить список
      </Button>
    </Stack>
  );
}
