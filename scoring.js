let calculateScore = (player) => {
    if (player.position == 'QB') {
        let qbPassPoints = (player.stats.passing.yards / 25);
        let qbPassTdPoints = (player.stats.passing.touchdowns * 6);
        let rushPointsYards = (player.stats.rushing.yards / 10);
        let rushTd = (player.stats.rushing.touchdowns * 6);
        let qbPassInt = (player.stats.passing.interceptions * -3);
        let qbRushFumb = (player.stats.rushing.fumbles * -3);

        return qbPassPoints + qbPassTdPoints + rushPointsYards + rushTd + qbPassInt + qbRushFumb

    } else if (player.position == 'RB') {
        let rbYardsRush = (player.stats.rushing.yards / 10);
        let rushTD = (player.stats.rushing.touchdowns * 6);
        let rushFumb = (player.stats.rushing.fumbles * -3);
        let rbRec = (player.stats.receiving.receptions * 1);
        let rbRecYd = (player.stats.receiving.yards / 10);
        let rbRecTD = (player.stats.receiving.touchdowns * 6);
        let rbRecFum = (player.stats.receiving.fumbles * -3);
        let rbKickRtYd = (player.stats.return.kickreturn.yards / 15);
        let rbKickRtTD = (player.stats.return.kickreturn.touchdowns * 6);
        let rbKickRtFum = (player.stats.return.kickreturn.fumbles * -3);
        let rbPuntRtYd = (player.stats.return.puntreturn.yards / 15);
        let rbPuntRtTD = (player.stats.return.puntreturn.touchdowns * 6);
        let rbPuntRtFum = (player.stats.return.puntreturn.fumbles * -3);

        return rbYardsRush + rushTD + rushFumb + rbRec + rbRecYd + rbRecTD + rbRecFum + rbKickRtYd + rbKickRtTD + rbKickRtFum + rbPuntRtYd + rbPuntRtTD +rbPuntRtFum

    } else if (player.position == 'WR') {
        let wrYardsRush = (player.stats.rushing.yards / 10);
        let wrRushTD = (player.stats.rushing.touchdowns * 6);
        let wrRushFumb = (player.stats.rushing.fumbles * -3);
        let wrRec = (player.stats.receiving.receptions * 1);
        let wrRecYd = (player.stats.receiving.yards / 10);
        let wrRecTD = (player.stats.receiving.touchdowns * 6);
        let wrRecFum = (player.stats.receiving.fumbles * -3);
        let wrKickRtYd = (player.stats.return.kickreturn.yards / 15);
        let wrKickRtTD = (player.stats.return.kickreturn.touchdowns * 6);
        let wrKickRtFum = (player.stats.return.kickreturn.fumbles * -3);
        let wrPuntRtYd = (player.stats.return.puntreturn.yards / 15);
        let wrPuntRtTD = (player.stats.return.puntreturn.touchdowns * 6);
        let wrPuntRtFum = (player.stats.return.puntreturn.fumbles * -3);

        return wrYardsRush + wrRushTD + wrRushFumb + wrRec + wrRecYd + wrRecTD + wrRecFum + wrKickRtYd + wrKickRtTD + wrKickRtFum + wrPuntRtYd + wrPuntRtTD + wrPuntRtFum

    } else if (player.position == 'TE') {
        let teRec = (player.stats.receiving.receptions * 1);
        let teRecYards = (player.stats.receiving.yards / 10);
        let teTd = (player.stats.receiving.touchdowns * 6);
        let teFum = (player.stats.receiving.fumbles * -3);

        return teRec + teRecYards + teTd + teFum

    } else if (player.position != 'QB' || 'RB' || 'WR' || 'TE') {
        
        return 0
        
    }
}


module.exports = calculateScore