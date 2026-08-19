import { useEffect, useMemo, useRef, useState } from "react";
import {
  MagnifyingGlass,
  X,
  Printer,
  Copy,
  Check,
  Plus,
  Trash,
  SpeakerHigh,
  Flame,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
import { dishes } from "../data/dishes";
import type { Dish } from "../data/dishes";

const menuMap: Record<string, string> = {
  Cold: "冷菜 Cold dishes",
  "Stir-fried": "热菜 Hot dishes",
  Braised: "热菜 Hot dishes",
  Roast: "热菜 Hot dishes",
  Seafood: "热菜 Hot dishes",
  Vegetable: "热菜 Hot dishes",
  Hotpot: "锅物 Hotpot",
  Noodles: "主食 Staples",
  Rice: "主食 Staples",
  Soup: "汤 Soup",
  "Dim sum": "点心 Dim sum",
  Snack: "点心 Dim sum",
  Dessert: "甜点 Desserts",
  Drink: "饮品 Drinks",
};

const menuOrder = [
  "冷菜 Cold dishes",
  "热菜 Hot dishes",
  "锅物 Hotpot",
  "主食 Staples",
  "汤 Soup",
  "点心 Dim sum",
  "甜点 Desserts",
  "饮品 Drinks",
];

const dietTags = [
  { key: "vegetarian", label: "Vegetarian" },
  { key: "vegan", label: "Vegan" },
  { key: "halal", label: "Halal" },
  { key: "gluten-free", label: "Gluten-free" },
  { key: "spicy", label: "Spicy" },
  { key: "mild", label: "Mild" },
] as const;

const tagLabel: Record<string, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  halal: "Halal",
  "gluten-free": "Gluten-free",
  spicy: "Spicy",
  mild: "Mild",
};

const dietColor: Record<string, string> = {
  vegetarian: "bg-emerald-50 text-emerald-700 border-emerald-200",
  vegan: "bg-emerald-100 text-emerald-800 border-emerald-300",
  halal: "bg-teal-50 text-teal-700 border-teal-200",
  "gluten-free": "bg-amber-50 text-amber-700 border-amber-200",
  spicy: "bg-accent-50 text-accent-700 border-accent-200",
  mild: "bg-zinc-100 text-zinc-600 border-zinc-200",
};

export default function MenuExplorer() {
  const [query, setQuery] = useState("");

  // SSG pages cannot read ?q= at render time (Astro.url strips the search
  // string), so deep links from the cuisine cards pre-fill the box after
  // mount. SSR and client markup stay identical, so no hydration mismatch.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [region, setRegion] = useState("all");
  const [category, setCategory] = useState("all");
  const [selected, setSelected] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const featured = useMemo(() => dishes.slice(0, 10), []);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  function scrollFeatured(direction: 1 | -1) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-featured-card]");
    const step = card ? card.offsetWidth + 20 : 320;
    const maxScroll = rail.scrollWidth - rail.clientWidth;
    const target = Math.min(
      Math.max(rail.scrollLeft + direction * step, 0),
      maxScroll,
    );
    rail.scrollTo({ left: target, behavior: "smooth" });
  }

  function syncFeaturedIndex() {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-featured-card]");
    if (!card) return;
    const index = Math.round(rail.scrollLeft / (card.offsetWidth + 20));
    setFeaturedIndex(Math.min(index, featured.length - 1));
  }

  const regions = useMemo(
    () => Array.from(new Set(dishes.map((d) => d.region))).sort(),
    []
  );
  const categories = useMemo(
    () => Array.from(new Set(dishes.map((d) => d.category))).sort(),
    []
  );

  const isFiltering =
    query.trim() !== "" ||
    activeTags.length > 0 ||
    region !== "all" ||
    category !== "all";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return dishes.filter((d) => {
      if (q) {
        const hay = [
          d.englishName,
          d.chineseName,
          d.pinyin,
          d.region,
          d.category,
          d.ingredients.join(" "),
          d.description,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (
        activeTags.length > 0 &&
        !activeTags.every((t) => (d.tags as string[]).includes(t))
      ) {
        return false;
      }
      if (region !== "all" && d.region !== region) return false;
      if (category !== "all" && d.category !== category) return false;
      return true;
    });
  }, [query, activeTags, region, category]);

  const grouped = useMemo(() => {
    if (isFiltering) return [];
    return menuOrder
      .map((section) => ({
        title: section,
        items: dishes.filter((d) => menuMap[d.category] === section),
      }))
      .filter((g) => g.items.length > 0);
  }, [isFiltering]);

  const selectedDishes = useMemo(
    () => dishes.filter((d) => selected.includes(d.slug)),
    [selected]
  );

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  function toggleSelect(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function resetFilters() {
    setQuery("");
    setActiveTags([]);
    setRegion("all");
    setCategory("all");
  }

  function scrollToCard() {
    document
      .getElementById("order-card")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function copyCard() {
    const text = selectedDishes
      .map((d) => `${d.englishName} · ${d.chineseName} (${d.pinyin}) — ${d.price}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  function speak(text: string) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  }

  function renderCard(dish: Dish) {
    const isSelected = selected.includes(dish.slug);
    const isSpicy = (dish.tags as string[]).includes("spicy");
    return (
      <article
        key={dish.slug}
        className="group flex h-full flex-col overflow-hidden border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
          <img
            src={dish.image}
            alt={`${dish.englishName} (${dish.chineseName})`}
            loading="lazy"
            width="800"
            height="600"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
          <span className="absolute bottom-3 left-3 bg-accent-600 px-2.5 py-1 text-sm font-semibold text-white shadow-md">
            {dish.price}
          </span>
          {dish.mustTry && (
            <span className="absolute left-3 top-2 bg-ink px-2 py-1 text-xs font-semibold tracking-wide text-white">
              ★ Must try
            </span>
          )}
          <button
            type="button"
            onClick={() => toggleSelect(dish.slug)}
            className={`absolute right-2 top-2 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium transition-colors ${   isSelected
                ? "bg-accent-600 text-white"
                : "bg-white/95 text-ink hover:bg-accent-50"
            }`}
          >
            {isSelected ? <Check size={14} /> : <Plus size={14} />}
            {isSelected ? "Added" : "Add"}
          </button>
          {/* big Chinese characters fade up on hover */}
          <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="w-full px-4 pb-3 text-right text-3xl font-semibold tracking-tight text-white">
              {dish.chineseName}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-baseline justify-between gap-2">
            <h4 className="font-semibold leading-snug">{dish.englishName}</h4>
            {isSpicy && (
              <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent-600" title="Spicy">
                <Flame size={13} weight="fill" />
                Spicy
              </span>
            )}
          </div>
          <div className="mt-1 flex items-center gap-2">
            <p className="text-sm text-muted">
              {dish.chineseName} · {dish.pinyin}
            </p>
            <button
              type="button"
              onClick={() => speak(dish.chineseName)}
              aria-label={`Hear ${dish.chineseName}`}
              title="Hear it"
              className="inline-flex h-6 w-6 shrink-0 items-center justify-center border border-line text-muted transition-colors hover:border-accent-500 hover:text-accent-600"
            >
              <SpeakerHigh size={14} />
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {dish.description}
          </p>
          {dish.tip && (
            <p className="mt-2 flex items-start gap-1.5 text-sm leading-relaxed text-accent-700">
              <span className="shrink-0 font-semibold">Tip:</span>
              <span>{dish.tip}</span>
            </p>
          )}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {dish.tags.map((t) => (
              <span
                key={t}
                className={`border px-2 py-0.5 text-xs ${dietColor[t] ?? "border-line text-muted"}`}
              >
                {tagLabel[t] ?? t}
              </span>
            ))}
          </div>
        </div>
      </article>
    );
  }

  return (
    <section id="explorer" className="border-y border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Search the menu, find your dish.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Type an English name, Chinese characters, pinyin, or an ingredient. Filter by
            diet and region, then add dishes to a point-to-order card.
          </p>
        </div>

        {!isFiltering && (
          <div className="mt-14" data-reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-accent-600">Most ordered</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  Popular right now
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm tabular-nums text-muted">
                  {String(featuredIndex + 1).padStart(2, "0")} /{" "}
                  {String(featured.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => scrollFeatured(-1)}
                    aria-label="Previous dishes"
                    className="inline-flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-accent-500 hover:text-accent-600"
                  >
                    <CaretLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollFeatured(1)}
                    aria-label="Next dishes"
                    className="inline-flex h-10 w-10 items-center justify-center border border-line bg-white text-ink transition-colors hover:border-accent-500 hover:text-accent-600"
                  >
                    <CaretRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={railRef}
              onScroll={syncFeaturedIndex}
              className="mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scroll-smooth"
            >
              {featured.map((dish) => (
                <div
                  key={`featured-${dish.slug}`}
                  data-featured-card
                  className="w-[280px] shrink-0 snap-start sm:w-[300px]"
                >
                  {renderCard(dish)}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14">
          <div className="relative">
            <MagnifyingGlass
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'kung pao', 'mapo', 'tofu', or 'peanut'…"
              className="h-14 w-full border border-line bg-paper pl-12 pr-12 text-base outline-none transition-colors focus:border-accent-600 focus:bg-white"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center text-muted hover:text-ink"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {dietTags.map((tag) => {
              const active = activeTags.includes(tag.key);
              return (
                <button
                  key={tag.key}
                  type="button"
                  onClick={() => toggleTag(tag.key)}
                  className={`inline-flex items-center px-3.5 py-2 text-sm transition-colors ${
                    active
                      ? "bg-ink text-white"
                      : "border border-line bg-white text-ink hover:border-accent-500"
                  }`}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-muted">
              <span>Region</span>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent-600"
              >
                <option value="all">All regions</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm text-muted">
              <span>Course</span>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-line bg-white px-3 py-2 text-sm text-ink outline-none focus:border-accent-600"
              >
                <option value="all">All courses</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            {isFiltering && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-sm text-accent-600 hover:text-accent-700"
              >
                <X size={14} />
                Reset filters
              </button>
            )}
          </div>
        </div>

        {isFiltering ? (
          <div className="mt-10">
            <p className="text-sm text-muted">
              {filtered.length} {filtered.length === 1 ? "dish" : "dishes"} found
            </p>
            {filtered.length > 0 ? (
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map(renderCard)}
              </div>
            ) : (
              <div className="mt-10 border border-dashed border-line p-12 text-center">
                <p className="font-medium">No dishes match.</p>
                <p className="mt-1 text-sm text-muted">
                  Try a different word or clear the filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-sm font-medium text-white"
                >
                  <X size={16} />
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {grouped.map((group) => (
              <div key={group.title}>
                <h3 className="flex items-baseline gap-3 border-b-2 border-ink pb-2">
                  <span className="text-xl font-semibold">{group.title}</span>
                  <span className="text-sm text-muted">{group.items.length} dishes</span>
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {group.items.map(renderCard)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected.length > 0 && (
        <div id="order-card" className="scroll-mt-20 border-t border-line bg-paper">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">
                  Your point-to-order card.
                </h2>
                <p className="mt-2 max-w-xl text-muted">
                  Show this screen to the waiter, or print it. Big Chinese characters do
                  the talking for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelected([])}
                  className="inline-flex items-center gap-2 border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:bg-accent-50"
                >
                  <Trash size={16} />
                  Clear
                </button>
                <button
                  type="button"
                  onClick={copyCard}
                  className="inline-flex items-center gap-2 border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:bg-accent-50"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-sm font-medium text-white"
                >
                  <Printer size={16} />
                  Print
                </button>
              </div>
            </div>

            <div className="print-card mt-8 grid gap-4 sm:grid-cols-2">
              {selectedDishes.map((d) => (
                <div
                  key={d.slug}
                  className="flex items-center justify-between gap-4 border-2 border-ink bg-white p-5"
                >
                  <div>
                    <p className="text-3xl font-semibold leading-tight">
                      {d.chineseName}
                    </p>
                    <p className="mt-1 text-lg font-medium">{d.englishName}</p>
                    <p className="mt-1 text-sm text-muted">{d.pinyin}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-semibold text-accent-600">{d.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <p className="text-sm text-muted">
              <span className="font-semibold text-ink">{selected.length}</span>{" "}
              {selected.length === 1 ? "dish" : "dishes"} in your card
            </p>
            <button
              type="button"
              onClick={scrollToCard}
              className="inline-flex items-center gap-2 bg-accent-600 px-4 py-2.5 text-sm font-medium text-white"
            >
              View order card
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
