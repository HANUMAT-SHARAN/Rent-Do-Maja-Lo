import React from "react";
import { Heading, Text, SimpleGrid,Box } from "@chakra-ui/react";

export default function Question(props) {
  return (
    <div>
      <Heading textAlign={"left"} mb="5" >Questions And Answers</Heading>
      <SimpleGrid  w={[350, 950]} textAlign={"left"}>
        <Box borderRadius="20" border="1px solid #b4b4b4 "  p={5}  >
          <Text mb="5" fontSize={20}>
            What is RMI ? How is it different from monthly rentals I pay to
            Rentomojo ?
          </Text>
          <Text fontSize={14} color="gray.400">
            RMI is a short form for Rentomojo Monthly Installments which are the
            lease payments that you give monthly for usage of the product for a
            stipulated time frame. It depends on factors like market value of
            the product, tenure of service and interest charged. Monthly Rentals
            are different from RMI as it also incorporates over the top expenses
            like insurance, maintenance costs etc over and above RMI costs per
            month. Monthly Rental = RMI + Insurance costs / month + Maintenance
            Costs / Month
          </Text>
        </Box>
        <Box borderRadius="20" border="1px solid #b4b4b4 " mb="5"  p={5}>
          <Text mb="5" fontSize={20}>Why should I rent for 24 months?</Text>
          <Text  fontSize={14} color="gray.400">
            24 months is the most preferred tenure due to the following reasons
            : possibility of shifting is high as an avg consumer today shifts
            once in 2 years. Rentomojo saves you from this burden by providing
            you free relocation within your city or any of the major metro
            cities. Not just that! you get options to upgrade or expand your
            rental collection anytime at the touch of a button as well as an
            option to cancel your subscription anytime as per your changing life
            priorities.
          </Text>
        </Box>
        <Box borderRadius="20" border="1px solid #b4b4b4 " mb="5" p={5}>
          <Text mb="5" fontSize={20}>
            Will I be charged any fee if I return the product before my minimum
            tenure ends?
          </Text>
          <Text fontSize={14} color="gray.400">
            We do charge a small early closure fee, which is generally a
            multiple of your monthly rent as per your plan. To know more about
            the early closure charges associated with your plan, check out the
            Compare all tenures button.
          </Text>
        </Box>
        <Box borderRadius="20" border="1px solid #b4b4b4 " mb="5" p={5}>
          <Text mb={5} fontSize={20}>Why are rentals changing with tenure ?</Text>
          <Text fontSize={14} color="gray.400">
            its unfair to charge the same price across tenures as consumers end
            up paying a lot more than whats fair in cases of longer tenures. so
            to make it fair for someone who is committing longer, we reduce
            rentals with tenure similarly to how EMI reduces with tenure.
          </Text>
        </Box>
        <Box borderRadius="20" border="1px solid #b4b4b4 " p={5}>
          <Text mb="5" fontSize={20}>Is relocation really free ?</Text>
          <Text fontSize={14} color="gray.400">
            Intercity relocation and Intracity relocation comes free with our
            service. We help you relocate to any cities we are present in.
          </Text>
        </Box>
        <Box borderRadius="20" border="1px solid #b4b4b4 " p={5}>
          <Text mb="5" fontSize={20}>Why do you guys take deposit ?</Text>
          <Text fontSize={14} color="gray.400">
            We typically give you products worth a lot more than what we ask for
            in return as monthly rentals. To safegaurd us with risk of defaults
            or intential damage, we charge a nominal deposit.
          </Text>
        </Box>
        <Box borderRadius="20" border="1px solid #b4b4b4 " mb="5" p={5}>
          <Text mb="5" fontSize={20}>What all do you cover in free maintenance ?</Text>
          <Text fontSize={14} color="gray.400">
            We take care of all manufacturing defects and minor wear and tear.
            Not only that we end up waving damage upto ₹1000*
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
}
