import * as types from 'store/types/index';

function setMatrix(payload) {
  return { type: types.SET_MATRIX, payload };
}
function setIncrement(payload) {
  return { type: types.SET_INCREMENT, payload };
}
function setNumberToCut(payload) {
  return { type: types.SET_NUMBER_TO_CUT, payload };
}
function setClosestValues(payload) {
  return { type: types.SET_CLOSEST_VALUES, payload };
}
function setClearValues(payload) {
  return { type: types.SET_CLEAR_VALUES, payload };
}
function setNewRowData(payload) {
  return { type: types.SET_NEW_ROW_DATA, payload };
}
function setRowPercentage(payload) {
  return { type: types.SET_ROW_PERCENTAGE, payload };
}
function setClearDeposit(payload) {
  return { type: types.SET_CLEAR_DEPOSIT, payload };
}
function setNewRow(payload) {
  return { type: types.SET_NEW_ROW, payload };
}
function setDeleteRow(payload) {
  return { type: types.SET_DELETE_ROW, payload };
}
export {
  setMatrix,
  setIncrement,
  setNumberToCut,
  setNewRowData,
  setClosestValues,
  setClearValues,
  setRowPercentage,
  setClearDeposit,
  setNewRow,
  setDeleteRow,
};
