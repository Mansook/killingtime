import axios from "axios";

//openapi.naver.com/v1/papago/n2mt

export const enToKo = async (search) => {
  const ID_KEY = "31u58ZHhOOgdX3CknBJN";
  const SECRET_KEY = "NeXWy5n7TQ";

  const params = {
    source: "en",
    target: "ko",
    text: search,
  };
  const config = {
    //baseURL: "https://openapi.naver.com",
    params: params,
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "x-naver-client-id": ID_KEY,
      "x-naver-client-secret": SECRET_KEY,
    },
  };
  const url = "v1/papago/n2mt";

  try {
    const res = await axios.post(url, params, config);
    return res;
  } catch (e) {
    console.log(e);
    return null;
  }
};
