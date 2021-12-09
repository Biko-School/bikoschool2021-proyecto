import { createBrowserHistory } from "history";
import { Meme } from "../../../core/domain/model/Meme/Meme";
// import { routes } from "../../../routers";

export const Memes = ({ memes }: any) => {
  const history = createBrowserHistory();

  function handleClick() {
    history.push("/meme/detail");
    window.location.reload();
  }

  return memes.map((meme: Meme) => (
    <img
      id={meme.id}
      className="gridd_giffs__giff"
      src={meme.img}
      alt={meme.title}
      onClick={handleClick}
    />
  ));
};
