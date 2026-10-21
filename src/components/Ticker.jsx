import { Fragment } from "react";
import { TICKER_ITEMS } from "../data";

function TickerRun() {
  return (
    <>
      {TICKER_ITEMS.map((item) => (
        <Fragment key={item}>
          <span>{item}</span>
          <span aria-hidden="true">✦</span>
        </Fragment>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        <TickerRun />
        <TickerRun />
      </div>
    </div>
  );
}
