import * as commonCommands from './commmands/common';
import * as profileCommands from './commmands/profile';
import * as itemCommands from './commmands/item';
import * as commentsCommands from './commmands/comments';
import * as ratingCommands from './commmands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(itemCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

export {};
