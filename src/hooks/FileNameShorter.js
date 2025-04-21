const FileNameShorter = (name) => {
  const ext = name.split(".").pop();
  const shortName = name.length > 15 ? `${name.slice(0, 15)}....${ext}` : name;
  return shortName;
};

export default FileNameShorter;
