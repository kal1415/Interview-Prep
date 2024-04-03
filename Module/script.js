import { username } from "./username.js"; //named import
import { age } from "./username.js"; //named import

import city from "./username.js"; //default import

import { village as state } from "./username.js"; //Renamed import

console.log(username, age, city, state);
