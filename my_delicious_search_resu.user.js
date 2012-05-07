// ==UserScript==
// @name     My Delicious Search Results on Google
// @namespace      jmason, NicuMergePrinFum, offlinehacker
// @description    Shows tag-search results from my Delicious account on Google search pages, with links to more extensive Delicious searches.  Use 'User Script Commands' -> 'Set Delicious Username' to specify your username
// @include  http://www.google.*q=*
// @include  https://www.google.*q=*
// @date     2011-07-10
// @version  0.3.1.0
// @GM_version     0.8.20080609.0
// 
// This is almost entirely from 'Delicious Search Results on Google' (http://userscripts.org/scripts/show/43784), which in turn notes that 99% of the code for that user script comes form markcarey's userscript 'Twitter Search Results on Google' (http://userscripts.org/scripts/show/43451).
//
// 2011.02.20: Some html change to make it display better, now maximum 20 results from delicious will be displayed.
// ==/UserScript==

del_username = GM_getValue('mydel_username');
if (!del_username) { del_username = "jakahudoklin"; }
GM_registerMenuCommand('Set Delicious Username', setUserName);

delLogo = "data:image/png;base64,AAABAAIAEBAAAAEAGABoAwAAJgAAABAQAAABACAAaAQAAI4DAAAoAAAAEAAAACAAAAABABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0tLT0tLT0tLT0tLT0tLT0tLT0tLT0tLT////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQy////////////////////////////////0HQy0HQy0HQy0HQy0HQy0HQy0HQy0HQyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/S0tP/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/9LS0/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/S0tP/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/9LS0/8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP/S0tP/0tLT/9LS0//S0tP/0tLT/9LS0//S0tP/0tLT////////////////////////////////////////////0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv///////////////////////////////////////////9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL////////////////////////////////////////////QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy////////////////////////////////////////////0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv///////////////////////////////////////////9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL////////////////////////////////////////////QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy////////////////////////////////////////////0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv///////////////////////////////////////////9B0Mv/QdDL/0HQy/9B0Mv/QdDL/0HQy/9B0Mv/QdDL/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==";

GM_DUR = {
  un : "",
  last_un : "",
  init : function(first_run)
  {
    var href = document.location.href;
    res= href.match(/[&?]q=([^&]*)(?:&|$)/g);
    GM_DUR.un= res[res.length-1].match(/[&?]q=([^&]*)(?:&|$)/)[1];

    if( !first_run  && (GM_DUR.un=="" || GM_DUR.un==GM_DUR.last_un)){}
    else
    {
	    if( GM_DUR.un != "" )
	    {
	      GM_xmlhttpRequest({
	        method:"GET",
	        url:"http://feeds.delicious.com/v2/json/"+del_username+"/"+GM_DUR.un,
	        headers:{
	          "User-Agent":"Mozilla/5.0",
	          "Accept":"text/json"
	        },
	        onload:GM_DUR.handle
	      });
           }
    }

    if(!first_run) GM_DUR.last_un= GM_DUR.un;
    setTimeout("GM_DUR.init(false);",500);
  },

  handle : function(response)
  {
    var results = eval("("+response.responseText+")");
    //alert(results);
    if( results.length > 0 )
    {
      //alert("parse");
      var results_section;

      if(document.getElementById("delicious_results"))
      {
          results_section= document.getElementById("delicious_results");
          while (results_section.hasChildNodes()) {
              results_section.removeChild(results_section.lastChild);
          }
      }
      var results_section = document.getElementById("res");
      var ds = document.createElement("ol");
      ds.id= "delicious_results";
      results_section.insertBefore(ds, results_section.firstChild);
            
      var il, h;
      var query = unescape(GM_DUR.un).replace(/\+/g, ' ');
      h = ds.appendChild(document.createElement("li"));
      h.className = "g";
      var h3 = h.appendChild(document.createElement("h3"));
      h3.className = "r";
      h3.innerHTML = "<p><a href='http://delicious.com/search?p=" + GM_DUR.un +"'>Delicious tag-search results for <em>"+ query +"</em></a>:</p>";
      var t = h.appendChild(document.createElement("table"));
      t.className = "ts";
      var tb = t.appendChild(document.createElement("tbody"));
      var row = tb.appendChild(document.createElement("tr"));
      row.innerHTML = '<td style="padding-top: 5px; padding-right: 10px; font-size: 78%; line-height: normal; width: 43px; text-align: center;" valign="top"><img src="'+delLogo+'" alt="" height="42" width="43"></td><td style="padding-top: 3px;" valign="top">';
      
      for( var i=0; i < 20; i++ )
      {
        if (results.length-1 < i) break;
        il = "<div class='s' style='margin-top:10px;'>"+
        "<a href='"+results[i].u+"' class='l'>"+
          results[i].d+"</a><br/> "+
          ' <h4 class="r">'+ results[i].n +'</span> '+
          ' <span class="f">'+ results[i].t +'</span></div>';
        row.innerHTML += il;
      }
      row.innerHTML += '</td><p>'+
          "» <a href='http://delicious.com/search?p=" + GM_DUR.un +"&u="+del_username+"&lc=1&context=userposts'>More results in my bookmarks</a> / "+
          "<a href='http://delicious.com/search?p=" + GM_DUR.un +"&u="+del_username+"&lc=1&context=network'>my network</a> / "+
          "<a href='http://delicious.com/search?p=" + GM_DUR.un +"&lc=1&context=all'>all of del.icio.us</a>"+
          "</p><div id='ssb'></div>";
    }
    else
    {
	if(document.getElementById("delicious_results"))
	{
	  results_section= document.getElementById("delicious_results");
	  while (results_section.hasChildNodes()) {
	      results_section.removeChild(results_section.lastChild);
	  }
        }
    }
  },
};

unsafeWindow.GM_DUR= GM_DUR;
GM_DUR.init(true);

function setUserName()
{
  var user = prompt('Please enter your delicious username');
  if (user) {
    GM_setValue('mydel_username', user);
  }
}

