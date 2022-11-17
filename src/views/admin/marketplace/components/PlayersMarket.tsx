import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import PlayerFullCard from "components/card/PlayerFullCard";
const tiers: { [name: string]: number } = {
  Legendary: 1,
  Epic: 2,
  Inusual: 3,
  Common: 4,
};
export const PlayersMarket = (props: any) => {
  const players = props.market.players;
  players.sort(
    (a: any, b: any) => {
      let comparison = 0;
      if (tiers[a.player.level] > tiers[b.player.level]) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    }
    // return tiers[a.player.level] > tiers[b.player.level];
  );
  return (
    <SimpleGrid minChildWidth="280px" gap="20px">
      {players.map((player: any) => (
        <PlayerFullCard player={player} key={player.player.uuid} />
      ))}
    </SimpleGrid>
  );
};
