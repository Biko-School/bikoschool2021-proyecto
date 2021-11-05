import React, { useState, useEffect } from "react";
interface Data {
  id: string;
  type: string;
  slug: string;
  giphyUrl: string;
  title: string;
  source_tld: string;
  source_post_url: string;
  import_datetime: string;
  username: string;
  images: {
    original: {
      width: string;
      height: string;
      url: string;
    };
    small: {
      width: string;
      height: string;
      url: string;
    };
  };
  tags: string[];
}

function App() {
  const [memesData, setMemesData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:3010/api/memes", { mode: "no-cors" })
      .then((response) => {
        if (!response.ok) {
          return Promise.reject("Error");
        }
        return response.json();
      })
      .then((data) => {
        setMemesData(data.memes);
      });
  }, []);
  console.log(memesData);

  if (memesData.length === 0) {
    return <>Loading...</>;
  }

  return (
    <div>
      {memesData.map((result: Data) => (
        <img src={result.images.small.url} alt={result.title} key={result.id} />
      ))}
    </div>
  );
}

export default App;
