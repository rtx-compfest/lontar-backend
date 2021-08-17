var express = require("express")
const { DonationCategoryService } = require("../Service")
const { ErrorHandler } = require("../Util/ErrorHandler")
var router = express.Router()
const donationCategoryService = new DonationCategoryService()

router.get("/", async function (req, res, next) {
  let data = await donationCategoryService.getAll()
  if (!data) next(new ErrorHandler(404, "Data tidak ditemukan"))
  res.status(200).json({
    data: data,
    status: true,
  })
})

router.get("/:id", async function (req, res, next) {
  let data = await donationCategoryService.getById(req.params.id)
  if (!data) next(new ErrorHandler(404, "Data tidak ditemukan"))
  res.status(200).json({
    data: data,
    status: true,
  })
})

module.exports = router
