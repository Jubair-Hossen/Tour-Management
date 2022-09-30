const Tour = require("../models/Tour")

exports.getTourService = async (filters, queries) => {
    const result = Tour.find(filters)
        .select(queries.fields)
        .limit(parseInt(queries.limit))
        .skip((queries.page - 1) * parseInt(queries.limit))
        .sort(queries.sort)
    return result;
}

exports.getTourByIdService = async (id) => {
    const result = await Tour.findById(id);

    await Tour.updateOne({ _id: id },
        { "viewCount": result.viewCount + 1 },
        { runValidators: true }
    )
    return result;
}