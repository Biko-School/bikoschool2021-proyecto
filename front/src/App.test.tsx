import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Muestra el meme Movie Brazil GIF by MOODMAN", async () => {
  render(<App />);
  const meme = await screen.findByRole("img", {
    name: "Movie Brazil GIF by MOODMAN",
  });

  expect(meme).toBeInTheDocument();
  expect(meme).toHaveAttribute(
    "src",
    "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif"
  );
});
test("Muestra tres memes", async () => {
  render(<App />);
  const memes = [
    {
      "id": "YleuWir5NTNVXkflSp",
      "type": "gif",
      "slug": "moodman-movie-brazil-the-YleuWir5NTNVXkflSp",
      "giphyUrl": "https://giphy.com/gifs/moodman-movie-brazil-the-YleuWir5NTNVXkflSp",
      "title": "Movie Brazil GIF by MOODMAN",
      "source_tld": "",
      "source_post_url": "",
      "import_datetime": "2020-08-20 02:24:22",
      "username": "",
      "images": {
        "original": {
          "width": "480",
          "height": "269",
          "url": "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif"
        },
        "small": {
          "width": "200",
          "height": "112",
          "url": "https://media4.giphy.com/media/YleuWir5NTNVXkflSp/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif"
        }
      },
      "tags": ["#movie", "#brazil", "#brazil the movie"]
    },
    {
      "id": "J6OQEgOUNOU5BWfjFj",
      "type": "gif",
      "slug": "moodman-J6OQEgOUNOU5BWfjFj",
      "giphyUrl": "https://giphy.com/gifs/moodman-J6OQEgOUNOU5BWfjFj",
      "title": "Dance Dancing GIF by MOODMAN",
      "source_tld": "",
      "source_post_url": "",
      "import_datetime": "2020-08-26 22:51:59",
      "username": "",
      "images": {
        "original": {
          "width": "480",
          "height": "402",
          "url": "https://media3.giphy.com/media/J6OQEgOUNOU5BWfjFj/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif"
        },
        "small": {
          "width": "200",
          "height": "168",
          "url": "https://media3.giphy.com/media/J6OQEgOUNOU5BWfjFj/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif"
        }
      },
      "tags": ["#dance moves", "#dance", "#dancing", "#dancin"]
    },
    {
      "id": "l5DePfMmB09ZVkh3Af",
      "type": "gif",
      "slug": "moodman-funny-gif-l5DePfMmB09ZVkh3Af",
      "giphyUrl": "https://giphy.com/gifs/moodman-funny-gif-l5DePfMmB09ZVkh3Af",
      "title": "Funny Gif Lol GIF by MOODMAN",
      "source_tld": "",
      "source_post_url": "",
      "import_datetime": "2020-08-26 22:20:35",
      "username": "",
      "images": {
        "original": {
          "width": "379",
          "height": "498",
          "url": "https://media1.giphy.com/media/l5DePfMmB09ZVkh3Af/giphy.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=giphy.gif"
        },
        "small": {
          "width": "200",
          "height": "263",
          "url": "https://media1.giphy.com/media/l5DePfMmB09ZVkh3Af/200w.gif?cid=be655fb7f245f7d29df0fc743b70e3ee884dbaf31956e789&rid=200w.gif"
        }
      },
      "tags": ["#funny", "#hilarious", "#lol", "#funny gif"]
    }
  ];
  memes.forEach(async (meme) => {
    const memeElement = await screen.findByRole("img", {
      name: meme.title,
    });
    expect(memeElement).toBeInTheDocument();
    expect(memeElement).toHaveAttribute("src", meme.images.original.url);
  });
});