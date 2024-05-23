import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['Patrick Sérgio!', 'Desenvolvedor Full-Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }

    const renderWords = (sentence) => {
        return sentence.split(" ").map((word, index) => (
            <span key={index} className={styles.word}>{word} </span>
        ));
    };

    return (
        <div className={styles.presentation} id='Presentation'>
            <h2><strong>Bem-vindo ao meu Portfólio</strong></h2>
            <h1>Olá, eu sou {text} </h1>
            <p>
                {renderWords("Olá, sou o Patrick, um entusiasta da tecnologia apaixonado")}
                <br />
                {renderWords("por criar soluções inovadoras. Como desenvolvedor web, tenho")}
                <br />
                {renderWords("experiência em JavaScript, HTML, CSS, React e TypeScript.")}
                <br />
                {renderWords("Meu objetivo é criar experiências digitais excepcionais e intuitivas")}
                <br />
                {renderWords("que superem as expectativas dos usuários, impulsionando o sucesso dos negócios.")}
                <br />
                {renderWords("Estou animado para colaborar em projetos inovadores")}
                <br />
                {renderWords("e desafiadores, sempre determinado a alcançar os melhores resultados.")}
                <br />
                {renderWords("Estou constantemente atualizando minhas habilidades e conhecimentos")}
                <br />
                {renderWords("para estar na vanguarda das últimas tendências da indústria.")}
            </p>
            <ButtonA link='https://github.com/PatrickSergio' text='Saber mais!' />

        </div>
    )
}

export default Presentation
