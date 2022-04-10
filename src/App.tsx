import React, { useRef, useState } from 'react';
import './App.css';
import Crossword, { CrosswordImperative } from '@jaredreisinger/react-crossword';
import { CluesInput } from '@jaredreisinger/react-crossword/dist/types';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const data: CluesInput = {
    across: {
        2: {
            clue: 'Из какого фильма фраза "Да кто вообще хочет быть человеком?!"',
            answer: 'БИВЕНЬ',
            row: 1,
            col: 4,
        },
        3: {
            clue: 'Каждый год вы Улей обещаете туда поехать, но что-то не получается',
            answer: 'АМСТЕРДАМ',
            row: 4,
            col: 6,
        },
        8: {
            clue: 'Это животное в прошлом причинило тебе боль',
            answer: 'ВЕРБЛЮД',
            row: 6,
            col: 3,
        },
        9: {
            clue: 'Новый член семьи, появившийся ночью в вашем доме',
            answer: 'СПОНЖ',
            row: 6,
            col: 18,
        },
        13: {
            clue: 'Как зовут кошку Макса?',
            answer: 'ШПИЛЬКА',
            row: 9,
            col: 0,
        },
        14: {
            clue: 'Вызывает у тебя страх и головокружение до сих пор',
            answer: 'ЛЕСТНИЦА',
            row: 9,
            col: 8,
        },
        17: {
            clue: 'Одноатомный спирт, неотъемлемая часть нашего праздничного стола',
            answer: 'ЭТАНОЛ',
            row: 11,
            col: 6,
        },
        18: {
            clue: 'Уж очень тебе наконец его хочется (им. падеж)...',
            answer: 'МУЖЧИНА',
            row: 11,
            col: 14,
        },
        19: {
            clue: 'Много лет подряд остаётся твоим хобби и чуть ли не смыслом жизни посещение этого места',
            answer: 'ИППОДРОМ',
            row: 14,
            col: 7,
        },
        20: {
            clue: 'Культурное светское мероприятие, где раньше собиралось высшее общество и которое ты имела честь посетить прямо в центре Москвы\n',
            answer: 'БАЛ',
            row: 14,
            col: 17,
        },
    },
    down: {
        1: {
            clue: 'Лекарство от всего',
            answer: 'МЕЗИМ',
            row: 0,
            col: 7,
        },
        4: {
            clue: 'В этом месте вас с Улей спас ребёнок джеки чана',
            answer: 'ТОДАСЕ',
            row: 4,
            col: 9,
        },
        5: {
            clue: 'Ты ненавидишь, когда Уля делает это',
            answer: 'РЫГАЕТ',
            row: 4,
            col: 11,
        },
        6: {
            clue: 'Как зовут кошку Ромы?',
            answer: 'МИЛА',
            row: 4,
            col: 14,
        },
        7: {
            clue: 'В каком году сделано фото? Назови последнюю цифру года в именительном падеже? https://vk.cc/cbW0yy',
            answer: 'ШЕСТЬ',
            row: 5,
            col: 4,
        },
        10: {
            clue: 'Имя коллеги, с которой ты не ладишь',
            answer: 'ОКСАНА',
            row: 6,
            col: 20,
        },
        11: {
            clue: 'Ты хочешь это сделать уже много лет, но все не находится подходящего случая',
            answer: 'ТАТУ',
            row: 8,
            col: 15,
        },
        12: {
            clue: 'Твой недолюбовник',
            answer: 'СЕРЖ',
            row: 3,
            col: 22,
        },
        15: {
            clue: 'Твоя новая зимняя страсть',
            answer: 'СНОУБОРД',
            row: 9,
            col: 10,
        },
        16: {
            clue: 'В этом городе твою семью считали элитой',
            answer: 'КИРЖАЧ',
            row: 10,
            col: 18,
        },
    },
}

function App() {
    const [isIntroModalVisible, setIsIntroModalVisible] = useState(true)
    const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const introModalFooter = <Button label="Погнали!" onClick={() => setIsIntroModalVisible(false)}/>
    const successModalFooter = <Button label="Ушла требовать" onClick={() => setIsSuccessModalVisible(false)}/>
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
            <Crossword ref={crosswordRef} data={data} onCrosswordComplete={onComplete} useStorage={false}/>
            <Button label="Открыть фото (вопрос 7)" onClick={() => window.open('https://vk.cc/cbW0yy', '_blank')}/>
        </div>
    )
}

export default App;
