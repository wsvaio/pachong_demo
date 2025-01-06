/* eslint-disable */

export const signEn = (eu) => {
  function ep(eu, ep) {
    return (eu << ep) | (eu >>> (32 - ep));
  }
  function em(eu, ep) {
    let em, ey, e_, ew, eS;
    return (
      (e_ = 2147483648 & eu),
      (ew = 2147483648 & ep),
      (em = 1073741824 & eu),
      (ey = 1073741824 & ep),
      (eS = (1073741823 & eu) + (1073741823 & ep)),
      em & ey
        ? 2147483648 ^ eS ^ e_ ^ ew
        : em | ey
        ? 1073741824 & eS
          ? 3221225472 ^ eS ^ e_ ^ ew
          : 1073741824 ^ eS ^ e_ ^ ew
        : eS ^ e_ ^ ew
    );
  }
  function ey(eu, ep, em) {
    return (eu & ep) | (~eu & em);
  }
  function e_(eu, ep, em) {
    return (eu & em) | (ep & ~em);
  }
  function ew(eu, ep, em) {
    return eu ^ ep ^ em;
  }
  function eS(eu, ep, em) {
    return ep ^ (eu | ~em);
  }
  function eT(eu, e_, ew, eS, eT, eP, eE) {
    return (eu = em(eu, em(em(ey(e_, ew, eS), eT), eE))), em(ep(eu, eP), e_);
  }
  function eP(eu, ey, ew, eS, eT, eP, eE) {
    return (eu = em(eu, em(em(e_(ey, ew, eS), eT), eE))), em(ep(eu, eP), ey);
  }
  function eE(eu, ey, e_, eS, eT, eP, eE) {
    return (eu = em(eu, em(em(ew(ey, e_, eS), eT), eE))), em(ep(eu, eP), ey);
  }
  function eM(eu, ey, e_, ew, eT, eP, eE) {
    return (eu = em(eu, em(em(eS(ey, e_, ew), eT), eE))), em(ep(eu, eP), ey);
  }
  function eI(eu) {
    let ep,
      em = "",
      ey = "";
    for (ep = 0; 3 >= ep; ep++)
      em += (ey = "0" + ((eu >>> (8 * ep)) & 255).toString(16)).substr(
        ey.length - 2,
        2
      );
    return em;
  }
  let eC,
    eA,
    eO,
    eL,
    eN,
    eR,
    eD,
    eU,
    eB,
    eF: any[] = [],
    ez = 7,
    eV = 12,
    eW = 17,
    eH = 22,
    eG = 5,
    eJ = 9,
    eX = 14,
    eY = 20,
    eQ = 4,
    eZ = 11,
    eK = 16,
    e$ = 23,
    e0 = 6,
    e3 = 10,
    e4 = 15,
    e6 = 21;
  for (
    eF = (function (eu) {
      for (
        var ep,
          em = eu.length,
          ey = em + 8,
          e_ = (ey - (ey % 64)) / 64,
          ew = 16 * (e_ + 1),
          eS = Array(ew - 1),
          eT = 0,
          eP = 0;
        em > eP;

      )
        (ep = (eP - (eP % 4)) / 4),
          (eT = (eP % 4) * 8),
          (eS[ep] = eS[ep] | (eu.charCodeAt(eP) << eT)),
          eP++;
      return (
        (ep = (eP - (eP % 4)) / 4),
        (eT = (eP % 4) * 8),
        (eS[ep] = eS[ep] | (128 << eT)),
        (eS[ew - 2] = em << 3),
        (eS[ew - 1] = em >>> 29),
        eS
      );
    })(
      (eu = (function (eu) {
        eu = eu.replace(/\r\n/g, "\n");
        for (var ep = "", em = 0; em < eu.length; em++) {
          const ey = eu.charCodeAt(em);
          128 > ey
            ? (ep += String.fromCharCode(ey))
            : ey > 127 && 2048 > ey
            ? (ep +=
                String.fromCharCode((ey >> 6) | 192) +
                String.fromCharCode((63 & ey) | 128))
            : (ep +=
                String.fromCharCode((ey >> 12) | 224) +
                String.fromCharCode(((ey >> 6) & 63) | 128) +
                String.fromCharCode((63 & ey) | 128));
        }
        return ep;
      })(eu))
    ),
      eR = 1732584193,
      eD = 4023233417,
      eU = 2562383102,
      eB = 271733878,
      eC = 0;
    eC < eF.length;
    eC += 16
  )
    (eA = eR),
      (eO = eD),
      (eL = eU),
      (eN = eB),
      (eR = eT(eR, eD, eU, eB, eF[eC + 0], ez, 3614090360)),
      (eB = eT(eB, eR, eD, eU, eF[eC + 1], eV, 3905402710)),
      (eU = eT(eU, eB, eR, eD, eF[eC + 2], eW, 606105819)),
      (eD = eT(eD, eU, eB, eR, eF[eC + 3], eH, 3250441966)),
      (eR = eT(eR, eD, eU, eB, eF[eC + 4], ez, 4118548399)),
      (eB = eT(eB, eR, eD, eU, eF[eC + 5], eV, 1200080426)),
      (eU = eT(eU, eB, eR, eD, eF[eC + 6], eW, 2821735955)),
      (eD = eT(eD, eU, eB, eR, eF[eC + 7], eH, 4249261313)),
      (eR = eT(eR, eD, eU, eB, eF[eC + 8], ez, 1770035416)),
      (eB = eT(eB, eR, eD, eU, eF[eC + 9], eV, 2336552879)),
      (eU = eT(eU, eB, eR, eD, eF[eC + 10], eW, 4294925233)),
      (eD = eT(eD, eU, eB, eR, eF[eC + 11], eH, 2304563134)),
      (eR = eT(eR, eD, eU, eB, eF[eC + 12], ez, 1804603682)),
      (eB = eT(eB, eR, eD, eU, eF[eC + 13], eV, 4254626195)),
      (eU = eT(eU, eB, eR, eD, eF[eC + 14], eW, 2792965006)),
      (eD = eT(eD, eU, eB, eR, eF[eC + 15], eH, 1236535329)),
      (eR = eP(eR, eD, eU, eB, eF[eC + 1], eG, 4129170786)),
      (eB = eP(eB, eR, eD, eU, eF[eC + 6], eJ, 3225465664)),
      (eU = eP(eU, eB, eR, eD, eF[eC + 11], eX, 643717713)),
      (eD = eP(eD, eU, eB, eR, eF[eC + 0], eY, 3921069994)),
      (eR = eP(eR, eD, eU, eB, eF[eC + 5], eG, 3593408605)),
      (eB = eP(eB, eR, eD, eU, eF[eC + 10], eJ, 38016083)),
      (eU = eP(eU, eB, eR, eD, eF[eC + 15], eX, 3634488961)),
      (eD = eP(eD, eU, eB, eR, eF[eC + 4], eY, 3889429448)),
      (eR = eP(eR, eD, eU, eB, eF[eC + 9], eG, 568446438)),
      (eB = eP(eB, eR, eD, eU, eF[eC + 14], eJ, 3275163606)),
      (eU = eP(eU, eB, eR, eD, eF[eC + 3], eX, 4107603335)),
      (eD = eP(eD, eU, eB, eR, eF[eC + 8], eY, 1163531501)),
      (eR = eP(eR, eD, eU, eB, eF[eC + 13], eG, 2850285829)),
      (eB = eP(eB, eR, eD, eU, eF[eC + 2], eJ, 4243563512)),
      (eU = eP(eU, eB, eR, eD, eF[eC + 7], eX, 1735328473)),
      (eD = eP(eD, eU, eB, eR, eF[eC + 12], eY, 2368359562)),
      (eR = eE(eR, eD, eU, eB, eF[eC + 5], eQ, 4294588738)),
      (eB = eE(eB, eR, eD, eU, eF[eC + 8], eZ, 2272392833)),
      (eU = eE(eU, eB, eR, eD, eF[eC + 11], eK, 1839030562)),
      (eD = eE(eD, eU, eB, eR, eF[eC + 14], e$, 4259657740)),
      (eR = eE(eR, eD, eU, eB, eF[eC + 1], eQ, 2763975236)),
      (eB = eE(eB, eR, eD, eU, eF[eC + 4], eZ, 1272893353)),
      (eU = eE(eU, eB, eR, eD, eF[eC + 7], eK, 4139469664)),
      (eD = eE(eD, eU, eB, eR, eF[eC + 10], e$, 3200236656)),
      (eR = eE(eR, eD, eU, eB, eF[eC + 13], eQ, 681279174)),
      (eB = eE(eB, eR, eD, eU, eF[eC + 0], eZ, 3936430074)),
      (eU = eE(eU, eB, eR, eD, eF[eC + 3], eK, 3572445317)),
      (eD = eE(eD, eU, eB, eR, eF[eC + 6], e$, 76029189)),
      (eR = eE(eR, eD, eU, eB, eF[eC + 9], eQ, 3654602809)),
      (eB = eE(eB, eR, eD, eU, eF[eC + 12], eZ, 3873151461)),
      (eU = eE(eU, eB, eR, eD, eF[eC + 15], eK, 530742520)),
      (eD = eE(eD, eU, eB, eR, eF[eC + 2], e$, 3299628645)),
      (eR = eM(eR, eD, eU, eB, eF[eC + 0], e0, 4096336452)),
      (eB = eM(eB, eR, eD, eU, eF[eC + 7], e3, 1126891415)),
      (eU = eM(eU, eB, eR, eD, eF[eC + 14], e4, 2878612391)),
      (eD = eM(eD, eU, eB, eR, eF[eC + 5], e6, 4237533241)),
      (eR = eM(eR, eD, eU, eB, eF[eC + 12], e0, 1700485571)),
      (eB = eM(eB, eR, eD, eU, eF[eC + 3], e3, 2399980690)),
      (eU = eM(eU, eB, eR, eD, eF[eC + 10], e4, 4293915773)),
      (eD = eM(eD, eU, eB, eR, eF[eC + 1], e6, 2240044497)),
      (eR = eM(eR, eD, eU, eB, eF[eC + 8], e0, 1873313359)),
      (eB = eM(eB, eR, eD, eU, eF[eC + 15], e3, 4264355552)),
      (eU = eM(eU, eB, eR, eD, eF[eC + 6], e4, 2734768916)),
      (eD = eM(eD, eU, eB, eR, eF[eC + 13], e6, 1309151649)),
      (eR = eM(eR, eD, eU, eB, eF[eC + 4], e0, 4149444226)),
      (eB = eM(eB, eR, eD, eU, eF[eC + 11], e3, 3174756917)),
      (eU = eM(eU, eB, eR, eD, eF[eC + 2], e4, 718787259)),
      (eD = eM(eD, eU, eB, eR, eF[eC + 9], e6, 3951481745)),
      (eR = em(eR, eA)),
      (eD = em(eD, eO)),
      (eU = em(eU, eL)),
      (eB = em(eB, eN));
  return (eI(eR) + eI(eD) + eI(eU) + eI(eB)).toLowerCase();
};
