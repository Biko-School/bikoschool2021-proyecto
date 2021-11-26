import { Meme } from '../../../../core/domain/model/Meme/Meme';
import { MemeDTO } from '../../../../core/domain/model/Meme/MemeDTO';
// import { Redirect } from 'react-router-dom'
// import { routes } from "../../../routers"

export const List = ({ memes }: any) => {
  // const { from } = { from: { pathname: routes.MEME_DETAIL } }

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
      className="App__GridGiffs--Giff"
      src={meme.img}
      alt={meme.title}
      //   onClick={(event) => openMemeDetail((event.target as Element).id)}
    />
  ));
};
