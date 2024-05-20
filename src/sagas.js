import { call, put, takeEvery } from "redux-saga/effects";
import { requestList, loadingData } from "./actions";
import { fetchData } from "./mockData";

export function* rootSaga() {
  yield takeEvery("GET_LIST", dataWorker);
}

export function* dataWorker() {
  yield put(loadingData());
  const data = yield call(() => {
    return fetchData();
  });
  yield put(requestList(data));
}
