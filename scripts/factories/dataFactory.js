// eslint-disable-next-line no-unused-vars
class DataFactory {
  constructor(data, type) {
    if (type === "video") {
      // eslint-disable-next-line no-undef
      return new VideoTemplate(data);
    } else if (type === "photo") {
      // eslint-disable-next-line no-undef
      return new PhotoTemplate(data);
    } else {
      throw "unknow type format";
    }
  }
}
