/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Text,
  useColorModeValue,
  SimpleGrid,
  Icon,
  Badge,
  Avatar,
} from "@chakra-ui/react";
import {
  MdAttachMoney,
  MdBarChart,
  MdOutlineSupervisorAccount,
} from "react-icons/md";
import {
  getMarketPlayers,
  getUserData,
  getRanking,
  getHistory,
} from "./market.utils";
// Custom components
import TableRanking from "views/admin/marketplace/components/TableRanking";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import Card from "components/card/Card";
import { PlayersMarket } from "views/admin/marketplace/components/PlayersMarket";
// Assets
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsRanking } from "views/admin/marketplace/variables/tableColumnsRanking";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import { useState, useEffect } from "react";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [marketData, setMarketData] = useState();
  const [userData, setUserData] = useState({});
  const [ranking, setRanking] = useState([]);
  const [rankingLoading, setRankingLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  //  let marketData;

  useEffect(() => {
    async function fetchMarketData() {
      try {
        const market = await getMarketPlayers();
        setMarketData(<PlayersMarket market={market} />);
      } catch (error) {}
    }
    async function fetchUserData() {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {}
    }
    async function fetchRanking() {
      try {
        const data = await getRanking();
        let tableData = data.map((rank, i) => {
          if (i >= 5) return null;
          return {
            username: {
              username: rank.user.username,
              photo: rank.user.profile_image_url,
            },
            team: rank.players,
            points: rank.points,
          };
        });
        tableData = tableData.filter((a) => a);
        setRanking(tableData);
        setRankingLoading(false);
      } catch (error) {}
    }
    async function fetchHistory() {
      try {
        const data = await getHistory();
        let historyData = data.map((activity, i) => {
          if (i >= 5) return null;
          return {
            user: {
              username: activity.user.username,
              photo: activity.user.profile_image_url,
            },
            player: {
              username: activity.player.username,
              photo: activity.player.photo,
            },
            signed: activity.notice_type === "signing",
            price: activity.price,
          };
        });
        historyData = historyData.filter((a) => a);
        setHistory(historyData);
        setHistoryLoading(false);
      } catch (error) {}
    }
    fetchMarketData();
    fetchRanking();
    fetchUserData();
    fetchHistory();
  }, []);

  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}
      >
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
        >
          {/* <Banner /> */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdAttachMoney}
                      color={brandColor}
                    />
                  }
                />
              }
              name="My budget"
              value={`${userData.budget ? userData.budget : "0"}💰`}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdBarChart}
                      color={brandColor}
                    />
                  }
                />
              }
              name="My points"
              value={userData.points ? userData.points : "0"}
            />
            <MiniStatistics
              startContent={
                <IconBox
                  w="56px"
                  h="56px"
                  bg={boxBg}
                  icon={
                    <Icon
                      w="32px"
                      h="32px"
                      as={MdOutlineSupervisorAccount}
                      color={brandColor}
                    />
                  }
                />
              }
              name="Players owned"
              value={userData.players ? userData.players.length : "0"}
            />
          </SimpleGrid>
          <Flex direction="column">
            <Flex
              mb="20px"
              justifyContent="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
                Availabe players
              </Text>
            </Flex>
            {marketData}
          </Flex>
        </Flex>
        <Flex
          flexDirection="column"
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
        >
          <Card px="0px" mb="20px">
            <TableRanking
              tableData={ranking}
              columnsData={tableColumnsRanking}
              rankingLoading={rankingLoading}
            />
          </Card>
          <Card p="0px">
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify="space-between"
              w="100%"
              px="22px"
              py="18px"
            >
              <Text color={textColor} fontSize="xl" fontWeight="600">
                History
              </Text>
            </Flex>
            {history.map((activity) => (
              <HistoryItem
                name={
                  <>
                    {activity.player.username}
                    <Badge
                      colorScheme={activity.signed ? "green" : "red"}
                      fontSize="xs"
                      ml="10px"
                    >
                      {activity.signed ? "Signed" : "Fired"}
                    </Badge>
                  </>
                }
                author={
                  <>
                    by
                    <Avatar
                      src={activity.user.photo}
                      w="20px"
                      h="20px"
                      ml="8px"
                      me="4px"
                    />
                    {activity.user.username}
                  </>
                }
                image={activity.player.photo}
                price={`${activity.price}💰`}
              />
            ))}
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
