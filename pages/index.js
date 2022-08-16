import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button, Container } from "@chakra-ui/react";

import Property from "../components/Property";
import Hook from "../components/Hook";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import Services from "../components/Services";

export const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5" align="center">
      <Text color="black" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text color="black" fontSize="3xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.900">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button fontSize="xl" bg="black" color="white">
        <Link href={linkName}>
          <a>{buttonText}</a>
        </Link>
      </Button>
    </Box>
  </Flex>
);

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <>
    <Hook />
    <div id="services">
      <Services />
    </div>
    <Box borderRightWidth="4px" borderLeftWidth="4px" borderColor="gray.800">
      <div id="rent">
        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1=" Explore from Apartments, builder floors, villas"
          desc2="and more"
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        />
      </div>
      <Container centerContent>
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          stopOnHover
          width={1000}
          centerMode
          centerSlidePercentage={40}
        >
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Carousel>
      </Container>

      <div id="sale">
        <Banner
          purpose="BUY A HOME"
          title1=" Find, Buy & Own Your"
          title2="Dream Home"
          desc1=" Explore from Apartments, land, builder floors,"
          desc2=" villas and more"
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        />
      </div>

      <Container centerContent>
        <Carousel
          infiniteLoop
          autoPlay
          interval={3000}
          stopOnHover
          width={1000}
          centerMode
          centerSlidePercentage={40}
        >
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Carousel>
      </Container>
    </Box>
  </>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=9`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=9`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
