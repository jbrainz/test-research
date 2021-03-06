import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import NextImage from "next/image";
import NextLink from "next/link";

const navItems = [
  {
    name: "Home",
    icon: MdHome,
    route: "/",
  },
  {
    name: "Seacrh",
    icon: MdSearch,
    route: "/search",
  },
];

const musicMenu = [
    {
        name: "Create playlist",
        icon: MdPlaylistAdd,
        route: "/",
    },
    {
        name: "Favorites",
        icon: MdFavorite,
        route: "/favorites",
    },
]

const playlist = new Array(30).fill(1).map((_, i) => `PlayList ${i + 1}`)
const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      px="5px"
      color="gray"
    >
      <Box py="20px" height="100%">
        <Box width="120px" marginBottom="20px" px="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navItems.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu.route} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box my="20px">
            <List spacing={2}>
                {musicMenu.map(music=> (
                     <ListItem paddingX="20px" fontSize="16px" key={music.name}>
                     <LinkBox>
                       <NextLink href={music.route} passHref>
                         <LinkOverlay>
                           <ListIcon
                             as={music.icon}
                             color="white"
                             marginRight="20px"
                           />
                           {music.name}
                         </LinkOverlay>
                       </NextLink>
                     </LinkBox>
                   </ListItem>
                ))}
            </List>
        </Box>
        <Divider color="gray.800" />
        <Box  height="65%" overflowY="auto" scrollBehavior="auto" paddingY="20px">
        <List spacing={2}>
                {playlist.map(play=> (
                <ListItem paddingX="20px" fontSize="16px" key={play}>
                    <LinkBox>
                        <NextLink href="/" passHref>
                         <LinkOverlay>  
                           {play}
                         </LinkOverlay>
                       </NextLink>
                     </LinkBox>
                   </ListItem>
                ))}
            </List>
        </Box>
      </Box>
    </Box>
  );
};
export default Sidebar;
