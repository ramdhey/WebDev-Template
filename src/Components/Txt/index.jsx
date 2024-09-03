import { Text, useColorModeValue } from "@chakra-ui/react";

const Txt = ({
  fontWeight = "regular",
  color,
  numberOfLines,
  ellipsizeMode,
  children,
  maxLength,
  ...props
}) => {
  // Menyesuaikan warna teks berdasarkan mode tema
  const defaultColor = useColorModeValue("black", "white");
  const textColor = color || defaultColor;

  // Mengatur berat font berdasarkan prop `fontWeight`
  const weightMap = {
    regular: 400,
    semiBold: 500,
    bold: 700,
  };

  const displayText =
    maxLength && children.length > maxLength
      ? `${children.substring(0, maxLength)}...`
      : children;

  return (
    <Text
      color={textColor}
      fontWeight={weightMap[fontWeight]}
      noOfLines={numberOfLines} // Menambahkan batasan jumlah baris
      isTruncated={!!numberOfLines} // Mengaktifkan truncation jika `numberOfLines` ditentukan
      {...props}
    >
      {displayText}
    </Text>
  );
};

export default Txt;
