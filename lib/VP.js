/* Copyright 2020 Daniel Bohm & Patrik Perger and the Bridge Hackathon Contributors
*
*   Use of this source code is governed by an MIT-style
*   license that can be found in the LICENSE file or at
*   https://opensource.org/licenses/MIT
*/

export default function vp(M, no_boards) { //M=margin, no_boards= number of boards

    const B = 15 * (Math.pow(no_boards, 0.5));
    const Tau = (Math.pow(5, 0.5) - 1) / 2;
    VPW = 10 + 10 * ((1 - Math.pow(Tau, (3 * M / B))) / (1 - Math.pow(Tau, 3))); //source: https://www.bridgebase.com/forums/topic/55389-wbf-vp-scale-changes/page__p__667202#entry667202
    if (VPW > 20) {
        VPW = 20;
    }
    VPL = 20 - VPW;
    
    return[VPW.toFixed(2),VPL.toFixed(2)] //VPW=VP of winner, VPL= VP of loser
}


