const shuffle = () => Math.random() - 0.5;

export const createQuestion = (list) => {
  var lst = Array(list.length);
  for (var i = 0; i < list.length; i++) {
    lst[i] = i;
  }
  lst = [...lst].sort(shuffle);
  const newsheet = [];
  for (i = 0; i < list.length; i++) {
    newsheet.push({
      english: list[lst[i]].english,
      answer: list[lst[i]].korea,
      input: "",
      correct: null,
    });
  }
  return newsheet;
};
