import {createSelector} from 'reselect';

export const selectScore = (state) => state.score.score;
export const selectCurrentPoint = (state) => state.score.currentScore;

export const getPoints = createSelector(
    [selectScore],
    (score) => score,
);
