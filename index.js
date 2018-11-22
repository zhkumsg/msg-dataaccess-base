const DataAccess = require("./common/DataAccess");
const Direction = require("./common/Direction");
const DsParams = require("./common/DsParams");
const MLogic = require("./common/MLogic");
const MOperator = require("./common/MOperator");
const MType = require("./common/MType");
const OperationEnum = require("./common/OperationEnum");
const SortParam = require("./common/SortParam");
const Public = require("./common/Public");
const Single = require("./common/Single");
const TransParams = require("./common/TransParams");

module.exports = {
  //数据库操作底层
  DataAccess: DataAccess,

  //排序枚举
  Direction: Direction,

  //sql拼接键值对
  DsParams: DsParams,

  //sql逻辑枚举
  MLogic: MLogic,

  //sql匹配枚举
  MOperator: MOperator,

  //sql数据类型枚举
  MType: MType,

  //sql排序
  SortParam: SortParam,

  //增删改查枚举
  OperationEnum: OperationEnum,

  //公共方法
  Public: Public,

  //单个方法
  Single: Single,

  //sql翻译实体类
  TransParams: TransParams
};
