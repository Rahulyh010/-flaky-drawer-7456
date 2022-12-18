import { Box, SimpleGrid,Image,Text } from "@chakra-ui/react"
import styles from "./AllStyles/footer.module.css"
function Footer(){
  return (
    <>
      <SimpleGrid  className={styles.fot1}  columns={{sm: 2, md: 4 ,lg: 7}} spacing={10}>
        <Box>
          <Image src="https://c8.alamy.com/comp/2BWM4EJ/moscow-russia-november-16-2019-a-lots-of-kfc-chicken-hot-wings-or-strips-in-bucket-of-kfc-kentucky-fried-chicken-fast-food-2BWM4EJ.jpg" />
        </Box>
        <Box >
          <Text>
          KFC Food <br /> <br />
Menu <br /> <br />
Order Lookup <br /> <br />
Gift Card <br /> <br />
Nutrition & Allergen <br /> <br />

          </Text>
         
        </Box>
        <Box >
      

          <Text>
          Support <br /> <br />
Get Help   <br /> <br />
Contact Us  <br /> <br />
KFC Feedback  <br /> <br />
Privacy Policy  <br /> <br />
          </Text>
          
        </Box>
        <Box >
          <Text>
          Legal <br /> <br />
Terms and Conditions <br /> <br />
Privacy Policy <br /> <br />
Disclaimer <br /> <br />
Caution Notice <br /> <br />
          </Text>
          
        </Box>
        <Box >
          <Text>
          KFC India <br /> <br />
About KFC <br /> <br />

KFC Care <br /> <br />
Careers <br /> <br />
Our Golden Pa <br /> <br />
          </Text>
         
         
        </Box>
        <Box>
          <Image width={"60%"} src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"/>

        </Box>
        <Box>
          <Image width={"60%"} src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"/>
        </Box>
      </SimpleGrid>
    </>
  )
}

export default Footer