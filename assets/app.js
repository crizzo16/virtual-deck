let virtu = {
  allHeroes: [],
  gameHeroes: [
    {
      hero: "Wound",
      team: "None",
      cards: [
        {
          hero: "",
          id: 1031,
          name: "Wound",
          img:
            "https://marveldbg.files.wordpress.com/2019/09/wound.jpg?w=700&h=",
          cost: 0,
          recruit: 0,
          attack: 0,
          team: "",
          class: [""]
        }
      ]
    },
    {
      hero: "Silk",
      team: "Spider-Friends",
      cards: [
        {
          hero: "Silk",
          id: 5121,
          name: "Borrowed Cloaking Device",
          img:
            "https://marveldbg.files.wordpress.com/2019/09/silk-01.jpg?w=700&h=",
          cost: 2,
          recruit: 0,
          attack: 1,
          team: "Spider-Friends",
          class: ["tech"]
        },
        {
          hero: "Silk",
          id: 5122,
          name: "Silk Stalking",
          img:
            "https://marveldbg.files.wordpress.com/2019/09/silk-02.jpg?w=700&h=",
          cost: 2,
          recruit: 0,
          attack: 1,
          team: "Spider-Friends",
          class: ["covert"]
        },
        {
          hero: "Silk",
          id: 5123,
          name: "Cascading Maneuver",
          img:
            "https://marveldbg.files.wordpress.com/2019/09/silk-03.jpg?w=700&h=",
          cost: 2,
          recruit: 0,
          attack: 1,
          team: "Spider-Friends",
          class: ["punch", "instinct"]
        },
        {
          hero: "Silk",
          id: 5124,
          name: "Long-Range Spider-Sense",
          img:
            "https://marveldbg.files.wordpress.com/2019/09/silk-04.jpg?w=700&h=",
          cost: 2,
          recruit: 0,
          attack: 2,
          team: "Spider-Friends",
          class: ["range"]
        }
      ]
    }
  ],
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
    /* $.getJSON("./assets/heroes.json", function(json) {
        virtu.allHeroes = json;
        console.log(virtu.allHeroes);
    }); */

    fetch("./assets/heroes.json")
      .then(res => res.json())
      .then(data => {
        virtu.allHeroes = data;
        console.log(virtu.allHeroes);
      });
  },
  drawHand: function() {
    for (let i = 0; i < 6; i++) {
      virtu.hand.push(virtu.deck.shift());
    }
    virtu.loadHand();
  },
  drawCard: function() {
    virtu.hand.push(virtu.deck.shift());
    virtu.loadHand();
  },
  loadHand: function() {
    $("#hand").html("");
    let rec = 0;
    let att = 0;
    let teams = "";
    let classes = "";
    virtu.hand.forEach(function(item, index, array) {
      let singleCard = $("<img>")
        .addClass("img hand-card")
        .attr("hero-id", item.id)
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
      item.cards.forEach(function(it, ind, arr) {
        let newCard = $("<ul>")
          .addClass("hq-card")
          .attr("hero-id", it.id);
        let heroo = $("<span>")
          .addClass("font-bold")
          .text(item.hero);
        newCard.append(heroo);
        let texxt = " – " + it.name + " (" + it.cost + ")";
        newCard.append(texxt);

        $("#hq-cards").append(newCard);
      });
      const line = $("<div>").addClass("line");
      $("#hq-cards").append(line);
    });
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
    virtu.updateDiscNum;
    virtu.loadHand;
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
        .addClass("discard-card")
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
    const sel = $(".img-big").attr("src");
    let source = $(this).attr("src");
    $("#selected-card").html("");
    $("#selected-card").append($("<img>", { src: source, class: "img-big" }));

    //Put border on card in hand so you know which card you clicked on
    $(".selected-card-highlight").removeClass("selected-card-highlight");

    if (sel == source) {
      $("#selected-card").html("");
    } else {
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
  }
};

$(document).ready(function() {
  $(".collapsible").collapsible();
  virtu.updateDiscNum();
  virtu.updateDeckNum();
  virtu.loadGameHeroes();
  virtu.shuffleDeck();
  virtu.parseHeroes();
});

$(document).on("click", ".hand-card", virtu.selectCard);
$(document).on("click", ".discard-card", virtu.selectDiscardItem);
$(document).on("click", ".hq-card", virtu.selectHero);
$(document).on("click", "#ko-card-btn", virtu.koCard);
$(document).on("click", "#draw-hand-btn", virtu.drawHand);
$(document).on("click", "#draw-card-btn", virtu.drawCard);
$(document).on("click", "#discard-hand-btn", virtu.discardHand);
$(document).on("click", "#discard-card-btn", virtu.discardCard);
$(document).on("click", "#replenish-deck", virtu.discardToDeck);
$(document).on("click", "#put-back", virtu.putBackOnDeck);
$(document).on("click", "#add-top", virtu.addTopDeck);
$(document).on("click", "#add-discard", virtu.addDiscard);
