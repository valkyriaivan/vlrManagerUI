import {
  Avatar,
  Box,
  Button,
  Flex,
  Progress,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

function RankingTable(props: {
  columnsData: any;
  tableData: any;
  rankingLoading: boolean;
}) {
  const { columnsData, tableData, rankingLoading } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    tableInstance;

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const bgItem = useColorModeValue(
    { bg: "white", boxShadow: "0px 40px 58px -20px rgba(112, 144, 176, 0.12)" },
    { bg: "navy.700", boxShadow: "unset" }
  );
  return (
    <>
      <Flex
        direction="column"
        w="100%"
        overflowX={{ sm: "scroll", lg: "hidden" }}
      >
        <Flex
          align={{ sm: "flex-start", lg: "center" }}
          justify="space-between"
          w="100%"
          px="22px"
          pb="20px"
          mb="10px"
          boxShadow="0px 40px 58px -20px rgba(112, 144, 176, 0.26)"
        >
          <Text color={textColor} fontSize="xl" fontWeight="600">
            Ranking
          </Text>
        </Flex>
        {rankingLoading ? (
          <Flex
            alignItems="center"
            justify="center"
            style={{ height: "150px", width: "100%" }}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="brand.400"
              size="xl"
            />
          </Flex>
        ) : (
          <Table {...getTableProps()} variant="simple" color="gray.500">
            <Thead>
              {headerGroups.map((headerGroup, index) => (
                <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <Th
                      // {...column.getHeaderProps(column.getSortByToggleProps())}
                      pe="10px"
                      key={index}
                      borderColor="transparent"
                    >
                      <Flex
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: "10px", lg: "12px" }}
                        color="gray.400"
                      >
                        {column.render("Header")}
                      </Flex>
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>

            <Tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);
                return (
                  <Tr {...row.getRowProps()} key={index} _hover={bgItem}>
                    {row.cells.map((cell, index) => {
                      let data;
                      if (cell.column.Header === "Username") {
                        data = (
                          <Flex align="center">
                            <Avatar
                              src={cell.value.photo}
                              w="30px"
                              h="30px"
                              me="8px"
                            />

                            <Text
                              color={textColor}
                              fontSize="sm"
                              fontWeight="600"
                            >
                              {cell.value.username}
                            </Text>
                          </Flex>
                        );
                      } else if (cell.column.Header === "Team") {
                        data = (
                          <Flex align="center">
                            {cell.value.map((img: any) => {
                              return (
                                <Avatar
                                  src={img.photo}
                                  w="30px"
                                  h="30px"
                                  me="8px"
                                />
                              );
                            })}
                          </Flex>
                        );
                      } else if (cell.column.Header === "Points") {
                        data = (
                          <Flex align="center">
                            <Text
                              color={textColor}
                              fontSize="sm"
                              fontWeight="600"
                            >
                              {cell.value}
                            </Text>
                          </Flex>
                        );
                      }
                      return (
                        <Td
                          {...cell.getCellProps()}
                          key={index}
                          fontSize={{ sm: "14px" }}
                          minW={{ sm: "150px", md: "200px", lg: "auto" }}
                          borderColor="transparent"
                        >
                          {data}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        )}
      </Flex>
    </>
  );
}

export default RankingTable;
