/* Copyright 2020 Daniel Bohm & Patrik Perger and the Bridge Hackathon Contributors
*
*   Use of this source code is governed by an MIT-style
*   license that can be found in the LICENSE file or at
*   https://opensource.org/licenses/MIT
*/
export default function calculate(contract, overtricks, suit, VUL, doubled) { //contract: 1-7, overtricks: includes undertricks, suit: DIAMONDS, CLUBS, SPADES or HEARTS , VUL:TRUE=Vulnerable, Doubled: 0= not doubled, 1=doubled, 2=redoubled
    let score;
    if (VUL == true) {
        if (doubled == 0) {

            if (overtricks >= 0) {
                if (suit == 'DIAMONDSS' || suit == 'CLUBSS') {
                    if (contract < 5) {
                        return score = ((contract + overtricks) * 20 + 50);

                    }
                    else if (contract == 5) {
                        return score = ((contract + overtricks) * 20 + 500);
                    }
                    else if (contract == 6) {
                        return score = ((contract + overtricks) * 20 + 750 + 500);
                    }
                    else if (contract == 7) {
                        return score = ((contract + overtricks) * 20 + 1500 + 500);

                    }

                }
                else if (suit == 'SPADES' || suit == 'HEARTS') {
                    if (contract < 4) {
                        return score = ((contract + overtricks) * 30 + 50);

                    }
                    else if (contract == 4 || contract == 5) {
                        return score = ((contract + overtricks) * 30 + 500);
                    }
                    else if (contract == 6) {
                        return score = ((contract + overtricks) * 30 + 750 + 500);
                    }
                    else if (contract == 7) {
                        return score = ((contract + overtricks) * 30 + 2000);


                    }
                }
                else if (suit == 'NT') {
                    if (contract < 30) {
                        return score = ((contract + overtricks) * 30 + 60);

                    }
                    else if (contract == 3 || contract == 5 || contract == 4) {
                        return score = ((contract + overtricks) * 30 + 510);
                    }
                    else if (contract == 6) {
                        return score = ((contract + overtricks) * 30 + 760 + 500);
                    }
                    else if (contract == 7) {
                        return score = ((contract + overtricks) * 30 + 1510 + 500);
                    }

                }
            }
        } else if (suit == 'SPADE' || suit == 'HEART') {
            if (contract < 4) {
                return score = ((contract + overtricks) * 30 + 50);
            } else if (contract == 4 || contract == 5) {
                return score = ((contract + overtricks) * 30 + 500);
            } else if (contract == 6) {
                return score = ((contract + overtricks) * 30 + 750 + 500);
            } else if (contract == 7) {
                return score = ((contract + overtricks) * 30 + 2000);
            }

        }




        else if (doubled == 1) {

            if (overtricks >= 0) {
                if (suit == 'DIAMONDS' || suit == 'CLUBS') {
                    if (contract < 6) {
                        score = contract * 40
                        if (score < 100) {
                            return score = (contract * 40 + overtricks * 200 + 100);
                        }
                        else {
                            return score = (contract * 40 + overtricks * 200 + 550);

                        }
                    }

                }
                else if (contract == 6) {
                    return score = contract * 40 + overtricks * 200 + 750 + 550;

                }
                else if (contract == 7) {
                    return score = contract * 40 + overtricks * 200 + 1500 + 550;
                }
                else if (suit == 'SPADES' || suit == 'HEARTS') {
                    if (contract < 6) {
                        score = contract * 60
                        if (score < 100) {
                            return score = (contract * 60 + overtricks * 200 + 100);
                        }
                        else {
                            return score = (contract * 60 + overtricks * 200 + 550);

                        }

                    }
                    else if (contract == 6) {
                        return score = contract * 60 + overtricks * 200 + 750 + 550;

                    }
                    else if (contract == 7) {
                        return score = contract * 60 + overtricks * 200 + 1500 + 550;


                    }
                }
                else if (suit == 'NT') {
                    if (contract < 6) {
                        score = (contract - 1) * 60 + 80;
                        if (score < 100) {
                            return score = ((contract - 1) * 60 + 80 + overtricks * 200 + 100);
                        }
                        else {
                            return score = ((contract - 1) * 60 + 80 + overtricks * 200 + 550);

                        }

                    }
                    else if (contract == 6) {
                        return score = (contract - 1) * 60 + 80 + overtricks * 200 + 750 + 550;

                    }
                    else if (contract == 7) {
                        return score = (contract - 1) * 60 + 80 + overtricks * 200 + 1500 + 550;


                    }
                }

            }
        }
        else if (doubled == 2) {
            if (suit == 'DIAMONDS' || suit == 'CLUBS') {
                if (contract < 6) {
                    score = contract * 80
                    if (score < 100) {
                        return score = (contract * 80 + overtricks * 400 + 150);
                    }
                    else {
                        return score = (contract * 80 + overtricks * 400 + 600);

                    }
                }

                else if (contract == 6) {
                    return score = contract * 80 + overtricks * 400 + 750 + 600;

                }
                else if (contract == 7) {
                    return score = contract * 80 + overtricks * 400 + 1500 + 600;
                }
            }
            else if (suit == 'SPADES' || suit == 'HEARTS') {
                if (contract < 6) {

                    return score = (contract * 120 + overtricks * 400 + 600);

                }
                else if (contract == 6) {
                    return score = contract * 120 + overtricks * 400 + 750 + 600;

                }
                else if (contract == 7) {
                    return score = contract * 120 + overtricks * 400 + 1500 + 600;


                } else if (doubled == 1) {
                    if (overtricks >= 0) {
                        if (suit == 'DIAMOND' || suit == 'CLUB') {
                            if (contract < 6) {
                                score = contract * 40
                                if (score < 100) {
                                    return score = (contract * 40 + overtricks * 200 + 100);
                                } else {
                                    return score = (contract * 40 + overtricks * 200 + 550);
                                }
                            }
                        } else if (contract == 6) {
                            return score = contract * 40 + overtricks * 200 + 750 + 550;
                        } else if (contract == 7) {
                            return score = contract * 40 + overtricks * 200 + 1500 + 550;
                        } else if (suit == 'SPADE' || suit == 'HEART') {
                            if (contract < 6) {
                                score = contract * 60
                                if (score < 100) {
                                    return score = (contract * 60 + overtricks * 200 + 100);
                                } else {
                                    return score = (contract * 60 + overtricks * 200 + 550);
                                }
                            } else if (contract == 6) {
                                return score = contract * 60 + overtricks * 200 + 750 + 550;
                            } else if (contract == 7) {
                                return score = contract * 60 + overtricks * 200 + 1500 + 550;
                            }
                        } else if (suit == 'NT') {
                            if (contract < 6) {
                                score = (contract - 1) * 60 + 80;
                                if (score < 100) {
                                    return score = ((contract - 1) * 60 + 80 + overtricks * 200 + 100);
                                } else {
                                    return score = ((contract - 1) * 60 + 80 + overtricks * 200 + 550);
                                }
                            } else if (contract == 6) {
                                return score = (contract - 1) * 60 + 80 + overtricks * 200 + 750 + 550;
                            } else if (contract == 7) {
                                return score = (contract - 1) * 60 + 80 + overtricks * 200 + 1500 + 550;
                            }
                        }
                    } else {
                        return score = (overtricks * 300 + 100);
                    }
           
                        if (doubled == 0) {

                            if (overtricks >= 0) {
                                if (suit == 'DIAMONDS' || suit == 'CLUBS') {
                                    if (contract < 5) {
                                        return score = ((contract + overtricks) * 20 + 50);

                                    }
                                    else if (contract == 5) {
                                        return score = ((contract + overtricks) * 20 + 300);
                                    }
                                    else if (contract == 6) {
                                        return score = ((contract + overtricks) * 20 + 500 + 300);
                                    }
                                    else if (contract == 7) {
                                        return score = ((contract + overtricks) * 20 + 1000 + 300);

                                    }

                                }
                                else if (suit == 'SPADES' || suit == 'HEARTS') {
                                    if (contract < 4) {
                                        return score = ((contract + overtricks) * 30 + 50);

                                    }
                                    else if (contract == 4 || contract == 5) {
                                        return score = ((contract + overtricks) * 30 + 300);
                                    }
                                    else if (contract == 6) {
                                        return score = ((contract + overtricks) * 30 + 500 + 300);
                                    }
                                    else if (contract == 7) {
                                        return score = ((contract + overtricks) * 30 + 1300);


                                    }
                                }
                                else if (suit == 'NT') {
                                    if (contract < 30) {
                                        return score = ((contract + overtricks) * 30 + 60);

                                    }
                                    else if (contract == 3 || contract == 5 || contract == 4) {
                                        return score = ((contract + overtricks) * 30 + 310);
                                    }
                                    else if (contract == 6) {
                                        return score = ((contract + overtricks) * 30 + 510 + 300);
                                    }
                                    else if (contract == 7) {
                                        return score = ((contract + overtricks) * 30 + 1010 + 300);
                                    }

                                }
                            }
                            else {
                                return score = (overtricks * 50);

                            }
                        } else if (contract == 6) {
                            return score = contract * 80 + overtricks * 400 + 750 + 600;
                        } else if (contract == 7) {
                            return score = contract * 80 + overtricks * 400 + 1500 + 600;
                        }




                        else if (doubled == 1) {

                            if (overtricks >= 0) {
                                if (suit == 'DIAMONDS' || suit == 'CLUBS') {
                                    if (contract < 6) {
                                        score = contract * 40
                                        if (score < 100) {
                                            return score = (contract * 40 + overtricks * 100 + 100);
                                        }
                                        else {
                                            return score = (contract * 40 + overtricks * 100 + 350);

                                        }
                                    }


                                    else if (contract == 6) {
                                        return score = contract * 40 + overtricks * 100 + 500 + 350;

                                    }
                                    else if (contract == 7) {
                                        return score = contract * 40 + overtricks * 100 + 1000 + 350;
                                    }
                                }
                                else if (suit == 'SPADES' || suit == 'HEARTS') {
                                    if (contract < 6) {
                                        score = contract * 60
                                        if (score < 100) {
                                            return score = (contract * 60 + overtricks * 100 + 100);
                                        }
                                        else {
                                            return score = (contract * 60 + overtricks * 100 + 350);

                                        }

                                    }
                                    else if (contract == 6) {
                                        return score = contract * 60 + overtricks * 100 + 500 + 350;

                                    }
                                    else if (contract == 7) {
                                        return score = contract * 60 + overtricks * 100 + 1000 + 350;


                                    }
                                }
                                else if (suit == 'NT') {
                                    if (contract < 6) {
                                        score = (contract - 1) * 60 + 80;
                                        if (score < 100) {
                                            return score = ((contract - 1) * 60 + 80 + overtricks * 100 + 100);
                                        }
                                        else {
                                            return score = ((contract - 1) * 60 + 80 + overtricks * 100 + 350);

                                        }

                                    }
                                    else if (contract == 6) {
                                        return score = (contract - 1) * 60 + 80 + overtricks * 100 + 500 + 350;

                                    }
                                    else if (contract == 7) {
                                        return score = (contract - 1) * 60 + 80 + overtricks * 100 + 1000 + 350;


                                    }
                                }

                            }
                        } else if (suit == 'SPADE' || suit == 'HEART') {
                            if (contract < 4) {
                                return score = ((contract + overtricks) * 30 + 50);
                            } else if (contract == 4 || contract == 5) {
                                return score = ((contract + overtricks) * 30 + 300);
                            } else if (contract == 6) {
                                return score = ((contract + overtricks) * 30 + 500 + 300);
                            } else if (contract == 7) {
                                return score = ((contract + overtricks) * 30 + 1300);
                            }
                        } else if (suit == 'NT') {
                            if (contract < 30) {
                                return score = ((contract + overtricks) * 30 + 60);
                            } else if (contract == 3 || contract == 5 || contract == 4) {
                                return score = ((contract + overtricks) * 30 + 310);
                            } else if (contract == 6) {
                                return score = ((contract + overtricks) * 30 + 510 + 300);
                            } else if (contract == 7) {
                                return score = ((contract + overtricks) * 30 + 1010 + 300);
                            }
                        }
                        else if (doubled == 2) {
                            if (suit == 'DIAMONDS' || suit == 'CLUBS') {
                                if (contract < 6) {
                                    score = contract * 80
                                    if (score < 100) {
                                        return score = (contract * 80 + overtricks * 200 + 150);
                                    }
                                    else {
                                        return score = (contract * 80 + overtricks * 200 + 400);

                                    }
                                }

                                else if (contract == 6) {
                                    return score = contract * 80 + overtricks * 200 + 500 + 400;

                                }
                                else if (contract == 7) {
                                    return score = contract * 80 + overtricks * 400 + 1000 + 400;
                                }
                            }
                            else if (suit == 'SPADES' || suit == 'HEARTS') {
                                if (contract < 6) {

                                    return score = (contract * 120 + overtricks * 200 + 400);

                                }
                                else if (contract == 6) {
                                    return score = contract * 120 + overtricks * 200 + 500 + 400;

                                }
                                else if (contract == 7) {
                                    return score = contract * 120 + overtricks * 200 + 1000 + 400;


                                }
                            }
                        } else if (suit == 'NT') {
                            if (contract < 6) {
                                score = (contract - 1) * 60 + 80;
                                if (score < 100) {
                                    return score = ((contract - 1) * 60 + 80 + overtricks * 100 + 100);
                                } else {
                                    return score = ((contract - 1) * 60 + 80 + overtricks * 100 + 350);
                                }

                            } else if (contract == 6) {
                                return score = (contract - 1) * 60 + 80 + overtricks * 100 + 500 + 350;
                            } else if (contract == 7) {
                                return score = (contract - 1) * 60 + 80 + overtricks * 100 + 1000 + 350;
                            }
                        }
                    } else {
                        if (overtricks == -1) {
                            return score = -100;
                        } else if (overtricks == -2) {
                            return score = -300;
                        } else if (overtricks == -3) {
                            return score = -500;
                        } else {
                            return score = overtricks * 300 + 400;
                        }
                    }
                } else if (doubled == 2) {
                    if (suit == 'DIAMOND' || suit == 'CLUB') {
                        if (contract < 6) {
                            score = contract * 80
                            if (score < 100) {
                                return score = (contract * 80 + overtricks * 200 + 150);
                            } else {
                                return score = (contract * 80 + overtricks * 200 + 400);
                            }
                        } else if (contract == 6) {
                            return score = contract * 80 + overtricks * 200 + 500 + 400;
                        } else if (contract == 7) {
                            return score = contract * 80 + overtricks * 400 + 1000 + 400;
                        }
                    } else if (suit == 'SPADE' || suit == 'HEART') {
                        if (contract < 6) {
                            return score = (contract * 120 + overtricks * 200 + 400);
                        } else if (contract == 6) {
                            return score = contract * 120 + overtricks * 200 + 500 + 400;
                        } else if (contract == 7) {
                            return score = contract * 120 + overtricks * 200 + 1000 + 400;
                        }
                    } else if (suit == 'NT') {
                        if (contract < 6) {
                            return score = ((contract - 1) * 120 + 160 + overtricks * 200 + 400);
                        } else if (contract == 6) {
                            return score = (contract - 1) * 120 + 160 + overtricks * 200 + 500 + 400;
                        } else if (contract == 7) {
                            return score = (contract - 1) * 120 + 160 + overtricks * 200 + 1000 + 400;
                        }
                    } else {
                        if (overtricks == -1) {
                            return score = -200;
                        } else if (overtricks == -2) {
                            return score = -600;
                        } else if (overtricks == -3) {
                            return score = -1000;
                        } else {
                            return score = overtricks * 600 + 800;
                        }
                    }
                }
                export default function vp(M, no_boards) { //M=margin, no_boards= number of boards

                    const B = 15 * (Math.pow(no_boards, 0.5));
                    const Tau = (Math.pow(5, 0.5) - 1) / 2;
                    VPW = 10 + 10 * ((1 - Math.pow(Tau, (3 * M / B))) / (1 - Math.pow(Tau, 3))); //source: https://www.bridgebase.com/forums/topic/55389-wbf-vp-scale-changes/page__p__667202#entry667202
                    if (VPW > 20) {
                        VPW = 20;
                    }
                    VPL = 20 - VPW;

                    return [VPW.toFixed(2), VPL.toFixed(2)] //VPW=VP of winner, VPL= VP of loser
                }

                export default function IMPs(score1, score2) {
                    const diff = Math.abs(score1 - score2); //score 1 is the teams score on table 1, score 2 the same teams score on table 2.
                    var points;
                    if (diff < 20) {
                        return points = [0, 0];          //first number is IMP of the team whose score we entered, score 2 is the other teams IMP

                    }

                    if (diff >= 20 && diff <= 40) {
                        points = [1, 0];
                    }
                    else if (diff >= 50 && diff <= 80) {
                        points = [2, 0];
                    }
                    else if (diff >= 90 && diff <= 120) {
                        points = [3, 0];
                    }
                    else if (diff >= 130 && diff <= 160) {
                        points = [4, 0];
                    }

                    else if (diff >= 170 && diff <= 210) {
                        points = [5, 0];
                    }

                    else if (diff >= 220 && diff <= 260) {
                        points = [6, 0];
                    }
                    else if (diff >= 270 && diff <= 310) {
                        points = [7, 0];
                    }

                    else if (diff >= 320 && diff <= 360) {
                        points = [8, 0];
                    }
                    else if (diff >= 370 && diff <= 420) {
                        points = [9, 0];
                    }
                    else if (diff >= 430 && diff <= 490) {
                        points = [10, 0];
                    }
                    else if (diff >= 500 && diff <= 590) {
                        points = [11, 0];
                    }
                    else if (diff >= 600 && diff <= 740) {
                        points = [12, 0];
                    }
                    else if (diff >= 750 && diff <= 890) {
                        points = [13, 0];
                    }
                    else if (diff >= 900 && diff <= 1090) {
                        points = [14, 0];
                    }
                    else if (diff >= 1100 && diff <= 1290) {
                        points = [15, 0];
                    }
                    else if (diff >= 1300 && diff <= 1490) {
                        points = [16, 0];
                    }
                    else if (diff >= 1500 && diff <= 1740) {
                        points = [17, 0];
                    }
                    else if (diff >= 1750 && diff <= 1990) {
                        points = [18, 0];
                    }
                    else if (diff >= 2000 && diff <= 2240) {
                        points = [19, 0];
                    }
                    else if (diff >= 2250 && diff <= 2490) {
                        points = [20, 0];
                    }
                    else if (diff >= 2500 && diff <= 2990) {
                        points = [21, 0];
                    }
                    else if (diff >= 3000 && diff <= 3490) {
                        points = [22, 0];
                    }
                    else if (diff >= 3500 && diff <= 3990) {
                        points = [23, 0];
                    }
                    else {
                        points = [24, 0]
                    }
                    if (score2 > score1) {
                        points = points.reverse();
                    }
                    return points;
                }




            }
        }
    }

