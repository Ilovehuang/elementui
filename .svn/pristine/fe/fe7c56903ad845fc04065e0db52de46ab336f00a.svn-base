let CheckCheckbox = (function () {
   return {
      drawradio: function (maingrid, checked) {
         maingrid
            .find("label.el-radio")
            .unbind("click")
            .click(function (e) {
               let rowId = $(this)
                  .find("input:radio")
                  .attr("id");
               let exist = false;
               for (let i = 0; i < checked.length; i++) {
                  if (checked[i].Id == rowId) {
                     exist = true;
                     break;
                  }
               }
               if (exist) e.stopPropagation();
               $(this)
                  .parent()
                  .find(".is-checked")
                  .removeClass("is-checked");
               $(this)
                  .children(0)
                  .addClass("is-checked");

               let val = parseInt(
                  $(this)
                     .find("input:radio")
                     .val()
               );
               for (let i = 0; i < checked.length; i++) {
                  if (checked[i].Id == rowId) {
                     checked[i].Reverse = val;
                     break;
                  }
               }
            });
      },
      cellClick: function (_this, e, isChecked, checked) {
         let rowId = $(_this)
            .find("input:radio:first")
            .attr("id");
         console.log("rowId2")
         console.log(rowId)
         if (isChecked) {
            if (
               $(_this)
                  .closest("tr")
                  .find(".is-checked").length == 0
            ) {
               $(_this)
                  .closest("tr")
                  .find("label.el-radio:first")
                  .children(0)
                  .addClass("is-checked");
            }

            let val = parseInt(
               $(_this)
                  .find(".is-checked input:radio")
                  .val()
            );
            console.log("val")
            console.log(val)
            for (let i = 0; i < checked.length; i++) {
               if (checked[i].Id == rowId) {
                  checked[i].Reverse = val;
                  break;
               }
            }
         } else {
            $(_this)
               .closest("tr")
               .find(".is-checked")
               .removeClass("is-checked");
         }
      },
      CheckAll: function (e, maingrid, allChecked, checked) {
         if (!allChecked) {
            console.log("去掉radio选中")
            maingrid
               .find("input:radio")
               .parent()
               .removeClass("is-checked");
         } else {
            for (let i = 0; i < checked.length; i++) {
               console.log("加上radio选中")
               if (checked[i].Reverse == undefined) checked[i].Reverse = "1";
               let checkedInput = maingrid.find(":input[id='" + checked[i].Id + "']");
               for (let n = 0; n < checkedInput.length; n++) {
                  if (checkedInput.eq(n).val() == checked[i].Reverse) {
                     checkedInput.eq(n).parent().addClass("is-checked");
                  }
               }
            }
         }

      }
   }
})()
