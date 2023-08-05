import { CompetitionCard, Footer } from "..";

export function Challenge() {
  return (
    <div className="w-full">
      <div className="flex h-auto gap-8">
        <div className="rounded-md bg-main-800 cursor-pointer flex-1"></div>

        <ul className="w-80 flex flex-col gap-4">
          <CompetitionCard
            iconName="clock"
            text="End of the challenge"
            value="01:00:00"
          />
          <CompetitionCard iconName="people" text="Online" value="+ 100.000" />
          <CompetitionCard iconName="award" text="Ranking" value="8" />
          <CompetitionCard iconName="cash" text="Wallet" value="1000 BP" />
          <CompetitionCard
            iconName="gift"
            text="VIP access"
            value="won 32 times"
          />
        </ul>
      </div>

      <div className="flex flex-col gap-2 items-center my-16 mb-80">
        <div className="shrink-0 h-32 w-32 rounded-full bg-main-800"></div>
        <span className="text-2xl font-semibold">Stromae</span>
        <p className="max-w-4xl px-4 text-center">
          Paul van Haver (Dutch pronunciation: [ˈpɔu̯l vɑn ˈɦaːvər]; born 12
          March 1985), better known by his stage name Stromae (French
          pronunciation: ​[stʁɔmaj][1]), is a Belgian singer, rapper, songwriter
          and producer. He is mostly known for his music blending hip hop and
          electronic music.
        </p>
      </div>

      <Footer />
    </div>
  );
}
