import React, { useState } from "react";
import { Table, Card } from 'semantic-ui-react'
import { SUIT_SYMBOLS } from "/imports/lib/Suits";
import { _ } from 'lodash';
import { POSITIONS } from '/imports/lib/positions.js';

export const BiddingTable = function ({ bidding, dealer, isActive }) {
  if (isActive) bidding.push({ position: dealer, bid: '?' });
  const rows = bidding.reduce((result, bid) => {
    const currentRow = _.last(result);
    if (currentRow.length === 4) {
      return [...result, [bid]]
    } else {
      currentRow.push(bid);
      return result;
    }
  }, [[]]);

  const firstBidPosition = _.first(bidding).position;
  let header = _.keys(POSITIONS);
  let first = _.first(header);

  while (first !== firstBidPosition) {
    header.unshift(header.pop());
    first = _.first(header);
  };
  return < Card >
    <Table fixed>
      <Table.Header>
        <Table.Row>
          {header.map(h => {
            return <Table.HeaderCell key={`header_${h}`}>{h}</Table.HeaderCell>
          })}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {rows.map((row, row_index) => {
          return <Table.Row key={`bidding_row_${row_index}`}>
            {row.map((bid, bid_index) => {
              return <Table.Cell key={`bid_cell_${bid_index}`}>  <Bid bid={bid}> </Bid></Table.Cell>
            })}
          </Table.Row>
        })}
      </Table.Body>
    </Table>
  </Card >
};

export const Bid = function ({ bid }) {
  return typeof (bid.suit) !== 'undefined' ? <div> {bid.level}{SUIT_SYMBOLS[bid.suit]}</div> : <div>{bid.bid}</div>;
}
