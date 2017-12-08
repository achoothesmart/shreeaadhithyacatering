var CurrFrame=0;
var DisplayFrame=0;
var chooseLangOpen=false;
//var ScrollStatus="up";
var AdElmntArr= new Array(6);
	
$(document).ready(function() {
	//initialization
	var option="";
	var EnteredAdhithya="false";
	
	var CurrLang="Tamil";
	
	AdElmntArr[1]=$("#Ad1");
	AdElmntArr[2]=$("#Ad2");
	AdElmntArr[3]=$("#Ad3");
	AdElmntArr[4]=$("#Ad4");
	AdElmntArr[5]=$("#Ad5");

	window.setInterval(function(){tick()},1000);
	//event handlers

   $('#m1').click(chooseEnglishFn);   
   $('#m2').click(chooseTamilFn);
   $('#banLang').click(chooseLangFn);
   
   $('#FontSize1').click(SelectFont1);
   $('#FontSize2').click(SelectFont2);
   $('#FontSize3').click(SelectFont3);
   
   $('#banLang').mouseenter(function(){
   		$(this).animate({fontSize:'15'},200);
   	});
   $('#banLang').mouseleave(function(){
   		$(this).animate({fontSize:'16'},200);
   	});
   
   $('#settingBut').mouseenter(function(){
	    $(this).animate({width:'40',height:'30'},200);
	});
	
   $('#settingBut').mouseleave(function(){
	    $(this).animate({width:'45',height:'35'},200);
	});
			
			$('#MusiriBox').mouseenter(function(){
				$('#MusiriPin').animate({height:'60px'},100);
			});
			
			$('#MusiriBox').mouseleave(function(){
				$('#MusiriPin').animate({height:'50px'},100);
			});
			
			$('#TrichyBox').mouseenter(function(){
				$('#TrichyPin').animate({height:'60px'},100);
			});
			
			$('#TrichyBox').mouseleave(function(){
				$('#TrichyPin').animate({height:'50px'},100);
			});
			
			$('#ChennaiBox').mouseenter(function(){
				$('#ChennaiPin').animate({height:'60px'},100);
			});
			
			$('#ChennaiBox').mouseleave(function(){
				$('#ChennaiPin').animate({height:'50px'},100);
			});
   
   $('#overlay1').click(ExitLangMenu)
   
   $('#settingBut').click(showSettings);
   $('#settingsClose').click(hideSettings);

   
   $('#EnterButt').click(function(){
		   if(EnteredAdhithya=="false")
		   {
			   	
				$('#overlay2').fadeOut(700);
				$("html, body").animate({ scrollTop: -$(document).height()  }, 1000);
				EnteredAdhithya="true";	
		   }
	   
	   });
	   
	$('.banClose').click(function(){  
		 if(EnteredAdhithya=="true")
	     {
			EnteredAdhithya="false";
			$('#overlay2').fadeIn(700);
		 }
	});
   
   //Sliding - Up

	$('.pane').mouseenter(function() {
   		$(this).children(this).animate({top:'-=10%'},200); 
	 });
	 
   //Sliding - Down
   $('.pane').mouseleave(function() {
   		$(this).children(this).animate({top:'+=10%'},200); 
	 });
   
   $('#h-nav-left').click(function(){
	   $('.h-slider').animate({
		   left:'-=100%'	
	   });
    });
	
   $('#h-nav-right').click(function(){
	   {
		   $('.h-slider').animate({
			   left:'+=100%'
		   });
	   }
    });
	
	/*$('#bottom').mouseenter(function(){
		$(this).animate({height:'160px'});
		});
	
	$('#bottom').mouseleave(function(){
		$(this).animate({height:'150px'});
		});*/

	
	///Navigation Script
	
	$('#HomeBut').click(function(){
		DisplayFrame=0;
		Navigate();
		//DisplayHome();	
	});
	
	$('#AdBut1').click(function(){
		DisplayAdBut1();
		if(CurrFrame<1 || CurrFrame>3)
		{
			DisplayFrame=1;
			Navigate();
		}
	});
			//inner
			$('#Day1Butt').click(function(){
				DisplayFrame=1;
				Navigate();
				//DisplayFrame1();
			});
			
			$('#Day2Butt').click(function(){
				DisplayFrame=2;
				Navigate();
				//DisplayFrame2();
			});
			
			$('#Day3Butt').click(function(){
				DisplayFrame=3;
				Navigate();
				//DisplayFrame3();
			});



	$('#AdBut2').click(function(){
		DisplayFrame=4;
		Navigate();
		//DisplayFrame4();
	});
		
	$('#AdBut3').click(function(){
		DisplayFrame=5;
		Navigate();
		//DisplayFrame5();
	}); 
	
	
	
	$('#NavRight').click(function(){
		DisplayFrame=CurrFrame+1;
		Navigate();
	});
	
	$('#NavLeft').click(function(){
		DisplayFrame=CurrFrame-1;
		Navigate();
	});
	
	
	
}); ///JQuery Ends


//Javascript Handling Methods
	function SelectFont1(){SelectFont(1);}
	function SelectFont2(){SelectFont(2);}
	function SelectFont3(){SelectFont(3);}

	function SelectFont(Size)
	{
		var savedLang=getCookie("adhithyaLang");
		//alert("working...");
		switch(Size)
		{
			case 1:
				if(savedLang=="Tamil")
				{	
					$('li').css('font-size','10px'); 
					$(".autoGenTable").css('font-size','10px');
				}
				else
				{
					$('li').css('font-size','13px');
					$(".autoGenTable").css('font-size','13px');
				}
				break;
			
			case 2:
				if(savedLang=="Tamil")
				{
					$('li').css('font-size','14px');
					$(".autoGenTable").css('font-size','14px');
				}
				else
				{
					$('li').css('font-size','16px');
					$(".autoGenTable").css('font-size','16px');
				}
				break;
			
			case 3:
				if(savedLang=="Tamil")
				{
					$('li').css('font-size','16px');
					$(".autoGenTable").css('font-size','16px');
				}
				else
				{
					$('li').css('font-size','20px');
					$(".autoGenTable").css('font-size','20px');
				}
				break;
		}
	}

	function showSettings()
	{
		$('#settingsPanel').css('visibility','visible');
		$('#settingsPanel').fadeOut(1);
		$('#settingsPanel').fadeIn(300);
	}
	
	function hideSettings()
	{
		$('#settingsPanel').fadeOut(300);
	}

 	function chooseLangFn() {
	   //alert("clicked");
	   
	    $('#overlay1').css('visibility','visible');
		$('#overlay1').fadeOut(1);
		$('#overlay1').fadeIn(300);
		
		$('.model').css('visibility','visible');
		$('.model').fadeOut(1);
		
	   	$('.model').fadeIn(300);
		hideSettings();
		chooseLangOpen=true;
   }
   
   function chooseEnglishFn() {
		/*option="English";*/
		$('#m1').toggle(200);
		$('#m2').fadeOut(300);
		$('#overlay1').toggle();
		$('.Tamil2').css("visibility","hidden");
		$(".English2").css("visibility","visible");
		$('td').css('font-size','16px');
		loadLang("English");
		
		chooseLangOpen=false;
   }
   
   function chooseTamilFn() {
		/*option="Tamil";*/
		
		$('#m2').toggle(200);
		$('#m1').fadeOut(300);
		$('#overlay1').toggle();
		$('.English2').css("visibility","hidden");
		$(".Tamil2").css("visibility","visible");
		$('td').css('font-size','14px');
		
		//alert("tamil");
		loadLang("Tamil");
		
		chooseLangOpen=false;
   }
   
   function ExitLangMenu()
   {
	   	chooseLangOpen=false;
		$('.model').fadeOut(300);
		$('#overlay1').fadeOut(300);
   }
   
	
window.onkeypress=KeyPressFn;
	
	function KeyPressFn(evt)
	{
		switch(evt.keyCode)
		{
			case 37: //Left arrow - Nav left
				DisplayFrame=CurrFrame-1;
				Navigate();
				break;
			case 39: //Right arrow - Nav right
				DisplayFrame=CurrFrame+1;
				Navigate();
				break;
			case 27: //Esc - Home
				DisplayFrame=0;
				Navigate();
				ExitLangMenu();
				hideSettings();
				break;
			case 40: //up arrow
				//ScrollStatus="up";
				//scrollDownFn();
				break;
			case 38: //up arrow
				//ScrollStatus="down";
				//scrollDownFn(); scroll fn disables due to performance issues
				break;
			
		}
		
		switch(String.fromCharCode(evt.charCode))
		{
			case "l":
			case "L":
				 chooseLangFn();
				break;
			case '1':
				SelectFont(1);
				break;
			case '2':
				SelectFont(2);
				break;
			case '3':
				SelectFont(3);
				break;
		}
		
		switch(evt.keyCode)
		{
			case 113:
				showSettings();
				break;
		}
		
		if(chooseLangOpen)
		{
			switch(String.fromCharCode(evt.charCode))
			{
				case "t":
				case "T":
					 chooseTamilFn();
					break;
					
				case "e":
				case "E":
					 chooseEnglishFn();
					break;
			}
		}
	}
	
function tick()
{
	//$('#overlay2').animate({left:'+=10px'});
	var d=new Date();
	//$('#TimeBox').text(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
	$('#TimeBox').text(d.toGMTString());
    
}

//Navigation Script
function Navigate()
{
	if(DisplayFrame>=0 && DisplayFrame<6)
	{
		CheckNavButtons();
		
		switch(DisplayFrame)
		{
			case 0:
				DisplayHome();
				break;
			case 1:
				DisplayFrame1();
				break;
			case 2:
				DisplayFrame2();
				break;
			case 3:
				DisplayFrame3();
				break;
			case 4:	
				DisplayFrame4();
				break;
			case 5:
				DisplayFrame5();
				break;
		}		
		
	}
}


function CheckNavButtons()
{
	if(CurrFrame==0 && DisplayFrame>0)
	{
		$('#NavLeft').css('visibility','visible');
		$('#NavLeft').fadeOut(1);
		$('#NavLeft').fadeIn(300);
		
		$('#MSChange').css('visibility','visible');
		$('#MSChange').fadeOut(1);
		$('#MSChange').fadeIn(300);
	}
	
	if(CurrFrame==5 && DisplayFrame<5)
	{
		$('#NavRight').css('visibility','visible');
		$('#NavRight').fadeOut(1);
		$('#NavRight').fadeIn(300);
		
		$('#MSChange').css('visibility','visible');
		$('#MSChange').fadeOut(1);
		$('#MSChange').fadeIn(300);
	}
	
	if(DisplayFrame==0)
	{
		$('#NavLeft').fadeOut(300);
		$('#MSChange').fadeOut(200);
	}
	if(DisplayFrame==5)
	{
		$('#NavRight').fadeOut(300);
		$('#MSChange').fadeOut(200);
	}
}

function HighlightAdBut($HAd)
{
	$('#HomeBut').css('background-color','rgba(255,255,0,1)');
	$('#AdBut1').css('background-color','rgba(255,255,0,1)');
	$('#AdBut2').css('background-color','rgba(255,255,0,1)');
	$('#AdBut3').css('background-color','rgba(255,255,0,1)');
	
	$HAd.css('background-color','rgba(255,255,0,0.6)');
}

function MoveFrame(n)
{
	for(var i=n-1; i>0; i--)
	{   //move left all
		$(AdElmntArr[i]).animate({left:'-100%'});
	}
	for(var i=n+1; i<=5; i++)
	{   //move right all
		$(AdElmntArr[i]).animate({left:'100%'});
	}
	if(n>0 && n<6)
		$(AdElmntArr[n]).animate({left:'0%'});
}

function DisplayHome()
{
	$('#AdBut1').animate({height:'25px'});
	MoveFrame(0);
	HighlightAdBut($('#HomeBut'));
	CurrFrame=0;
}

function DisplayAdBut1() //for expanding Ad button1
{
		$('#AdBut1').animate({height:'150px'});
	 	HighlightAdBut($("#AdBut1"));
}

function HighlightDayBut($HDB)
{
	$('#Day1Butt').css('background-color','rgba(0,102,0,1)');
	$('#Day2Butt').css('background-color','rgba(0,102,0,1)');
	$('#Day3Butt').css('background-color','rgba(0,102,0,1)');
	$HDB.css('background-color','rgba(0,102,0,0.5)');
}

function DisplayFrame1()
{
	MoveFrame(1);
	HighlightDayBut($("#Day1Butt"));
	CurrFrame=1;
	DisplayAdBut1();
}

function DisplayFrame2()
{
	MoveFrame(2);
	HighlightDayBut($("#Day2Butt"));
	CurrFrame=2;
}
function DisplayFrame3()
{
	MoveFrame(3);
	HighlightDayBut($("#Day3Butt"));
	CurrFrame=3;
	DisplayAdBut1();
}

function DisplayFrame4()
{
		$('#AdBut1').animate({height:'25px'});
		MoveFrame(4);
		HighlightAdBut($("#AdBut2"));
		CurrFrame=4;
}

function DisplayFrame5()
{
		$('#AdBut1').animate({height:'25px'});
		MoveFrame(5);
		HighlightAdBut($("#AdBut3"));
		CurrFrame=5;
}