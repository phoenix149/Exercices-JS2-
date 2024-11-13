// Exercice 6 : 

//énoncé :

// Une compagnie d'assurance automobile propose à ses clients quatre familles de tarifs identifiables par une couleur, du moins au plus onéreux : tarifs bleu, vert, orange et rouge. Le tarif dépend de la situation du conducteur :
// un conducteur de moins de 25 ans et titulaire du permis depuis moins de deux ans, se voit attribuer le tarif rouge, si toutefois il n'a jamais été responsable d'accident. Sinon, la compagnie refuse de l'assurer.
// un conducteur de moins de 25 ans et titulaire du permis depuis plus de deux ans, ou de plus de 25 ans mais titulaire du permis depuis moins de deux ans a le droit au tarif orange s'il n'a jamais provoqué d'accident, 
//au tarif rouge pour un accident, 
// sinon il est refusé.
// un conducteur de plus de 25 ans titulaire du permis depuis plus de deux ans bénéficie du tarif vert s'il n'est à l'origine d'aucun accident et du tarif orange pour un accident, du tarif rouge pour deux accidents, et refusé au-delà
// De plus, pour encourager la fidélité des clients acceptés, la compagnie propose un contrat de la couleur immédiatement la plus avantageuse s'il est entré dans la maison depuis plus d'un an.
// Ecrire l'algorithme permettant de saisir les données nécessaires (sans contrôle de saisie) et de traiter ce problème. Avant de se lancer à corps perdu dans cet exercice, on pourra réfléchir un peu 
// et s'apercevoir qu'il est plus simple qu'il n'en a l'air (cela s'appelle faire une analyse !)

alert("Bonjour et bienvenue sur AssurAuto! Nous allons vous poser quelques questions, et ensuite nous déterminerons ensemble quel tarif est en adéquation avec votre profil.");

let i_Age = parseInt(prompt("Quel âge avez-vous ?"));
let i_PermisAge = parseInt(prompt("Depuis combien de temps avez vous le permis ?"));
let i_Accident = parseInt(prompt("Combien avez vous eu d'accident(s) ?"));
let i_Anciennete = parseInt(prompt("Combien d'années d'ancienneté avez vous chez nous ?"));

// if (i_Accident < 3) {

    if ((i_Age < 25 && i_PermisAge > 2 && i_Accident == 0) || (i_Age > 25 && i_PermisAge < 2 && i_Accident == 0) || (i_Age > 25 && i_PermisAge > 2 && i_Accident == 1)) {
        if (i_Anciennete > 1) {
            alert("Chez AssurAuto nous récompensons la fidélité de nos clients c'est pourquoi j'ai le plaisir de vous proposer dès à présent le Tarif Bleu!");
        }

        else {
            alert("AssurAuto l'assurance qui répond à tout vos besoins est fier de vous proposer en adéquation avec votre profil un tarif Orange.");

        }
    }
    else if ((i_Age < 25 && i_PermisAge < 2 && i_Accident == 0) || (i_Age > 25 && i_PermisAge > 2 && i_Accident == 1) || (i_Age < 25 && i_PermisAge > 2 && i_Accident == 1) || (i_Age > 25 && i_PermisAge > 2 && i_Accident == 2)) {

        if (i_Anciennete > 1) {
            alert("Chez AssurAuto nous récompensons la fidélité de nos clients c'est pourquoi j'ai le plaisir de vous proposer dès à présent le Tarif Bleu!");
        }
        else {
            alert("AssurAuto l'assurance qui répond à tout vos besoins est fier de vous proposer en adéquation avec votre profil un tarif Rouge.");

        }
    }
    else if (i_Age > 25 && i_PermisAge > 2 && i_Accident == 0) {
        if (i_Anciennete > 1) {
            alert("Chez AssurAuto nous récompensons la fidélité de nos clients c'est pourquoi j'ai le plaisir de vous proposer dès à présent le Tarif Bleu!");
        }
        else {
            alert("AssurAuto l'assurance qui répond à tout vos besoins est fier de vous proposer en adéquation avec votre profil un tarif Vert.");
        }
    }
    else {
        alert("Malheureusement, votre demande ne peut aboutir veuillez nous recontacter un jour lorsque le temps aura passé ou lorsque vous ferez moins d'accidents...");
    }
// }
// else {
//     alert("Malheureusement, votre demande ne peut aboutir veuillez nous recontacter un jour mais pas tout de suite...Enfin eventuellement...");
// }
