// Get data
const usersList = require("./users-list.json");
const user = require("./user.json");
let sortedAtoZ;

/* ********** DATA FROM JSON ********** */

/* ------ USER LIST ------ */

// Map user list
const mapUsersList = usersList => {
  const sidebarUsers = usersList.users.map((user, u) => {
    return `
      <div class="sidebar-items-item space-between">
          <span>${user.displayName}</span>
      </div>
      `;
  });
  // Display user list on sidebar
  document.querySelector("#sidebarItems").innerHTML = sidebarUsers.join("");
};
mapUsersList(usersList);

/* ------ CURRENT USER ------ */

// -- Connexion et infos ENT
// Name
document.querySelector("#person-title").innerHTML =
  user.displayName + " - " + user.moduleName;
// Profile
const profile = user.profiles.map((profile, p) => {
  let currentProfile;
  switch (profile) {
    case "Student":
      currentProfile = "Elève";
      break;
    case "Relative":
      currentProfile = "Parent";
      break;
    case "Teacher":
      currentProfile = "Professeur";
      break;
    default:
      currentProfile = "Inconnu";
  }
  return `${currentProfile}`;
});
document.querySelector("#infos-profil").innerHTML = profile.join(", ");
// Login
document.querySelector("#infos-login").innerHTML = user.login;
// Activation code
document.querySelector("#infos-code").innerHTML = user.activationCode;
// Id
document.querySelector("#infos-id").innerHTML = user.id;
// Source
document.querySelector("#infos-source").innerHTML = user.source;
// Administration
// Pas trouvé dans le json

// -- Informations administratives
// First name
document.querySelector("#admin-firstName").value = user.firstName;
// Last name
document.querySelector("#admin-lastName").value = user.lastName;
// Display name
document.querySelector("#admin-displayName").value = user.displayName;
// Birth date
document.querySelector("#admin-birthdate").value = user.birthDate;
// Je n'ai pas trouvé les autres données dans le json (adresse, mail)

// -- Responsables (parents ?)
const parents = user.parents.map((parent, p) => {
  return `
    <div class="removable-item space-between">
      <span>${parent.displayName}</span> <i class="fas fa-times"></i>
    </div>
  `;
});
document.querySelector("#resp-items").innerHTML = parents.join("");

// -- Fonctions / Matières
const fieldOfStudies = user.fieldOfStudyLabels.map((field, f) => {
  return `
    <div class="removable-item space-between">
      <span>${field}</span> <i class="fas fa-times"></i>
    </div>
  `;
});
document.querySelector("#fonc-items").innerHTML = fieldOfStudies.join("");

// -- Etablissements
const structureNodes = user.structureNodes.map((structureNode, s) => {
  return `
    <div class="removable-item space-between">
      <span>${structureNode.name}</span> <i class="fas fa-times"></i>
    </div>
  `;
});
document.querySelector("#etab-items").innerHTML = structureNodes.join("");

// -- Classes
const classes = `
  <div class="removable-item space-between">
    <span>${user.level}</span> <i class="fas fa-times"></i>
  </div>
`;
document.querySelector("#class-items").innerHTML = classes;
// Je n'étais pas sûre de quelle donnée choisir pour la classe

// -- Groupes d'enseignements
const functionalGroups = user.functionalGroups.map((functionalGroup, f) => {
  return `
    <div class="removable-item space-between">
      <span>${functionalGroup.name}</span> <i class="fas fa-times"></i>
    </div>
  `;
});
document.querySelector("#group-items").innerHTML = functionalGroups.join("");

// -- ENT
// Je n'ai pas trouvé ENT dans le json

/* ********** EVENTS ********** */

// Show sidebar on click (mobile only)
document.getElementById("user-list").addEventListener("click", function() {
  if (document.querySelector("#sidebar").style.display == "none") {
    document.querySelector("#sidebar").style.display = "block";
    document.querySelector("#person").style.display = "none";
    document.querySelector(
      "#user-list"
    ).innerHTML = `<span class="centered">Fermer la liste des utilisateurs</span><i class="fas fa-times">`;
  } else {
    document.querySelector("#sidebar").style.display = "none";
    document.querySelector("#person").style.display = "block";
    document.querySelector(
      "#user-list"
    ).innerHTML = `<span class="centered">Afficher la liste des utilisateurs</span><i class="fas fa-users"></i>`;
  }
});

// Sort user list
document.getElementById("sort-alpha").addEventListener("click", function() {
  // Check if users are currently sorted AtoZ ou ZtoA
  if (sortedAtoZ == false) {
    // Sort A to Z
    usersList.users.sort(function(a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
      sortedAtoZ = true;
      return 0;
    });
  } else {
    // Sort Z to A
    usersList.users.sort(function(a, b) {
      if (a.lastName < b.lastName) {
        return 1;
      }
      if (a.lastName > b.lastName) {
        return -1;
      }
      sortedAtoZ = false;
      return 0;
    });
  }
  mapUsersList(usersList);
});
