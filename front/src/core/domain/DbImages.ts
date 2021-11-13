export interface dbImages{
    original : dbImagesDimensionsAndUrl,
    small : dbImagesDimensionsAndUrl,
  }
  
export interface dbImagesDimensionsAndUrl{
    width : string,
    height : string,
    url : string,
  }