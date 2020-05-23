/* Copyright 2020 Daniel Bohm & Patrik Perger and the Bridge Hackathon Contributors
*
*   Use of this source code is governed by an MIT-style
*   license that can be found in the LICENSE file or at
*   https://opensource.org/licenses/MIT
*/
        function calculate(contract, overtricks, suit, VUL, doubled) {
            var score;
            if (VUL == true) {
                if (doubled == 0) {

                    if (overtricks >= 0) {
                        if (suit == 'DIAMOND' || suit == 'CLUB') {
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
                        else if (suit == 'SPADE' || suit == 'HEART') {
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
                    else {
                        return score = (overtricks * 100);

                    }

                }




                else if (doubled == 1) {

                    if (overtricks >= 0) {
                        if (suit == 'DIAMOND' || suit == 'CLUB') {
                            if (contract < 6) {
                                 score = contract * 40
                                if (score < 100) {
                                    return   score = (contract * 40 + overtricks * 200 + 100);
                                }
                                else {
                                    return  score = (contract * 40 + overtricks * 200 + 550);

                                }
                            }

                        }
                        else if (contract == 6) {
                            return score = contract * 40 + overtricks * 200 + 750 + 550;

                        }
                        else if (contract == 7) {
                            return score = contract * 40 + overtricks * 200 + 1500 + 550;
                        }
                        else if (suit == 'SPADE' || suit == 'HEART') {
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
                                return  score = contract * 60 + overtricks * 200 + 1500 + 550;


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

                    else {
                        return score = (overtricks * 300 + 100);

                    }

                }
                else if (doubled == 2) {
                    if (suit == 'DIAMOND' || suit == 'CLUB') {
                        if (contract < 6) {
                            score = contract * 80
                            if (score < 100) {
                                return score = (contract * 80 + overtricks * 400 + 150);
                            }
                            else {
                                return  score = (contract * 80 + overtricks * 400 + 600);

                            }
                        }

                        else if (contract == 6) {
                            return score = contract * 80 + overtricks * 400 + 750 + 600;

                        }
                        else if (contract == 7) {
                            return score = contract * 80 + overtricks * 400 + 1500 + 600;
                        }
                    }
                    else if (suit == 'SPADE' || suit == 'HEART') {
                        if (contract < 6) {

                            return score = (contract * 120 + overtricks * 400 + 600);

                        }
                        else if (contract == 6) {
                            return score = contract * 120 + overtricks * 400 + 750 + 600;

                        }
                        else if (contract == 7) {
                            return score = contract * 120 + overtricks * 400 + 1500 + 600;


                        }
                    }
                    else if (suit == 'NT') {
                        if (contract < 6) {

                            return score = ((contract - 1) * 120 + 160 + overtricks * 400 + 600);

                        }


                        else if (contract == 6) {
                            return score = (contract - 1) * 120 + 160 + overtricks * 200 + 750 + 600;

                        }
                        else if (contract == 7) {
                            return score = (contract - 1) * 120 + 160 + overtricks * 200 + 1500 + 600;


                        }
                    }




                    else {
                        return score = (overtricks * 600 + 200);

                    }



                }
            }
            else {
                if (doubled == 0) {

                    if (overtricks >= 0) {
                        if (suit == 'DIAMOND' || suit == 'CLUB') {
                            if (contract < 5) {
                                return  score = ((contract + overtricks) * 20 + 50);

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
                        else if (suit == 'SPADE' || suit == 'HEART') {
                            if (contract < 4) {
                                return  score = ((contract + overtricks) * 30 + 50);

                            }
                            else if (contract == 4 || contract == 5) {
                                return  score = ((contract + overtricks) * 30 + 300);
                            }
                            else if (contract == 6) {
                                return  score = ((contract + overtricks) * 30 + 500 + 300);
                            }
                            else if (contract == 7) {
                                return  score = ((contract + overtricks) * 30 + 1300);


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
                                return  score = ((contract + overtricks) * 30 + 510 + 300);
                            }
                            else if (contract == 7) {
                                return score = ((contract + overtricks) * 30 + 1010 + 300);
                            }

                        }
                    }
                    else {
                        return score = (overtricks * 50);

                    }

                }




                else if (doubled == 1) {

                    if (overtricks >= 0) {
                        if (suit == 'DIAMOND' || suit == 'CLUB') {
                            if (contract < 6) {
                                   score = contract * 40
                                if (score < 100) {
                                    return   score = (contract * 40 + overtricks * 100 + 100);
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
                        }}
                        else if (suit == 'SPADE' || suit == 'HEART') {
                            if (contract < 6) {
                                score = contract * 60
                                if (score < 100) {
                                    return  score = (contract * 60 + overtricks * 100 + 100);
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

                    else {
                        if(overtricks==-1){
                            return score=-100;
                        }
                        else if(overtricks==-2){
                            return score=-300;
                        }
                        else if(overtricks==-3){
                            return score=-500;
                        }
                        else{
                            return score=overtricks*300+400;
                            }



                    }

                }
                else if (doubled == 2) {
                    if (suit == 'DIAMOND' || suit == 'CLUB') {
                        if (contract < 6) {
                            score = contract * 80
                            if (score < 100) {
                                return  score = (contract * 80 + overtricks * 200 + 150);
                            }
                            else {
                                return  score = (contract * 80 + overtricks * 200 + 400);

                            }
                        }

                        else if (contract == 6) {
                            return  score = contract * 80 + overtricks * 200 + 500 + 400;

                        }
                        else if (contract == 7) {
                            return score = contract * 80 + overtricks * 400 + 1000 + 400;
                        }
                    }
                    else if (suit == 'SPADE' || suit == 'HEART') {
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
                    else if (suit == 'NT') {
                        if (contract < 6) {

                            return score = ((contract - 1) * 120 + 160 + overtricks * 200 + 400);

                        }


                        else if (contract == 6) {
                            return score = (contract - 1) * 120 + 160 + overtricks * 200 + 500 + 400;

                        }
                        else if (contract == 7) {
                            return score = (contract - 1) * 120 + 160 + overtricks * 200 + 1000 + 400;


                        }
                    }




                    else {
                        if(overtricks==-1){
                            return  score=-200;
                        }
                        else if(overtricks==-2){
                            return score=-600;
                        }
                        else if(overtricks==-3){
                            return  score=-1000;
                        }
                        else{
                            return score=overtricks*600+800;
                            }

                    }



                }
            }

        }
        
    
    //console.log(calculate(5, 2, 'DIAMOND', false, 0));
    