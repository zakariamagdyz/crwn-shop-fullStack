const HttpError = require("../utils/HttpError");
const catchAsync = require("../utils/catchAsync");
const ApiFeatures = require("../utils/ApiFeatures");
const selectedFields = require("../utils/selectedFields");
/////////////////////////////////////////////////////////////////////////////////

const getModelName = (Model, plural) => {
  if (plural === "plural") {
    return `${Model.modelName}`.toLowerCase().concat("s");
  }

  return `${Model.modelName}`.toLowerCase();
};

/////////////////////////////////////////////////////////////////////////////////
exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // 1) get model name
    const modelName = getModelName(Model, "plural");
    // 2) create the query
    const features = new ApiFeatures(Model.find(), req.query)
      .sorting()
      .pagination()
      .filter()
      .limitingFields();

    const data = await features.query;

    res.status(200).json({
      status: "success",
      results: data.length,
      data: { [modelName]: data },
    });
  });
/////////////////////////////////////////////////////////////////////////////////

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    const modelName = getModelName(Model);
    const query = Model.findById(req.params.id);
    if (popOptions) query.populate(popOptions);
    const data = await query;

    if (!data)
      return next(new HttpError(`No ${modelName} found with that ID!`, 400));

    res.status(200).json({ status: "success", [modelName]: data });
  });
/////////////////////////////////////////////////////////////////////////////////

exports.createOne = (Model, selectedOptions) =>
  catchAsync(async (req, res, next) => {
    const modelName = getModelName(Model);
    let filterdBody = req.body;
    if (selectedOptions.length > 0)
      filterdBody = selectedFields(filterdBody, selectedOptions);
    const newDoc = await Model.create(filterdBody);

    res.status(201).json({ status: "success", [modelName]: newDoc });
  });
/////////////////////////////////////////////////////////////////////////////////

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const modelName = getModelName(Model);
    let filterdBody = req.body;
    if (selectedOptions.length > 0)
      filterdBody = selectedFields(filterdBody, selectedOptions);
    const updatedDoc = await Model.findByIdAndUpdate(
      req.params.id,
      filterdBody,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedDoc)
      return next(new HttpError(`No ${modelName} found with that ID!`, 404));

    res.status(201).json({ status: "success", [modelName]: updatedDoc });
  });
/////////////////////////////////////////////////////////////////////////////////

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const modelName = getModelName(Model);
    const deletedDoc = await Model.findByIdAndDelete(req.params.id);
    if (!deletedDoc)
      return next(new HttpError(`No ${modelName} found with that ID!`, 404));

    res.status(204).json({ status: "success", data: null });
  });