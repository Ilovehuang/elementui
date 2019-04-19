/* Set the defaults for DataTables initialisation */
$.extend(true, $.fn.dataTable.defaults, {
	"sDom": "<'row-fluid'<'span6'l><'span6'f>r>t<'row-fluid'<'span6'i><'span6'p>>",
	"sPaginationType": "bootstrap",
	"oLanguage": {
		"sLengthMenu": "_MENU_ records per page"
	}
});


/* Default class modification */
$.extend($.fn.dataTableExt.oStdClasses, {
	"sWrapper": "dataTables_wrapper form-inline"
});


/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function (oSettings) {
	return {
		"iStart": oSettings._iDisplayStart,
		"iEnd": oSettings.fnDisplayEnd(),
		"iLength": oSettings._iDisplayLength,
		"iTotal": oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage": Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength),
		"iTotalPages": Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength)
	};
};


/* Bootstrap style pagination control */
$.extend($.fn.dataTableExt.oPagination, {
	"bootstrap": {
		"fnInit": function (oSettings, nPaging, fnDraw) {
			var oLang = oSettings.oLanguage.oPaginate;
			var fnClickHandler = function (e) {
				e.preventDefault();
				if (!$(this).parent().is(".disabled")) {
					var oPaging = oSettings.oInstance.fnPagingInfo(oSettings);
					var maingrid = $("#" + oSettings.sInstance);
					var gridOptions = maingrid.data("grid.options");
					if (gridOptions && gridOptions.displayStart == undefined)
						gridOptions.displayStart = 0;
					var eventCall = maingrid.data("grid.eventCall");
					if (gridOptions.bServerSide) {
						oSettings._iDisplayStart = gridOptions.displayStart;
						if (eventCall && eventCall.PageChange)
							eventCall.PageChange(oSettings, oPaging, e.data.action);
					}
					else if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
						if (gridOptions)
							gridOptions.displayStart = oSettings._iDisplayStart;
						fnDraw(oSettings);
					}
				}
			};

			$(nPaging).addClass('pagination').append(
				'<ul>' +
				//		'<li class="prev disabled"><a href="#">&larr; <span class="hidden-480">'+oLang.sPrevious+'</span></a></li>'+
				//		'<li class="next disabled"><a href="#"><span class="hidden-480">'+oLang.sNext+'</span> &rarr; </a></li>'+
				'<li class="prev disabled"><a href="#"><span class="hidden-480">' + oLang.sPrevious + '</span></a></li>' +
				'<li class="next disabled"><a href="#"><span class="hidden-480">' + oLang.sNext + '</span></a></li>' +
				'</ul>'
			);
			var els = $('a', nPaging);
			$(els[0]).bind('click.DT', { action: "previous" }, fnClickHandler);
			$(els[1]).bind('click.DT', { action: "next" }, fnClickHandler);
		},

		"fnUpdate": function (oSettings, fnDraw) {
			var iListLength = 10;
			var maingrid = $("#" + oSettings.sInstance);
			var gridOptions = maingrid.data("grid.options");
			var eventCall = maingrid.data("grid.eventCall");
			if (gridOptions && gridOptions.displayStart == 0)
				oSettings._iDisplayStart = 0;
			var oPaging = oSettings.oInstance.fnPagingInfo(oSettings);

			var an = oSettings.aanFeatures.p;
			var i, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);

			if (oPaging.iTotalPages < iListLength) {
				iStart = 1;
				iEnd = oPaging.iTotalPages;
			}
			else if (oPaging.iPage <= iHalf) {
				iStart = 1;
				iEnd = iListLength;
			} else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
				iStart = oPaging.iTotalPages - iListLength + 1;
				iEnd = oPaging.iTotalPages;
			} else {
				iStart = oPaging.iPage - iHalf + 1;
				iEnd = iStart + iListLength - 1;
			}

			for (i = 0, iLen = an.length; i < iLen; i++) {
				// Remove the middle elements
				$('li:gt(0)', an[i]).filter(':not(:last)').remove();

				// Add the new list items and their event handlers
				for (j = iStart; j <= iEnd; j++) {
					sClass = (j == oPaging.iPage + 1) ? 'class="active"' : '';
					$('<li ' + sClass + '><a href="#">' + j + '</a></li>')
						.insertBefore($('li:last', an[i])[0])
						.bind('click', function (e) {
							e.preventDefault();
							if (gridOptions && gridOptions.bServerSide) {
								oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
								if (eventCall && eventCall.PageChange)
									eventCall.PageChange(oSettings, oPaging);
							}
							else if (oSettings.oApi._fnPageChange(oSettings, (parseInt($('a', this).text(), 10) - 1))) {
								if (gridOptions)
									gridOptions.displayStart = oSettings._iDisplayStart;
								fnDraw(oSettings);
							}
						});
				}

				// Add / remove disabled classes from the static elements
				if (oPaging.iPage === 0) {
					$('li:first', an[i]).addClass('disabled');
				} else {
					$('li:first', an[i]).removeClass('disabled');
				}

				if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
					$('li:last', an[i]).addClass('disabled');
				} else {
					$('li:last', an[i]).removeClass('disabled');
				}
			}
		}
	}
});


/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ($.fn.DataTable.TableTools) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend(true, $.fn.DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info modal"
		},
		"select": {
			"row": "active"
		}
	});

	// Have the collection use a bootstrap compatible dropdown
	$.extend(true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	});
}