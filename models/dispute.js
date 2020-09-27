/**
 * @description: 争议表格
 * @param {type}
 * @return {type}
 */
const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const IDs = mongoose.Schema.Types.ObjectId;
const disputeSchema = new Schema({
  //归属的用户
  along_user: {
    type: IDs,
    ref: "user",
  },
  //项目的ID值
  item_id: {
    type: IDs,
    ref: "table_items",
  },
  //原因
  reason: {
    type: String,
    default: "",
  },
  //最终审核人学号
  check_person: {
    type: String,
    default: "",
  },
  //是否处理
  is_checked: {
    type: Boolean,
    default: false,
  },
},{versionKey: false});

const Dispute = mongoose.model("dispute", disputeSchema);

module.exports = {
  Dispute,
};
