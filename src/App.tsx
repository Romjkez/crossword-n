import React, { useState } from 'react';
import './App.css';
import Crossword from '@jaredreisinger/react-crossword';
import { CluesInput } from '@jaredreisinger/react-crossword/dist/types';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const data: CluesInput = {
    across: {
        1: {
            clue: 'Как зовут кошку Макса?',
            answer: 'ШПИЛЬКА',
            row: 3,
            col: 0,
        },
        4: {
            clue: 'Одноатомный спирт, неотъемлемая часть нашего праздничного стола',
            answer: 'ЭТАНОЛ',
            row: 5,
            col: 4,
        }
    },
    down: {
        2: {
            clue: 'Как зовут кошку Ромы?',
            answer: 'МИЛА',
            row: 2,
            col: 2,
        },
        3: {
            clue: 'Имя коллеги, с которой ты не ладишь',
            answer: 'ОКСАНА',
            row: 0,
            col: 6
        }
    },
}

function App() {
    const [isIntroModalVisible, setIsIntroModalVisible] = useState(true)
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const introModalFooter = <Button label="Погнали!" onClick={() => setIsIntroModalVisible(false)}/>
    const successModalFooter = <Button label="Ушла требовать" onClick={() => setIsSuccessModalVisible(false)}/>

    function onComplete(isCorrect: boolean) {
        if (!isFinished && isCorrect) {
            setIsSuccessModalVisible(true)
            setIsFinished(true)
        }
    }

    return (
        <div className="app">
            <Dialog visible={isIntroModalVisible} onHide={() => setIsIntroModalVisible(false)}
                    header="С Днём Рождения, Настя! 🥳🥳🥳" footer={introModalFooter}>
                Прежде чем получить подарок, его нужно заслужить! Предлагаем тебе решить кроссворд про тебя и твоих
                любимых
                друзей. А там уже посмотрим 🙃
            </Dialog>
            <Dialog visible={isSuccessModalVisible} onHide={() => setIsSuccessModalVisible(false)}
                    header="Урааа! 😊" footer={successModalFooter}>
                Требуй от своих (надеюсь, что всё еще любимых!) друзей подарок! Только без ногтей и укусов! Но драки
                подушками и щекотки не запрещены...
            </Dialog>
            <Crossword data={data} onCrosswordComplete={onComplete}/>
        </div>
    )
}

export default App;
