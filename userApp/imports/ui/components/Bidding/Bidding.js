import { Button, Card, Image, Grid } from "semantic-ui-react";
import React, { useState } from "react";
import { getAllowedBids } from "/imports/lib/bidding.js";
import { positionKey } from "/imports/lib/positions.js";
import _ from "lodash";
import { SUIT_SYMBOLS } from "/imports/lib/Suits";
import { SPECIAL_BIDS } from "/imports/lib/SpecialBids.js";

export const Bidding = ({ G, ctx, makeBid, position }) => {
  const bids = getAllowedBids({ bidding: G.bidding, position });
  const [selectedLevel, setSelectedLevel] = useState(null);
  const levels = _.chain(bids)
    .keys()
    .filter((x) => !!parseInt(x))
    .value();
  const SpecialBids = bids["special"].map((bid) => {
    if (bid.bid === SPECIAL_BIDS.PASS) {
      return (
        <Button
          key="pass"
          color="green"
          onClick={() => {
            makeBid({ ...bid, position });
          }}
        >
          PASS
        </Button>
      );
    }
    if (bid.bid === SPECIAL_BIDS.DOUBLE) {
      return (
        <Button
          key="double"
          color="red"
          onClick={() => {
            makeBid({ ...bid, position });
          }}
        >
          X
        </Button>
      );
    }
    if (bid.bid === SPECIAL_BIDS.REDOUBLE) {
      return (
        <Button
          key="redouble"
          color="violet"
          onClick={() => {
            makeBid({ ...bid, position });
          }}
        >
          XX
        </Button>
      );
    }
  });

  return (
    <div style={{ display: "inline" }}>
      <Card style={{ minWidth: "100%" }}>
        <Card.Content>
          <Grid>
            <Grid.Column width={3}>
              <Button.Group vertical>{SpecialBids}</Button.Group>
            </Grid.Column>
            <Grid.Column width={13}>
              <Button.Group>
                {levels.map((level) => {
                  return (
                    <Button
                      key={`levelButton_${level}`}
                      onClick={function () {
                        setSelectedLevel(level);
                      }}
                    >
                      {level}
                    </Button>
                  );
                })}
              </Button.Group>
              <Button.Group>
                {_.get(bids, selectedLevel, []).map((bid) => {
                  return (
                    <Button
                      key={`suitButton_${bid.suit}`}
                      onClick={function () {
                        makeBid({ ...bid, position });
                      }}
                    >
                      {SUIT_SYMBOLS[bid.suit]}
                    </Button>
                  );
                })}
              </Button.Group>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
};
