import Text from "../components/textMessage/text";
import Picture from "../components/pictureMessage/picture";
import Withdraw from "../components/systemMessage/withdraw/withdraw";
import Time from "../components/systemMessage/time/time";
import JoinGroup from "../components/systemMessage/joinGroup/joinGroup";
import WebLink from "../components/cardMessage/webLink/webLink";
import { setPlugin } from ".";

setPlugin(Text, "text");
setPlugin(Picture, "picture");

setPlugin(Withdraw, "system", "withdraw");
setPlugin(Time, "system", "time");
setPlugin(JoinGroup, "system", "joinGroup");

setPlugin(WebLink, "card", "webLink");
