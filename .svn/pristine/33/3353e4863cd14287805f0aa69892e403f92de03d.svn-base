var User = (function() {
   var me = this;
   this.RefreshInterval = 5 * 60 * 1000;

   var hostUrl = window.location.host;
   var rawUrl = window.location.href;
   var pageUrl = rawUrl.replace("http://" + hostUrl + "/", "");
   var rootUrl = "";

   if (pageUrl.indexOf("#") > -1) pageUrl = pageUrl.substring(0, pageUrl.indexOf("#"));

   if (pageUrl.indexOf("/") > -1 && pageUrl.indexOf("?") > -1 && pageUrl.indexOf("/") < pageUrl.indexOf("?"))
      rootUrl = pageUrl.substring(0, pageUrl.indexOf("/") + 1);
   else if (pageUrl.indexOf("/") > -1 && pageUrl.indexOf("?") == -1)
      rootUrl = pageUrl.substring(0, pageUrl.indexOf("/") + 1);

   var menuData = null;
   var topMenuId = "";
   var parentMenuId = "";
   var menuId = "";
   this.Malls = null;

   var topMenuTitle = "";
   var parentMenuTitle = "";
   var menuTitle = document.title;
   $("ul.breadcrumb").removeClass("hide");

   // if (pageUrl.indexOf("RealReport") > -1) App.setPage("RealReport");
   // else App.setPage(menuTitle);

   var showUserInfo = function() {
      var topMenu = $("#navbar-left");
      var sideMenu = $("#sidebar");
      if ($("#sidebar").length == 1) {
         // App.blockUI(sideMenu, { src: "images/common/circle-loading.gif" });
      }
      // App.blockUI(topMenu, { src: "images/common/circle-loading.gif", width: "26px" });
      $.ajaxPost("/system/UserManager.html?op=userInfo", { PageUrl: pageUrl }, function(res) {
         if (res.status == 1000) {
            $("#header-user").data("UserInfo", res.data);

            $("#header-user span.username").text(res.data.Name);
            menuData = res.data.Menus;

            menuId = res.data.MenuId;
            topMenuId = res.data.TopMenuId;
            showTopMenu();
            me.Malls = res.data.Malls;

            menuPosition();

            if (parentMenuTitle) {
               $("ul.breadcrumb>li")
                  .eq(1)
                  .text(topMenuTitle);
               $("ul.breadcrumb>li")
                  .eq(2)
                  .text(parentMenuTitle);
               $("ul.breadcrumb>li")
                  .eq(3)
                  .text(menuTitle);
            } else {
               $("ul.breadcrumb>li")
                  .eq(1)
                  .text(menuTitle)
                  .next()
                  .hide()
                  .next()
                  .hide();
            }
            $("h3.content-title")
               .text(menuTitle)
               .trigger("title.changed");

            if ($(".gridster").length > 0) $(".content-operate").removeClass("hide");
            else $(".content-operate").remove();
            document.title = document.title + " | IntForce 商业数据分析平台";
         }
         // App.unblockUI(topMenu);
         // App.unblockUI(sideMenu);
      });
   };

   function showTopMenu() {
      var html = [];
      for (var i = 0; i < menuData.length; i++) {
         html.push("<li menuid='" + menuData[i].Id + "' class='dropdown'>");

         if (menuData[i].PageUrl && menuData[i].PageUrl.indexOf(".html") == -1) {
            if (
               menuData[i].children &&
               menuData[i].children.length > 0 &&
               menuData[i].children[0].children &&
               menuData[i].children[0].children.length > 0
            )
               menuData[i].PageUrl = menuData[i].children[0].children[0].PageUrl; /// 设置默认路径
         }

         html.push("<a href='" + menuData[i].PageUrl + "' class='dropdown-toggle tip-bottom' data-toggle='tooltip' ");
         if (menuData[i].PageUrl.indexOf("http://") > -1 || menuData[i].PageUrl.indexOf("https://") > -1) {
            html.push(" target='_blank'");
         }
         html.push(" title='" + menuData[i].Name + "'>");
         // html.push("<i class='" + menuData[i].ImageUrl + "'></i> ");
         html.push("<i class='" + menuData[i].PageIcon + "'></i> "); ///图标显示
         html.push("<span class='name'>");
         html.push(menuData[i].Name);
         html.push("</span></a></li>");

         if (topMenuId == menuData[i].Id && menuData[i].children && menuData[i].children.length > 0) {
            topMenuTitle = menuData[i].Name;
            showLeftMenu(menuData[i].children);
         }
      }
      $("#header .container .nav#navbar-left")
         .empty()
         .append(html.join(""))
         .find(">li>a")
         .click(function() {
            if ($(this).attr("target") == "_blank") {
               return;
            } else if (
               $(this)
                  .attr("href")
                  .indexOf(".html") > -1
            ) {
               window.location.href = $("base").attr("href") + $(this).attr("href");
               return false;
            }
         });
   }

   var updateAlerts = function() {};

   function showLeftMenu(leftMenuData) {
      var html = [];
      for (var i = 0; i < leftMenuData.length; i++) {
         var childHtml = [];
         if (leftMenuData[i].children) {
            for (var j = 0; j < leftMenuData[i].children.length; j++) {
               childHtml.push("<li class='");
               if (menuId == leftMenuData[i].children[j].Id) {
                  parentMenuId = leftMenuData[i].Id;
                  parentMenuTitle = leftMenuData[i].Name;
                  childHtml.push(" sidebar-two ");
               }
               childHtml.push("'><a class='");
               childHtml.push(
                  "' href='" +
                     leftMenuData[i].children[j].PageUrl +
                     "'><span class='sub-menu-text'>" +
                     leftMenuData[i].children[j].Name +
                     "</span></a></li>"
               );
            }
         }
         html.push("<li menuid='" + leftMenuData[i].Id + "' class='has-sub'>");
         html.push("<a href='javascript:;' class='' title='" + leftMenuData[i].Name + "'>");
         html.push("<i class='" + leftMenuData[i].ImageUrl + "'></i> ");
         html.push("<span class='menu-text'>");
         html.push(leftMenuData[i].Name);
         html.push("</span>");
         html.push("<span class='arrow'></span>");
         html.push("</a>");
         html.push("<ul class='sub' style=''>");
         html.push(childHtml.join(""));
         html.push("</ul>");
         html.push("</li>");
      }
      $("#page #sidebar .sidebar-menu>ul")
         .empty()
         .append(html.join(""));
      App.initLeftMenu();

      $("#page #sidebar .sidebar-menu>ul")
         .find("li[menuid='" + parentMenuId + "'] > a")
         .click();
   }

   var menuPosition = function() {
      $("#navbar-left")
         .parent()
         .append($("#navbar-left"));
      if ($("header").height() > 60) {
         $("#page #main-content")
            .removeClass("margin-top-50")
            .addClass("margin-top-100");
      } else {
         $("#page #main-content")
            .removeClass("margin-top-100")
            .addClass("margin-top-50");
      }
   };

   return {
      init: function() {
         console.log("init");
         showUserInfo();

         // App.addResponsiveFunction(menuPosition);
      },

      MenuId: menuId
   };
})();
