import React, { useRef, useState } from 'react';
import './App.css';
import Crossword, { CrosswordImperative } from '@jaredreisinger/react-crossword';
import { CluesInput } from '@jaredreisinger/react-crossword/dist/types';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const data: CluesInput = {
    across: {
        2: {
            clue: 'Викторина',
            answer: 'КВИЗ',
            row: 2,
            col: 7,
        },
        3: {
            clue: 'Башня в Москве Сити, в которой ты тренила',
            answer: 'ФЕДЕРАЦИЯ',
            row: 6,
            col: 7,
        },
        5: {
            clue: 'Нас не догонят, а еще нас бьют',
            answer: 'ТАТУ',
            row: 8,
            col: 13,
        },
        8: {
            clue: 'Вулкан, который ты покорила в 2022',
            answer: 'ГОРЕЛЫЙ',
            row: 11,
            col: 9,
        },
        10: {
            clue: 'Самый стремный вид транспорта',
            answer: 'ЭЛЕКТРИЧКА',
            row: 14,
            col: 2,
        },
        11: {
            clue: 'Им трамбуют асфальт, другие режут его лезвиями, и ты на нем была',
            answer: 'КАТОК',
            row: 15,
            col: 12,
        },
        15: {
            clue: 'Снаряжение, которое ты долго ждала и наконец получила',
            answer: 'САПОГИ',
            row: 18,
            col: 8,
        },
        17: {
            clue: 'Перед кем тебе нужно искупить вину?',
            answer: 'ОВЦА',
            row: 20,
            col: 13,
        },
        18: {
            clue: 'В каком году сделана фотка? Назови последнюю цифру года',
            answer: 'СЕМЬ',
            row: 22,
            col: 0,
        },
        19: {
            clue: 'Анклав России, в котором ты недавно была',
            answer: 'КАЛИНИНГРАД',
            row: 22,
            col: 12,
        },
    },
    down: {
        1: {
            clue: 'Твое топ место для лежания на пляже, наслаждения жизнью и занятий непотребствами 😉',
            answer: 'ТАИЛАНД',
            row: 0,
            col: 9,
        },
        4: {
            clue: 'Наполнитель клетки',
            answer: 'ЦИТОПЛАЗМА',
            row: 6,
            col: 13,
        },
        6: {
            clue: 'Континент, на котором ты была, но хочешь еще',
            answer: 'АФРИКА',
            row: 9,
            col: 11,
        },
        7: {
            clue: 'Наше главное заведение на зиму',
            answer: 'РЕСТОРАН',
            row: 11,
            col: 6,
        },
        9: {
            clue: 'Число атомов, которое может присоединить или заместить атом данного элемента',
            answer: 'ВАЛЕНТНОСТЬ',
            row: 12,
            col: 3,
        },
        12: {
            clue: 'Столица африканской страны, которую хочешь посетить',
            answer: 'КЕЙПТАУН',
            row: 15,
            col: 16,
        },
        13: {
            clue: 'Название кваса и часть названия парка, в котором ты была в августе 2022',
            answer: 'НИКОЛА',
            row: 17,
            col: 13,
        },
        14: {
            clue: 'Твоя отдушина по выходным',
            answer: 'ИППОДРОМ',
            row: 17,
            col: 20,
        },
        16: {
            clue: 'Техническая обновка осени',
            answer: 'АЙФОН',
            row: 18,
            col: 9,
        },
    },
}

function App() {
    const [isIntroModalVisible, setIsIntroModalVisible] = useState(true)
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const introModalFooter = <Button label="Го!" onClick={() => setIsIntroModalVisible(false)}/>
    const successModalFooter = <Button label="Дать под ребро" onClick={() => setIsSuccessModalVisible(false)}/>
    let crosswordRef = useRef<CrosswordImperative>(null)

    function onComplete(isCorrect: boolean) {
        console.log('isFinished:', isFinished)
        console.log('isCorrect:', isCorrect)
        if (!isFinished && isCorrect) {
            setIsSuccessModalVisible(true)
            setIsFinished(true)
        }
    }

    return (
        <div className="app">
            <Dialog visible={isIntroModalVisible} onHide={() => setIsIntroModalVisible(false)}
                    header="С Днём Рождения, Настюха-борцуха! 🎂🎂🎂" footer={introModalFooter}>
                Что-то ты давно кроссворды и судоку не решала...Не теряем хватку! На этот раз кроссворд составлен самолично, а все вопросы только про тебя! Вспомнишь свой прошедший год?)
            </Dialog>
            <Dialog visible={isSuccessModalVisible} onHide={() => setIsSuccessModalVisible(false)}
                    header="Ееееее! 😎" footer={successModalFooter}>
                Ты заслужила почет и уважение, а возможно даже немножко больше. Ноготь под ребро Роме поможет ускорить процесс :)
            </Dialog>
            <Crossword ref={crosswordRef} data={data} onCrosswordComplete={onComplete} useStorage={false}/>
            <Button label="Открыть фото (вопрос 18)" onClick={() => window.open('https://vk.cc/cmSAff', '_blank')}/>
        </div>
    )
}

export default App;
