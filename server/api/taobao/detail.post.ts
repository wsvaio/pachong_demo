import { signEn } from "./utils"

export default defineEventHandler(async (event) => {
  const { cookie, id } = await readBody(event);

  const token = cookie?.match(/_m_h5_tk=(.*?)_/)?.[1];

  // if (!token) return;

  const data = JSON.stringify({
    id,
    detail_v: "3.3.2",
    exParams: JSON.stringify({
      abbucket: "6",
      id,
      queryParams: `abbucket=6&id=${id}`,
      domain: "https://item.taobao.com",
      path_name: "/item.htm",
    }),
  });

  const t = String(new Date().getTime());

  const appKey = "12574478";

  const sign = signEn(token + "&" + t + "&" + appKey + "&" + data);

  const json = await fetch(
    `https://h5api.m.taobao.com/h5/mtop.taobao.pcdetail.data.get/1.0/?${new URLSearchParams(
      {
        jsv: "2.7.4",
        appKey,
        t,
        sign,
        api: "mtop.taobao.pcdetail.data.get",
        v: "1.0",
        isSec: "0",
        ecode: "0",
        timeout: "10000",
        ttid: "2022@taobao_litepc_9.17.0",
        AntiFlood: "true",
        AntiCreep: "true",
        dataType: "json",
        valueType: "string",
        type: "json",
        data,
      }
    )}`,
    {
      headers: {
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        "Cache-Control": "no-cache",
        cookie,

        Pragma: "no-cache",
        Priority: "u=3, i",
        Referer: "https://item.taobao.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1.1 Safari/605.1.15",
      },
    }
  ).then((data) => data.json());

  return json;
});
