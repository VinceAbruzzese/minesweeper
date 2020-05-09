import React from 'react';
import {View, Text, Button} from 'native-base';
import {Modal} from 'react-native';
import {styles} from './styles';
import {createBoard} from '../../utils/board';
import {MAX_NUMBER_OF_FLAGS} from '../../utils/constants';

export const GameOver = ({setGameOver, setBoard, setFlagsLeft}) => {
  const resetGame = () => {
    setGameOver(false);
    const newBoard = createBoard();
    setBoard(newBoard);
    setFlagsLeft(MAX_NUMBER_OF_FLAGS);
  };
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.topView}>
        <View style={styles.innerView}>
          <Text style={styles.title}>GAME OVER</Text>
          <Text style={styles.sentence}>
            Select the 'Retry' button to play again
          </Text>
          <Button style={styles.button} onPress={resetGame}>
            <Text style={styles.buttonText}>Retry</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};