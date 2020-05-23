/* Copyright 2020 Daniel Bohm & Patrik Perger and the Bridge Hackathon Contributors
*
*   Use of this source code is governed by an MIT-style
*   license that can be found in the LICENSE file or at
*   https://opensource.org/licenses/MIT
*/

export default function IMPs(score1, score2) {
    const diff = Math.abs(score1 - score2); //score 1 is the teams score on table 1, score 2 the same teams score on table 2.
    var points;
    if (diff<20) {
        return points= [0, 0];          //first number is IMP of the team whose score we entered, score 2 is the other teams IMP

    }
    
        if (diff >= 20 && diff <= 40) {
            points= [1, 0];
        }
        else if (diff >= 50 && diff <= 80) {
            points= [2, 0];
        }
        else if (diff >= 90 && diff <= 120) {
            points= [3, 0];
        }
        else if (diff >= 130 && diff <= 160) {
            points= [4, 0];
        }

        else if (diff >= 170 && diff <= 210) {
            points= [5, 0];
        }

        else if (diff >= 220 && diff <= 260) {
            points= [6, 0];
        }
        else if (diff >= 270 && diff <= 310) {
            points= [7, 0];
        }

        else if (diff >= 320 && diff <= 360) {
            points= [8, 0];
        }
        else if (diff >= 370 && diff <= 420) {
            points= [9, 0];
        }
        else if (diff >= 430 && diff <= 490) {
            points= [10, 0];
        }
        else if (diff >= 500 && diff <= 590) {
            points= [11, 0];
        }
        else if (diff >= 600 && diff <= 740) {
            points= [12, 0];
        }
        else if (diff >= 750 && diff <= 890) {
            points= [13, 0];
        }
        else if (diff >= 900 && diff <= 1090) {
            points= [14, 0];
        }
        else if (diff >= 1100 && diff <= 1290) {
            points= [15, 0];
        }
        else if (diff >= 1300 && diff <= 1490) {
            points= [16, 0];
        }
        else if (diff >= 1500 && diff <= 1740) {
            points= [17, 0];
        }
        else if (diff >= 1750 && diff <= 1990) {
            points= [18, 0];
        }
        else if (diff >= 2000 && diff <= 2240) {
            points= [19, 0];
        }
        else if (diff >= 2250 && diff <= 2490) {
            points= [20, 0];
        }
        else if (diff >= 2500 && diff <= 2990) {
            points= [21, 0];
        }
        else if (diff >= 3000 && diff <= 3490) {
            points= [22, 0];
        }
        else if (diff >= 3500 && diff <= 3990) {
            points= [23, 0];
        }
        else{
            points= [24, 0]
        }
        if(score2>score1){
            points=points.reverse();
        }
        return points;
    }