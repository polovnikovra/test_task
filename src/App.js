import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { filterActive } from "./actions";
import BasicButton from "./components/button";
import CircularProgress from "./components/loader";
import { SelectSmall } from "./components/select";
import { SearchBar } from "./components/search/search";

export default function App(props) {
  const dispatch = useDispatch();

  let res = [];
  if (props.sortType === "up") {
    res = props.list.sort((a, b) => a.created_at - b.created_at);
  } else if (props.sortType === "down") {
    res = props.list.sort((a, b) => b.created_at - a.created_at);
  } else {
    res = props.defaultList;
  }

  const isActiveUser = props.activeUser
    ? res.filter((item) => item.is_active)
    : res;
  const filteredList = props.searchValue
    ? isActiveUser.filter(
        (item) =>
          item.first_name.toLowerCase().includes(props.searchValue) ||
          item.last_name.toLowerCase().includes(props.searchValue)
      )
    : isActiveUser;

  const result = filteredList.length ? (
    <ul>
      {filteredList.map((item) => (
        <li key={item.id} className="userList">
          <p>-</p>
          <p className={item.is_active ? "userNameActive" : "userName"}>
            {item.last_name} {item.first_name},
          </p>
          <p>{new Date(item.created_at).toLocaleString()},</p>
        </li>
      ))}
    </ul>
  ) : (
    "Ничего не найдено"
  );

  return (
    <div className="app">
      <BasicButton />
      <div className="filterList">
        <div className="sorted">
          Сортировать по дате создания
          <SelectSmall />
        </div>
        <div className="search">
          <SearchBar value={props.searchValue} />
        </div>
      </div>
      <div
        className="activityUser"
        onClick={() => dispatch(filterActive(!props.activeUser))}
      >
        Показывать только активных пользователей
        <input type="checkbox" checked={props.activeUser} />
      </div>
      <div>
        {props.loading ? (
          <div className="loader">
            <CircularProgress />
          </div>
        ) : (
          result
        )}
      </div>
    </div>
  );
}
