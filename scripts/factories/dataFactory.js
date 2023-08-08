class DataFactory {
  constructor(data, type) {
    if (type === "video") {
      return new VideoTemplate(data);
    } else if (type === "photo") {
      return new PhotoTemplate(data);
    } else {
      throw "unknow type format";
    }
  }
}
