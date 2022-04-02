//1-------->the next five days in the list
export const getDayIndex = (data) => {
  let dayIndex = [];
  dayIndex.push(0);
  let index = 0;
  let tmp = data.list[index].dt_txt.slice(8, 10);
  for (let i = 0; i < 4; i++) {
    while (
      tmp === data.list[index].dt_txt.slice(8, 10) ||
      data.list[index].dt_txt.slice(11, 13) !== "12"
    ) {
      index++;
    }
    dayIndex.push(index);
    tmp = data.list[index].dt_txt.slice(8, 10);
  }
  return dayIndex;
};
