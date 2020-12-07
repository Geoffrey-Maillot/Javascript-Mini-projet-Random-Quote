var citations = [
  ["L’information n’est pas le savoir. Le savoir n’est pas la sagesse. La sagesse n’est pas la beauté. La beauté n’est pas l’amour. L’amour n’est pas la musique, et la musique, c’est ce qu’il y a de mieux.", "Frank Zappa"],

 [ "Les ordinateurs sont comme les dieux de l’Ancien Testament : avec beaucoup de règles, et sans pitié.","git" ],

 ["Compter en octal, c’est comme compter en décimal, si on n’utilise pas ses pouces", "Tom Lehrer"],

[ "Il y a 10 sortes de gens au monde : ceux qui connaissent le binaire et les autres", "Anonyme"],

["Un langage de programmation est une convention pour donner des ordres à un ordinateur. Ce n’est pas censé être obscur, bizarre et plein de pièges subtils. Ca, ce sont les caractéristiques de la magie", "Dave Small"],

["C'est illogique, Capitaine", "Mr Spock"],

[ "N’attribuez jamais à la malveillance ce qui s’explique très bien par l’incompétence", "Napoléon Bonaparte"],

["A l’origine de toute erreur attribuée à l’ordinateur, vous trouverez au moins deux erreurs humaines. Dont celle consistant à attribuer l’erreur à l’ordinateur.", "Anonyme"],

["Un programme est un sort jeté sur un ordinateur, qui transforme tout texte saisi au clavier en message d’erreur.", "Anonyme"],

["Un clavier Azerty en vaut deux.", "Anonyme"],

[ "Il est assez difficile de trouver une erreur dans son code quand on la cherche. C’est encore bien plus dur quand on est convaincu que le code est juste.", "Steve McConnell"],

["Il n’existe pas, et il n’existera jamais, de langage dans lequel il soit un tant soit peu difficile d’écrire de mauvais programmes.", "Anonyme"],

["Si le déboguage est l’art d’enlever les bogues, alors la programmation doit être l’art de les créer.", "Anonyme"],

["La programmation peut être un plaisir ; de même que la cryptographie. Toutefois, il faut éviter de combiner les deux", "Kreitzberg et Sneidermann."],

["Les premiers 90% du code prennent les premiers 90% du temps de développement. Les 10% restants prennent les autres 90% du temps de développement.", "Tom Cargill"],

["Si on ment à un compilateur, il prendra sa revanche", "Henry Spencer."],

["Informatique : alliance d'une science inexacte et d'une activité humaine faillible", "Luc Fayard"],

["Le vrai problème n’est pas de savoir si les machines pensent, mais de savoir si les hommes pensent", "Skinner"],

["La question de savoir si un ordinateur peut penser n'est pas plus intéressante que celle de savoir si un sous-marin peut nager.", "Edgar W. Dijkstra"],

["Il y a deux méthodes pour écrire des programmes sans erreurs. Mais il n’y a que la troisième qui marche.", "Anonyme"],

["On ne peut pas davantage créer des fichiers numériques non copiables que créer de l’eau non humide.", "Bruce Schneier"],

["L’informatique semble encore chercher la recette miracle  qui permettra aux gens d’écrire des programmes corrects sans avoir à réfléchir. Au lieu de cela, nous devons apprendre aux gens comment réfléchir.", "Anonyme"],

["Le danger, avec les ordinateurs, ce n’est pas tellement qu’ils deviennent aussi intelligents que les hommes, mais c’est que nous tombions d’accord avec eux pour les rencontrer à mi-chemin.", "Bernard Avishai"],

];

var quoteElement = document.getElementById("quote")
var autorElement = document.getElementById("author")
var generateBtnElement = document.getElementById("generate-btn")

function handlerQuoteAlea() {
  size = citations.length
  var citation = parseInt(Math.random()*citations.length)
  quoteElement.textContent = citations[citation][0]
  autorElement.textContent = citations[citation][1]
}

generateBtnElement.addEventListener("click", handlerQuoteAlea)



























