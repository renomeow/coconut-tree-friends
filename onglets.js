  function showCase(choice){
        
        var echoing = choice.split("-");
        var bolide = document.getElementById("content-wrap").children;
        for (var i = 0 ; i < bolide.length ; i++ ) {
            bolide[i].classList.remove("visible");
        }
        var buttonPage = document.getElementById("lien" + echoing[1]);
        buttonPage.classList.add("visible");
        };
