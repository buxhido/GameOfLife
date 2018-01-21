import { Constants } from 'constants.js';


class Game {

    launchGameOfLife() {
	
        _GLOBAL_VALUES.gameOfLifeBoard = createGameBoard(15,15);
        showBoardGame(_GLOBAL_VALUES.gameOfLifeBoard);
        startStop(false);
        printBaseBoard(_GLOBAL_VALUES.gameOfLifeBoard.board);
    };
    
    startStop(run) {
    
        _GLOBAL_VALUES.run = run;	
    
        document.getElementById('playId').disabled = run;
        document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;
    
        if(run) {
            applyBoardRules(_GLOBAL_VALUES.gameOfLifeBoard);
        } else {
            updateBoardFromLastBoardPrinted();	
        }
    };
    
}





