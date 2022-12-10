import { useEffect, useState } from "react";
import {
  Container,
  Heading,
  HStack,
  Select,
  Button,
  Box,
  Divider,
  Textarea,
  useClipboard,
  Spinner,
  Skeleton,
  useToast,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

const compare = (a, b) => {
  if (a.title < b.title) {
    return 1;
  }
  if (a.title > b.title) {
    return -1;
  }
  return 0;
};

const colors = {
  "es-es": "green",
  "en-us": "blue",
};

export default function Home() {
  const toast = useToast();
  const [newsletters, setNewsletters] = useState([]);
  const [newslettersHTML, setNewsletterHTML] = useState(
    "Email HTML code will be here"
  );
  const { hasCopied, onCopy } = useClipboard(newslettersHTML);
  const [fetNewsletterListLoader, setFetNewsletterList] = useState(false);
  const [lang, setLang] = useState("es-es");

  const fetNewsletterList = async () => {
    setFetNewsletterList(true);
    setNewsletterHTML("Email HTML code will be here");
    try {
      const res = await fetch(`/api/newsletter?lang=${lang}`);
      const ans = await res.json();
      if (res.status === 200) {
        setNewsletters(ans.newsletters.sort(compare));
        toast({
          title: "Newsletters list loaded successfully",
          status: lang === "es-es" ? "success" : "info",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top",
        });
      } else if (res.status === 201) {
        setNewsletters([]);
        toast({
          title: ans.reason,
          status: "warning",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top",
        });
      } else {
        console.error(ans.reason);
        toast({
          title: "Something went wrong - Server side",
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong - Client side",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
        position: "top",
      });
    } finally {
      setFetNewsletterList(false);
    }
  };
  const [getNewsletterHtmlLoader, setGetNewsletterHtml] = useState(false);
  const getNewsletterHtml = async (id) => {
    setGetNewsletterHtml(true);
    setNewsletterHTML("Email HTML code will be here");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newsletterId: id, newsLang: lang }),
      });
      const ans = await res.json();

      if (res.status === 200) {
        setNewsletterHTML(ans.html);
        toast({
          title: "Newsletter HTML generated successfully",
          status: lang === "es-es" ? "success" : "info",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top",
        });
      } else {
        console.error(ans.reason);
        toast({
          title: "Something went wrong - Server side",
          status: "error",
          duration: 3000,
          isClosable: true,
          variant: "left-accent",
          position: "top",
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: "Something went wrong - Client side",
        status: "error",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
        position: "top",
      });
    } finally {
      setGetNewsletterHtml(false);
    }
  };
  const [currentNewsletter, setCurrentNewsletter] = useState();
  const handelSelect = (e) => {
    const id = e.target.value;
    if (id) {
      getNewsletterHtml(id);
      setCurrentNewsletter(id);
    }
  };

  useEffect(() => {
    fetNewsletterList();
  }, [lang]);

  return (
    <Container maxW={"5xl"}>
      <Heading as={"h1"} textAlign="center" size={"lg"} p="2">
        Email Template Generator
      </Heading>

      <RadioGroup defaultValue={lang} value={lang} onChange={(v) => setLang(v)}>
        <Stack spacing={5} direction="row">
          <Radio colorScheme={colors["es-es"]} value="es-es">
            Spanish
          </Radio>
          <Radio colorScheme={colors["en-us"]} value="en-us">
            English
          </Radio>
        </Stack>
      </RadioGroup>

      <HStack>
        <Select
          placeholder="Select newsletter"
          value={currentNewsletter}
          onChange={handelSelect}
          isDisabled={fetNewsletterListLoader}
        >
          {newsletters.map((newsletter, index) => (
            <option key={index} value={newsletter.id}>
              {newsletter.title}
            </option>
          ))}
        </Select>
        <Button
          colorScheme={"whatsapp"}
          onClick={fetNewsletterList}
          isLoading={fetNewsletterListLoader}
        >
          Get Newsletters
        </Button>
      </HStack>
      <Heading as={"h2"} textAlign="center" size={"md"} p="2">
        Preview
      </Heading>
      <Box
        pos={"relative"}
        border="1px solid #CCC"
        borderRadius={"md"}
        overflow="hidden"
      >
        {getNewsletterHtmlLoader && (
          <Spinner color="orange.500" pos={"absolute"} top="50%" left={"50%"} />
        )}
        <Skeleton height="500px" isLoaded={!getNewsletterHtmlLoader}>
          <Box
            h={500}
            bg={
              newslettersHTML === "Email HTML code will be here"
                ? "gray.200"
                : "white"
            }
            dangerouslySetInnerHTML={{
              __html:
                newslettersHTML === "Email HTML code will be here"
                  ? ""
                  : newslettersHTML,
            }}
            overflow="auto"
          />
        </Skeleton>
      </Box>
      <Divider p={2} />
      <Heading as={"h2"} textAlign="center" size={"md"} p="2">
        HTML Code
      </Heading>
      <Box pos={"relative"}>
        <Button
          zIndex={2}
          size={"sm"}
          colorScheme={hasCopied ? "facebook" : "linkedin"}
          onClick={onCopy}
          pos="absolute"
          right={5}
          isDisabled={newslettersHTML === "Email HTML code will be here"}
        >
          {hasCopied ? "Copied" : "Copy"}
        </Button>
        <Textarea
          placeholder="Email HTML code will be here"
          size="sm"
          resize={"vertical"}
          //noOfLines={10}
          rows={10}
          overflow="auto"
          value={newslettersHTML}
          borderRadius={"md"}
          readOnly
        />
      </Box>
    </Container>
  );
}
