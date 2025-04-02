import { lodgeHTML } from "./lodgeMod.js";
import { lostWolfHTML } from "./lostWolf.js";
import { chamfortHTML } from "./chamfortRiver.js";
import { ganderHTML } from "./ganderRiver.JS";
import { campgroundsHTML } from "./campgrounds.js";
import { pineBluffsHTML } from "./pineBluffs.js";
import { guestHTML } from "./guestHTML.js";
import { displayServicesHTML } from "./displayServices.js";
import { serviceEventListener } from "./eventListeners.js";
import { areaEventListener } from "./eventListeners.js";
import { guestEventListener } from "./eventListeners.js";

const lodgeSection = document.querySelector("#lodge")
lodgeSection.innerHTML = lodgeHTML()

const lostWolfSection = document.querySelector("#lostWolfHikingTrail")
lostWolfSection.innerHTML = lostWolfHTML()

const chamfortSection = document.querySelector("#chamfortRiver")
chamfortSection.innerHTML = chamfortHTML()

const ganderSection = document.querySelector("#ganderRiver")
ganderSection.innerHTML = ganderHTML()

const campgroundsSection = document.querySelector("#campgrounds")
campgroundsSection.innerHTML = campgroundsHTML()

const pineBluffsSection = document.querySelector("#pineBluffsTrails")
pineBluffsSection.innerHTML = pineBluffsHTML()

const guestSection = document.querySelector("#guests__section")
guestSection.innerHTML = guestHTML()

const displayServices = document.querySelector("#service__list")
displayServices.innerHTML = displayServicesHTML()

serviceEventListener()
areaEventListener()
guestEventListener()