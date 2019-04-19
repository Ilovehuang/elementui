<template>
   <div class="vx-view-datatable">
      <!-- 表格相关其它内容 -->
      <slot></slot>
      <vx-container-row v-show="ToolbarVisible !== false">
         <vx-container-col class="fl" :span="8" v-show="PageSizeVisible !== false">
            <vx-view-pagesize :list="SizeList" v-model="PageSize" size="small"></vx-view-pagesize>
         </vx-container-col>
         <div class="fr tablebtn" >
            <slot name="BtnContainer"></slot>
         </div>
         <vx-container-col class="fr" :span="4" v-show="SearchVisible !== false">
            <vx-form-input class="fr searchBox" v-model="SearchValue" :placeholder="LoaderDict.Placeholder.PleaseQuery">
            </vx-form-input>
         </vx-container-col>
      </vx-container-row>
      <div class="tableContainer" :options="options">
         <table :id="Id"><tfoot></tfoot></table>
      </div>
   </div>
</template>
<style lang="less">
.vx-view-datatable {
   tr:nth-of-type(odd) {
      background-color: #ffffff;
   }
   tr:nth-of-type(even) {
      background-color: #f0f0f0;
   }
   .tablebtn .el-button {
      padding: 7px 12px;
      margin: 0px 10px;
   }
   button.pageBtn {
      height: 30px;
      border-color: #cccccc;
      line-height: 30px;
      padding: 0px 10px;
   }
   button.pageBtn:hover {
      color: #333;
      background-color: #e7e7e7;
   }
   button.pageBtn.active {
      color: #ffffff;
      border-color: #d0d0d0;
      background-color: #2780c4;
   }

   div.searchBox {
      width: 250px;
   }

   table.table {
      font-size: 14px;
      max-width: 100%;
      border-collapse: collapse !important;
      background-color: #ffffff;
      width: 100%;
      margin-top: 10px;
      margin-bottom: 20px;
      .vertical-top {
         vertical-align: top !important;
      }
      th {
         padding: 8px;
         text-align: center;
         line-height: 1.428571429;
         vertical-align: bottom;
         border-bottom: 2px solid #dddddd;
      }
      td {
         padding: 8px;
         line-height: 1.428571429;
         vertical-align: middle !important;
         border-top: 1px solid #dddddd;
         a {
            cursor: hand;
         }
      }
   }

   table.table > caption + thead > tr:first-child > th,
   table.table > colgroup + thead > tr:first-child > th,
   table.table > thead:first-child > tr:first-child > th,
   table.table > caption + thead > tr:first-child > td,
   table.table > colgroup + thead > tr:first-child > td,
   table.table > thead:first-child > tr:first-child > td {
      border-top: 0;
   }

   table.table-striped > tbody > tr:nth-child(2n) > td,
   table.table-striped > tbody > tr:nth-child(2n) > th {
      background-color: #f2f2f2;
   }

   table.table-hover > tbody > tr:hover > td,
   table.table-hover > tbody > tr:hover > th {
      background-color: #f5f5f5;
   }

   @tableborder: 1px solid #dddddd;
   table.table-bordered {
      border: @tableborder;
      th,
      td {
         border: @tableborder;
         border-bottom-width: 0px;
         border-bottom-color: #c1caf0;
         /*表单th底边框颜色*/
         -moz-opacity: 0.8;
         /*Firefox私有，透明度50%*/
         opacity: 0.8;
         /*其他，透明度50%*/
      }
   }

   table col[class*='col-'] {
      position: static;
      float: none;
      display: table-column;
   }

   table td[class*='col-'],
   table th[class*='col-'] {
      float: none;
      display: table-cell;
   }

   table.table thead tr[role='row'],
   table.table tfoot tr[role='row'] {
      height: auto !important;
      background: -webkit-linear-gradient(top, #fff, #eee);
      background: linear-gradient(top, #fff, #eee);
      background: -moz-linear-gradient(top, #fff, #eee);
      background: -o-linear-gradient(top, #fff, #eee);
      background: -ms-linear-gradient(top, #fff, #eee);
      filter: progid:DXImageTransform.Microsoft.Gradient(
            startColorStr="#fff",
            endColorStr="#eee",
            gradientType="0"
         );
   }
}
</style>
<script>
/**
 @constructor vx-view-datatable
 */

// Url: "/UserService.html"
Vue.component("vx-view-datatable", {
   props: {
      "options":{
         default:function(){return []}
      }, /// 表格显示参数
      "tabledata":{
         default:function(){return []}
      }, /// 表格数据
      "footerdata":{
         default:function(){return []}
      }, /// 表格页脚数据
      "htmltable":{
         default:""
      }, /// html表格显示
      "btnspan":{
         default:0
      }, /// 标题栏按钮空间宽度
      "checked":{
         default:function(){return []}
      }, /// 选中的行的主键值列表（多选框）
      "rowdata":{
         default:function(){return {}}
      }, /// 当前行数据对象
      "pageno":{
         default:0
      }, /// 当前页码
      "pagesize":{
         default:0
      }, /// 行数/页
      "modifyrow":{
         default:false
      }, /// 修改单行事件
      "deleterow":{
         default:null
      } /// 删除单行事件
   },
   data() {
      var id = "GT" + (moment().format("x") + parseInt(Math.random() * (100000000 + 1)));
      return {
         LoaderDict: LoaderDict,
         Id: id, /// 组件唯一Id
         /**
         @property 分页列表
          */
         SizeList: [15, 50, 100, 200],
         /**
         @property jQuery DataTable对象
          */
         Table: null,
         PageSize: 15, /// 每页记录数量
         SearchValue: null, /// 表格查询条件
         Checkbox: false, /// 是否使用了多选框
         GridData: [], /// 表格数据
         Grid: null /// jQuery 组件对象
      };
   },
   computed: {
      /// 工具栏是否可见
      ToolbarVisible: {
         get() {
            if (this.options) return this.options.ToolbarVisible;
            return null;
         }
      },
      /// 分页数量是否可见
      PageSizeVisible: {
         get() {
            if (this.options) return this.options.PageSizeVisible;
            return null;
         }
      },
      /// 搜索栏是否可见
      SearchVisible: {
         get() {
            if (this.options) return this.options.SearchVisible;
            return null;
         }
      },
      /// 分页栏是否可见
      PagebarVisible: {
         get() {
            if (this.options) return this.options.PagebarVisible;
            return null;
         }
      },
      /// 页码是否可见
      PagerVisible: {
         get() {
            if (this.options) return this.options.PagerVisible;
            return null;
         }
      },
      /// 表格显示参数
      GridOptions: {
         get: function() {
            return this.options;
         }
      },
      SpanLength: {
         get() {
            return this.spanlength ? parseInt(this.spanlength) : 1;
         }
      }
   },
   mounted() {
      this.initOptions();
      if(this.options) this.initGridTable();
   },
   watch: {
      options: {
         handler() {
            /// 条件发生变化，重新初始化表格
            console.log("options changed")
            console.log(this.options)
            if(this.options) {
               this.initOptions();
               this.initGridTable();
            }
         },
         deep: true
      },
      tabledata: {
         handler() {
            if (this.tabledata) {
               this.GridData = this.tabledata;
               this.Grid.data("Grid.Data", this.GridData);
               this.fillData();
            }
         },
         deep: true
      },
      htmltable() {
         this.initGridTable(this.htmltable.join(""));
      },
      checked: {
         handler() {
            if (this.checked) {
               var maingrid = this.Grid;
               this.checked.forEach(function(item) {
                  maingrid
                     .find("input[name='" + item["Id"] + "_CB']")
                     .parent()
                     .addClass("is-checked");
               });
            }
         },
         deep: true
      },
      SearchValue() {
         this.filterData(this.SearchValue);
      },
      PageSize() {
         this.pageSizeChanged(this.PageSize);
      }
   },
   methods: {
      getCheckbox(name, value) {
         return (
            "<span class='el-checkbox__input'>" +
            "<span class='el-checkbox__inner'></span>" +
            "<input type='checkbox' name='" +
            name +
            "' class='el-checkbox__original gridCheckbox' value='" +
            value +
            "' " +
            " /></span>"
         );
      },
      initOptions() {
         var me = this;
         if (this.options) {
            var createdRow = this.options.createdRow;
            this.Grid = $("#" + this.Id);
            this.Grid.data("Grid.options", this.options)

            this.options.createdRow = function(row, data, dataIndex) {
               $(row).data("grid.rowdata", data);
               if (createdRow) createdRow.call(this, row, data, dataIndex);
            };
            if (!this.options.idField) this.options.idField = "Id";
            if (this.options.lengthMenu) {
               this.SizeList = this.options.lengthMenu;
            }
            if (this.options.PageSize) {
               this.PageSize = this.options.PageSize;
            }
            //关联状态
            if (this.options.columns) {
               var column = this.options.columns[0];
               if (column.checkbox === true) {
                  this.Checkbox = true;
                  if (!column.title) column.title = "";
                  column.title = me.getCheckbox("gridCheckAll", "", "") + column.title;
                  if (!column.title) column.title = "";

                  column.data = function(row) {
                     var checkboxName = row.Id + "_CB";
                     return me.getCheckbox(checkboxName, row.Id);
                  };
               }
            }
         }
      },
      fillData() {
         var searchText = this.Table.search();
         searchText = searchText ? searchText : "";
         this.Table.clear();
         if (this.GridData) {
            this.Table.rows
               .add(this.GridData)
               .search(searchText)
               .page.len(this.PageSize)
               .draw();
         }
         if(this.footerdata) {
            this.Grid.find("tfoot").empty().append(this.footerdata);
         }
      },
      pageSizeChanged(curPageSize) {
         this.PageSize = curPageSize;
         var options = this.GridOptions;

         if (options.bServerSide === true) {
            this.GridOptions.displayStart = 0;
            this.Table.page.len(curPageSize).draw();
         } else {
            this.Table.page.len(curPageSize).draw();
         }
      },
      filterData(val) {
         this.Table.search(val)
            .page.len(this.PageSize)
            .draw();
      },
      runGridClick(clickEvent, rowdata) {
         /// todo deepclone
         this.$emit("update:rowdata", rowdata);
         switch (clickEvent) {
            case "modify":
               this.modifyGridRow.call(this, rowdata);
               break;
            case "delete":
               this.deleteGridRow.call(this, rowdata);
               break;
            default:
               if (typeof this.$parent[clickEvent] == "function") {
                  this.$parent[clickEvent].call(this, rowdata);
               }
               break;
         }
      },
      modifyGridRow() {
         /// 表格行弹出框编辑
         this.$emit("update:modifyrow", true);
      },
      deleteGridRow(rowdata) {
         /// 表格行删除确认
         var me = this;
         this.$confirm(this.LoaderDict.Common.DeleteConfirm).then(function() {

            var deldata = {};
            deldata[me.options.idField] = rowdata[me.options.idField];
            me.$emit("update:rowdata", deldata);
            me.$emit("update:deleterow", true);
         });
      },
      initGridTable(htmltable) {
         var me = this;
         var tableHtml =
            "<table id='" + this.Id + "' class='datatable table table-striped table-bordered table-hover'>";
         if (htmltable) tableHtml += htmltable;
         tableHtml += "<tfoot></tfoot></table>";
         $("#" + this.Id)
            .closest(".tableContainer")
            .empty()
            .append(tableHtml);

         var tableText = this.LoaderDict.DataTable;
         if ($.fn.dataTable) {
            // dataTables defaults
            $.extend($.fn.dataTable.defaults, {
               pagingType: "bootstrap",
               pageLength: 25,
               dom: "t<'vx-container-row'<'vx-container-col el-col-10'i><'vx-container-col el-col-14'p>>",
               language: {
                  lengthMenu: tableText.SizePerPage, //按 _MENU_ 条记录/页
                  paginate: {
                     previous: tableText.Previous, //"上一页",
                     next: tableText.Next //"下一页"
                  },
                  search: this.LoaderDict.Label.Filtration + "_INPUT_", // 过滤条件：_INPUT_
                  emptyTable: tableText.NoRecords, //"目前没有数据记录",
                  zeroRecords: tableText.ZeroRecords, //"该过滤条件没有找到任何数据记录",
                  info: tableText.TotalCount, // "当前数据查询结果：共 _TOTAL_ 条",
                  infoEmpty: tableText.TotalCount, // "当前数据查询结果： 0 条",
                  infoFiltered: tableText.FilterCount
               },
               aoColumnDefs: [
                  {
                     sDefaultContent: "",
                     aTargets: ["_all"]
                  }
               ]
            });
         }
         this.Grid = $("#" + this.Id);
         var maingrid = this.Grid;
         maingrid
            .on("draw.dt", function() {
               if (me.checked) {
                  for (var i = 0; i < me.checked.length; i++) {
                     maingrid
                        .find("input[name='" + me.checked[i].Id + "_CB']")
                        .parent()
                        .addClass("is-checked");
                  }
               }
               /// 处理操作栏点击事件
               maingrid
                  .find("td a")
                  .unbind("click")
                  .click(function(e) {
                     e.stopPropagation();
                     var clickEvent = $(this).attr("vue-click");
                     if (clickEvent) {
                        var rowData = $(this)
                           .closest("tr")
                           .data("grid.rowdata");
                        me.runGridClick.call(me, clickEvent, rowData);
                        return false;
                     } else return true;
                  });
               /// 处理行点击事件
               maingrid
                  .find("tr")
                  .unbind("click")
                  .click(function(e) {
                     e.stopPropagation();
                     var checkbox = $(this).find(":checkbox");
                     var isChecked = false;
                     if (me.Checkbox && !me.checked) console.warn("undefined this.checked array! ");
                     if (checkbox.length == 1 && me.checked) {
                        var rowId = checkbox.val();
                        isChecked = checkbox.parent().is(".is-checked");

                        // 反向选择
                        if (isChecked) {
                           for (var i = 0; i < me.checked.length; i++) {
                              if (me.checked[i].Id == rowId) {
                                 me.checked.splice(i, 1);
                                 break;
                              }
                           }
                           checkbox.parent().removeClass("is-checked");
                        } else {
                           var rowData = { Id: rowId };
                           for (var k = 0; k < me.GridData.length; k++) {
                              if (me.GridData[k].Id == rowData.Id) {
                                 rowData.Tags = me.GridData[k].Tags;
                                 break;
                              }
                           }
                           if (rowData["Id"]) me.checked.push(rowData);
                        }
                     }
                     if (typeof me.options.cellClick == "function") {
                        me.options.cellClick.call(this, e, !isChecked);
                     }
                     return false;
                  });

               // 标题多选框全选
               maingrid
                  .find("input:checkbox[name='gridCheckAll']")
                  .parent()
                  .unbind("click")
                  .click(function(e) {
                     e.stopPropagation();
                     var allChecked = $(this)
                        .toggleClass("is-checked")
                        .is(".is-checked");

                     maingrid.find(".gridCheckbox").each(function() {
                        var checkbox = $(this);
                        var rowId = checkbox.val();
                        var isChecked = $(this)
                           .parent()
                           .is(".is-checked");

                        if (allChecked) {
                           if (!isChecked && me.checked) {
                              var rowData = { Id: rowId };
                              for (var k = 0; k < me.GridData.length; k++) {
                                 if (me.GridData[k].Id == rowData.Id) {
                                    rowData.Tags = me.GridData[k].Tags;
                                    break;
                                 }
                              }
                              me.checked.push(rowData);
                           }
                        } else {
                           if (isChecked && me.checked) {
                              for (var i = 0; i < me.checked.length; i++) {
                                 if (me.checked[i].Id == rowId) {
                                    me.checked.splice(i, 1);
                                    break;
                                 }
                              }
                              checkbox.parent().removeClass("is-checked");
                           }
                        }
                     });

                     if (typeof me.options.CheckAll == "function") {
                        me.options.CheckAll.call(this, e, maingrid, allChecked);
                     }
                  });
               if (me.options.afterDraw) {
                  me.options.afterDraw(maingrid);
               }
            })
            .on("column-visibility.dt", function(e, settings, columnIndex, state) {});
         maingrid.data("grid.options", this.options);
         this.Table = maingrid.dataTable(this.options).DataTable();
         /// 重复执行 hualong 2018-7-12
         // setTimeout(function() {
         //    me.fillData.call(me);
         // }, 1);
      }
   }
});
</script>
