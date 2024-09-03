import React, { useState } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Select,
  IconButton,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  EditIcon,
  DeleteIcon,
  ViewIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";

const Tabel = ({ columns, employees, filters, sorts, actions }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [filterOption, setFilterOption] = useState("");
  const selectTextColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const selectBgColor = useColorModeValue("white", "gray.700");
  const selectBgColorTable = useColorModeValue("gray.200", "gray.700");
  const selectBgColorHeadTable = useColorModeValue("gray.200", "gray.700");
  const selectBorderColor = useColorModeValue("gray.300", "gray.600");
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Handle sort
  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  // Handle filter
  const handleFilter = (event) => {
    setFilterOption(event.target.value);
  };

  // Filter and sort data
  const filteredData = employees
    .filter((item) => {
      return columns.some(
        (col) =>
          item[col.accessor] &&
          typeof item[col.accessor] === "string" &&
          item[col.accessor].toLowerCase().includes(searchQuery)
      );
    })
    .filter((item) => {
      if (filterOption === "") return true;
      const filterAccessor = filters.find(
        (f) => f.value === filterOption
      )?.accessor;
      if (filterAccessor) {
        return (
          item[filterAccessor] &&
          typeof item[filterAccessor] === "string" &&
          item[filterAccessor].toLowerCase().includes(filterOption)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === "") return 0;
      const sortCol = sorts.find((s) => s.value === sortOption)?.accessor;
      if (sortCol) {
        if (sortOption === "dateJoined") {
          return new Date(a[sortCol]) - new Date(b[sortCol]);
        }
        return a[sortCol].localeCompare(b[sortCol]);
      }
      return 0;
    });

  return (
    <Box width="100%" p={4}>
      {/* Search and Filter */}
      <Flex
        mb={4}
        justifyContent="space-between"
        direction={isMobile ? "column" : "row"}
      >
        <Input
          placeholder="Search"
          onChange={handleSearch}
          width={isMobile ? "100%" : "300px"}
          mb={isMobile ? 4 : 0}
          color={selectTextColor}
          bg={selectBgColor}
          borderColor={selectBorderColor}
          _focus={{
            borderColor: selectBorderColor,
          }}
        />
        <Flex direction={isMobile ? "row" : "row"} gap={isMobile ? 4 : 0}>
          <Select
            placeholder="Sort By"
            onChange={handleSort}
            mb={isMobile ? 0 : 0}
            mr={4}
            color={selectTextColor}
            bg={selectBgColor}
            borderColor={selectBorderColor}
            _focus={{
              borderColor: selectBorderColor,
            }}
          >
            {sorts.map((sort) => (
              <option key={sort.value} value={sort.value}>
                {sort.label}
              </option>
            ))}
          </Select>
          <Select
            placeholder="Filter By"
            mb={isMobile ? 4 : 0}
            onChange={handleFilter}
            color={selectTextColor}
            bg={selectBgColor}
            borderColor={selectBorderColor}
            _focus={{
              borderColor: selectBorderColor,
            }}
          >
            {filters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>

      {/* Table */}
      <Box overflowX="auto">
        <Table variant="simple" whiteSpace="nowrap">
          <Thead>
            <Tr>
              <Th
                color={selectTextColor}
                bg={selectBgColorHeadTable}
                borderColor={selectBorderColor}
                _focus={{
                  borderColor: selectBorderColor,
                }}
              >
                No
              </Th>
              {columns.map((col) => (
                <Th
                  key={col.accessor}
                  color={selectTextColor}
                  bg={selectBgColorHeadTable}
                  borderColor={selectBorderColor}
                  _focus={{
                    borderColor: selectBorderColor,
                  }}
                >
                  {col.label}
                </Th>
              ))}
              <Th
                color={selectTextColor}
                bg={selectBgColorHeadTable}
                borderColor={selectBorderColor}
                _focus={{
                  borderColor: selectBorderColor,
                }}
              >
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((item, index) => (
              <Tr key={index}>
                <Td
                  color={selectTextColor}
                  bg={selectBgColorTable}
                  borderColor={selectBorderColor}
                  _focus={{
                    borderColor: selectBorderColor,
                  }}
                >
                  {index + 1}
                </Td>
                {columns.map((col) => (
                  <Td
                    key={col.accessor}
                    color={selectTextColor}
                    borderColor={selectBorderColor}
                    bg={col.isHighlighted ? selectBgColorTable : "transparent"}
                    _focus={{
                      borderColor: selectBorderColor,
                    }}
                  >
                    {item[col.accessor]}
                  </Td>
                ))}
                <Td
                  color={selectTextColor}
                  borderColor={selectBorderColor}
                  _focus={{
                    borderColor: selectBorderColor,
                  }}
                >
                  {(actions || []).includes("view") && (
                    <IconButton
                      icon={<ViewIcon />}
                      size="sm"
                      mr={2}
                      aria-label="View"
                    />
                  )}
                  {(actions || []).includes("edit") && (
                    <IconButton
                      icon={<EditIcon />}
                      size="sm"
                      mr={2}
                      aria-label="Edit"
                    />
                  )}
                  {(actions || []).includes("print") && (
                    <IconButton
                      icon={<ExternalLinkIcon />}
                      size="sm"
                      mr={2}
                      aria-label="Print"
                    />
                  )}
                  {(actions || []).includes("delete") && (
                    <IconButton
                      icon={<DeleteIcon />}
                      size="sm"
                      aria-label="Delete"
                    />
                  )}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Tabel;
