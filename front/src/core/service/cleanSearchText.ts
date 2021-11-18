const cleanSearchText = (searchText: string) => {
  const cleanedText = searchText.trim().replace(/\s+/g, " ");
  return cleanedText;
};
export default cleanSearchText;
