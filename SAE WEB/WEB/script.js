// import { Page_Text_Data } from "./data.js";

/* INITIALISATION DES VARIABLES GLOBALES */

let currentPage = "HOME";

/* INITIALISATION DES RACCOURCIS AU DOM */
const PRO = document.getElementById("PRO");
const FORMA = document.getElementById("FORMA");
const HOB = document.getElementById("HOB");
const ABOUT = document.getElementById("ABOUT");
const CONTENEUR = document.getElementById("conteneur");
const SWITCHEN = document.getElementById("EN");
const SWITCHFR = document.getElementById("FR");

/* PREPARATION DE LA PAGE AU CHARGEMENT */

window.onload = function(){
    if(localStorage.LANG == undefined){ //Cette variable permet de sauvegarder la preference de langue sur le naviguateur du client pour la prochaine connexion.
        console.log("Affichage language par defaut (FR)"); 
        localStorage.setItem("LANG", 0);
    };

    SWITCHEN.addEventListener("click", function(){
        if(localStorage.LANG == 1){
            alert("The page is already displayed in english.\n\n If it\'s not the case, please try and refresh the page (F5).");
        }else{
            localStorage.setItem("LANG", 1);
            window.location = "./homePage.html";
        }
    });

    SWITCHFR.addEventListener("click", function(){
        if(localStorage.LANG == 0){
            alert("Cette page est déjà affichée en Français.\n\n Si ce n'est pas le cas, merci de recharger celle-ci (F5).");
        }else{
            localStorage.setItem("LANG", 0);
            window.location = "./homePage.html";
        }
    });

    setup_Page();
};

function setup_Page(){ //Initialisation de la page de départ (réutilisable à n'importe quel moment)
    clearEverything();

    PRO.innerHTML = Page_Text_Data[localStorage.LANG].BUTTON1;
    FORMA.innerHTML = Page_Text_Data[localStorage.LANG].BUTTON2;
    HOB.innerHTML = Page_Text_Data[localStorage.LANG].BUTTON3;
    ABOUT.innerHTML = Page_Text_Data[localStorage.LANG].BUTTON4;

    create("p", "bio_HomePage", "NA", "conteneur", Page_Text_Data[localStorage.LANG].HOMETEXT);
};

document.querySelectorAll(".regButtons").forEach(item => {//Gestion des boutons de naviguation
    item.addEventListener("click", function(){
        console.log(item.id + " button clicked");

        currentPage = item.id;
        Page_Explorater(item.id);
    });
});


/*FONCTIONS REUTILISABLES */


/*cette fonction permet la création d'un élément, arguments : 
[balise / id element / classe element / id de l'élément dans lequel l'insérer / texte à insérer dans l'élément]
Insérer "NA" en argument pour ne pas tenir compte d'une option, sauf pour TYPE & ASSIGNEMENT !!!*/
function create(TYPE, ID, CLASS, ASSIGNEMENT, OPT_TEXT){ 
    let EL = document.createElement(TYPE);
    if(ID != "NA"){EL.id = ID;};
    if(CLASS != "NA"){EL.classList.add(CLASS);};
    if(OPT_TEXT != "NA"){EL.innerHTML = OPT_TEXT;};
    document.getElementById(ASSIGNEMENT).append(EL);
};


function clearEverything(){ // Supprime l'entièretée du DOM au sein de la "section"
    var col_wrapper = document.getElementById("conteneur").getElementsByTagName("*");//compte le nbr d'element dans la section
    var len = col_wrapper.length;
    console.log('Il y a ' + len + ' éléments à supprimer');

    try{
        for (let i = 0; i < len; i++) {  
            document.getElementById('conteneur').removeChild(document.getElementById('conteneur').getElementsByTagName('*')[0]);//supprime chaque el un par un
        }
    }catch(e){//catch the error, ceci est nécessaire ou cas où l'un des éléments compté soit imbriqué (un <br> par exemple)
        console.log("Error catched,\n no more elements left,\n breaking the loop")
    }
};

function Page_Explorater(page_To_Load){ //Charge les éléments en fonction du bouton nav cliqué
    let DBSection_To_Load = translateDbName(page_To_Load);

    if(page_To_Load == "HOB"){
        launch_Hobby_Page(DBSection_To_Load);
        return;
    }

    clearEverything();

    let len = DBSection_To_Load[localStorage.LANG].length;

    for(let i = 0; i < len; i++){
        let data_Target = DBSection_To_Load[localStorage.LANG][i];

        create("article", "art"+i, "NA", "conteneur", "NA");

        create("div", "topDiv"+i, "top_container_div", "art"+i, "NA");
        create("div", "top_div_left"+i, "top_div_left", "topDiv"+i, "NA");
        create("div", "top_div_right"+i, "top_div_right", "topDiv"+i, "NA");
        create("div", "bottomDiv"+i, "bottom_container_div", "art"+i, "NA");


        create("h2", "NA", "NA", "top_div_left"+i, data_Target.TITLE);
        create("h3", "NA", "NA", "top_div_left"+i, data_Target.SUBTITLE);
        create("h4", "NA", "NA", "top_div_left"+i, data_Target.LOCATION);
        create("h4", "NA", "NA", "top_div_left"+i, data_Target.CHRONO);
        create("h3", "NA", "NA", "top_div_left"+i, data_Target.SMALLDESCRIPTION);
        create("img", "expander"+i, "expanders", "top_div_right"+i, "NA");
        document.getElementById("expander"+i).setAttribute("src", "../IMG/expand.svg");

        document.getElementById("art"+i).classList.add("MINIMIZED");

        create("img", "img1"+i, "NA", "bottomDiv"+i, "NA");
        document.getElementById("img1"+i).setAttribute("src", data_Target.IMG1);
        document.getElementById("img1"+i).classList.add("images");
        if(data_Target.IMG2 == "NA"){
            document.getElementById("img1"+i).setAttribute("width", "100%");
        }else{
            create("img", "img2"+i, "NA", "bottomDiv"+i, "NA");
            document.getElementById("img2"+i).setAttribute("src", data_Target.IMG2);
            document.getElementById("img2"+i).classList.add("images");
            document.getElementById("img1"+i).setAttribute("width", "49%");
            document.getElementById("img2"+i).setAttribute("width", "49%");
        };
    };

    document.querySelectorAll(".expanders").forEach(item => {
        item.addEventListener("click", function(){
            expand(this.id, page_To_Load);
        });
    });
};

function launch_Hobby_Page(param){
    console.log(param);
    console.log("#");
    clearEverything();

    create("div", "hob_div", "NA", "conteneur", "NA");
    // create("div", "span1", "spans", "hob_div", "NA");
    // create("img", "img_hob1", "imgs_hob", "span1", "NA");
    // document.getElementById("img_hob1").setAttribute("src", param[localStorage.LANG].IMAGE1);
    create("p", "NA", "p_hob", "hob_div", param[localStorage.LANG].PARAGRAPH1);
    // create("div", "span2", "spans", "hob_div", "NA");
    create("img", "img_hob2", "imgs_hob", "hob_div", "NA");
    document.getElementById("img_hob2").setAttribute("src", param[localStorage.LANG].IMAGE2);
    create("p", "NA", "p_hob", "hob_div", param[localStorage.LANG].PARAGRAPH2);
    // create("div", "span3", "spans", "hob_div", "NA");
    create("img", "img_hob3", "imgs_hob", "hob_div", "NA");
    document.getElementById("img_hob3").setAttribute("src", param[localStorage.LANG].IMAGE3);
    create("p", "NA", "p_hob", "hob_div", param[localStorage.LANG].PARAGRAPH3);
};

document.getElementById("ABOUT").addEventListener("click", function(){ // :-)
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";
});

function toggleSection(param1, param2, param3){
    let dbTarget = translateDbName(param1);

    create("article", "toggledEl", "NA", "conteneur", "NA");

    create("h2", "NA", "NA", "toggledEl", dbTarget[localStorage.LANG][param2].TITLE);
    create("h3", "NA", "NA", "toggledEl", dbTarget[localStorage.LANG][param2].SUBTITLE);
    create("h4", "NA", "NA", "toggledEl", dbTarget[localStorage.LANG][param2].LOCATION);
    create("h4", "NA", "NA", "toggledEl", dbTarget[localStorage.LANG][param2].CHRONO);
    create("h3", "NA", "NA", "toggledEl", dbTarget[localStorage.LANG][param2].SMALLDESCRIPTION);
    create("div", "sectionToggledEl", "NA", "toggledEl", "NA");
    create("img", "imgtoggled", "NA", "sectionToggledEl", "NA");
    document.getElementById("imgtoggled").setAttribute("src", dbTarget[localStorage.LANG][param2].IMG1);
    create("p", "NA", "NA", "sectionToggledEl", dbTarget[localStorage.LANG][param2].DESCRIPTION);
    create("br", "NA", "NA", "sectionToggledEl", "NA");
    create("br", "NA", "NA", "sectionToggledEl", "NA");
    create("button", "back_Button", "regButtons", "sectionToggledEl", "Retour");

    document.getElementById("back_Button").addEventListener("click", function(){
        clearEverything();
        Page_Explorater(param3);
    });
};

function translateDbName(string){
    let result = undefined;
    if(string == "PRO"){result = Pro_Text_Data;}
    else if(string == "FORMA"){result = School_Text_Data;}
    else if(string == "HOB"){result = Hobbies_Text_Data;}
    else if(string == "ABOUT"){result = About_Text_Data;}
    else if(string == undefined){alert(Page_Text_Data[localStorage.LANG].ERRORLOAD);};
    return result;
};

function expand(param, param2){
    clearEverything();

    let indexer = param.slice(8,9);

    toggleSection(currentPage, indexer, param2);
};