<!--
    function showProject(id){
        $("#projects").children(":visible").stop(true, true).fadeOut(0);
        $("#project-"+id).delay(200).fadeIn(1500);
        return false;
    }
  
    $(document).ready( function(){
        //The projects menu isnt shown in case theres no JS, in case there is I show it and hide the projects.
        $("#projects").children().hide();
        $("#projects").css("height", 350).css("border","4px #222222 solid");
        $(".project").css("border",0);
        showProject(8);

        $("#projectsfilter").show(0);
        $("#projectBoxes").show(0);
        buildSliding4Doors(); //If i try to build it before showing them it will not work.
    });

// -->