const chapters = [
  `永和九年，歲在癸丑，暮春之初，會於會稽山陰之蘭亭，脩禊事也。群賢畢至，少長咸集。此地有崇山峻領（嶺），茂林脩竹；又有清流激湍，映帶左右，引以為流觴曲水，列坐其次。雖無絲竹管弦之盛，一觴一詠，亦足以暢敘幽情。`,
  `是日也，天朗氣清，惠風和暢。仰觀宇宙之大，俯察品類之盛。所以遊目騁懷，足以極視聽之娛，信可樂也。`,
  `夫人之相與，俯仰一世，或取諸懷抱，悟言一室之內；或因寄所託，放浪形骸之外。雖趣（取/趨）舍萬殊，靜躁不同，當其欣於所遇，蹔得於己，怏然自足，不知老之將至；及其所之既倦，情隨事遷，感慨係之矣。向之所欣，俯仰之間，以（已）為陳跡，猶不能不以之興懷；況脩短隨化，終期於盡。古人云：「死生亦大矣。」豈不痛哉！`,
  `每攬（覽）昔人興感之由，若合一契，未嘗不臨文嗟悼，不能喻之於懷。固知一死生為虛誕，齊彭殤為妄作。後之視今，亦由（猶）今之視昔，悲夫！故列敘時人，錄其所述，雖世殊事異，所以興懷，其致一也。後之攬（覽）者，亦將有感於斯文。`,
];

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col items-start pt-24 pb-24 px-20 gap-24 overflow-x-auto overflow-y-hidden selection:bg-seal/10 selection:text-ink">
      {/* Scroll Spacer (Right side in Vertical-RL) */}
      <div className="w-1 shrink-0 h-full"></div>

      {/* Header Section (Far Right) */}
      <header className="flex flex-col gap-6 h-full pt-12">
        <h1 className="text-6xl font-bold text-ink tracking-[0.3em] font-serif leading-tight">
          蘭亭集序
        </h1>
        <div className="flex flex-col gap-4 mt-auto pb-8">
          <h2 className="text-2xl text-ink/80 font-serif tracking-[0.2em] font-medium">
            王羲之
          </h2>
        </div>
      </header>

      {/* Divider */}
      <div className="w-px h-[80%] my-auto bg-ink/10"></div>

      {/* Content Columns */}
      <article className="h-full flex flex-col flex-wrap gap-16 content-start text-3xl leading-loose font-serif text-ink/90">
        {chapters.map((chapter, i) => (
          <p key={i} className="text-justify tracking-[0.15em] max-h-full">
            {chapter}
          </p>
        ))}
      </article>

      {/* Footer / End Spacer */}
      <div className="w-32 shrink-0 h-full flex flex-col justify-end pb-8 opacity-60 pl-8">
        <span className="text-xs tracking-widest text-ink/40 vertical-rl">
          EST. 353 AD
        </span>
      </div>
    </main>
  );
}
