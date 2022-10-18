export const isWordValid = (KOR, ENG, LISTS) => {
  var text;
  if (KOR === "" || ENG === "") return "빈칸";
  const KOREAN = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
  const ENGLISH = /[a-z|A-Z]/;
  if (!ENGLISH.test(ENG)) return "영어입력 오류";
  if (!KOREAN.test(KOR)) return "한글입력 오류";

  LISTS.map((word) => (word.english === ENG ? (text = "중복") : {}));
  return text;
};
