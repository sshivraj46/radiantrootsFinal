function toggleNav(){
    let CList=document.getElementById("menubtn").classList;
    if(CList.contains('fa-bars-staggered'))
    {
        CList.replace('fa-bars-staggered',"fa-x")
    }
    else
    {
        CList.replace("fa-x",'fa-bars-staggered')
    }
}