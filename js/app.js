    var load=0;
    var selectedNav;
    var navToggle=true;    
    var slideno=1;
    var wheelActive=true;

$(document).ready(function(){
    /*Loading Animation*/
    
    var myInt=setInterval(function(){
        load+=1;
        preload(load);
        
        if(load>=100){
            clearInterval(myInt)
        }
        
    },100)
    
    
    function preload(per){
        var topval=Math.round(210*(per/100));

        var ct=(160-topval)*(-1)
        var tw=(170-topval)
        
        $(".textContainer1").css({"top":tw+'px'});
        $(".textContainer1 .textwrapper").css({"top":ct+'px'});
        
        $(".preloadPer").html(per+"%")
        
        if(per==100){
            $(".textContainer2").css({"display":'none'});
            $(".textContainer1 .textwrapper, .preloadshadow").animate({"opacity":0});
            
            setTimeout(function(){
                
                $(".textContainer1, .preloadshadow").css({"display":'none'});
            
                navtoggle(true)
                burgerbutton(true)
                
                mouseWheelEve();
            },2000)
            
            webInit();
            
            navtoggle(false)
            burgerbutton(false)
            
            
        }
        
    }
    
    
    function menusetup(){
        $(".navtogglebutton").click(function(){
            navToggle=!navToggle;
            burgerbutton(navToggle)
            navtoggle(navToggle)
        })
        
        burgerbuttonInit();
    }
    
    
    
    function menueve(){
            
        $(".navbox ul li").click(function(){
            
            if(selectedNav!=undefined){
                $(".navboxbg ul li").eq(selectedNav).animate({"opacity":'0'},300);    
            }
            
            if(selectedNav!=$(this).index()){
                selectedNav=$(this).index();    
            }
            
        })
        
        
        
        $(".navbox ul li").hover(function(){
            index=$(this).index();
            
            if(selectedNav==index) return false;
            
            $(".navboxbg ul li").eq(index).animate({"opacity":'1'},300);
        })
        
        $(".navbox ul li").mouseout(function(){
            index=$(this).index();
            
            if(selectedNav==index) return false;
            
            $(".navboxbg ul li").eq(index).animate({"opacity":'0'},300);
        })
        
    }
    
    
    function burgerbutton(toggle){
        
        if(toggle){
            
            $(".navtogglebutton ul li").each(function(index,value){
                $(".navtogglebutton ul li").eq(index).css({"transform":'rotate(0deg)',"opacity":'1'});
                
                burgerbuttonInit()
            })
        }else{
                
             $(".navtogglebutton ul li").eq(0).css({"transform":'rotate(45deg)', top:'17px'});   
             $(".navtogglebutton ul li").eq(2).css({"transform":'rotate(-45deg)', top:'17px'});
             $(".navtogglebutton ul li").eq(1).css({"opacity":'0'});
            }
            
            
        }
    
    function burgerbuttonInit(){
        var topval=5;
        $(".navtogglebutton ul li").each(function(index,value){
            
            $(".navtogglebutton ul li").eq(index).css({"top":topval+'px'});
            topval+=9;
        })
    }
    
    
    function navtoggle(toggle){
        if(toggle){
            $(".navcontainer").css({"left":"-440px"})
        }else{
            $(".navcontainer").css({"left":"-150px"})
        }
    }
        
    menusetup()  
    menueve()
    
    function webInit(){
        navEvents()
        screensInit()
    }  
    
    
    function mouseWheelEve(){
         $(window).on('mousewheel',function(event){
            getWheelEvent(event.deltaY);
            wheelActive=false;
        })    
    }
    
    
    function getWheelEvent(val){
        
        
        if(!wheelActive){
            return false;
        }
        
        setTimeout(function(){
            wheelActive=true
        },3000)
        
        
        
        newval=slideno;
        
        if(val<0){
            newval++;
        }else{
            newval--
        }
        
        if(newval>5){
            newval=5;
        }
        
        console.log("get wheel event")
        
        if(newval<1){
            newval=1
        }
        
        if(newval==slideno){
            return false;
        }
        
        showSlide(newval);
    }
    
})

  //Show Random text animation;
    function screensInit(){   
        var val=1
        
        TweenLite.to([".name",".desig"],0,{x:200})
        TweenLite.to(".amit",0,{y:-50,x:0,alpha:0})
        
        TweenLite.to(".amit",1,{y:0,x:0,alpha:1})
        TweenLite.to(".name",1,{x:0,alpha:1})
        TweenLite.to(".desig",1,{x:0,alpha:1,delay:.2})
    }

    function screen1in(){   
        var val=1
        
        TweenLite.to([".name",".desig"],0,{x:200})
        //TweenLite.to(".amit",0,{y:-50,x:0,alpha:0})
        
        TweenLite.to(".amit",1,{y:0,x:0,alpha:1})
        TweenLite.to(".name",1,{x:0,alpha:1})
        TweenLite.to(".desig",1,{x:0,alpha:1,delay:.2})
    }

    
    function screen1out(){
        var val=1
        
        TweenLite.to(".name",1,{alpha:0})
        TweenLite.to(".desig",1,{alpha:0,delay:.1})
    }
    
    
    function screen2in(){

        console.log("screen2in")
        
        TweenLite.to(".workthumb",0,{y:200,alpha:0})
        
        TweenLite.to(".workthumb1",1,{y:0,alpha:1})
        TweenLite.to(".workthumb2",1,{y:0,delay:.1,alpha:1})
        TweenLite.to(".workthumb3",1,{y:0,delay:.2,alpha:1})
        TweenLite.to(".workthumb4",1,{y:0,alpha:1})
        TweenLite.to(".workthumb5",1,{y:0,delay:.3,alpha:1})
        TweenLite.to(".workthumb6",1,{y:0,delay:.1,alpha:1})
        TweenLite.to(".workthumb7",1,{y:0,delay:.2,alpha:1})
        TweenLite.to(".workthumb8",1,{y:0,alpha:1})
        TweenLite.to(".workthumb9",1,{y:0,delay:.1,alpha:1})
        TweenLite.to(".workthumb10",1,{y:0,delay:.3,alpha:1})
        
        TweenLite.to(".amit",1,{x:150})
        
        parallax(".workthumb1",10)
        parallax(".workthumb2",20)
        parallax(".workthumb3",40)
        parallax(".workthumb4",45)
        parallax(".workthumb5",100)
        parallax(".workthumb6",10)
        parallax(".workthumb7",20)
        parallax(".workthumb8",45)
        parallax(".workthumb9",55)
        parallax(".workthumb10",82)
    }
    
    
    function screen2out(){
        console.log("screen2out")
        
        TweenLite.to(".workthumb1",1,{alpha:0})
        TweenLite.to(".workthumb2",1,{delay:.1,alpha:0})
        TweenLite.to(".workthumb3",1,{delay:.2,alpha:0})
        TweenLite.to(".workthumb4",1,{alpha:0})
        TweenLite.to(".workthumb5",1,{delay:.3,alpha:0})
        TweenLite.to(".workthumb6",1,{delay:.1,alpha:0})
        TweenLite.to(".workthumb7",1,{delay:.2,alpha:0})
        TweenLite.to(".workthumb8",1,{alpha:0})
        TweenLite.to(".workthumb9",1,{delay:.1,alpha:0})
        TweenLite.to(".workthumb10",1,{delay:.3,alpha:0})
        
        TweenLite.to(".amit",1,{x:150})
    }
    
    
    function screen3in(){    
        
        
        TweenLite.to(".skillsthumb",0,{y:200,alpha:0})
        
        TweenLite.to(".skillsthumb1",1,{y:0,alpha:1,delay:.1})
        TweenLite.to(".skillsthumb2",1,{y:0,alpha:1,delay:0})
        TweenLite.to(".skillsthumb3",1,{y:0,alpha:1,delay:.3})
        TweenLite.to(".skillsthumb4",1,{y:0,alpha:1,delay:.2})
        TweenLite.to(".skillsthumb5",1,{y:0,alpha:1,delay:.5})
        TweenLite.to(".skillsthumb6",1,{y:0,alpha:1,delay:.1})
        TweenLite.to(".skillsthumb7",1,{y:0,alpha:1,delay:.6})
        TweenLite.to(".skillsthumb8",1,{y:0,alpha:1,delay:.2})
        TweenLite.to(".skillsthumb9",1,{y:0,alpha:1,delay:.4})
        TweenLite.to(".amit",1,{x:150})
        
        parallax(".skillsthumb1",10)
        parallax(".skillsthumb2",20)
        parallax(".skillsthumb3",40)
        parallax(".skillsthumb4",45)
        parallax(".skillsthumb5",100)
        parallax(".skillsthumb6",10)
        parallax(".skillsthumb7",20)
        parallax(".skillsthumb8",45)
        parallax(".skillsthumb9",55)
        parallax(".skillsthumb10",82)
    }

    
    function screen3out(){
        console.log("screen3out")
        
        TweenLite.to(".skillsthumb1",1,{alpha:0})
        TweenLite.to(".skillsthumb2",1,{delay:.5,alpha:0})
        TweenLite.to(".skillsthumb3",1,{delay:.7,alpha:0})
        TweenLite.to(".skillsthumb4",1,{delay:.3,alpha:0})
        TweenLite.to(".skillsthumb5",1,{delay:.3,alpha:0})
        TweenLite.to(".skillsthumb6",1,{delay:1,alpha:0})
        TweenLite.to(".skillsthumb7",1,{delay:.6,alpha:0})
        TweenLite.to(".skillsthumb8",1,{delay:.7,alpha:0})
        TweenLite.to(".skillsthumb9",1,{delay:.5,alpha:0})
        TweenLite.to(".skillsthumb10",1,{delay:.8,alpha:0})

    }
    
    function screen4in(){
        TweenLite.to([".personalinfo",".info2"],0,{y:200})
        
        TweenLite.to(".amit",1,{x:150})
        TweenLite.to(".personalinfo",1,{y:0, alpha:1})
        TweenLite.to(".info2",1,{y:0,delay:.2 , alpha:1})
        
        parallax(".personalinfo",55)
        parallax(".info2",28)
        
    }
    
    function screen4out(){
        
        TweenLite.to(".personalinfo",1,{alpha:0})
        TweenLite.to(".info2",1,{delay:.2, alpha:0})

    }

    function screen5in(){
        TweenLite.to(".form",0,{css:{"display":"inline"}});
        TweenLite.to(".form",0,{y:200});
        
        TweenLite.to(".amit",1,{x:150})
        TweenLite.to(".form",1,{y:0, alpha:1})
        
        parallax(".form",82)
    }

    function screen5out(){
        
        TweenLite.to(".form",1,{alpha:0,onComplete:function(){
            TweenLite.to(".form",0,{y:200,alpha:0});
            TweenLite.to(".form",0,{css:{"display":"none"}});
        }})
    }
    
    
    function parallax(who,xp){
        
        $(window).mousemove(function(event){
            var max= $(window).width()
            var min=event.pageX+1
            var per=(min/max)*100
            xval=(xp*(per/100))*(-1)
            
            TweenLite.to(who,3,{x:xval});
        })
    }
    
    /*navigation*/
    function navEvents(){
        $(".navWork").click(function(){showSlide(2)});
        $(".navTech").click(function(){showSlide(3)});
        $(".navResume").click(function(){showSlide(4)});
        $(".navContact").click(function(){showSlide(5)});    
    }

    function showSlide(param){
        this['screen'+slideno+'out']();
        this['screen'+param+'in']();
        slideno=param;
    }
