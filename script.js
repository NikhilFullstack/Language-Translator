const rotateOn = document.querySelector(".rotate");
let data;
const dest = document.querySelector(".destination");
let ans;
const board = document.querySelector(".sourceBoard");
const langS=document.querySelector(".langTextS");
const langR=document.querySelector(".langTextR");
const sourceButton=document.querySelector(".sourcebutton");
let flag;

const convertButton=document.querySelector(".resultBtn");

sourceButton.addEventListener("click", myFun);
convertButton.addEventListener("click",myFun1);
const encodedParams = new URLSearchParams();
function myFun1(){
	flag=2;
}
function myFun(){
flag=1;
}
let mapping = {
  1: "af",
  2: "sq",
  3: "am",
  4: "ar",
  5: "hy",
  6: "az",
  7: "eu",
  8: "be",
  9: "bn",
  10: "bs",
  11: "bg",
  12: "ca",
  13: "ceb",
  14: "ny",
  15: "zh-CN",
  16: "zh-TW",
  17: "co",
  18: "hr",
  19: "cs",
  20: "da",
  21: "nl",
  22: "en",
  23: "eo",
  24: "et",
  25: "tl",
  26: "fi",
  27: "fr",
  28: "fy",
  29: "gl",
  30: "ka",
  31: "de",
  32: "el",
  33: "gu",
  34: "ht",
  35: "ha",
  36: "haw",
  37: "iw",
  38: "hi",
  39: "hmn",
  40: "hu",
  41: "is",
  42: "ig",
  43: "id",
  44: "ga",
  45: "it",
  46: "ja",
  47: "jw",
  48: "kn",
  49: "kk",
  50: "km",
  51: "rw",
  52: "ko",
  53: "ku",
  54: "ky",
  55: "lo",
  56: "la",
  57: "lv",
  58: "lt",
  59: "lb",
  60: "mk",
  61: "mg",
  62: "ms",
  63: "ml",
  64: "mt",
  65: "mi",
  66: "mr",
  67: "mn",
  68: "my",
  69: "ne",
  70: "no",
  71: "or",
  72: "ps",
  73: "fa",
  74: "pl",
  75: "pt",
  76: "pa",
  77: "ro",
  78: "ru",
  79: "sm",
  80: "gd",
  81: "sr",
  82: "st",
  83: "sn",
  84: "sd",
  85: "si",
  86: "sk",
  87: "sl",
  88: "so",
  89: "es",
  90: "su",
  91: "sw",
  92: "sv",
  93: "tg",
  94: "ta",
  95: "tt",
  96: "te",
  97: "th",
  98: "tr",
  99: "tk",
  100: "uk",
  101: "ur",
  102: "ug",
  103: "uz",
  104: "vi",
  105: "cy",
  106: "xh",
  107: "yi",
  108: "yo",
  109: "zu",
  110: "he",
};
let sourceLang=mapping[22];
let resultLang=mapping[38];
console.log(sourceLang,resultLang)
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "d1b3b97400mshcf54a4962f41455p174210jsn243704bb995a",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
  body: encodedParams,
};

function sourceBtn() {
  board.classList.remove("show");
  board.classList.add("hide");
  setTimeout(() => {
    board.classList.remove("hide");
    board.classList.add("show");
  }, "300");
}

function assign(num){
	board.classList.remove("show");
	board.classList.add("hide");
	let divContainer=board.children[num-1];
	let lang=divContainer.children[0];
	console.log(divContainer,lang,lang.textContent,mapping[num]);
	if(flag==1)
	{
		langS.textContent=lang.textContent;
		sourceLang=mapping[num];
	}
	else{
		langR.textContent=lang.textContent;
		resultLang=mapping[num];
	}
}

async function convertLang() {
  data = document.querySelector(".input");
  rotateOn.classList.add("apnaTime");

  console.log(sourceLang,resultLang)
  encodedParams.append("source_language", sourceLang);
  encodedParams.append("target_language", resultLang);
  encodedParams.append("text", data.value);
  await fetch("https://text-translator2.p.rapidapi.com/translate", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      rotateOn.classList.remove("apnaTime");
      dest.value = response.data.translatedText;
    })
    .catch((err) => console.error(err));
  rotateOn.classList.remove("apnaTime");
}
