import * as commonCommands from './commmands/common';
import * as profileCommands from './commmands/profile';
import * as articleCommands from './commmands/article';
import * as commentsCommands from './commmands/comments';
import * as ratingCommands from './commmands/rating';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

export {};
