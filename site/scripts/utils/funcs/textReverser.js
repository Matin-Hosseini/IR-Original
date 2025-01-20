const textReverser = (text) => {
  const firstSpaceIncex = text.indexOf(" ");

  text =
    text.slice(0, firstSpaceIncex) + "  " + text.slice(firstSpaceIncex + 1);

  return text.split(" ").reverse().join(" ");
};

export default textReverser;
