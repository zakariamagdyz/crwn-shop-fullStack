module.exports = class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryStirng = queryString;
  }

  filter() {
    // 1) Exclude filters query from queryString
    const queryStringClone = { ...this.queryStirng };
    const excludedFields = ["page", "limit", "sort", "fields"];
    excludedFields.forEach((field) => delete objString[field]);
    // 2) Add support for mongoDB queries $lte,lt,gt,gte
    let QObjString = JSON.stringify(queryStringClone);
    QObjString.replace(/\b(lt|lte|gt|gte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(QObjString));

    return this;
  }

  sorting() {
    if (this.queryStirng.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }

  limitingFields() {
    if (this.queryStirng.fields) {
      const selectedFields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(selectedFields);
    } else {
      this.query = this.query.select("-__V");
    }
    return this;
  }

  pagination() {
    const page = this.queryString.page || 1;
    const limit = this.queryString.limit || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
};
