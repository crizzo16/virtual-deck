let virtu = {
  allHeroes: [],
  gameHeroes: [],
  gameHeroesList: "Main Set Cards Sidekicks",
  sortMethod: "",
  deck: [
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1011,
      name: "SHIELD Agent",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-agent.jpg?w=700&h=",
      cost: 0,
      recruit: 1,
      attack: 0,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1021,
      name: "SHIELD Trooper",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-trooper.jpg?w=700&h=",
      cost: 0,
      recruit: 0,
      attack: 1,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1021,
      name: "SHIELD Trooper",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-trooper.jpg?w=700&h=",
      cost: 0,
      recruit: 0,
      attack: 1,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1021,
      name: "SHIELD Trooper",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-trooper.jpg?w=700&h=",
      cost: 0,
      recruit: 0,
      attack: 1,
      team: "SHIELD",
      class: [""]
    },
    {
      hero: "",
      id: 1021,
      name: "SHIELD Trooper",
      img:
        "https://marveldbg.files.wordpress.com/2019/09/shield-trooper.jpg?w=700&h=",
      cost: 0,
      recruit: 0,
      attack: 1,
      team: "SHIELD",
      class: [""]
    }
  ],
  hand: [],
  discard: [],
  deckSelectedCard: "",
  discardSelectedCard: -1,
  shuffleDeck: function() {
    virtu.deck.sort(() => Math.random() - 0.5);
  },
  parseHeroes: function() {
    const url = "https://crizzo16.github.io/virtual-deck/assets/heroes.json";

    $.ajax({
      url: url,
      dataType: "json"
    }).done(function(result) {
      virtu.allHeroes = result;
      virtu.loadAllHeroes();
    });

    $.ajax({
      url: "https://crizzo16.github.io/virtual-deck/assets/starterCards.json",
      dataType: "json"
    }).done(function(data) {
      virtu.gameHeroes = data;
      virtu.loadGameHeroes();
    });
  },
  loadAllHeroes: function() {
    $("#all-heroes").html("");
    let checking = "";
    if (virtu.sortMethod=="team") {
      let wip = $("<h3>").text("Work In Progress");
      $("#all-heroes").append(wip);
    }

    virtu.allHeroes.forEach(function(item, index, array) {
      if (virtu.sortMethod == "set" && !checking.includes(item.set)) {
        let header = $("<h4>").text(item.set);
        checking += item.set + " ";
        $("#all-heroes").append(header);
      } else if (virtu.sortMethod == "team" && !checking.includes(item.team)) {
        let header = $("<h4>").text(item.team);
        checking += item.team + " ";
        $("#all-heroes").append(header); 
      }

      let newCard = $("<ul>")
        .addClass("all-hero-card pointer")
        .attr("set-id", item.id)
        .attr("name", item.hero);
        let heroName = $("<span>").addClass("font-bold").text(item.hero);
        newCard.append(heroName);

        if (virtu.sortMethod == "set") {
          newCard.append(" - " + item.team);
        } else if (virtu.sortMethod == "team") {
          newCard.append(" - " + item.set);
        } else {
          newCard.append(" - " + item.team + " - " + item.set);
        }
      $("#all-heroes").append(newCard);
    });
  },
  drawHand: function() {
    if (virtu.deck.length < 1) {
      M.toast({ html: "Replenish your deck!" });
    } else {
      let end = 6;
      if (virtu.deck.length < 6) {
        end = virtu.deck.length;
      }
      for (let i = 0; i < end; i++) {
        virtu.hand.push(virtu.deck.shift());
      }
      virtu.loadHand();
      virtu.updateDeckNum();
    }
  },
  drawCard: function() {
    if (virtu.deck.length < 1) {
      M.toast({ html: "Replenish your deck!" });
    } else {
      virtu.hand.push(virtu.deck.shift());
      virtu.loadHand();
      virtu.updateDeckNum();
    }
  },
  loadHand: function() {
    $("#hand").html("");
    let rec = 0;
    let att = 0;
    let teams = "";
    let classes = "";
    virtu.hand.forEach(function(item, index, array) {
      let singleCard = $("<img>")
        .addClass("img hand-card pointer")
        .attr("hero-id", item.id)
        .attr("name", item.name + " " + item.hero)
        .attr("src", item.img);
      $("#hand").append(singleCard);
      // Check for base recruit and attack
      rec += item.recruit;
      att += item.attack;
      // check for new team
      if (!teams.includes(item.team)) {
        if (teams.length > 0) {
          teams += ", ";
        }
        teams += item.team;
      }
      // check for new classes
      item.class.forEach(function(it, ind, arr) {
        if (!classes.includes(it)) {
          if (classes.length > 0) {
            classes += ", ";
          }
          classes += it;
        }
      });
    });
    virtu.updateDeckNum();
    $("#base-recruit").text(" " + rec);
    $("#base-attack").text(" " + att);
    $("#base-teams").text(" " + teams);
    $("#base-classes").text(" " + classes);
  },
  loadGameHeroes: function() {
    $("#hq-cards").html("");
    virtu.gameHeroes.forEach(function(item, index, array) {
      let head = $("<h5>")
        .addClass("full-hero pointer")
        .attr("set-id", item.id)
        .text(item.hero);
      $("#hq-cards").append(head);
      item.cards.forEach(function(it, ind, arr) {
        let newCard = $("<ul>")
          .addClass("hq-card pointer")
          .attr("hero-id", it.id)
          .attr("img", it.img)
          .text(it.name + " (" + it.cost + ")");

        $("#hq-cards").append(newCard);
      });
      const line = $("<div>").addClass("line");
      $("#hq-cards").append(line);
    });
  },
  selectMainHero: function() {
    const sel = $(".all-hero-highlight").attr("set-id");
    const id = $(this).attr("set-id");
    $(".all-hero-highlight").removeClass("all-hero-highlight");

    if (sel != id) {
      $(this).addClass("all-hero-highlight");
    }
  },
  selectHeroInHQ: function() {
    const sel = $(".full-hero-highlight").attr("set-id");
    const id = $(this).attr("set-id");
    const name = $(this).text();
    $(".full-hero-highlight").removeClass("full-hero-highlight");
    if (sel != id && name != "Sidekicks" && name != "Main Set Cards") {
      $(this).addClass("full-hero-highlight");
    }
    if (name == "Sidekicks" || name == "Main Set Cards") {
      M.toast({ html: "Cannot Remove From HQ!" });
    }
  },
  removeHeroFromHQ: function() {
    const selID = $(".full-hero-highlight").attr("set-id");
    for (let i = 0; i < virtu.gameHeroes.length; i++) {
      if (selID == virtu.gameHeroes[i].id) {
        virtu.gameHeroes.splice(i, 1);
        virtu.loadGameHeroes();
      }
    }
  },
  addSelectedHero: function() {
    const id = $(".all-hero-highlight").attr("set-id");
    const name = $(".all-hero-highlight").attr("name");
    $(".all-hero-highlight").removeClass("all-hero-highlight");
    for (let i = 0; i < virtu.allHeroes.length; i++) {
      if (
        id == virtu.allHeroes[i].id &&
        !virtu.gameHeroesList.includes(name)
      ) {
        virtu.gameHeroes.push(virtu.allHeroes[i]);
        virtu.gameHeroesList += " " + virtu.allHeroes[i].hero;
        virtu.loadGameHeroes();
        return;
      }
    }
    if (virtu.gameHeroesList.includes(name)) {
      M.toast({ html: "Already in the HQ!" });
    }
    /*
    if ((virtu.gameHeroes.length = 9)) {
      M.toast({ html: "Can't Have More Than 6 Heroes!" });
    }*/
  },
  putBackOnDeck: function() {
    const id = $(".selected-card-highlight").attr("hero-id");
    for (let i = 0; i < virtu.hand.length; i++) {
      if (id == virtu.hand[i].id) {
        virtu.deck.unshift(virtu.hand[i]);
        virtu.hand.splice(i, 1);

        // Update deck card count
        virtu.updateDeckNum();
        virtu.loadHand();
        return;
      }
    }
  },
  discardCard: function() {
    const selID = $(".selected-card-highlight").attr("hero-id");
    for (let i = 0; i < virtu.hand.length; i++) {
      if (selID == virtu.hand[i].id) {
        virtu.discard.push(virtu.hand[i]);
        virtu.hand.splice(i, 1);
        virtu.loadHand();
        virtu.updateDiscNum();
        return;
      }
    }
  },
  discardHand: function() {
    let end = virtu.hand.length;
    for (let i = 0; i < end; i++) {
      virtu.discard.push(virtu.hand.shift());
    }
    virtu.updateDiscNum();
    virtu.loadHand();
  },
  updateDiscNum: function() {
    $("#disc-num")
      .html("")
      .text(virtu.discard.length);
    $("#discard-pile").html("");
    virtu.discard.forEach(function(item, index, array) {
      let newDisc = $("<ul>")
        .addClass("discard-card pointer")
        .attr("hero-id", item.id)
        .text(item.name + " " + item.hero);
      $("#discard-pile").append(newDisc);
    });
  },
  updateDeckNum: function() {
    $("#deck-num")
      .html("")
      .text(virtu.deck.length);
  },
  discardToDeck: function() {
    const end = virtu.discard.length;
    for (let i = 0; i < end; i++) {
      virtu.deck.push(virtu.discard.shift());
    }

    virtu.updateDeckNum();
    virtu.updateDiscNum();
    virtu.shuffleDeck();
  },
  koCard: function() {
    const hero = $(".disc-sel-highlight").attr("hero-id");
    const end = virtu.discard.length;

    for (let i = 0; i < end; i++) {
      if (hero == virtu.discard[i].id) {
        virtu.discard.splice(i, 1);
        virtu.updateDiscNum();
        return;
      }
    }
  },
  selectHero: function() {
    const sel = $(".hero-sel-highlight").attr("hero-id");
    const id = $(this).attr("hero-id");
    $(".hero-sel-highlight").removeClass("hero-sel-highlight");

    if (sel != id) {
      $(this).addClass("hero-sel-highlight");
    }
  },
  addTopDeck: function() {
    const id = $(".hero-sel-highlight").attr("hero-id");
    virtu.gameHeroes.forEach(function(item, index, array) {
      item.cards.forEach(function(it, ind, arr) {
        if (id == it.id) {
          virtu.deck.unshift(it);
          virtu.updateDeckNum();
          $(".hero-sel-highlight").removeClass("hero-sel-highlight");
          return;
        }
      });
    });
  },
  addDiscard: function() {
    const id = $(".hero-sel-highlight").attr("hero-id");
    virtu.gameHeroes.forEach(function(item, index, array) {
      item.cards.forEach(function(it, ind, arr) {
        if (id == it.id) {
          virtu.discard.push(it);
          virtu.updateDiscNum();
          $(".hero-sel-highlight").removeClass("hero-sel-highlight");
          return;
        }
      });
    });
  },
  removeIndex(arr, ind) {
    let arr2 = [];
    arr.forEach(function(item, index, array) {
      if (index != ind) {
        arr2.push(item);
      }
    });
    return arr2;
  },
  selectCard: function() {
    const sel = $(".selected-card-highlight").attr("src");
    let source = $(this).attr("src");

    //Put border on card in hand so you know which card you clicked on
    $(".selected-card-highlight").removeClass("selected-card-highlight");

    if (sel != source) {
      $(this).addClass("selected-card-highlight");
    }
  },
  selectDiscardItem: function() {
    const oid = $(".disc-sel-highlight").attr("hero-id");
    const nid = $(this).attr("hero-id");

    $(".disc-sel-highlight").removeClass("disc-sel-highlight");

    if (oid != nid) {
      $(this).addClass("disc-sel-highlight");
    }
  },
  putOnBottom: function() {
    const id = $(".selected-card-highlight").attr("hero-id");
    for (let i = 0; i < virtu.hand.length; i++) {
      if (id == virtu.hand[i].id) {
        virtu.deck.push(virtu.hand[i]);
        virtu.hand.splice(i, 1);
        virtu.updateDeckNum();
        virtu.loadHand();
        return;
      }
    }
  },
  backInHand: function() {
    const id = $(".disc-sel-highlight").attr("hero-id");

    for (let i = 0; i < virtu.discard.length; i++) {
      if (id == virtu.discard[i].id) {
        virtu.hand.push(virtu.discard[i]);
        virtu.discard.splice(i, 1);
        virtu.loadHand();
        virtu.updateDiscNum();
        return;
      }
    }
  },
  fillModal: function() {
    $("#hq-modal-content").html("");
    let name = $(".hero-sel-highlight").text();
    let img = $(".hero-sel-highlight").attr("img");
    let viewName = $("<h4>").text(name);
    let viewImg = $("<img>")
      .attr("src", img)
      .addClass("img-big");
    $("#hq-modal-content")
      .append(viewName)
      .append(viewImg);
  },
  fillHandModal: function() {
    $("#hand-modal-content").html("");
    let name = $(".selected-card-highlight").attr("name");
    let img = $(".selected-card-highlight").attr("src");
    let viewName = $("<h4>").text(name);
    let viewImg = $("<img>")
      .attr("src", img)
      .addClass("img-big");
    $("#hand-modal-content")
      .append(viewName)
      .append(viewImg);
  },
  compareName: function(a, b) {
    const nameA = a.hero.toUpperCase();
    const nameB = b.hero.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  },
  compareSet: function(a, b) {
    const setA = a.set.toUpperCase();
    const setB = b.set.toUpperCase();

    let comparison = 0;
    if (setA > setB) {
      comparison = 1;
    } else if (setA < setB) {
      comparison = -1;
    }
    return comparison;
  },
  compareTeam: function(a, b) {
    const teamA = a.team[0].toUpperCase();
    const teamB = b.team[0].toUpperCase();

    let comparison = 0;
    if (teamA > teamB) {
      comparison = 1;
    } else if (teamA < teamB) {
      comparison = -1;
    }
    return comparison;
  },
  sortByName: function() {
    virtu.allHeroes.sort(virtu.compareName);
    virtu.sortMethod = "name";
    virtu.loadAllHeroes();
  },
  sortBySet: function() {
    virtu.allHeroes.sort(virtu.compareSet);
    virtu.sortMethod = "set";
    virtu.loadAllHeroes();
  },
  sortByTeam: function() {
    virtu.allHeroes.sort(virtu.compareTeam);
    virtu.sortMethod = "team";
    virtu.loadAllHeroes();
  }
};

$(document).ready(function() {
  $(".collapsible").collapsible();
  $(".modal").modal();
  virtu.updateDiscNum();
  virtu.updateDeckNum();
  virtu.loadGameHeroes();
  virtu.shuffleDeck();
  virtu.parseHeroes();
});

$(document).on("click", ".hand-card", virtu.selectCard);
$(document).on("click", ".discard-card", virtu.selectDiscardItem);
$(document).on("click", ".hq-card", virtu.selectHero);
$(document).on("click", ".all-hero-card", virtu.selectMainHero);
$(document).on("click", "#ko-card-btn", virtu.koCard);
$(document).on("click", "#draw-hand-btn", virtu.drawHand);
$(document).on("click", "#draw-card-btn", virtu.drawCard);
$(document).on("click", "#discard-hand-btn", virtu.discardHand);
$(document).on("click", "#discard-card-btn", virtu.discardCard);
$(document).on("click", "#replenish-deck", virtu.discardToDeck);
$(document).on("click", "#put-back", virtu.putBackOnDeck);
$(document).on("click", "#add-top-card", virtu.addTopDeck);
$(document).on("click", "#add-discard", virtu.addDiscard);
$(document).on("click", "#add-hero-btn", virtu.addSelectedHero);
$(document).on("click", "#bottom-deck", virtu.putOnBottom);
$(document).on("click", "#back-in-hand", virtu.backInHand);
$(document).on("click", ".full-hero", virtu.selectHeroInHQ);
$(document).on("click", "#remove-hero", virtu.removeHeroFromHQ);
$(document).on("click", "#view-card", virtu.fillModal);
$(document).on("click", "#view-hand-card", virtu.fillHandModal);
$(document).on("click", "#sort-by-name", virtu.sortByName);
$(document).on("click", "#sort-by-set", virtu.sortBySet);
$(document).on("click", "#sort-by-team", virtu.sortByTeam);
