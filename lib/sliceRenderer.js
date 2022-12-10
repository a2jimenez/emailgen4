import Advice from "../components/Advice";
import Info from "../components/Info";
import Menu from "../components/Menu";
import Post from "../components/Post";
import Quote from "../components/Quote";
import SpaceLine from "../components/SpaceLine";
import Text from "../components/Text";
import CuratingContent from "../components/CuratingContent";

const sliceRenderer = (slice, URLsMetadata) => {
  switch (slice.slice_type) {
    case "advice_section":
      return <Advice slice={slice} />;
    case "info_box":
      return <Info slice={slice} />;
    case "menu":
      return <Menu slice={slice} />;
    case "post_with_image":
      return <Post slice={slice} />;
    case "quote":
      return <Quote slice={slice} />;
    case "spacer_line":
      return <SpaceLine slice={slice} />;
    case "text_section":
      return <Text slice={slice}  />;
    case "curating_content":
      return <CuratingContent slice={slice} URLsMetadata={URLsMetadata} />;
    default:
      return <></>;
  }
};

export default sliceRenderer;
