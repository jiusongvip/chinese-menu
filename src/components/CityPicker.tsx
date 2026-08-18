import { useState } from "react";
import { SpeakerHigh } from "@phosphor-icons/react";

type City = {
  id: string;
  zh: string;
  en: string;
  budget: string;
  dishes: { en: string; zh: string; price: string }[];
};

const cities: City[] = [
  {
    id: "beijing",
    zh: "北京",
    en: "Beijing",
    budget: "160-280 RMB/day",
    dishes: [
      { en: "Peking Duck", zh: "北京烤鸭", price: "¥168-398" },
      { en: "Zhajiangmian", zh: "炸酱面", price: "¥15-32" },
      { en: "Sour Plum Drink", zh: "酸梅汤", price: "¥3-8" },
    ],
  },
  {
    id: "shanghai",
    zh: "上海",
    en: "Shanghai",
    budget: "180-320 RMB/day",
    dishes: [
      { en: "Xiaolongbao", zh: "小笼包", price: "¥12-38" },
      { en: "Sheng Jian Bao", zh: "生煎包", price: "¥10-24" },
      { en: "Scallion Pancakes", zh: "葱油饼", price: "¥8-20" },
    ],
  },
  {
    id: "chengdu",
    zh: "成都",
    en: "Chengdu",
    budget: "120-220 RMB/day",
    dishes: [
      { en: "Mapo Tofu", zh: "麻婆豆腐", price: "¥18-42" },
      { en: "Kung Pao Chicken", zh: "宫保鸡丁", price: "¥28-58" },
      { en: "Dan Dan Noodles", zh: "担担面", price: "¥16-36" },
    ],
  },
  {
    id: "xian",
    zh: "西安",
    en: "Xi'an",
    budget: "100-180 RMB/day",
    dishes: [
      { en: "Roujiamo", zh: "肉夹馍", price: "¥8-20" },
      { en: "Lamb Skewers", zh: "羊肉串", price: "¥5-12" },
      { en: "Beef Noodle Soup", zh: "牛肉面", price: "¥22-48" },
    ],
  },
  {
    id: "guangzhou",
    zh: "广州",
    en: "Guangzhou",
    budget: "150-260 RMB/day",
    dishes: [
      { en: "Char Siu", zh: "叉烧", price: "¥28-68" },
      { en: "Har Gow", zh: "虾饺", price: "¥15-32" },
      { en: "Wonton Soup", zh: "云吞汤", price: "¥18-38" },
    ],
  },
  {
    id: "chongqing",
    zh: "重庆",
    en: "Chongqing",
    budget: "130-240 RMB/day",
    dishes: [
      { en: "Sichuan Hotpot", zh: "火锅", price: "¥88-188" },
      { en: "Suan Cai Yu", zh: "酸菜鱼", price: "¥48-98" },
      { en: "Maoxuewang", zh: "毛血旺", price: "¥45-88" },
    ],
  },
];

const phrases = [
  { zh: "我要这个", py: "wǒ yào zhè ge", en: "I'll have this" },
  { zh: "不要辣", py: "bú yào là", en: "No spice, please" },
  { zh: "我是素食者", py: "wǒ shì sù shí zhě", en: "I'm vegetarian" },
];

export default function CityPicker() {
  const [active, setActive] = useState("beijing");
  const city = cities.find((c) => c.id === active) ?? cities[0];

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  return (
    <section id="city-picker" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Pick your city, get the menu.
          </h2>
          <p className="mt-2 text-muted">
            Six food cities, their must-eats, prices and the phrase to order them.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {cities.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center px-4 py-2 text-sm transition-colors ${
                active === c.id
                  ? "bg-ink text-white"
                  : "border border-line bg-white text-ink hover:border-accent-500"
              }`}
            >
              {c.en}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border border-line bg-white p-6">
            <p className="text-sm text-muted">
              {city.zh} · {city.en} · {city.budget}
            </p>
            <div className="mt-4 space-y-3">
              {city.dishes.map((dish) => (
                <div key={dish.en} className="flex items-baseline gap-2">
                  <span className="font-medium">{dish.en}</span>
                  <span className="text-sm text-muted">{dish.zh}</span>
                  <span className="flex-1 border-b border-dotted border-line"></span>
                  <span className="shrink-0 text-sm font-semibold text-accent-600">
                    {dish.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-line bg-white p-6">
            <p className="text-sm font-semibold text-accent-600">Say it at the table</p>
            <div className="mt-3 space-y-2">
              {phrases.map((phrase) => (
                <button
                  key={phrase.zh}
                  type="button"
                  onClick={() => speak(phrase.zh)}
                  className="group flex w-full items-center gap-3 border border-line bg-paper p-3 text-left transition-colors hover:border-accent-500"
                >
                  <span className="text-lg font-medium">{phrase.zh}</span>
                  <span className="text-sm text-accent-600">{phrase.py}</span>
                  <span className="ml-auto flex items-center gap-2 text-xs text-muted">
                    {phrase.en}
                    <SpeakerHigh size={14} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
