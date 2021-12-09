import { createBrowserHistory } from "history";
import { Meme } from "../../../core/domain/model/Meme/Meme";
// import { routes } from "../../../routers";

export const Memes = ({ memes }: any) => {
  const history = createBrowserHistory();

  function handleClick() {
    history.push("/meme/detail");
  }
  // const { from } = { from: { pathname: routes.MEME_DETAIL } }

  // if (redirectToReferrer) {
  //     return
  // }
  // function openMemeDetail(idMeme:string){
  //   console.log(idMeme);
  //   <Redirect to={from + } />
  // }
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
