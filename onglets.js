  function showCase(choice){
        
        var echoing = choice.split("-");
        var bolide = document.getElementById("panneauwrap").children;
        for (var i = 0 ; i < bolide.length ; i++ ) {
            bolide[i].classList.remove("visible");
        }
        var buttonPage = document.getElementById("panneau" + echoing[1]);
        buttonPage.classList.add("visible");
        };
