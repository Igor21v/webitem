import * as commonCommands from './commmands/common';
import * as itemCommands from './commmands/item';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(itemCommands);

export {};
