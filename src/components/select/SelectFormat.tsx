import { Box, Group, Select, SelectProps, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import React from "react";

const SelectFormat = ({ options, selectedFormat, setSelectedFormat }) => {
  const iconProps = {
    stroke: 1.5,
    color: "currentColor",
    opacity: 0.6,
    size: 18,
  };
  const renderSelectOption: SelectProps["renderOption"] = ({
    option,
    checked,
  }) => (
    <Group
      flex="1"
      gap="xs"
      style={{
        background: checked
          ? `linear-gradient(to right, #EA00FE, #6135E9)`
          : `light-dark(
            var(--mantine-color-white),
            var(--mantine-color-dark-8)
          )`,
        color: checked
          ? "white"
          : `light-dark(
            var(--mantine-color-dark-8),
            var(--mantine-color-white)
          )`,
        padding: "10px",
        borderRadius: "8px",
        margin: "2px",
      }}
    >
      <Text fw="bold">{option.label}</Text>
      {checked && (
        <IconCheck style={{ marginInlineStart: "auto" }} {...iconProps} />
      )}
    </Group>
  );
  return (
    <Box w="100%">
      <Select
        size="md"
        radius={"md"}
        data={options}
        onChange={(option) => {
          console.log("option", option);
          setSelectedFormat(option);
        }}
        placeholder="Select Format.."
        allowDeselect={false}
        title="Select Format.."
        checkIconPosition="right"
        //   value={getOptions()?.find(
        //     (opt) => opt?.value === selectedFormat
        //   )}
        value={selectedFormat}
        styles={{
          option: {
            margin: 0,
            padding: 0,
          },
          input: {
            fontWeight: 700,
          },
        }}
        comboboxProps={{
          transitionProps: { transition: "pop", duration: 200 },
        }}
        renderOption={renderSelectOption}
      />
    </Box>
  );
};

export default SelectFormat;
