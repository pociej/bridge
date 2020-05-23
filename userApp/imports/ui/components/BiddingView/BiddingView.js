import { Button, Card, Image, Grid } from "semantic-ui-react";
import React from "react";
import _ from "lodash";
import { SUIT_SYMBOLS, EXTENDED_SUITS } from "../../../lib/Suits";
import { SPECIAL_BIDS } from "../../../lib/SpecialBids.js";
import { isSpecial } from "../../../lib/bidding";

export const BiddingView = ({ bids }) => {

  const renderBid = (bid) => {
    let color;
    if (isSpecial(bid)) {
      switch (bid.bid) {
        case SPECIAL_BIDS.PASS:
          color = '#016936';
          break;
        case SPECIAL_BIDS.DOUBLE:
          color = '#B03060';
          break;
        case SPECIAL_BIDS.REDOUBLE:
          color = '#0E6EB8';
          break;
      }
      return  <div className="bidding-card" style={{backgroundColor: color}}><div className="bidding-card-bid">{bid.bid}</div></div>;
    } else {
      switch (bid.suit) {
        case EXTENDED_SUITS.CLUBS:
          color = '#A0A0A0';
          break;
          case EXTENDED_SUITS.DIAMONDS:
          color = '#FE9A76';
          break;
          case EXTENDED_SUITS.HEARTS:
          color = '#B03060';
          break;
          case EXTENDED_SUITS.SPADES:
          color = '#000000';
          break;
          case EXTENDED_SUITS.NT:
          color = '#32CD32';
          break;
      }
      return <div className="bidding-card" style={{backgroundColor: color}}> <div className="bidding-card-bid" >{bid.level}{SUIT_SYMBOLS[bid.suit]}</div> </div>
    }
  }
  return (
    <div class="bidding-card-container">
      {bids.map(renderBid)}
    </div>
  );
};

