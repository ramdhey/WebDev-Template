import React, { useState } from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import logo from "../../Assets/Logo/itulogo.png";
import Layout from "../../Components/Layout";
import foto from "../../Assets/Images/foto.png";
import Avatar from "../../Components/Avatar";

const Profile = () => {
  // Data dummy untuk profile
  const profileData = {
    name: "Rama Dhea",
    position: "Manager",
    duration: "2 Tahun 3 Bulan",
    dateJoined: "10 Januari 2022",
  };

  // Data dummy untuk Assets dan TTD
  const initialSignatures = [
    {
      name: "Rama Dhea",
      description: "Approve for Finance",
      signatureImage: null,
    },
  ];

  const [signatures, setSignatures] = useState(initialSignatures);

  const addSignature = () => {
    setSignatures([
      ...signatures,
      {
        name: "",
        description: "",
        signatureImage: null,
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const newSignatures = [...signatures];
    newSignatures[index][field] = value;
    setSignatures(newSignatures);
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newSignatures = [...signatures];
        newSignatures[index].signatureImage = reader.result;
        setSignatures(newSignatures);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (index) => {
    const signature = signatures[index];
    console.log("Submitted Signature:", signature);
    // Implementasi logika submit disini
  };

  const inputBgColor = useColorModeValue("white", "gray.700");
  const inputBorderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Layout>
      <Box textAlign="flex-start" mt={8}>
        <Box textAlign="center" width={120}>
          <Avatar src={foto} alt="Profile" size="5xl" mb={4} />
        </Box>
        <Text fontSize="2xl" fontWeight="bold">
          {profileData.name}
        </Text>
        <Text fontSize="lg" color="gray.500">
          {profileData.position}
        </Text>
        <Text fontSize="md">Tanggal Masuk: {profileData.dateJoined}</Text>
        <Text fontSize="md" mt={2}>
          Lama Bekerja: {profileData.duration}
        </Text>
      </Box>

      <Box mt={8}>
        <Accordion allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Asset 1: Logo Perusahaan
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <FormControl mb={4}>
                <FormLabel>Logo Perusahaan</FormLabel>
                <Image src={logo} alt="Company Logo" boxSize="150px" />
              </FormControl>
            </AccordionPanel>
          </AccordionItem>

          {signatures.map((signature, index) => (
            <AccordionItem key={index}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  TTD {index + 1}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <FormControl mb={4}>
                  <FormLabel>Nama TTD</FormLabel>
                  <Input
                    value={signature.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                    bg={inputBgColor}
                    borderColor={inputBorderColor}
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Keterangan TTD</FormLabel>
                  <Input
                    value={signature.description}
                    onChange={(e) =>
                      handleInputChange(index, "description", e.target.value)
                    }
                    bg={inputBgColor}
                    borderColor={inputBorderColor}
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Unggah TTD</FormLabel>
                  <Input
                    type="file"
                    onChange={(e) => handleFileChange(index, e)}
                    bg={inputBgColor}
                    borderColor={inputBorderColor}
                  />
                </FormControl>
                {signature.signatureImage && (
                  <Image
                    src={signature.signatureImage}
                    alt={`TTD ${index + 1}`}
                    boxSize="150px"
                    mt={4}
                  />
                )}
                <Flex justify="flex-end" mt={4}>
                  <Button
                    onClick={() => handleSubmit(index)}
                    colorScheme="blue"
                  >
                    Submit TTD
                  </Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>

        <Flex justify="flex-end" mt={4}>
          <Button onClick={addSignature} colorScheme="blue">
            Tambah TTD
          </Button>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Profile;
