function loadLang(Language) {
		$("#LangLoading").css('visibility','visible');
        setCookie("adhithyaLang",Language,10);
        if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
            var xmlhttp = new XMLHttpRequest();
        }
        else
        {// code for IE5, IE6
        xmlhttp = new ActivexObject("Microsoft.XMLHTTP");
        }

        xmlhttp.open("GET", "new.xml", false);
        xmlhttp.setRequestHeader("Content-Type", "text/xml");
        xmlhttp.send(null);

        var xmlDoc = xmlhttp.responseXML;
		var root=xmlDoc.documentElement
		var NodeCount = root.childNodes.length;
		//alert(NodeCount);
		
		try{
			
					for (var i = 0; i < NodeCount; i++) 
					{
						var CurrNode = root.childNodes[i];
			
						if(CurrNode.nodeName=="Node")
						{
							var CurrNodeID=CurrNode.getElementsByTagName("NodeID")[0].childNodes[0].nodeValue;
							var CurrNodeType=CurrNode.getElementsByTagName("NodeType")[0].childNodes[0].nodeValue;
			
							//alert(CurrNodeID + " -> of Type " + CurrNodeType);
							
							if(CurrNodeType=="Data")
							{
							  var CurrNodeData=CurrNode.getElementsByTagName(Language)[0].childNodes[0].nodeValue;
							 
							  document.getElementById(CurrNodeID).innerHTML=CurrNodeData;
							  
							}
							
							if(CurrNodeType=="OL" || CurrNodeType=="UL" || CurrNodeType=="List")
							{
								var CurrLangListNode = CurrNode.getElementsByTagName(Language)[0];
								
								//var ListHead = ListHeads[0].childNodes[0].nodeValue;
								//var ListHead="Head";
								
								var ListHeadHTML="";
								
								var ListHeads = CurrLangListNode.getElementsByTagName("LH");
								for(var j=0; j<ListHeads.length; j++)
								{
									//alert(ListNodes[j].childNodes[0].nodeValue);
									var ListHead=(ListHeads[j].childNodes[0].nodeValue);
									ListHeadHTML+="<p><b><u>" + ListHead + "</u></b></p>";
								}
								if(CurrNodeType=="OL")
									var ListHTML=ListHeadHTML + "<ol>";
								else if(CurrNodeType=="UL")
									var ListHTML=ListHeadHTML + "<ul>";
								else if(CurrNodeType=="List")
									var ListHTML=ListHeadHTML + "<ul type='none'>";
									
								var ListNodes = CurrLangListNode.getElementsByTagName("Li");
								for(var j=0; j<ListNodes.length; j++)
								{
									//alert(ListNodes[j].childNodes[0].nodeValue);
									var ListItem=(ListNodes[j].childNodes[0].nodeValue);
									if(ListItem==" ")
										ListHTML+="<li class=\"AdListItem\">" + "<br/>" + "</li>";
									else
										ListHTML+="<li class=\"AdListItem\">" + ListItem + "</li>";
								}
								ListHTML += "</ol>";
								
								document.getElementById(CurrNodeID).innerHTML=ListHTML;
								
							}
							
							if(CurrNodeType=="Table")
							{
								var CurrLangTableNode = CurrNode.getElementsByTagName(Language)[0];
								var TableRows = CurrLangTableNode.getElementsByTagName("TR");
								var TableHTML="<table class=\"autoGenTable\">";
								
								for(var j=0; j<TableRows.length; j++)
								{
									var HeadsRow = TableRows[j].getElementsByTagName("TH");
									var DataRow = TableRows[j].getElementsByTagName("TD");
									
									var HeadText="";
									var DataText="";
									var RowHTML="";
									
									RowHTML="<tr>";
									
									for(var k=0; k<HeadsRow.length; k++)
									{
										
										HeadText=HeadsRow[k].childNodes[0].nodeValue;
										if(HeadText!="*")
										{
											RowHTML+="<th>" + HeadText + "</th>";
										}
									}
									
									for(var k=0; k<DataRow.length; k++)
									{
										DataText=DataRow[k].childNodes[0].nodeValue;
										if(DataText!="*")
										{
											RowHTML+="<td>" + DataText + "</td>";
										}
									}
									
									RowHTML+="</tr>";
									TableHTML+=RowHTML;
								}
								
								TableHTML+="</table>";
								
								document.getElementById(CurrNodeID).innerHTML=TableHTML;
								
							}							
						}    
					}
					
					
		$("#LangLoading").css('visibility','hidden');
					
					
		}
		catch(exception){
			 $("#LangLoading").css('visibility','hidden');
			 alert("Error on loading. Try Refreshing page");
			 }
    }