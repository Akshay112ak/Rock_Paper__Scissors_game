function Rock(user)
{
    var userchoice=user;
    var systemchoice=Math.floor(Math.random()*(3-1+1))+1;
    console.log("user",userchoice,"system",systemchoice)
    var arr=['o','rock.jpeg','paper.png','scissor.jpeg']
    document.getElementById("img1").setAttribute('src',`D:/nodejsexample/html/images/${arr[userchoice]}`)
    document.getElementById("img2").setAttribute('src',`D:/nodejsexample/html/images/${arr[systemchoice]}`)
    if(systemchoice==userchoice)
        {
         document.getElementById("h41").innerHTML="Tie match";
         
        }
        else if(systemchoice!=userchoice)
        {
       switch(systemchoice)
       {
         case 1:
             if(userchoice==3)
             {
                document.getElementById("h41").innerHTML="system win"
                //console.log("ghbj13")
             }
             else if(userchoice==2)
             {
                document.getElementById("h41").innerHTML="user win";
               
                //console.log("ghbj12")
             } break;
         case 2:
             {
                 if(userchoice==1)
                 {
                    document.getElementById("h41").innerHTML="System win"
                    //console.log("ghbj21")
                 }
                 else if(userchoice==3)
                 {
                    document.getElementById("h41").innerHTML="user win"
                    
                    //console.log("ghbj23")
                   
                 } break;
             }
         case 3:
             {
                 if(userchoice==1)
                 {
                    document.getElementById("h41").innerHTML="user win"
                   
                    //console.log("ghbj31")
                    
                 }
                 else if(userchoice==2)
                 {
                    document.getElementById("h41").innerHTML="system win"
                    ////console.log("ghbj32")
                 }
                 break;
             }
       }
     }
}
function Reset()
{
    location.reload(true)
}